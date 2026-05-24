import { useSyncExternalStore } from 'react';
import type { Article } from '../data/articles';
import type { Video } from '../data/videos';
import type { Story } from '../data/stories';
import type { Treatment } from '../data/treatments';
import type { Chamber } from '../data/chambers';
import type { Appointment } from '../data/appointments';
import { articles as seedArticles } from '../data/articles';
import { videos as seedVideos } from '../data/videos';
import { stories as seedStories } from '../data/stories';
import { treatments as seedTreatments } from '../data/treatments';
import { chambers as seedChambers } from '../data/chambers';
import { appointments as seedAppointments } from '../data/appointments';

/**
 * Resource store: typed CRUD over an entity collection, persisted to localStorage.
 * Designed so public pages and admin pages share the same source of truth via useSyncExternalStore.
 * Stand-in for a real backend — swap out for fetch() against an API later without touching components.
 */

type Listener = () => void;
type IdKey<T> = (item: T) => string;

class Resource<T> {
  private data: T[];
  private cached: T[];
  private listeners = new Set<Listener>();
  private storageKey: string;

  constructor(key: string, seed: T[], private getId: IdKey<T>) {
    this.storageKey = `drliza:${key}`;
    const hydrated = this.hydrate(seed);
    this.data = hydrated;
    this.cached = hydrated;

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (e) => {
        if (e.key === this.storageKey) {
          this.data = this.hydrate(seed);
          this.cached = this.data;
          this.notify(false);
        }
      });
    }
  }

  private hydrate(seed: T[]): T[] {
    if (typeof window === 'undefined') return seed;
    try {
      const stored = window.localStorage.getItem(this.storageKey);
      if (!stored) return seed;
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : seed;
    } catch {
      return seed;
    }
  }

  private persist() {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch {
      // localStorage may be full or disabled — ignore, in-memory copy still works for this session.
    }
  }

  private notify(shouldPersist = true) {
    if (shouldPersist) this.persist();
    this.cached = this.data;
    this.listeners.forEach((l) => l());
  }

  /** Stable snapshot for useSyncExternalStore — same reference until mutation. */
  getSnapshot = (): T[] => this.cached;

  subscribe = (listener: Listener) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  list(): T[] {
    return this.data;
  }

  get(id: string): T | undefined {
    return this.data.find((item) => this.getId(item) === id);
  }

  upsert(item: T) {
    const id = this.getId(item);
    const idx = this.data.findIndex((it) => this.getId(it) === id);
    if (idx >= 0) {
      this.data = this.data.map((it, i) => (i === idx ? item : it));
    } else {
      this.data = [item, ...this.data];
    }
    this.notify();
  }

  remove(id: string) {
    this.data = this.data.filter((item) => this.getId(item) !== id);
    this.notify();
  }

  reset() {
    this.data = [...this.initialSeed];
    this.notify();
  }

  reorder(ids: string[]) {
    const byId = new Map(this.data.map((it) => [this.getId(it), it]));
    const next: T[] = [];
    for (const id of ids) {
      const it = byId.get(id);
      if (it) next.push(it);
    }
    // append any not in the order list (defensive)
    for (const it of this.data) {
      if (!ids.includes(this.getId(it))) next.push(it);
    }
    this.data = next;
    this.notify();
  }

  // store original seed for reset()
  private initialSeed: T[] = [];
  attachSeed(seed: T[]) {
    this.initialSeed = seed;
    return this;
  }
}

function makeResource<T>(key: string, seed: T[], getId: IdKey<T>) {
  return new Resource<T>(key, seed, getId).attachSeed(seed);
}

export const articleStore = makeResource<Article>('articles', seedArticles, (a) => a.slug);
export const videoStore = makeResource<Video>('videos', seedVideos, (v) => String(v.idx));
export const storyStore = makeResource<Story>('stories', seedStories, (s) => s.slug);
export const treatmentStore = makeResource<Treatment>('treatments', seedTreatments, (t) => t.slug);
export const chamberStore = makeResource<Chamber>('chambers', seedChambers, (c) => c.slug);
export const appointmentStore = makeResource<Appointment>('appointments', seedAppointments, (a) => a.id);

export const stores = {
  articles: articleStore,
  videos: videoStore,
  stories: storyStore,
  treatments: treatmentStore,
  chambers: chamberStore,
  appointments: appointmentStore,
} as const;

export type StoreKey = keyof typeof stores;

/** Hook returning the current snapshot for a resource. */
export function useResource<T>(resource: Resource<T>): T[] {
  return useSyncExternalStore(resource.subscribe, resource.getSnapshot, resource.getSnapshot);
}

export type { Resource };
