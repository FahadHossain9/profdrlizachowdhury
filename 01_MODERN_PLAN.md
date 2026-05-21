# Dr. Liza Chowdhury — The "Buttery-Smooth Modern" Demo Plan
### A confirmation-grade demo that gets a "যা চাই ঠিক এটাই" from Madam in one sitting

> **Scope statement (read this first):** This document plans a **demo only**. It is a structural and emotional confirmation artifact built with Vite + React. **No production content, no CMS, no backend is built in this phase.** A lightweight backend may be added *later, after Madam approves* — and is explicitly out of scope for now. Nothing in the master spec ([DrLizaChowdhury_Demo_Production_Spec.md](DrLizaChowdhury_Demo_Production_Spec.md)) is being changed; this plan layers a **modern, cinematic execution style** on top of the structure already agreed there.

---

## 0. The One-Line Brief

Build the demo so good that the moment Madam sees the home page hero and scrolls once, she says *"এটাই করো, আর কিছু বদলানোর দরকার নেই — production এ যাও"* — and means it.

That is the only success criterion that matters. Every choice below serves that single outcome.

---

## 1. What "Buttery-Smooth Modern" Means Here

Not buzzwords — five concrete design rules the demo is built against:

1. **Scroll feels physical.** Inertial scroll (Lenis) tuned to ~1.2 duration, easeOutExpo. The page glides, never jerks. On mobile, native scroll is preserved — no scroll-jacking ever.
2. **Every transition is < 350ms and uses one easing function.** `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutQuint) across the entire site. Visual coherence comes from this one decision more than any other.
3. **Type is the design.** Inter Tight (display) + Inter (body) + Hind Siliguri (Bangla) + DM Serif Display (editorial quotes). Sizes scale fluidly with `clamp()`. Tracking and leading tuned per language — Bangla wants more leading.
4. **Photos do the heavy lifting.** The five UFCL clinic portraits (IMG_4858, 4859, 4860, 4856, 4857) are the demo's emotional anchor. Used full-bleed, cinematically, with the purple UFCL logo intentionally legible — *Madam standing inside her own brand*.
5. **Purple is the air, not the wallpaper.** Brand purple #6B2D8C used at 4–8% saturation across backgrounds (`#FAF7F5` warm white with purple wash). Full-strength purple appears only on CTAs, the logo, and one hero word.

If these five rules are obeyed everywhere, the demo will feel like a single object — not a collage of pages.

---

## 2. The Cinematic Spine (What Madam Sees in 90 Seconds)

The first 90 seconds of the demo walkthrough are the entire sales pitch. Designed shot-by-shot like a film opening:

### Shot 1 — Cold open (0–4s)
Page loads on a warm off-white. A single line fades in, serif, weight 400, large but quiet:

> *"Bangladesh's first government fertility centre was founded by a woman."*

Hold for 2.5 seconds. No image yet.

### Shot 2 — The reveal (4–8s)
The line dissolves; **IMG_4858 fades up full-bleed** — Madam at the UFCL reception desk, warm smile, the purple UFCL logo legible behind her. Headline overlays bottom-left:

> *The doctor who founded it now sees patients in Uttara.*
> *Major Gen. Prof. Dr. Liza Chowdhury (Retd.)*

Bangla subhead beneath in Hind Siliguri: *স্বপ্নের সন্তানের সাথে হোক আজীবনের আনন্দ*

Two CTAs, side-by-side. Primary: **Book a Consultation**. Secondary: **Watch Dr. Liza's introduction**.

### Shot 3 — First scroll (8–14s)
On first scroll, a horizontal credibility strip slides in from below with a 60ms stagger across six logos: AFMC · CMH Dhaka · Ibn Sina Medical College · ESHRE · BCPS · OGSB. Single caption: *Trained in India & Germany. 30+ years in reproductive medicine.*

