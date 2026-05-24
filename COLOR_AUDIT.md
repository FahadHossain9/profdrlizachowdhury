# Color audit & cleanup plan

**Generated**: 2026-05-24
**Goal**: Eliminate the stale gold/warm-accent dominance and stop hard-coding hex values, so the brand reads as cohesive navy. Future palette swaps should require touching only `tailwind.config.ts` + `index.css`.

---

## 1. Current tokens (tailwind.config.ts)

| Token | Value | Status |
|---|---|---|
| `brand.purple` | `#192B72` | ✅ Primary navy |
| `brand.purpleLite` | `#354DAE` | ✅ Gradient end |
| `brand.purpleDark` | `#0E1A4D` | ✅ Deep navy |
| `brand.purpleLight` | `#8E9CCF` | ✅ Lighter UI bits |
| `brand.purpleSoft` | `#E8ECF6` | ✅ Soft tint |
| `brand.purpleDeep` | `#0A0E26` | ✅ Darkest |
| `accent.gold` | `#B8956A` | ⚠️ Overused — competes with navy |
| `accent.blush` | `#C49585` | ⚠️ Old warmth, mostly unused |
| `accent.terracotta` | `#C97B5F` | ⚠️ Used only in topic chip |
| `accent.sage` | `#8FA48B` | ✅ Keep — semantic "success/safe" |
| `bg.warm/cream/card/blush` | white-ish | ✅ Surface tokens |
| `ink.body/muted/deep` | text greys | ✅ Type tokens |
| `line` | `#E8DFD9` | ✅ Border token |

**Verdict**: `accent.gold` is the main offender. It's used as an eyebrow color, a section accent, a divider, and a metric tint — visible in 9 components. `accent.blush` and `accent.terracotta` are only sprinkled in topic chips and one orb.

---

## 2. Gold / warm-accent sightings (the things competing with navy)

| File | Line | Usage | Action |
|---|---|---|---|
| [CredentialStrip.tsx](src/components/content/CredentialStrip.tsx) | 28, 31, 37 | Eyebrow + hairline rule "CREDENTIALS & TRAINING" | Replace with `brand.purple` |
| [HomeHero.tsx](src/components/content/HomeHero.tsx) | 23 | `Sparkles` icon in eyebrow pill | Switch to `brand.purple` |
| [HomeHero.tsx](src/components/content/HomeHero.tsx) | 100 | "30+ YEARS" credential chip eyebrow | Switch to `brand.purple` |
| [TrustPillars.tsx](src/components/content/TrustPillars.tsx) | 10, 31 | `accentColors[0]`, "MAJOR GEN." chip eyebrow | Switch to `brand.purple` |
| [TreatmentBento.tsx](src/components/content/TreatmentBento.tsx) | 158 | "PER CYCLE" small-cap label | Switch to `brand.purple` |
| [JourneyPreview.tsx](src/components/content/JourneyPreview.tsx) | 40 | Stage duration label | Switch to `brand.purple/70` |
| [TreatmentDetail.tsx](src/pages/TreatmentDetail.tsx) | 191, 194, 259, 262, 359 | Differentiator orb + badge, success-rate icon tile + eyebrow, "explore other" sparkles | Replace gold accents with brand purple |
| [StoryDetail.tsx](src/pages/StoryDetail.tsx) | 33 | Pullquote left border | Switch to `brand.purple` |
| [LearningPreview.tsx](src/components/content/LearningPreview.tsx) | 14 | `Lifestyle` topic chip = gold | Switch to neutral muted purple |
| [ArticleDetail.tsx](src/pages/ArticleDetail.tsx) | 16 | Same topic mapping | Same fix |
| [admin/Dashboard.tsx](src/pages/admin/Dashboard.tsx) | 26 | Videos tile tint = gold gradient | Switch to brand-purple gradient |
| [admin/Treatments.tsx](src/pages/admin/Treatments.tsx) | 63 | "Primary" treatment badge = gold | Use brand-purple badge |
| [admin/Appointments.tsx](src/pages/admin/Appointments.tsx) | 23 | `contacted` status = gold | Keep gold here — it's a *semantic warning* (intermediate state), not branding |
| [AuroraBackdrop.tsx](src/components/layout/AuroraBackdrop.tsx) | 60 | Gold orb | Drop the orb entirely or recolor to navy/light |
| [LabTeaser metrics](src/components/content/LabTeaser.tsx) | — | All `text-bg-warm/x` — fine | No change |

### Blush / terracotta
- `LearningPreview` + `ArticleDetail` topic maps use blush/terracotta for "Male Factor". Recolor to a muted navy variant.
- `Dashboard` Stories tile uses blush gradient. Recolor.
- `Appointments` status `contacted = accent-gold`, `scheduled = accent-sage` — semantic uses, keep.
- `AuroraBackdrop` orb #2 uses blush — drop or recolor.

### Sage (status-only)
Keep where it represents *safety/success*: hero safety pill, "included" cost lines, scheduled status, lab status dot. **Don't keep it as decorative**.

---

## 3. Hardcoded hex colors in components

