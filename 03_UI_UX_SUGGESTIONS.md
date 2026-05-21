# UI / UX Suggestions for the Dr. Liza Demo
### Patterns, micro-decisions, and the small things Madam will feel before she can describe them

> **Scope:** This is a demo-grade UI/UX document. Patterns here are designed to be (a) implementable in the 5–6 day Vite build described in [01_MODERN_PLAN.md](01_MODERN_PLAN.md) and [04_DEMO_DEV_DOC.md](04_DEMO_DEV_DOC.md), (b) faithful to [DrLizaChowdhury_Demo_Production_Spec.md](DrLizaChowdhury_Demo_Production_Spec.md), and (c) defensible if Madam asks "why this and not that".
>
> **No production backend exists yet.** Every interactive pattern below is designed to function with zero backend in the demo, and to upgrade cleanly when the production backend lands.

---

## 1. The Three Patient Mindsets the UI Must Serve

Before any pixel decision, the UI must answer three real users walking in with very different needs:

| Mindset | Who | What they want from the page in 10 seconds |
|---|---|---|
| **Hopeful first-timer** | Couple, 28–35, considering fertility help for the first time, scared and Googling at midnight | *"Is this real? Will this doctor judge me? What does treatment actually involve?"* — needs warmth, plain language, a calm Patient Journey overview, no pricing-shock upfront |
| **Second-opinion seeker** | Patient, 32–42, has had one or two failed cycles elsewhere, technically literate, skeptical | *"What's different about her? What's her success rate? What lab equipment does she use?"* — needs credentials density, lab specs, publications |
| **Referral-driven** | Patient sent by their gynae or by word of mouth | *"How do I book? Which chamber? When?"* — needs the contact CTA and chamber schedule one click from anywhere |

Every page in the demo is built to answer at least one of these mindsets clearly within the first viewport. The home page answers all three: hero (mindset 3 CTA), trust pillars (mindset 2 credibility), patient journey preview (mindset 1 warmth).

---

## 2. Information Architecture — Small UX Wins on Top of the Spec

The site map in [DrLizaChowdhury_Demo_Production_Spec.md](DrLizaChowdhury_Demo_Production_Spec.md) §3 is solid. Five UX additions to make it sing:

### 2.1 Sticky bottom CTA on mobile (always visible, never intrusive)
A purple pill button reading **Book Consultation · পরামর্শ নিন** floats 16px from the bottom of every page on mobile. Slides down on downward scroll, slides back up on upward scroll. Disappears when within 80px of the page footer's contact section to avoid double-CTA awkwardness.

### 2.2 Breadcrumbs only on third-level pages
`/about/credentials` → breadcrumb shown. `/about` → no breadcrumb (the page title is the breadcrumb). This avoids visual noise on the heroes of major sections.

### 2.3 "Up next" links at the bottom of every content page
Every treatment page ends with three small cards: a related treatment, the patient journey page, and the chambers page. Manually curated, not algorithmic. This is the muscle that turns a researcher into a booker.

### 2.4 Search is *not* in the demo
Search is a production feature. Demo just has good navigation. If Madam asks, the honest answer is: *"Search will come with the Learning Centre content — once we have 30+ articles, search is meaningful. With 1 article, it's theatre."*

### 2.5 The footer carries one job navigation can't
Master spec §3.3 lists three columns. Add a fourth at the very bottom: a one-line, muted disclaimer: *"This site does not provide medical advice. For clinical concerns, please book a consultation."* Mandated by ethical practice and Bangladeshi medical advertising norms.

---

## 3. Header / Navigation

```
DESKTOP (≥ 1024px)
┌────────────────────────────────────────────────────────────────────────┐
│ Dr. Liza Chowdhury          About  Treatments  Lab  Chambers  Learning │
│ ─────────────                                                          │
│ Infertility & Reproductive                                  EN | বাং   │
│ Medicine specialist                              [Book Consultation →] │
└────────────────────────────────────────────────────────────────────────┘
```

- Logo is **typographic**, not a graphic mark. Two lines: name in Inter Tight 600, role in Inter 400 muted. This is a doctor, not a brand mascot.
- Nav items get a 2px purple underline that animates in on hover (left-to-right, 200ms).
- The active route gets the underline statically (no hover required).
- Language toggle is a pill, not a flag — flags are political; letters are neutral.
- CTA button has the only filled purple background in the header.
- On scroll past 100px, the header gets a 12px backdrop blur and a 1px bottom border. Background becomes `rgba(250, 247, 245, 0.85)`.