### Shot 4 — The "I treat" grid (14–28s)
6 treatment cards, asymmetric bento layout (not a regular grid — IVF and ICSI are taller cards because they're the headline services). Each card has a 4px purple top-rule, a single-line icon, the treatment name in Inter Tight, a one-line description, and a quiet "→" arrow that animates on hover. Cards lift 4px on hover with a subtle shadow bloom (no transform-scale; lift only).

### Shot 5 — Trust pillars (28–42s)
Three full-width sections, each takes the full viewport but content sits in the middle 60%. Subtle parallax-on-scroll: the heading floats up 12px slower than the body text. Pillars: Pioneer Credentials · International Training · Advanced Laboratory.

### Shot 6 — Lab teaser (42–58s)
A muted, looped 6-second clip from `WhatsApp Video 11.56.23 (2).mp4` (the Esco MIRI digital readout) plays at 60% opacity behind a quote:

> *"Where embryos are protected like patients."*

CTA: **Step inside the lab →**

### Shot 7 — Chambers preview (58–72s)
A stylised Dhaka map (SVG, not Google Maps for the hero — Google Maps is reserved for the chamber detail pages). Five purple pins, UFCL slightly larger and pulsing once on load. Hover a pin → a glass-card popover shows chamber name + days + hotline.

### Shot 8 — Final emotional beat (72–90s)
Full-bleed soft-cream background. Single sentence, serif, large:

> *"When you're ready to talk, I'm here."*

Three pill buttons stacked on mobile, in a row on desktop: **Call** · **WhatsApp** · **Book Online**.

This sequence is the demo's heartbeat. Every other page in the demo is built to the same emotional register.

---

## 3. What Changes vs. the Master Spec (and what doesn't)

The master spec ([DrLizaChowdhury_Demo_Production_Spec.md](DrLizaChowdhury_Demo_Production_Spec.md)) is the source of truth for **structure, content, IA, and strategy**. Nothing there changes. This plan only adds three things on top of it:

| Layer | Source of truth |
|---|---|
| Structure, IA, content blocks, page sections | Master spec §3, §4 (unchanged) |
| Visual tokens (colour, type, spacing) | Master spec §6 (kept; extended with motion tokens below) |
| Motion, transitions, scroll behaviour | **NEW — this document, §5** |
| Photo art-direction using existing assets | **NEW — this document, §4** |
| Demo-build scope reductions | Master spec §8.6 (reaffirmed, narrowed further) |

---

## 4. Asset-Driven Art Direction (Using What We Have)

From [Dr_Liza_Media_Asset_Analysis.xlsx](Dr_Liza_Media_Asset_Analysis.xlsx): 5 image "Yes" / 5 "Maybe" / 4 "No", and 8 lab videos all "Yes" for b-roll. Here's exactly where each goes:

### 4.1 Hero & "About" portraits — the UFCL clinic set

| Asset | Resolution | Use |
|---|---|---|
| **IMG_4858.HEIC** | 3024×4032 | **Home hero (Shot 2 above) + About hero.** Top pick: warmth + authority + brand all in one frame. Convert to JPEG + WebP + AVIF at 1920w, 1280w, 768w, 480w. |
| IMG_4859.HEIC | 3024×4032 | About: opening narrative section as a 60/40 split (text left, portrait right). Convert and cache same as 4858. |
| IMG_4860.HEIC | 3024×4032 | Quote block portrait on the About page (the "practice philosophy" pull-quote). |
| IMG_4856.HEIC | 3024×4032 | **UFCL chamber page hero (full-length, full UFCL logo legible).** |
| IMG_4857.HEIC | 3024×4032 | Skip from primary use (phone-in-hand is distracting). Keep in `/public/images/portraits/archive/` for production review. |

### 4.2 Secondary/editorial portraits

- **WhatsApp Image 11.57.16 (1).jpeg** — only landscape image; use as banner on `/about` between sections, or as the OG/Twitter share card.
- **WhatsApp Image 11.57.46.jpeg** — used as a small "doctor-in-her-clinic" thumbnail on the `/chambers/ufcl` page card on the chambers hub.
- **WhatsApp Image 11.57.25.jpeg** — secondary portrait on `/about/teaching`, cropped tight to remove the neon backdrop.
- **WhatsApp Image 11.57.16 (4).jpeg** (Hepatology Society panel) — small card on `/about/credentials` under "Speaking & Examiner Roles", cropped tight.
- **WhatsApp Image 11.57.46 (1).jpeg** (Safe Motherhood seminar) — small card on `/about/teaching` if community advocacy is included.

### 4.3 Lab b-roll — the laboratory page does most of its talking in motion

All eight clips, compressed and trimmed, used as silent ambient loops on `/laboratory`:

| Spec section on /laboratory | Clip | Trimmed duration |
|---|---|---|
| Hero (above the fold) | `11.56.25.mp4` (Entry Restricted glass doors) → trim to 8s of the entrance approach | 8s loop |
| "The Esco MIRI Multiroom Incubator" | `11.56.18.mp4` (Esco CelCulture, named) | 12s loop |
| "ISO Class 3 ART Workstation" | `11.56.23 (2).mp4` (MIRI digital readout) | 8s loop |
| "Customised gas control" | `11.56.23 (1).mp4` (ESCO digital control display) | 6s loop |
| "The embryology team" | `11.56.07.mp4` (Nikon stereo microscope) | 10s loop |
| "Quality control protocols" | `11.56.24.mp4` (OT + IVF LAB signage) | 10s loop |
| "Virtual tour" feature | `11.56.23.mp4` (longest walkthrough) → trim to best 15s | 15s loop |
| UFCL chamber page interior | `11.56.18 (1).mp4` (IPD corridor with purple branding) | 10s loop |

All clips: muted, autoplay only when in viewport (Intersection Observer), `playsinline`, `preload="metadata"`, with a static poster frame as the LCP-friendly fallback.

### 4.4 What's NOT used (and what to label clearly in the demo)

- The 4 "No" images stay out of `/public/` entirely.
- Every production-shoot-required slot (hero portrait formal white-coat, chamber exteriors for non-UFCL, embryology team portrait) is rendered as a **labelled placeholder card** on the demo:

```
┌─────────────────────────────────────┐
│  📷  Placeholder for production     │
│      shoot — see Spec §5.1 row 1    │
│  "Hero portrait — formal white coat"│
└─────────────────────────────────────┘
```

This is critical: Madam needs to *see the gaps* as design elements, not be confused by stock photos.

---

## 5. The Motion System

Six motion primitives. Every animation in the demo is composed from these.

### 5.1 Easing

```ts
// src/lib/motion.ts
export const easing = {
  primary:   [0.22, 1, 0.36, 1],   // easeOutQuint — 95% of the site
  enter:     [0.16, 1, 0.3, 1],    // easeOutExpo — content reveal
  exit:      [0.7, 0, 0.84, 0],    // easeInQuint — content leave
  spring:    { type: 'spring', stiffness: 280, damping: 30 }, // hover springs only
};

export const duration = {
  micro: 0.15,   // hovers
  short: 0.25,   // toggles, accordions
  base:  0.35,   // standard transitions
  long:  0.6,    // hero reveals, page transitions
  film:  1.2,    // hero text dissolves
};
```

### 5.2 Smooth scroll (Lenis)

```ts
// Wrap the app once at the root.
import Lenis from '@studio-freight/lenis';
const lenis = new Lenis({ duration: 1.2, easing: t => 1 - Math.pow(1 - t, 5) });
function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
```

Disabled on `prefers-reduced-motion`. Disabled on touch devices (native scroll feels better on iOS).

### 5.3 Scroll-triggered reveals

Single utility component `<Reveal />` wraps any block; intersection observer triggers a fade + 16px upward translate with a 60ms stagger between siblings. Threshold 20%. Fires once.

### 5.4 Page transitions

Framer Motion's `AnimatePresence` with `mode="wait"`:
- Exit: opacity 1 → 0, translate-y 0 → -8px, 200ms
- Enter: opacity 0 → 1, translate-y 12px → 0, 350ms

Header and footer remain mounted across transitions. Only the page body animates.

### 5.5 Hover micro-motion

- Buttons: background colour shift + 1px lift; never scale.
- Cards: 4px lift + shadow expansion (no border-colour change — colour changes look cheap).
- Links inline in body text: 2px underline thickness animates in from below in 150ms.

### 5.6 Video loops

All ambient lab clips fade in on viewport entry (`opacity 0 → 0.85` over 800ms). They never play with audio. They auto-pause when off-screen to save mobile battery.

---

## 6. The Bento Where Sensible, Not Everywhere

The treatment grid (`/` and `/treatments`), the chambers hub (`/chambers`), and the credentials section (`/about/credentials`) use **asymmetric bento layouts** — varied card sizes within a CSS grid. Everywhere else stays in clean, single- or two-column flows. Bento is a flavour, not the dish.

Example bento for the home treatment grid:

```
┌─────────────┬─────────────┬─────────────┐
│             │             │             │
│    IVF      │   ICSI      │   IUI       │
│  (tall)     │   (tall)    │  (short)    │
│             │             │             │
├─────────────┼─────────────┴─────────────┤
│ Male Factor │                           │
│  (short)    │   Recurrent Loss          │
├─────────────┤   (wide)                  │
│ Laparoscopy │                           │
│  (short)    │                           │
└─────────────┴───────────────────────────┘
```

Mobile collapses to a single column of equally-sized cards. Bento only earns its keep on ≥ 768px.

---

## 7. Bilingual UX, Done Like a Native

The master spec §2.4 sets the bilingual strategy. Execution details for the demo:

1. **Language toggle is a pill in the header**: `EN | বাং`. Active language is filled purple; inactive is muted. One click switches the entire UI string layer and the Bangla content variant (where one exists). Persisted in `localStorage`.
2. **Bangla typography**: Hind Siliguri at line-height 1.85 (vs 1.65 for English). Tracking -0.005em. Bangla is naturally taller — give it air.
3. **Bilingual moments** (where both appear together): the home hero subhead, the contact section heading, every treatment name, every CTA button. These use a soft "·" separator and one type style each:
   > **Book a Consultation** · **পরামর্শ নিন**
4. **Quotes from Madam appear in Bangla first**, then a smaller English translation beneath in a muted colour — this is the editorial pattern.
5. **Chatbot interface is Bangla-default** with a small "Switch to English" link top-right of the chat panel.

---

## 8. Demo Scope — Tightened

Master spec §8.6 lists what to build vs. stub. This plan narrows further for a 5-day solo demo build:

### Fully built (pixel-finished, every motion working)
1. **Home** (the cinematic spine, §2 above)
2. **About** (`/about`) — narrative + timeline + credentials preview
3. **One treatment page** — `/treatments/ivf` as the template
4. **Laboratory** (`/laboratory`) — every lab video integrated
5. **Chambers hub** (`/chambers`) + **UFCL detail** (`/chambers/ufcl`)
6. **Contact** (`/contact`) — fully working WhatsApp deep links, form posts to `console.log`
7. **One Patient Story** (`/stories/[example-slug]`) — clearly labelled placeholder

### Template-rendered pages (route exists, real demo data, shared layouts)
**No page is a "coming soon" stub.** Every route renders complete, realistic data through the shared `src/data/` layer using a shared template:
- The other 6 treatment pages — use the IVF template with treatment-specific FAQs, process steps, indications, costs, and success-rate context from `src/data/treatments.ts`
- The other 4 chamber detail pages — use the UFCL template with chamber-specific address, schedule, hotline, what-to-bring, and parking info from `src/data/chambers.ts`
- `/learning`, `/learning/videos`, `/learning/articles` — fully populated: 20 video tiles with real Bangla titles, durations, topic tags, designed thumbnails; 10 article cards with titles, excerpts, reading times, dates
- `/stories` hub + 5–8 individual story pages — full narratives written as realistic placeholders, clearly labelled
- `/learning/glossary` — 50 bilingual fertility terms with plain-language definitions
- `/about/journey`, `/about/credentials`, `/about/publications`, `/about/teaching` — complete (timeline of 12 milestones, full credentials list, 10 publications including the JAFMC 2020 paper, teaching narrative)
- `/ethics`, `/privacy` — short but complete copy, not placeholders

### Functional but minimal
- Chatbot bubble (visible bottom-right; click opens a 3-option panel: "Book at UFCL" / "Book at another chamber" / "Talk on WhatsApp" — each opens a WhatsApp deep link)
- Language toggle (works across home, about, IVF page, contact — stub pages stay English to save time)

### Explicitly NOT in demo scope
- Real CMS
- Real form backend
- Real chatbot intelligence
- Search
- SEO meta beyond `<title>` and `<meta description>`
- Analytics
- Auth
- Online payment

### 8.5 Demo data depth — the backend's absence is invisible

Per direction: **nothing in the demo feels incomplete because there's no backend.** The frontend ships with a comprehensive, hand-written demo dataset in `src/data/` that exceeds what any first-launch CMS would carry. Specifically:

| Dataset | Count | Depth |
|---|---|---|
| Treatments | 7 | Each: name + bilingual title, one-liner, indications (5 bullets), full process (8–9 steps with time estimates), differentiator copy, cost range, age-banded success-rate context, 6–8 FAQs with full answers |
| Chambers | 5 | Each: full address, weekly schedule, hotlines (primary + alternate), what to bring (first vs. follow-up), parking notes, lat/lng, photo slot, Madam's title at that chamber |
| Videos | 20 | All real Bangla titles from spec §5.2, with 1-line description, topic tag, expected duration, designed thumbnail placeholder, day-of-shoot grouping |
| Articles | 10 | Real-feeling title, ~80-word excerpt, topic tag, reading time (5–9 min), publication date, author byline, opening paragraph for the reader modal |
| Patient stories | 6 | Full 400–700 word narratives written as realistic placeholders (labelled honestly), treatment type, anonymised identifier, outcome, year |
| Publications | 10 | The JAFMC 2020 paper (real) + 9 realistic placeholder entries with journals, years, DOI placeholders |
| Glossary | 50 | Bilingual term pairs with plain-language definitions |
| Credentials | 1 record | Full identity, education, fellowships, memberships, examiner roles — sourced from master spec Appendix A |
| FAQs (homepage + per-treatment) | ~60 total | Full answers, not "lorem" |
| Timeline milestones | 12 | Year + event + brief context |

**The rule:** if a component renders data, the data exists and reads as real. The only honest "this is a demo" surfaces are (a) the explicit production-shoot placeholder cards (§4.4), (b) the labelled patient-story disclaimer, and (c) the small demo banner above the header.

This also future-proofs the build: when the backend lands later, every data file moves to a CMS schema 1:1 — no component changes needed. The frontend is the contract.

---

## 9. The Demo's Five "Hero Moments"

These are the five places where the demo earns Madam's *"হ্যাঁ, এটাই"*. Polish ruthlessly; let everything else be 80%:

1. **The cold-open + IMG_4858 reveal** on the home page (Shot 1 + 2 above)
2. **The lab page hero** with the Esco MIRI Multiroom Incubator clip playing silently behind the headline
3. **The Dhaka chamber map** with the UFCL pin pulsing softly once on load
4. **The IVF treatment-page "process" timeline** — 9 steps with subtle scroll-triggered line-drawing animation down the left rail
5. **The final CTA strip** with the three pill buttons and the soft-cream background

If those five moments work, the demo works.

---

## 10. Performance Targets (because smoothness is felt, not described)

| Metric | Target on 4G mid-range Android | How |
|---|---|---|
| LCP | < 2.0s | IMG_4858 served as AVIF, preloaded, sized exactly to viewport |
| INP | < 200ms | No JS work on first scroll; Lenis is GPU-bound |
| CLS | < 0.02 | Every image has `width`/`height`; fonts use `font-display: optional` |
| Total page weight (home) | < 800 KB | One hero image + one video poster + 60 KB of JS chunk |

Videos are lazy-loaded and only play in-viewport. The lab page is the heaviest at ~3 MB but every clip is < 400 KB after compression.

---

## 11. The Asset Pipeline (One Command)

```bash
# scripts/process-assets.sh — run once before the demo build
npm run assets:portraits   # HEIC → AVIF + WebP + JPEG @ 4 sizes each
npm run assets:videos      # Trim per §4.3, compress to MP4 (H.264) + WebM (VP9), generate poster JPEG
npm run assets:placeholders # Generate the labelled placeholder SVGs for shots not yet taken
```

Tools: `sharp` (images), `ffmpeg` (videos via a Node wrapper), `heic-convert` for the initial HEIC step.

Output structure:

```
public/
  images/
    portraits/
      drliza-hero.{avif,webp,jpg}           ← IMG_4858, 4 sizes each
      drliza-about-narrative.{avif,webp,jpg} ← IMG_4859
      drliza-quote.{avif,webp,jpg}           ← IMG_4860
      drliza-ufcl-fulllength.{avif,webp,jpg} ← IMG_4856
      drliza-landscape-banner.{avif,webp,jpg} ← 11.57.16 (1)
    chambers/
      ufcl-reception.{avif,webp,jpg}         ← 11.57.46
    placeholders/
      production-shoot-required.svg
  videos/
    lab/
      lab-entrance.{mp4,webm} + .poster.jpg
      esco-celculture.{mp4,webm} + .poster.jpg
      … etc
```

---

## 12. The Build Plan (Day-by-Day)

5 working days, solo, from cold start to deployed demo.

### Day 1 — Foundation
- Scaffold Vite + React + TS + Tailwind + React Router
- Configure Tailwind tokens (master spec §6) + motion tokens (§5 above)
- Set up Lenis, Framer Motion, intersection observer hooks
- Build `<SiteHeader>`, `<SiteFooter>`, `<Container>`, `<Section>`, `<Reveal>`
- Run the asset pipeline; populate `/public`
- Stub all routes

### Day 2 — Home page
- Build the 8 shots from §2 in sequence
- Treatment bento grid
- Trust pillars
- Final CTA strip
- Make it perfect on mobile too

### Day 3 — About + IVF + Laboratory
- About narrative, timeline, credentials preview
- IVF treatment page (template for production replication)
- Laboratory page with all 8 lab clips wired up

### Day 4 — Chambers + Contact + Story + Stubs
- Chambers hub with stylised SVG Dhaka map
- UFCL detail page
- Contact page (WhatsApp deep links live)
- One patient story (labelled placeholder)
- All other routes get the styled "structure preview" stub

### Day 5 — Polish + deploy + walkthrough rehearsal
- Audit every page against the §10 perf targets
- Test on a real low-end Android (or Chrome DevTools Moto G4 throttle)
- Audit motion against `prefers-reduced-motion`
- Deploy to Vercel (subdomain `demo-drliza.vercel.app`)
- Rehearse the §9 walkthrough script from the master spec, end-to-end, twice

---

## 13. After the Demo — Backend, Maybe, Later

When (not if) Madam confirms, the production phase begins per master spec §10 Phase 3. **The only addition this plan makes to that phase is the backend, and only as a small, well-scoped service:**

- Form submissions from `/contact` → email + SQLite-backed admin
- Chatbot routing (rule-based, not LLM, for v1)
- A thin headless CMS for the Learning Centre (Sanity or Payload — decide in production phase)

**None of that is built now.** The demo's `console.log`-based form is intentional. Backend joins the project only after structural confirmation and the photography/video shoots. This is called out so no one — Madam, you, Factorize, Nuvista — confuses demo limitations with production limitations.

---

## 14. The One-Sentence Quality Bar (Pasted from Master Spec)

> *Would Dr. Liza herself read this page, look at this photo, hear this chatbot reply, and feel it reflects her standards?*

If yes, ship. If no, rework. Apply this to every screen, every clip, every word — including the placeholder labels.

---

**End of plan. Reviewed alongside `02_PLAN_REVIEW.md` and built per `04_DEMO_DEV_DOC.md`.**
