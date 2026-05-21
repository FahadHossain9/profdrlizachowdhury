# Plan Review — A Cold Read of `01_MODERN_PLAN.md`
### Written deliberately as a skeptic, not a hype-man

> **Read alongside:** [01_MODERN_PLAN.md](01_MODERN_PLAN.md). This document does not propose changes; it judges the plan honestly so you can defend it (or revise it) before Madam sees the demo.

---

## 1. What This Review Is For

The plan in `01_MODERN_PLAN.md` is ambitious. Ambitious is good for impressing Madam — *if it lands*. If it doesn't, ambition becomes embarrassment. This document forces the plan through three filters:

1. **Will it actually get built in 5 days?**
2. **Will Madam read it as "polished and confident" — or as "trying too hard"?**
3. **Where does it conflict, even subtly, with the master spec ([DrLizaChowdhury_Demo_Production_Spec.md](DrLizaChowdhury_Demo_Production_Spec.md)) or with Madam's stated preferences?**

Marks given: ✅ Strong · ⚠️ Watch · ❌ Risk to fix.

---

## 2. The Verdict Up Front

**Overall: 8.5 / 10.** The plan is strategically sound, visually distinctive, and aligned with what the asset analysis actually allows. It will, with high probability, deliver an "instantly confirmed" demo. The risks are not strategic — they are tactical, and three of them can swallow the timeline if not handled deliberately.

The three risks worth losing sleep over:
1. **The cold-open hero is brave but reversible-by-Madam.** If she reads "Bangladesh's first government fertility centre was founded by a woman" as feminist-coded rather than achievement-coded, the entire opening sequence has to be redesigned mid-walkthrough. Mitigate before the meeting.
2. **5 days is tight for the motion polish the plan promises.** Lenis + Framer Motion + 8 lab videos + the bento grid + the Dhaka SVG map is plausible but not comfortable. Cut something, or budget 7 days.
3. **HEIC conversion + 8 video transcodes is a Day-1 task disguised as a Day-1 footnote.** If this slips into Day 2, every subsequent day slips.

---

## 3. What the Plan Gets Right

### ✅ The 90-second cinematic spine (§2)
Pure conviction. The shot-by-shot structure means Madam *experiences a narrative*, not a website. The cold open — a single line of text holding for 2.5 seconds before any image — is the kind of move that signals taste before anything else loads. This is the demo's strongest design decision.

### ✅ Photo art-direction (§4) is honest and exact
Mapping each of the 14 images and 8 videos from [Dr_Liza_Media_Asset_Analysis.xlsx](Dr_Liza_Media_Asset_Analysis.xlsx) to a specific slot — including explicit "do not use" — means the demo will not have any embarrassing stock photography or awkward duplicates. The labelled placeholders for missing shots (§4.4) are the right move: gaps become design features, not failures.

### ✅ Motion tokens (§5) prevent the most common amateur mistake
Standardising on one easing curve (`easeOutQuint`) and five duration tokens is exactly what separates "feels designed" from "feels like a junior used every animation library option". The plan is right to make this a single source of truth.

### ✅ The five "hero moments" (§9)
Explicitly naming five places to polish and letting everything else be 80% is the only sane way to ship in 5 days. Most demos die from spreading polish evenly. This plan refuses to.

### ✅ Demo scope tightened beyond the master spec (§8)
The master spec §8.6 already cuts scope. This plan cuts further (e.g., language toggle only on 4 pages, not 11). That's pragmatic — and recoverable in production.

### ✅ Backend pushed to "later" explicitly (§13)
Calling out that the backend is *deliberately* not built now — and is not a demo limitation but a phase decision — prevents the most common confusion in a stakeholder walkthrough: "why doesn't the form work?"

### ✅ Performance targets (§10)
LCP < 2.0s, page weight < 800KB — these are achievable given the asset choices. Most "modern" plans I've seen forget that Lenis + Framer + autoplay video can balloon a page. This plan front-loads the constraint.

---

## 4. What to Watch

### ⚠️ The cold-open headline carries real political risk
> *"Bangladesh's first government fertility centre was founded by a woman."*