```
MOBILE (< 768px)
┌──────────────────────────────────────┐
│ Dr. Liza Chowdhury    [☰]            │
│ Infertility specialist               │
└──────────────────────────────────────┘
```

Hamburger opens a full-screen overlay (not a slide-out drawer). The overlay's first item is the **Book Consultation** CTA, large and full-width. Nav items beneath. Language toggle at the bottom.

---

## 4. The Hero — Patterns by Page Type

Three hero variants. Each tuned to its job.

### 4.1 Home hero — "Cinematic / Emotional"
60/40 split desktop, stacked mobile. Right side: full-bleed IMG_4858 with a soft purple-to-transparent gradient overlay on the left edge so headline text always has contrast. Left side: headline + bilingual subhead + dual CTAs. Subtle 12px upward float of the headline on first paint.

### 4.2 Section hero — "Editorial / Calm"
For `/about`, `/treatments`, `/journey`, `/laboratory`, `/learning`, `/stories`. Single-column, centred, with a small purple eyebrow label above the headline (e.g., *"THE PRACTICE"* or *"OUR LABORATORY"*). One supporting line beneath. No image in the hero — images come in the second section. This keeps the editorial pages feeling like a serious medical journal, not a brochure.

### 4.3 Chamber / Treatment hero — "Practical / Action-Oriented"
For each individual chamber and treatment page. Two-column: title + key facts on the left (treatment time / chamber address), photo or small map on the right. Primary CTA visible immediately. No big quote, no big number. These pages exist to convert.

---

## 5. Buttons — Three Variants, Strict Rules

| Variant | When to use | Style |
|---|---|---|
| **Primary** | The single most important action on the page (always a booking action) | Filled purple, white text, 12px vertical padding, 20px horizontal, 8px border-radius, subtle 1px purple-dark border. Hover: background shifts to purple-dark, no scale. |
| **Secondary** | Supporting action (e.g., "Watch introduction", "See more chambers") | Transparent background, 1.5px purple border, purple text. Hover: background fills to purple-light @ 12% opacity. |
| **Tertiary / Link** | In-text references | Underline-on-hover, no border, no padding. |

**Rule:** Never two primary buttons in the same viewport. If a section needs two CTAs side-by-side, one is primary, one is secondary. Always.

