# Demo Development Document
### Dr. Liza Chowdhury website — Vite + React build, demo phase only

> **READ THIS FIRST — Demo scope notice**
>
> This document covers the **demo build only**. Demo build = a frontend-only, static, structural confirmation artifact. We are building this so Madam can see the website and approve the structure in one walkthrough. After her approval, the production phase begins per [DrLizaChowdhury_Demo_Production_Spec.md](DrLizaChowdhury_Demo_Production_Spec.md) §10.
>
> **What is NOT built in this phase:**
> - No backend (no API, no database, no auth)
> - No CMS
> - No real form submissions (forms `console.log` payloads)
> - No real chatbot (a panel of WhatsApp deep links replaces it)
> - No analytics, no SEO beyond the basics, no payment, no online consult
>
> **A small backend may be added later**, after Madam approves the demo. That backend's scope is sketched in [01_MODERN_PLAN.md](01_MODERN_PLAN.md) §13. It is explicitly **not** part of this development phase. If anyone asks "where's the backend?" during the demo, the answer is: *"This is a structural demo. Backend joins the project after Madam's approval, alongside the production content build."*

---

## 1. Document Pointers (read in this order)

1. [DrLizaChowdhury_Demo_Production_Spec.md](DrLizaChowdhury_Demo_Production_Spec.md) — Master spec, single source of truth for IA, content, and strategy. Already approved.
2. [01_MODERN_PLAN.md](01_MODERN_PLAN.md) — The execution plan layered on top of the spec.
3. [02_PLAN_REVIEW.md](02_PLAN_REVIEW.md) — Honest critique of the plan; **resolve all sign-off-checklist items in §9 of that doc before Day 1 starts.**
4. [03_UI_UX_SUGGESTIONS.md](03_UI_UX_SUGGESTIONS.md) — Patterns, microcopy, accessibility.
5. [Dr_Liza_Media_Asset_Analysis.xlsx](Dr_Liza_Media_Asset_Analysis.xlsx) — Asset inventory; the source of every image/video decision in §5 below.
6. **This document** — the technical recipe.

---

## 2. Tech Stack

| Layer | Choice | Version | Why |
|---|---|---|---|
| Build tool | Vite | ^5.4 | Fast cold start, fast HMR, low config overhead |
| Framework | React | ^18.3 | Universal default; community/tooling parity |
| Language | TypeScript | ^5.5 | Catches the avoidable; demo is small enough that types stay readable |
| Router | React Router | ^6.26 | Familiar API; client-side routing without overhead |
| Styling | Tailwind CSS | ^3.4 | Token-driven, fast to write, compositional |
| Motion | Framer Motion | ^11.5 | Declarative, integrates well with React Router transitions |
| Smooth scroll | `@studio-freight/lenis` | ^1.1 | Industry-standard buttery scroll; disabled on touch and reduced-motion |
| Icons | `lucide-react` | ^0.450 | Clean line icons matching the master spec's brief |
| Fonts | Google Fonts (Inter, Inter Tight, Hind Siliguri, DM Serif Display) | latest | Self-hosted via `@fontsource` packages to keep LCP fast |
| Image processing (build-time) | `sharp` + `heic-convert` | latest | HEIC → AVIF/WebP/JPEG pipeline |
| Video processing (build-time) | `ffmpeg` (via CLI wrapper) | system | Trim + transcode the 8 lab clips |
| Deploy | Vercel | n/a | One-command deploy, free hobby tier, custom subdomain |

**Locked-out:** Next.js (overkill — no SSR needed for demo). Redux/Zustand (no global state worth abstracting). styled-components/emotion (Tailwind covers it). Any CMS (out of demo scope).

---

## 3. Repository Setup

```bash
# 0. Create the project
npm create vite@latest dr-liza-demo -- --template react-ts
cd dr-liza-demo

# 1. Install runtime deps
npm i react-router-dom framer-motion @studio-freight/lenis lucide-react
npm i @fontsource-variable/inter @fontsource-variable/inter-tight \
      @fontsource/hind-siliguri @fontsource/dm-serif-display

# 2. Install dev deps
npm i -D tailwindcss postcss autoprefixer
npm i -D sharp heic-convert
npm i -D @types/node

# 3. Initialise Tailwind
npx tailwindcss init -p

# 4. Verify dev server
npm run dev
```

