import { useMemo, useState } from 'react';
import {
  AdminPageHeader,
  AdminTable,
  AdminFormSheet,
  Field,
  TextInput,
  Textarea,
  Select,
  NumberInput,
  type AdminColumn,
  type AdminFilter,
} from '../../components/admin/AdminPrimitives';
import { useResource, videoStore } from '../../lib/store';
import type { Video } from '../../data/videos';

const topics: Video['topic'][] = ['awareness', 'diagnosis', 'treatment', 'trust'];
const days: Video['day'][] = [1, 2];

const emptyVideo = (nextIdx: number): Video => ({
  idx: nextIdx,
  day: 1,
  title: '',
  description: '',
  topic: 'awareness',
  estimatedDuration: '3 min',
});

export default function AdminVideos() {
  const videos = useResource(videoStore);
  const [editing, setEditing] = useState<Video | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [query, setQuery] = useState('');
  const [topicFilter, setTopicFilter] = useState<string>('all');
  const [dayFilter, setDayFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return videos.filter((v) => {
      if (topicFilter !== 'all' && v.topic !== topicFilter) return false;
      if (dayFilter !== 'all' && String(v.day) !== dayFilter) return false;
      if (!q) return true;
      return (
        v.title.toLowerCase().includes(q) ||
        v.topic.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q)
      );
    });
  }, [videos, query, topicFilter, dayFilter]);

  const filters: AdminFilter[] = [
    {
      key: 'topic',
      label: 'Topic',
      value: topicFilter,
      onChange: setTopicFilter,
      options: [
        { value: 'all', label: 'All topics' },
        ...topics.map((t) => ({ value: t, label: t.charAt(0).toUpperCase() + t.slice(1) })),
      ],
    },
    {
      key: 'day',
      label: 'Shoot',
      value: dayFilter,
      onChange: setDayFilter,
      options: [
        { value: 'all', label: 'All days' },
        ...days.map((d) => ({ value: String(d), label: `Day ${d}` })),
      ],
    },
  ];

  const columns: AdminColumn<Video>[] = [
    { key: 'idx', header: '#', width: '60px', cell: (v) => <span className="text-xs font-mono text-ink-muted">{v.idx}</span> },
    {
      key: 'title',
      header: 'Title',
      cell: (v) => (
        <div>
          <p className="font-medium text-ink-body line-clamp-1 font-bangla">{v.title}</p>
          <p className="mt-0.5 text-[11px] text-ink-muted line-clamp-1">{v.description}</p>
        </div>
      ),
    },
    { key: 'topic', header: 'Topic', width: '120px', cell: (v) => <span className="inline-flex items-center rounded-full bg-bg-cream px-2 py-0.5 text-[11px] font-medium text-ink-body capitalize">{v.topic}</span> },
    { key: 'day', header: 'Shoot', width: '90px', cell: (v) => <span className="text-xs text-ink-muted">Day {v.day}</span> },
    { key: 'duration', header: 'Duration', width: '100px', cell: (v) => <span className="text-xs text-ink-muted">{v.estimatedDuration}</span> },
  ];

  const startNew = () => {
    const maxIdx = videos.reduce((m, v) => Math.max(m, v.idx), 0);
    setEditing(emptyVideo(maxIdx + 1));
    setIsNew(true);
  };

  const startEdit = (v: Video) => {
    setEditing({ ...v });
    setIsNew(false);
  };

  const save = () => {
    if (!editing) return;
    if (!editing.title.trim()) {
      alert('Title is required.');
      return;
    }
    videoStore.upsert(editing);
    setEditing(null);
  };

  return (
    <div>
      <AdminPageHeader
        title="Videos"
        subtitle="Short-form video library — shown on the homepage and the learning centre."
        actionLabel="New video"
        onAction={startNew}
        searchValue={query}
        onSearchChange={setQuery}
        searchPlaceholder="Search videos"
        filters={filters}
        resultCount={filtered.length}
      />

      <AdminTable
        rows={filtered}
        columns={columns}
        onRowClick={startEdit}
        onEdit={startEdit}
        onDelete={(v) => videoStore.remove(String(v.idx))}
        getRowKey={(v) => v.idx}
        emptyMessage="No videos match your filters."
      />

      <AdminFormSheet
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing?.title || (isNew ? 'New video' : '')}
        subtitle={editing ? `Video #${editing.idx}` : undefined}
        onSubmit={save}
        isNew={isNew}
      >
        {editing && (
          <>
            <Field label="Title" required>
              <TextInput value={editing.title} onChange={(v) => setEditing({ ...editing, title: v })} placeholder="ভিডিও শিরোনাম" />
            </Field>

            <Field label="Description">
              <Textarea value={editing.description} onChange={(v) => setEditing({ ...editing, description: v })} rows={3} />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Topic">
                <Select
                  value={editing.topic}
                  onChange={(v) => setEditing({ ...editing, topic: v as Video['topic'] })}
                  options={topics.map((t) => ({ value: t, label: t.charAt(0).toUpperCase() + t.slice(1) }))}
                />
              </Field>
              <Field label="Shoot day">
                <Select
                  value={String(editing.day)}
                  onChange={(v) => setEditing({ ...editing, day: Number(v) as Video['day'] })}
                  options={days.map((d) => ({ value: String(d), label: `Day ${d}` }))}
                />
              </Field>
              <Field label="Duration">
                <TextInput value={editing.estimatedDuration} onChange={(v) => setEditing({ ...editing, estimatedDuration: v })} placeholder="3 min" />
              </Field>
            </div>

            <Field label="Index" hint="Order in the library. Lower = shown first.">
              <NumberInput value={editing.idx} onChange={(v) => setEditing({ ...editing, idx: v })} min={1} />
            </Field>
          </>
        )}
      </AdminFormSheet>
    </div>
  );
}