This is exceptional copy. It is also a sentence that could read three different ways depending on Madam's mood and the room:
- **A** — a quiet historical fact (intended reading)
- **B** — a feminist statement (which Madam may or may not want to lead with publicly)
- **C** — uncomfortably implying the gender is the headline, not the achievement

**Recommendation:** Prepare two alternates **in the demo build**, switchable with a query param (`?headline=alt1`):
- *"The doctor who founded Bangladesh's first government fertility centre."* (the master spec's original — safe)
- *"Pioneer of fertility medicine in Bangladesh. Now seeing patients in Uttara."* (warm, achievement-coded, gender-neutral)

If Madam reacts well to the bold one in the meeting, ship it. If not, swap in 5 seconds, no rebuild.

### ⚠️ "Buttery-smooth" is a high promise on mid-range Android
The plan claims smooth scroll on mobile but also disables Lenis on touch devices. That's the right call technically, but it means **on the device Madam is most likely to view the demo on (her own phone, which is probably an iPhone or mid-range Android), the smooth-scroll showcase is invisible**. The plan should be clear that the cinematic feel on mobile comes from transitions and reveals, not scroll inertia.

### ⚠️ The IVF treatment-page line-drawing animation (§9, hero moment 4)
SVG line-drawing on scroll is delightful when it works and broken when it doesn't. It depends on `getBoundingClientRect` synced with scroll position — Lenis makes this slightly trickier. Budget 4 extra hours, or downgrade this hero moment to a simpler "progressive stagger reveal of timeline steps". Either is fine.

### ⚠️ The Dhaka SVG map (§9, hero moment 3 + §2 shot 7)
"Stylised SVG map of Dhaka with five pins" sounds like 30 minutes and turns into a day. If a designer-built SVG is not pre-sourced, use a clean Mapbox light-style tile with custom purple pins instead. That's still on-brand, takes 2 hours, and won't blow the timeline.

### ⚠️ The chatbot bubble may not survive the walkthrough
The plan keeps the chatbot but reduces it to "3-option panel → WhatsApp deep link". That's fine. **But Madam saw the chatbot pitched as a meaningful conversational tool in earlier meetings.** A 3-option panel may look like a downgrade. Either:
- Make the 3 options look polished and confident (so they read as *intentional simplicity*, not lack of effort), or
- Cut the chatbot from the demo entirely and explicitly tell Madam "real chatbot comes in production — placeholder removed to avoid misleading you on the demo".

The second option is more honest.

### ⚠️ Bilingual scope is uneven
Language toggle works on home, about, IVF, contact — but the demo has 7 fully-built pages and 11+ stubs. If Madam clicks the toggle on the lab page or the chambers page and nothing happens, it breaks trust. **Either disable the toggle on those pages with a small "Coming in production" hint on hover, or extend the toggle to at least the lab page (which is short and high-impact).**

### ⚠️ "Done in 5 days" assumes no review cycles
The plan assumes solo, uninterrupted work. In reality, Factorize will want to look, Nuvista may have asset requests, and Madam herself may want a preview. **Budget a 6th day for the inevitable mid-build review.**

---

## 5. Where the Plan Quietly Conflicts with the Spec or Madam's Preferences

### ❌ Master spec §6.6: "No parallax"
The plan introduces "subtle parallax-on-scroll: the heading floats up 12px slower than the body text" in §2 shot 5. That's parallax. Tiny, tasteful, but parallax. **Either:**
- Remove it (safest), or
- Justify it in the walkthrough as "scroll-reveal, not parallax — no continuous scroll-tied transform"

The master spec was deliberate about this. Don't break it without flagging.

### ❌ Master spec §6.4: "No more than one baby image per page"
Not directly violated — the plan uses no baby images. But the demo will have zero baby imagery, which on a fertility website might read as "missing warmth". The master spec said *no more than one*, not *zero*. **Consider one tasteful baby-hand or silhouette image on the patient stories page**, sourced respectfully.

### ❌ Master spec §6.6: "No autoplay videos (user-initiated only)"
The plan autoplays lab b-roll on the laboratory page (muted, in-viewport-only). This is technically in conflict with the spec's stated rule. **The conflict is defensible** — muted, in-viewport, decorative B-roll is industry-standard for medical/clinical sites — but it should be flagged to Madam during the walkthrough, not silently overridden.

### ⚠️ Master spec §2.6 says chatbot is "Bangla-first with English toggle"
The plan's reduced chatbot panel doesn't have a Bangla/English toggle in the visible buttons. Add it: the 3 options should appear in Bangla with a small `EN` switch.

### ⚠️ Bento layout (§6) was not in the master spec
The master spec uses regular grids. Bento is an addition. It's a defensible modernisation, but Madam — who has not seen a bento before in her demo previews — may need an in-meeting one-liner: *"This card layout varies the sizes deliberately so the most important treatments (IVF, ICSI) draw the eye first. We can normalise it to equal sizes if you prefer the cleaner look."*

---

## 6. What's Missing from the Plan

These should be added before build kickoff:

1. **A brand voice sample.** The plan says "Inter Tight + Bangla + serif" but doesn't pin down the *voice* of the body copy. Is it warm-clinical (Mayo Clinic), warm-personal (a private GP's site), or warm-editorial (NYT health column)? **Add three sample paragraphs in the plan so the implementer doesn't drift.** The master spec quality bar §11 ("free of clinic-marketing clichés") helps but is a negative spec, not a positive one.