WhatsApp deep-link buttons are an exception: they get a small WhatsApp icon (Lucide `MessageCircle` recoloured to WhatsApp green #25D366 only on the icon, not the button background) before the label.

---

## 6. Cards — The Site's Hardest-Working Component

Cards appear on home (treatments, chambers, stories, learning), `/treatments`, `/chambers`, `/learning`, `/stories`. They must feel **like the same family** while serving different content.

**Universal rules:**
- 16px internal padding on mobile, 24px on desktop
- 12px border-radius (consistent across all cards)
- 1px border in `#E5DDD9` (light border colour from spec)
- Background: pure `#FFFFFF` (slightly cooler than the page background, makes cards "pop")
- Hover: 4px lift, shadow grows from `0 1px 2px rgba(0,0,0,0.03)` to `0 8px 24px rgba(107,45,140,0.08)`
- Active/click: returns to rest state with a 50ms spring

**Per-type modifications:**
- **Treatment cards**: 4px purple top-rule (`border-top: 4px solid #6B2D8C`)
- **Chamber cards**: small overlay tag in the bottom-left of the photo showing the days ("Sun · Tue · Thu")
- **Story cards**: italic serif pull-quote as the dominant element, not a photo
- **Video cards**: 16:9 aspect ratio, play icon centred, duration badge bottom-right
- **Article cards**: 4:3 aspect ratio, reading time + topic tag

---

## 7. Forms — The Contact Page

The contact page form is the only meaningful form in the demo. Even though it posts to `console.log`, **it must feel real**:

```
Name *
[                                          ]

Phone *           Preferred chamber
[              ]  [ UFCL ▾                ]

What can we help with?
[                                          ]
[                                          ]

[          Send my enquiry  →          ]
```

UX rules:
- Labels above fields (not floating, not placeholder-only — accessibility)
- Required asterisks in muted purple, not red
- Phone field uses `inputmode="tel"`; accepts `+880`, `01`, or international format
- Chamber dropdown defaults to "UFCL" with a small "(primary)" muted hint
- Submit button is the page's primary action — full-width on mobile, auto-width on desktop
- On submit (demo): button changes to a checkmark + "Got it — we'd call you within 4 hours" for 2 seconds, then resets. Console-logs the payload.
- Error state if name + phone are missing: inline error 4px below the field, fades in over 150ms

**The form must coexist with WhatsApp.** Above the form: a card-style WhatsApp button. The implicit hierarchy is: WhatsApp is faster, the form is for non-urgent. This matches Madam's stated preference.

---

## 8. Typography — The Tactile Decisions

The master spec §6.2 sets the font families. UX-level refinements:

### 8.1 Fluid type scale
Use `clamp()` for every heading so the demo looks crisp on a 360px Android *and* a 1440px MacBook without media queries:

```css
.display-xl { font-size: clamp(2.5rem, 5vw + 1rem, 4.5rem); }
.h1        { font-size: clamp(1.75rem, 2vw + 1rem, 2.5rem); }
.body      { font-size: clamp(1rem, 0.5vw + 0.875rem, 1.125rem); }
```

### 8.2 Tracking
- English headings: -0.02em (Inter Tight is open by default; tighten it for editorial feel)
- English body: 0
- Bangla headings: 0 (Hind Siliguri shouldn't be tightened — it breaks the conjuncts)
- Bangla body: 0
- All-caps labels (eyebrows, footer column headings): +0.08em

### 8.3 Leading
- English body: 1.65
- Bangla body: 1.85
- Headings: 1.15 (English) / 1.3 (Bangla)

### 8.4 Hanging punctuation for pull quotes
Pull quotes use `hanging-punctuation: first;` so the opening `"` sits outside the text block. Tiny detail. Looks like Vogue.

---

## 9. The Bilingual Toggle — How It Actually Feels

```
   ┌─────────┐
   │ EN | বাং │  ← compact pill, 28px tall
   └─────────┘
```

- Click anywhere on the inactive label to switch.
- Switch is **instant** for UI strings (no fade — fade feels broken because it makes the change look like a bug).
- Switch is **a 200ms fade** for body copy (where Bangla is a different paragraph, not a translation of the same one).
- Persist in `localStorage` under key `drliza.lang`.
- On first visit, detect `navigator.language` — if it starts with `bn`, default to Bangla.

**Edge case the spec didn't catch:** if a user is on the Laboratory page (no Bangla variant in demo), switching to Bangla should not break the page. Behaviour: keep the page in English, show a small toast at the bottom: *"This page's Bangla version is coming soon."* Toast auto-dismisses after 3 seconds.

---

## 10. Imagery & Aspect Ratios

| Use case | Aspect ratio | Why |
|---|---|---|
| Home hero portrait | 3:4 desktop, 1:1 mobile | Tall portrait feels editorial; square works in stacked mobile layouts |
| Chamber card cover | 16:9 | Familiar, web-native, easy to source |
| Story card "photo" | None — use a coloured quote tile | Patient stories shouldn't have stock photos; a quote tile in soft cream + serif is more truthful |
| Video card thumbnail | 16:9 | YouTube standard |
| Article card thumbnail | 4:3 | Feels editorial, distinct from videos |
| Lab b-roll | 16:9 | Source clips are 1280×720 |
| Doctor portrait in About hero | 3:4 | Standard editorial portrait |

Every image: `loading="lazy"` except the home hero, which gets `<link rel="preload">`.

---

## 11. Trust Signals — Where They Live

The master spec §2.3 lists the trust stack. UX-level rule: **every page has at least one trust element above the first scroll, but no page is just a wall of credentials.**

- **Home**: credibility logo strip immediately under the hero
- **About**: timeline visible in second viewport
- **Treatment pages**: the "what makes this practice's approach different" block sits in the top third
- **Laboratory**: the Esco MIRI named in the hero subhead
- **Chambers**: each chamber card carries the title Madam holds at that chamber (Chairman, Professor, etc.)
- **Contact**: a small footer-line beneath the form: *"Major Gen. Prof. Dr. Liza Chowdhury · BMDC Reg. [number]"*
- **Stories**: real-treatment-type and real-year tags on each card

This keeps credibility passive — never pushy.

---

## 12. Empty States, Loading States, Error States

Demo-grade but real.

### Loading (first paint, before hero image)
Warm off-white background, the typographic logo centred at full opacity, a 2px purple horizontal line below that animates left-to-right and back over 1.4s on infinite loop. No spinner. No skeleton screens (skeletons look unfinished — a calm logo looks intentional).

### Empty (e.g., Stories hub with only one placeholder story)
A centred card: *"More stories are being prepared with consenting patients."* + a small purple "Notify me when stories are published" button (which, in demo, opens the contact form).

### Error (video fails to load on laboratory page)
The video block silently falls back to its poster image. No error message. Failed-load logging only goes to console for the developer.

### Form error (contact)
Inline beneath the field. Tone: *"We'll need your name and phone to call you back."* Not: *"This field is required."*

---

## 13. Accessibility — Not Optional, Even in Demo

| Target | How |
|---|---|
| WCAG AA contrast | Body text on warm-white: contrast ratio 11.8:1 ✅. Purple buttons on white: 5.9:1 ✅. Muted text: 4.7:1 (just passes — be careful). |
| Keyboard navigation | Every interactive element reachable by tab; focus ring is a 2px purple outline with 4px offset. No `outline: none`. |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables Lenis, disables all scroll-triggered reveals, sets all transitions to 0.01s |
| Screen reader | Language toggle has `aria-pressed` states; hamburger has `aria-expanded`; videos have descriptive `aria-label`s explaining what's in the clip |
| Lang attribute | `<html lang="en">` swaps to `<html lang="bn">` on toggle |
| Skip link | "Skip to main content" link first in tab order, hidden until focused |
| Tap target size | Mobile buttons ≥ 44×44px |
| Form labels | Always above field, always associated via `for`/`id` |

---

## 14. Conversion Microcopy (Bangladeshi Context Tuned)

Words matter more than animations in the end. A few specific phrasings worth pinning:

| Where | Don't say | Do say |
|---|---|---|
| Primary CTA | "Get Started" | "Book a Consultation · পরামর্শ নিন" |
| WhatsApp button | "Chat with us" | "WhatsApp Dr. Liza's office" |
| Chamber CTA | "Click here" | "Book at this chamber" |
| Treatment FAQ | "Frequently Asked Questions" | "Honest answers to common questions" |
| Form submit | "Submit" | "Send my enquiry" |
| Form success | "Thank you" | "Got it — we'd call you within 4 hours" |
| Lab page hero | "State-of-the-art laboratory" | "Where embryos are protected like patients" |
| Footer disclaimer | "This is not medical advice" | "This site does not provide medical advice — for clinical concerns please book a consultation" |
| Cost section | "Affordable pricing" | "Honest cost ranges. The exact figure depends on your case." |
| Stories section | "Testimonials" | "Patient stories" |

**Rule that overrides everything else:** Avoid the words *trusted, leading, compassionate, world-class, state-of-the-art, cutting-edge.* The master spec §11 already bans these. Bangladeshi medical sites lean on these because everyone does. The demo's editorial register is the opposite.

---

## 15. Five UX Micro-Moments to Polish

These are the small interactions Madam will notice without being able to name:

1. **The hero subhead's first paint.** Bangla subhead fades in 80ms *after* the English headline lands. Tiny stagger creates rhythm.
2. **Treatment-card hover.** 4px lift + a 1px purple-light shadow halo. Not just a shadow — a halo. Feels like the card warmed up.
3. **Language toggle click.** The active label's background slides between EN and বাং with an easing curve, not a snap. 250ms.
4. **The "Book Consultation" mobile sticky button.** When the page is at the contact section, the sticky button morphs into the section's primary action button. Choreographed disappearance.
5. **Pressing back from a treatment page to /treatments.** Page transition is left-to-right (not bottom-up). Spatial memory: the user is going "back" not "down".

---

## 16. What to Leave Out (Even Though Madam Might Ask)

Said with respect: a confident demo says no to a few things.

- **Online payment** — not in demo, not in production phase 1 (master spec §2.6 confirms).
- **Patient portal / login** — out of scope for v1; introduces consent + security complexity.
- **Live chat with a human agent** — WhatsApp does this job better in Bangladesh context.
- **A blog with comments** — comments require moderation, which Madam's practice can't sustainably staff.
- **Animated illustrations of medical procedures** — risk of inaccuracy and cultural insensitivity; real photography only.
- **Embedded social media feeds** — Instagram and Facebook embeds are slow, ugly, and out of brand control.
- **Multi-language beyond EN + BN** — there's no Hindi-speaking patient demographic large enough to justify the maintenance burden.
- **A countdown to "next available appointment"** — implies the doctor's schedule is on display. She isn't a salon.

Each of these has a short defensible answer ready, in case asked in the walkthrough.

---

## 17. A 30-Second UX Quality Test

After every page is built, run this mental test:

1. Open the page on a 360px-wide phone simulation
2. Wait for the page to load
3. Within 5 seconds, can you answer: *who is this site for, what does she do, how do I contact her?*
4. Within 10 seconds, can you start a WhatsApp message to her office?
5. Does the page feel like the same hand made the rest of the site?

If yes to all five: ship. If no to any: rework that page until yes.

---

**End of UI/UX suggestions. Built per [04_DEMO_DEV_DOC.md](04_DEMO_DEV_DOC.md). Critiqued in [02_PLAN_REVIEW.md](02_PLAN_REVIEW.md).**