| File | Hex(es) | Reason | Action |
|---|---|---|---|
| `index.css` | `#192B72`, `#354DAE`, `#0E1A4D`, etc. | Defines `.btn-primary`, `.bg-purple-gradient` etc. | ✅ Acceptable — single source. But consider replacing with `theme()` calls so token edits propagate. (Lower priority — already centralized in one file.) |
| `Breadcrumb.tsx:40` | `#0E1A4D`, `#192B72` (inline style) | Filled pill gradient | Move to `bg-purple-gradient-dark` CSS class |
| `AuroraBackdrop.tsx:15-60` | warm orb hexes, gradient base | Aurora layer | Switch warm orbs out for navy/cool tones (drop gold + blush orbs) |
| `ChamberMap.tsx:37-48` | `#8E9CCF`, `#192B72` | Stylized SVG map | ✅ Acceptable — matches brand purpleLight/purple |
| `Contact.tsx:70, 211, 214` | `#25D366`, `#1FAB54` (WhatsApp green), `#B5394A` (error), `#2D7A4C` (success) | Brand-specific or semantic | Keep WhatsApp green (brand). Move error/success to semantic tokens. |
| `FinalCTA.tsx:33` | `#25D366` | WhatsApp icon | Keep |
| `SiteFooter.tsx:104` | `#25D366` | WhatsApp icon | Keep |
| `Appointments.tsx:265` | `#25D366` | WhatsApp | Keep |
| `AdminLayout.tsx:31` | `bg-[#F5F3F0]` | Admin shell background | Replace with `bg-bg-cream` or a new `bg-admin` token |

---

## 4. Admin pages — "previous vibe" diagnosis

The user said admin still feels old. Specific contributors:

1. **AdminLayout background** uses raw `#F5F3F0` (warm cream), not the cool whites of the public site. Switch to `bg-bg-warm` (`#FCFBFC` near-white) or add a dedicated `bg-admin` token.
2. **Dashboard tile tints** lean on `accent-gold` (Videos), `accent-blush` (Stories), `accent-sage` x2 (Appointments + Treatments). Too warm against a cool navy brand. Use purple-shade variations instead.
3. **Treatment "Primary" badge** uses gold/15. Should match the public-site primary badge style (brand purple).
4. **Section accent borders / pills** mostly use `brand.purpleSoft` (correct), but some still drift gold.

---

## 5. Plan (in order of impact)

### Phase A — kill the gold dominance (public site)
1. **Eyebrows everywhere**: any `text-accent-gold` used as eyebrow text → `text-brand-purple`.
2. **Sparkles + hairlines**: any decorative gold dot/icon/divider → `brand.purple` (`/60` or `/40` for muted).
3. **TreatmentDetail differentiator badge**: gold circle behind icon → drop solid gold, use translucent `brand.purpleLight` so it still pops on the navy card.
4. **Success-rate eyebrow icon tile + label** ("SUCCESS RATES"): switch from gold to `accent-sage` (semantic) or `brand.purple`.
5. **AuroraBackdrop**: remove the gold + blush orbs entirely. Keep purpleLight + sage at low opacity. Net effect: backdrop reads cooler.
6. **Topic colour map** in LearningPreview + ArticleDetail: drop the gold + terracotta variants, use a 3-tier purple scale.
7. **StoryDetail left border** of pullquote: gold → `brand.purple`.

### Phase B — admin pages
8. **AdminLayout background**: `bg-[#F5F3F0]` → `bg-bg-warm` (or `bg-brand-purpleSoft/30`).
9. **Dashboard tile tints**: replace gold/blush/sage gradients with brand-purple variations (intensity per role). Appointments tile can stay sage (semantic). Stories tile gets purpleSoft. Videos tile gets purpleLight.
10. **Treatments "Primary" badge** in admin table: gold → `bg-brand-purpleSoft text-brand-purpleDark`.

### Phase C — clean up hardcoded hex
11. Move the inline `#0E1A4D → #192B72` breadcrumb gradient into a CSS class `.bg-purple-gradient-dark`.
12. Add a semantic-success / semantic-error CSS variable so Contact form can drop its raw `#2D7A4C`/`#B5394A`.

### Phase D — keep & justify
- `accent.sage` for genuinely *positive* state markers (safety pill, scheduled, included in cost) — **keep**.
- WhatsApp `#25D366` — brand colour for an external service, **keep**.
- Hexes inside `index.css` defining the gradient stops — **keep** (single source of truth).

---

## 6. After the cleanup, what changes for "future palette swaps"?

Every visible decorative color flows through one of:
- `brand.purple*` tokens in `tailwind.config.ts`
- the four gradient CSS classes in `index.css` (`.bg-purple-gradient`, `.bg-purple-gradient-vertical`, `.bg-purple-gradient-soft`, `.bg-purple-gradient-dark`)
- `accent.sage` for semantic success
- `accent.gold` retained ONLY for the `contacted` admin status (semantic warning)

Swap any of those two surfaces — config tokens + gradient classes — and the whole site rebrands without touching components.