### `package.json` scripts (add to defaults)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "assets:portraits": "node scripts/process-portraits.mjs",
    "assets:videos": "bash scripts/process-videos.sh",
    "assets:placeholders": "node scripts/generate-placeholders.mjs",
    "assets:all": "npm run assets:portraits && npm run assets:videos && npm run assets:placeholders",
    "deploy": "npm run build && npx vercel --prod"
  }
}
```

---

## 4. Folder Structure

```
dr-liza-demo/
├── public/
│   ├── images/
│   │   ├── portraits/          ← generated from HEICs
│   │   ├── chambers/           ← generated from JPEGs
│   │   ├── lab/                ← static jpegs
│   │   ├── logos/              ← credibility logos (find/source)
│   │   └── placeholders/       ← generated SVG placeholders
│   ├── videos/
│   │   └── lab/                ← compressed MP4 + WebM + posters
│   ├── fonts/                  ← self-hosted woff2s (auto-resolved)
│   └── favicon.svg             ← typographic "L" mark
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── motion/
│   │   │   ├── Reveal.tsx              ← scroll-triggered fade-up
│   │   │   ├── Stagger.tsx             ← stagger children
│   │   │   └── SmoothScroll.tsx        ← Lenis provider
│   │   ├── content/
│   │   │   ├── Hero.tsx
│   │   │   ├── HomeHero.tsx            ← the cinematic spine, §2 of the plan
│   │   │   ├── CredentialStrip.tsx
│   │   │   ├── TreatmentBento.tsx
│   │   │   ├── TrustPillar.tsx
│   │   │   ├── JourneyPreview.tsx
│   │   │   ├── ChamberMap.tsx          ← SVG Dhaka or Mapbox-light
│   │   │   ├── ChamberCard.tsx
│   │   │   ├── StoryCard.tsx
│   │   │   ├── VideoCard.tsx
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── QuoteBlock.tsx
│   │   │   ├── StatBlock.tsx
│   │   │   ├── TimelineItem.tsx
│   │   │   ├── CTABanner.tsx
│   │   │   └── PlaceholderCard.tsx     ← labelled "shoot required" tile
│   │   ├── interactive/
│   │   │   ├── ChatPanel.tsx           ← 3-option WhatsApp deep-link panel
│   │   │   ├── LanguageToggle.tsx
│   │   │   ├── ChamberSelector.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── StickyBookButton.tsx
│   │   │   └── VideoLoop.tsx           ← in-viewport autoplay video
│   │   └── treatment/
│   │       ├── TreatmentProcess.tsx
│   │       ├── CostTransparencyTable.tsx
│   │       ├── FAQAccordion.tsx
│   │       └── PublicationItem.tsx
│   ├── pages/
│   │   ├── Home.tsx                    ← fully built
│   │   ├── About.tsx                   ← fully built
│   │   ├── about/
│   │   │   ├── Journey.tsx             ← stub
│   │   │   ├── Credentials.tsx         ← stub
│   │   │   ├── Publications.tsx        ← stub
│   │   │   └── Teaching.tsx            ← stub
│   │   ├── Treatments.tsx              ← hub built; cards link out
│   │   ├── treatments/
│   │   │   ├── IVF.tsx                 ← fully built (template)
│   │   │   ├── ICSI.tsx                ← stub
│   │   │   ├── IUI.tsx                 ← stub
│   │   │   ├── PESATESA.tsx            ← stub
│   │   │   ├── RecurrentLoss.tsx       ← stub
│   │   │   ├── Laparoscopy.tsx         ← stub
│   │   │   └── Hysteroscopy.tsx        ← stub
│   │   ├── Journey.tsx                 ← fully built
│   │   ├── Laboratory.tsx              ← fully built
│   │   ├── Chambers.tsx                ← hub built
│   │   ├── chambers/
│   │   │   ├── UFCL.tsx                ← fully built
│   │   │   ├── Hitech.tsx              ← stub
│   │   │   ├── IbnSinaUttara.tsx       ← stub
│   │   │   ├── IbnSinaKallyanpur.tsx   ← stub
│   │   │   └── Lubana.tsx              ← stub
│   │   ├── Learning.tsx                ← stub (with 20 video tiles, click → "coming soon" modal)
│   │   ├── learning/
│   │   │   ├── Videos.tsx              ← stub
│   │   │   ├── Articles.tsx            ← stub
│   │   │   └── Glossary.tsx            ← stub
│   │   ├── Stories.tsx                 ← hub stub
│   │   ├── stories/
│   │   │   └── ExampleStory.tsx        ← fully built (labelled placeholder)
│   │   ├── Contact.tsx                 ← fully built
│   │   ├── Ethics.tsx                  ← one-paragraph placeholder
│   │   ├── Privacy.tsx                 ← one-paragraph placeholder
│   │   └── StructurePreview.tsx        ← reusable stub component for all stubs
│   ├── data/
│   │   ├── credentials.ts
│   │   ├── treatments.ts
│   │   ├── chambers.ts
│   │   ├── videos.ts           ← 20 video metadata (titles only, no real urls)
│   │   ├── articles.ts
│   │   ├── stories.ts
│   │   ├── publications.ts
│   │   ├── faqs.ts
│   │   └── glossary.ts
│   ├── content/
│   │   ├── en.ts               ← English UI strings + page copy
│   │   └── bn.ts               ← Bangla strings (where applicable)
│   ├── hooks/
│   │   ├── useLanguage.ts
│   │   ├── useScrollDirection.ts
│   │   ├── useReducedMotion.ts
│   │   └── useIntersection.ts
│   ├── lib/
│   │   ├── tokens.ts           ← motion durations + easing
│   │   ├── whatsapp.ts         ← deep-link template builder
│   │   └── img.ts              ← responsive image src helper
│   ├── routes.tsx              ← single source of truth for all routes
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               ← @tailwind directives + base resets
├── scripts/
│   ├── process-portraits.mjs   ← HEIC → AVIF/WebP/JPEG @ 4 sizes
│   ├── process-videos.sh       ← ffmpeg trim + compress
│   └── generate-placeholders.mjs
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── postcss.config.cjs
└── package.json
```

---

## 5. Asset Pipeline — Day 1 Priority

The HEIC and video files cannot be served raw to the browser. **The pipeline must complete on Day 1 before any page is built.**

### 5.1 Source assets (already in place)

```
/Users/fahadhossain/fullstack/nuvista/dr liza mam/liza mam picture And uttar fertility center image and videos/
├── IMG_4856.HEIC … IMG_4860.HEIC       (5 high-res portraits)
├── WhatsApp Image 2026-05-21 at 11.57.{16,16(1)…25,46,46(1),46(2)}.jpeg  (9 portraits)
└── WhatsApp Video 2026-05-21 at 11.56.{07,18,18(1),23,23(1),23(2),24,25}.mp4 (8 lab clips)
```

### 5.2 Portrait pipeline (`scripts/process-portraits.mjs`)

Maps each source to its destination per [01_MODERN_PLAN.md](01_MODERN_PLAN.md) §4 + the "Yes/Maybe/No" recommendations in [Dr_Liza_Media_Asset_Analysis.xlsx](Dr_Liza_Media_Asset_Analysis.xlsx).

Per source: convert HEIC → temporary JPEG (via `heic-convert`), then `sharp` → AVIF + WebP + JPEG at widths 1920, 1280, 768, 480. Output to `public/images/portraits/`.

Naming convention:
```
drliza-hero.{avif,webp,jpg}
drliza-hero@1920w.avif
drliza-hero@1280w.avif
drliza-hero@768w.avif
drliza-hero@480w.avif
```

Components use `<picture>` with `srcset` to let the browser pick the right one.

### 5.3 Video pipeline (`scripts/process-videos.sh`)

Per clip:

```bash
ffmpeg -i "$IN" -ss "$START" -t "$DURATION" -an \
  -vf "scale=1280:-2,format=yuv420p" -c:v libx264 -crf 24 -preset slow \
  -movflags +faststart "$OUT.mp4"