2. **A loading state design.** The first 800ms before the IMG_4858 hero loads is a perception-killer. Plan needs a one-paragraph spec for the loading state: warm-off-white background, small purple progress accent, no spinner.

3. **Error / empty states.** What happens when a video fails to load? When the form post fails? The plan should specify minimum-viable fallbacks even in demo.

4. **A printable one-pager for Madam.** Master spec §10 Phase 1 mentions this; this plan doesn't reference what's on it. **Recommendation:** a single A4 sheet with the URL, the five hero moments described in plain Bangla, and the three "what we need from you" asks. Handed to her at the start of the walkthrough.

5. **A backup plan if Wi-Fi fails in the meeting room.** Run the demo from a local `npm run preview` build with all assets cached. Mention this in §12 Day 5.

---

## 7. The "Will Madam Actually Approve It" Forecast

Probability she approves the demo and asks for production to begin: **~78%**.

What pushes that number up:
- The five UFCL portraits are already strong — she's seeing herself, in her clinic, looking warm and authoritative. That alone closes a lot of the structural doubt.
- The cinematic spine (§2) feels expensive, which signals seriousness to a doctor of her stature.
- The labelled placeholders (§4.4) tell her exactly what to provide next — which is what a confirmation-meeting wants to leave her with.

What pulls that number down:
- The cold-open headline risk (§4 of this review).
- The chatbot being weaker than previously implied.
- The non-UFCL chambers being stubs (she may see this as her other practices being "deprioritised").
- The Bangla content being thinner than the English content across stub pages.

**To push the number to ~90%:** address the four ❌ items in §5 of this review, prepare the alternate headline (§4 ⚠️ first item), and bring the printed one-pager (§6 item 4).

---

## 8. The One Line of Advice

> Build the plan as written, but bring the alternate headline, kill the parallax (§5 ❌ first item), and prepare to honestly say "we removed the chatbot from the demo because a real one is a production conversation" — that level of restraint will earn more trust than a flashy half-built chatbot ever could.

---

## 9. Sign-Off Checklist Before Build Starts

- [ ] Alternate headline approved and wired to `?headline=alt1` / `?headline=alt2`
- [ ] Parallax in §2 shot 5 either removed or downgraded to scroll-reveal
- [ ] Decision made on chatbot: polished 3-option vs. removed entirely
- [ ] Language toggle behaviour on stub pages defined (hover hint or extend coverage)
- [ ] One baby/silhouette image sourced for the patient story page (if scope allows)
- [ ] HEIC + video pipeline run end-to-end on Day 1 and outputs verified before any page is built
- [ ] Brand voice sample paragraphs written and pinned in the plan
- [ ] Loading state design specified
- [ ] Printable Madam one-pager drafted
- [ ] Offline meeting-room demo verified

When all 10 are checked, build. Until then, every day of building is on sand.

---

**End of review.**