ffmpeg -i "$IN" -ss "$START" -t "$DURATION" -an \
  -vf "scale=1280:-2" -c:v libvpx-vp9 -b:v 1M -crf 33 \
  "$OUT.webm"

ffmpeg -i "$IN" -ss "$START" -vframes 1 "$OUT.poster.jpg"
```

Trim points and clip-to-section mappings come from [01_MODERN_PLAN.md](01_MODERN_PLAN.md) §4.3.

Target: each output `< 400 KB`. The 17 MB `11.56.25.mp4` (entrance) should compress to ~250 KB at 8s + 1280×720 + CRF 24.

### 5.4 Placeholder generator (`scripts/generate-placeholders.mjs`)

Generates labelled SVG placeholders for the production shoots that don't exist yet (see master spec §5.1). Each placeholder is a 4:3 or 3:4 SVG with a soft purple border, an icon, and a label like *"Hero portrait — formal white coat — production shoot required (Spec §5.1)"*. Used by `<PlaceholderCard />` in pages where a real photo will eventually go.

---

## 6. Tailwind Config

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:      '#6B2D8C',
          purpleDark:  '#4A1F61',
          purpleLight: '#B594CC',
        },
        bg: {
          warm:  '#FAF7F5',
          cream: '#F2EBE7',
          card:  '#FFFFFF',
        },
        ink: {
          body:  '#2D2A33',
          muted: '#6B6470',
        },
        accent: {
          gold:       '#C5A361',
          terracotta: '#C97B5F',
        },
        line: '#E5DDD9',
      },
      fontFamily: {
        sans:      ['"Inter Variable"', 'system-ui', 'sans-serif'],
        display:   ['"Inter Tight Variable"', '"Inter Variable"', 'sans-serif'],
        bangla:    ['"Hind Siliguri"', 'system-ui', 'sans-serif'],
        serif:     ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo':  'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '350': '350ms',
        '600': '600ms',
        '1200': '1200ms',
      },
      maxWidth: {
        container: '1280px',
        prose:     '68ch',
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## 7. Motion Tokens (`src/lib/tokens.ts`)

```ts
export const easing = {
  primary: [0.22, 1, 0.36, 1] as const,
  enter:   [0.16, 1, 0.3, 1] as const,
  exit:    [0.7, 0, 0.84, 0] as const,
};

export const duration = {
  micro: 0.15,
  short: 0.25,
  base:  0.35,
  long:  0.6,
  film:  1.2,
};

export const transition = {
  base:  { duration: duration.base, ease: easing.primary },
  enter: { duration: duration.long, ease: easing.enter },
  exit:  { duration: duration.short, ease: easing.exit },
};
```

Every Framer Motion `transition={...}` prop in the codebase pulls from this module. No inline magic numbers.

---

## 8. Lenis Setup (`src/components/motion/SmoothScroll.tsx`)

```tsx
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touch = matchMedia('(hover: none)').matches;
    if (reduced || touch) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 5),
      smoothWheel: true,
    });
    let raf: number;
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  return <>{children}</>;
}
```

Wrapped once around the router in `App.tsx`.

---

## 9. Routing (`src/routes.tsx`)

```tsx
import { createBrowserRouter, Outlet, ScrollRestoration } from 'react-router-dom';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { PageTransition } from './components/layout/PageTransition';
import { ChatPanel } from './components/interactive/ChatPanel';
import { StickyBookButton } from './components/interactive/StickyBookButton';

// pages…

function RootLayout() {
  return (
    <>
      <SiteHeader />
      <main id="main"><PageTransition><Outlet /></PageTransition></main>
      <SiteFooter />
      <ChatPanel />
      <StickyBookButton />
      <ScrollRestoration />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/about/journey', element: <StructurePreview section="Journey" /> },
      { path: '/about/credentials', element: <StructurePreview section="Credentials" /> },
      { path: '/about/publications', element: <StructurePreview section="Publications" /> },
      { path: '/about/teaching', element: <StructurePreview section="Teaching" /> },
      { path: '/treatments', element: <Treatments /> },
      { path: '/treatments/ivf', element: <IVF /> },
      // … other treatment stubs
      { path: '/journey', element: <Journey /> },
      { path: '/laboratory', element: <Laboratory /> },
      { path: '/chambers', element: <Chambers /> },
      { path: '/chambers/ufcl', element: <UFCL /> },
      // … other chamber stubs
      { path: '/learning', element: <StructurePreview section="Learning Centre" /> },
      { path: '/stories', element: <StructurePreview section="Stories" /> },
      { path: '/stories/example', element: <ExampleStory /> },
      { path: '/contact', element: <Contact /> },
      { path: '/ethics', element: <Ethics /> },
      { path: '/privacy', element: <Privacy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
```

`<StructurePreview section="..." />` is the reusable stub component. Renders a centred card with the section name, a description ("This page is part of the demo's structural preview. Full content will be added in production."), and a list of the planned sections from the master spec.

---

## 10. Component Build Order

Build in this order to maximise reuse and minimise rework:

### Day 1
1. `Container`, `Section`, `Reveal`, `Stagger`
2. `SiteHeader`, `MobileNav`, `LanguageToggle`
3. `SiteFooter`
4. `PageTransition`, `SmoothScroll`
5. `StickyBookButton`
6. `ChatPanel` (WhatsApp deep-link panel)
7. `PlaceholderCard`
8. `StructurePreview`
9. Run `npm run assets:all`

### Day 2 — Home
10. `HomeHero` (Shot 1+2 — the cold open and reveal)
11. `CredentialStrip`
12. `TreatmentBento` (the asymmetric grid from plan §6)
13. `TrustPillar` (×3)
14. `JourneyPreview` (horizontal-scroll cards)
15. `ChamberMap` + preview row
16. Final CTA strip

### Day 3 — About + Treatment + Lab
17. `Hero` (section variant)
18. `TimelineItem` + `Stagger` integration on `/about`
19. `QuoteBlock`
20. `TreatmentProcess`, `CostTransparencyTable`, `FAQAccordion`
21. `IVF.tsx` page wired up
22. `VideoLoop` component
23. `Laboratory.tsx` with all 8 lab clips

### Day 4 — Chambers + Contact + Story + Stubs
24. `Chambers.tsx` hub with map
25. `UFCL.tsx`
26. `Contact.tsx` form (posts to `console.log`)
27. `ExampleStory.tsx`
28. All other stub pages routed to `StructurePreview`

### Day 5 — Polish + Deploy
29. Audit every page on iPhone-sized + 360px Android-sized viewports
30. Audit motion under `prefers-reduced-motion`
31. Audit keyboard navigation
32. Audit colour contrast
33. Lighthouse pass on home + laboratory + IVF (these are the heaviest)
34. Deploy to Vercel: `npx vercel --prod`
35. Rehearse the walkthrough script ([master spec §9](DrLizaChowdhury_Demo_Production_Spec.md))

---

## 11. WhatsApp Deep Link Helper (`src/lib/whatsapp.ts`)

```ts
type Chamber = 'ufcl' | 'hitech' | 'ibn-sina-uttara' | 'ibn-sina-kallyanpur' | 'lubana' | 'unknown';

const WHATSAPP_NUMBER = '8801743243386'; // verify with Madam before launch

const messageFor: Record<Chamber, string> = {
  ufcl:                  "Assalamualaikum, I'd like to book a consultation at the Uttara Fertility Centre (UFCL).",
  hitech:                "Assalamualaikum, I'd like to book a consultation at Hitech Multicare.",
  'ibn-sina-uttara':     "Assalamualaikum, I'd like to book a consultation at Ibn Sina Uttara.",
  'ibn-sina-kallyanpur': "Assalamualaikum, I'd like to book a consultation at Ibn Sina Kallyanpur.",
  lubana:                "Assalamualaikum, I'd like to book a consultation at Lubana General Hospital.",
  unknown:               "Assalamualaikum, I'd like to book a consultation with Dr. Liza Chowdhury.",
};

export function whatsappLink(chamber: Chamber = 'unknown'): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageFor[chamber])}`;
}
```

All "Book" / "WhatsApp" buttons across the site call this helper. **The phone number must be verified with Madam before the demo walkthrough.** Until then, the placeholder `01743243386` from the master spec Appendix B.1 is wired in.

---

## 12. Bilingual Content Strategy in Code

```ts
// src/content/en.ts
export const en = {
  hero: {
    eyebrow: 'The Practice',
    headline: 'The doctor who founded Bangladesh\'s first government fertility centre.',
    subhead: 'Major Gen. Prof. Dr. Liza Chowdhury (Retd.) — Infertility & Reproductive Medicine specialist, now seeing patients in Uttara.',
    ctaPrimary: 'Book a Consultation',
    ctaSecondary: 'Watch Dr. Liza\'s introduction',
  },
  // …
} as const;

// src/content/bn.ts
export const bn = {
  hero: {
    eyebrow: 'প্র্যাকটিস',
    headline: 'বাংলাদেশের প্রথম সরকারি ফার্টিলিটি সেন্টারের প্রতিষ্ঠাতা।',
    subhead: 'মেজর জেনারেল প্রফেসর ডা. লিজা চৌধুরী (অব.) — উত্তরায় বন্ধ্যাত্ব ও প্রজনন চিকিৎসা বিশেষজ্ঞ।',
    ctaPrimary: 'পরামর্শ নিন',
    ctaSecondary: 'ডা. লিজার পরিচিতি দেখুন',
    subheadBilingual: 'স্বপ্নের সন্তানের সাথে হোক আজীবনের আনন্দ',
  },
  // …
} as const;
```

Components consume strings via the `useLanguage()` hook:

```ts
export function useLanguage() {
  const [lang, setLang] = useState<'en' | 'bn'>(() => {
    return (localStorage.getItem('drliza.lang') as 'en' | 'bn') ?? 'en';
  });
  const t = lang === 'en' ? en : bn;
  return { lang, t, setLang: (l: 'en' | 'bn') => { localStorage.setItem('drliza.lang', l); setLang(l); } };
}
```

Bangla coverage in demo: home, about, IVF, contact. All other pages stay English with a toast notification on language switch ("This page's Bangla version is coming soon."). See [03_UI_UX_SUGGESTIONS.md](03_UI_UX_SUGGESTIONS.md) §9.

---

## 13. Demo Data — Comprehensive, Backend-Independent

**Directive:** demo data is rich enough that the absence of a backend is invisible. Every component that renders data has data to render. No "coming soon", no "lorem ipsum", no empty states caused by missing records. The frontend carries the full site experience using static TypeScript modules; the future backend will replace these modules 1:1 without component changes.

All data lives in `src/data/` and is fully typed.

### 13.1 `src/data/treatments.ts` — all 7 treatments, full depth

```ts
export type Treatment = {
  slug: string;
  name: string;
  nameBn: string;
  oneLiner: string;
  oneLinerBn: string;
  indications: string[];           // 5 bullets
  process: {                       // 8–9 steps
    step: number;
    title: string;
    description: string;
    duration: string;              // e.g., "10–12 days"
  }[];
  differentiator: string;          // ~80 words on Madam's approach
  cost: {
    rangeBdt: [number, number];
    included: string[];
    excluded: string[];
    note: string;
  };
  successRate: {
    band: string;                  // age band
    rate: string;                  // e.g., "38–45%"
    note: string;
  }[];
  faqs: { q: string; a: string }[]; // 6–8 per treatment
  icon: string;
  isPriority: boolean;
  bentoSize: 'tall' | 'wide' | 'short';
};

export const treatments: Treatment[] = [ /* 7 full records */ ];
```

### 13.2 `src/data/chambers.ts` — all 5 chambers, full depth (sourced from master spec Appendix B)

```ts
export type Chamber = {
  slug: string;
  name: string;
  shortName: string;
  role: string;                    // "Primary practice" | "Consultation" | etc.
  address: string;
  city: string;
  postalCode: string;
  schedule: { day: string; time: string }[];
  hotline: string;
  alternateHotline?: string;
  whatToBringFirst: string[];
  whatToBringFollowUp: string[];
  parkingNotes: string;
  geo: { lat: number; lng: number };
  titleHeldHere: string;           // e.g., "Chairman & Chief Consultant"
  photoSlot: string;               // points to placeholder or real image
  isPrimary: boolean;
};

export const chambers: Chamber[] = [ /* 5 full records */ ];
```

### 13.3 `src/data/videos.ts` — all 20 videos from spec §5.2

```ts
export type Video = {
  idx: number;
  day: 1 | 2;
  title: string;                   // real Bangla title
  description: string;             // 1-line Bangla
  topic: 'awareness' | 'diagnosis' | 'treatment' | 'support';
  estimatedDuration: string;       // "2–4 min"
  thumbnailSlot: string;
};

export const videos: Video[] = [ /* all 20 with real titles */ ];
```

### 13.4 `src/data/articles.ts` — 10 Learning Centre articles

```ts
export type Article = {
  slug: string;
  title: string;
  titleBn: string;
  excerpt: string;                 // ~80 words
  excerptBn: string;
  topic: string;
  readingTimeMin: number;          // 5–9
  publishedAt: string;             // ISO date
  authorByline: string;            // "Dr. Liza Chowdhury"
  openingParagraph: string;        // for the reader modal — readable, not lorem
};

export const articles: Article[] = [ /* 10 full records */ ];
```

### 13.5 `src/data/stories.ts` — 6 patient stories, full narratives

```ts
export type Story = {
  slug: string;
  headline: string;                // e.g., "After two failed IUI cycles, IVF gave us our daughter"
  initials: string;                // "S.R. & M.R."
  treatment: string;
  year: number;
  outcome: 'pregnancy' | 'continuing-treatment' | 'pregnancy-after-multiple-cycles';
  narrative: string;               // 400–700 words, realistic placeholder, clearly labelled
  closingFromDoctor: string;       // 1-line clinical reflection
  isPlaceholder: true;             // every demo story carries this flag — rendered as a small label on the card
};

export const stories: Story[] = [ /* 6 full records */ ];
```

### 13.6 `src/data/publications.ts` — 10 publications

```ts
export type Publication = {
  title: string;
  journal: string;
  volume?: string;
  issue?: string;
  year: number;
  link?: string;                   // real where verifiable, otherwise undefined
  isHighlighted: boolean;          // true for the JAFMC 2020 paper
};

export const publications: Publication[] = [ /* 10 records, JAFMC 2020 verified */ ];
```

### 13.7 `src/data/glossary.ts` — 50 bilingual terms

```ts
export type GlossaryTerm = {
  en: string;
  bn: string;
  definition: string;
  definitionBn: string;
  category: 'diagnosis' | 'treatment' | 'lab' | 'general';
};

export const glossary: GlossaryTerm[] = [ /* 50 terms */ ];
```

### 13.8 `src/data/credentials.ts` — sourced from spec Appendix A

```ts
export const credentials = {
  identity: { /* full title, role, BMDC reg placeholder */ },
  education: [ /* MBBS, DGO, MCPS, FCPS, fellowships */ ],
  pioneeringWork: { /* CMH fertility centre founding */ },
  memberships: [ /* OGSB, BCPS, SLSB, BMS, IAGE, IFS, ESHRE */ ],
  examinerRoles: [ /* Dhaka U, BUP, BCPS */ ],
  academicPositions: [ /* AFMC, Ibn Sina */ ],
  timeline: [ /* 12 career milestones */ ],
  publicationCount: 36,
};
```

### 13.9 `src/data/faqs.ts` — homepage + per-treatment FAQs

Approximately 60 Q&A pairs total. Real answers (not placeholders). Categorised by treatment slug for routing into the right page's `<FAQAccordion>`.

### 13.10 Writing the data — voice & tone

Demo data is written to match the master spec §11 quality bar: no clinic-marketing clichés ("trusted", "leading", "compassionate"), plain language, warm-clinical register, Bangla written natively rather than translated. A doctor reading the demo cold should not be able to tell the data is demo-only — only the explicit `isPlaceholder` story labels and production-shoot placeholder cards give it away.

### 13.11 1:1 migration path to backend

When the backend lands later (per [01_MODERN_PLAN.md §13](01_MODERN_PLAN.md)), each `src/data/*.ts` file maps to one CMS collection or one API endpoint. The TypeScript types in the data files become the API response types. No component change required. This is the contract the demo locks in.

---

## 14. Build Verification Checklist

Run through this before every commit and before deploy.

### Build
- [ ] `npm run build` completes without TS errors or Vite warnings
- [ ] `npm run preview` serves the built site locally
- [ ] No console errors on any of the 7 fully-built pages
- [ ] No console warnings about missing keys, hydration mismatches, or `aria-*`

### Visual
- [ ] All 5 UFCL portrait variants render correctly on Chrome, Safari, Firefox
- [ ] All 8 lab videos auto-play in-viewport, pause out-of-viewport, muted, no controls
- [ ] Header background-blur engages on scroll past 100px
- [ ] Sticky mobile book-button slides up on upward scroll, hides on downward scroll

### Motion
- [ ] Lenis is active on desktop, disabled on touch and `prefers-reduced-motion`
- [ ] Page transitions are clean (no flash of unstyled content)
- [ ] Scroll-triggered reveals fire once and don't re-trigger on scroll-up

### Bilingual
- [ ] Language toggle persists across page navigation
- [ ] Bangla renders without conjunct breakage (Hind Siliguri loaded)
- [ ] Toast appears when toggling to Bangla on a page with no Bangla variant

### Accessibility
- [ ] Tab-key navigation works on every page
- [ ] Focus ring visible on every interactive element
- [ ] Skip-to-main link reachable on first tab press
- [ ] All form fields have associated `<label>`s
- [ ] All decorative videos have `aria-hidden="true"`

### Performance
- [ ] Lighthouse Performance ≥ 90 on home, about, IVF, laboratory
- [ ] Largest Contentful Paint < 2.5s (mobile throttled)
- [ ] Total page weight on home < 1 MB
- [ ] No render-blocking fonts (using `@fontsource` with `font-display: swap`)

### Demo-readiness
- [ ] All stub pages render the `StructurePreview` component correctly
- [ ] All placeholder cards (production-shoot-required) are labelled
- [ ] Contact form `console.log`s the payload + shows the success state for 2s
- [ ] Chat panel opens WhatsApp deep links in a new tab
- [ ] All 5 chamber pins on the map link to the correct route (or to `StructurePreview` for the four stubs)

---

## 15. Deployment

```bash
# From project root
npm run build
npx vercel --prod
# Choose: existing scope → new project → name: drliza-demo → settings: default → deploy
```

Demo lives at `https://drliza-demo.vercel.app` (or similar). **Do not point a custom domain at the demo.** The production domain (per master spec §5.6 still TBD by Madam: `drlizachowdhury.com` vs `ivfwithdrliza.com`) is reserved for the production build.

For the meeting room, prefer running locally:

```bash
npm run build && npm run preview
# Serves at http://localhost:4173 — fully cached, works offline
```

This is the recommended walkthrough mode. Wi-Fi-independent. Faster than Vercel's CDN.

---

## 16. Handing the Demo to Madam

The demo is shown live in the meeting. After the meeting, she gets:

1. **The Vercel URL** — for her to revisit and share with one or two trusted reviewers
2. **A printed one-page summary** — covered in [02_PLAN_REVIEW.md](02_PLAN_REVIEW.md) §6 item 4
3. **The "What I need from you" checklist** — pulled directly from [master spec §5](DrLizaChowdhury_Demo_Production_Spec.md) (Content Inventory)
4. **An explicit "this is a demo, not the production site" note** at the top of the URL — implemented as a small purple-tinted banner above the header: *"This is a structural demo for Madam's review. Final design, content, and photography are pending."*

---

## 17. What Happens After Approval (Out of This Phase's Scope, But Worth Pinning)

The day after Madam says yes:

1. The Vercel demo URL is preserved (renamed `drliza-demo-archive.vercel.app`) so the team can reference what was approved.
2. A new repository — `drliza-production` — is forked from this demo's repo as the starting structure.
3. The production phase begins per [master spec §10 Phase 3](DrLizaChowdhury_Demo_Production_Spec.md). Backend joins per [01_MODERN_PLAN.md §13](01_MODERN_PLAN.md).
4. Photography and video shoots are booked.
5. Content writers are briefed using §5 of the master spec as the deliverable list.

**Until then, this demo's job is done at "Madam said yes."**

---

## 18. One Final Reminder

This is a demo. The architecture, the motion, the type, the photo crops, the WhatsApp links — all of it has been engineered to be production-quality in feel while remaining a frontend-only artifact under the hood.

If Madam asks: *"How fast can we make this real?"* — the answer is *"This codebase is already the foundation. Production is content + photography + backend on top of what you're looking at. About 4–6 weeks from your approval today."*

That's the pitch the demo is built to deliver. Build it cleanly, ship it confidently, and let Madam tell you to go.

---

**End of development doc.** Build referenced from: [DrLizaChowdhury_Demo_Production_Spec.md](DrLizaChowdhury_Demo_Production_Spec.md) · [01_MODERN_PLAN.md](01_MODERN_PLAN.md) · [02_PLAN_REVIEW.md](02_PLAN_REVIEW.md) · [03_UI_UX_SUGGESTIONS.md](03_UI_UX_SUGGESTIONS.md) · [Dr_Liza_Media_Asset_Analysis.xlsx](Dr_Liza_Media_Asset_Analysis.xlsx).
