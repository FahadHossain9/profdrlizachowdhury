# Dr. Liza Chowdhury — Website Demo & Production Spec
### Master planning document · Demo with Vite → Production with Claude Code

> Purpose: A single, complete document that lets you (a) build a structural demo with Vite immediately, (b) walk Madam through that demo for structural confirmation, (c) hand the same document to Claude Code as the brief for the production build. Read end to end before starting.

---

## Document Map

1. [The Demo's Job](#1-the-demos-job)
2. [Strategic Foundation](#2-strategic-foundation--non-negotiables)
3. [Site Architecture](#3-site-architecture)
4. [Page-by-Page Specifications](#4-page-by-page-specifications)
5. [Content Inventory — What Madam Needs to Prepare](#5-content-inventory--what-madam-needs-to-prepare)
6. [Visual System](#6-visual-system)
7. [Component Library](#7-component-library)
8. [Demo Build Plan with Vite](#8-demo-build-plan-with-vite)
9. [Walkthrough Script for the Madam Meeting](#9-walkthrough-script-for-the-madam-meeting)
10. [Demo → Production Roadmap](#10-demo--production-roadmap)
11. [Quality Bar Checklist](#11-quality-bar-checklist)
12. [Open Questions & Risks](#12-open-questions--risks)
13. [Appendix A — Verified Credential Bank](#appendix-a--verified-credential-bank)
14. [Appendix B — Full Chamber Directory](#appendix-b--full-chamber-directory)

---

## 1. The Demo's Job

The demo is a *structural confirmation tool*, not a final visual artifact. Its only purposes are:

1. **Show Madam the skeleton** of the website so she can see how her practice is presented and what content lives where
2. **Surface gaps** in what content/material she needs to provide (photography, videos, written bios, publications, etc.)
3. **Validate the navigation and information architecture** before production resources are committed
4. **Establish the visual direction** at low fidelity — enough to convey feel, not so polished it looks like a final

Things the demo deliberately does *not* try to be:

- A pixel-perfect final design
- Fully animated or interactive
- Production-quality copy (Bangla or English)
- Fully populated with real patient stories or real photography
- SEO-optimized
- Performance-tuned

**Madam should leave the demo review meeting clear on three things:**
- *"This is the shape of my website."*
- *"This is what I need to provide for it to be real."*
- *"These are the decisions I still need to make."*

That's the entire success criterion.

---

## 2. Strategic Foundation — Non-Negotiables

Before any structure or visual choices, these are the strategic foundations from all prior research and the Factorize/Madam meetings. Every decision in this document derives from them:

### 2.1 The Brand is Dr. Liza Chowdhury Herself
The website is a personal physician practice site, not a clinic site. UFCL is her primary clinical home; Hitech Multicare, Ibn Sina Diagnostic Centre Uttara, Ibn Sina Medical College Hospital Kallyanpur, and Lubana General Hospital are her additional chambers. The brand architecture is: *Dr. Liza Chowdhury → her chambers.*

### 2.2 The Practice is IVF & Fertility Only
Per Madam's direct words in the meeting (*"আমি রোগী দেখতে আর চাই না। শুধু শুধু ফার্টিলিটি রোগী"*), the website narrows to IVF and fertility care. General obstetrics and routine gynaecology are *not* promoted. General patients are gently redirected to her referral network or her students.

### 2.3 The Trust Stack
In order of importance:
1. Major General (Retd.), Bangladesh Army Medical Corps
2. Founder of CMH Fertility Centre — the first government-set-up fertility centre in Bangladesh
3. India + Germany Fellowship in Infertility & Reproductive Medicine
4. ~13 years Founder Head of Department, Obs & Gynae, Armed Forces Medical College
5. 36 peer-reviewed publications
6. Cambridge University Press academic reviewer
7. Member: OGSB, BCPS, SLSB, BMS, IAGE, IFS, ESHRE
8. Active examiner: MBBS, DGO, MCPS, FCPS
9. UFCL laboratory: Esco MIRI Multiroom Incubator + ISO Class 3 Multi-Zone ART Workstation

### 2.4 The Bilingual Strategy
- **English-primary** for credentials, About, Publications, Lab specs
- **Bangla-primary** for the 20 videos, Learning Centre articles, Patient Stories, chatbot interface
- **Bilingual side-by-side** for homepage hero, booking flow, contact, treatment names

### 2.5 Visual Anchors
- Purple primary (matches existing brand and flyer)
- White / warm off-white background (decided in meeting)
- The flyer photo of Madam is the established portrait pattern — new photography should match this energy
- No stock photography. No baby-photo overload. No generic "medical" iconography.

### 2.6 Conversion Architecture (decided in meeting)
- Chatbot bottom-right, Bangla-first with English toggle
- WhatsApp handoff is the primary conversion path
- QR codes at each chamber pointing to chamber-specific landing pages
- Booking via hotline or WhatsApp; no online payment in v1

### 2.7 Ethical Framing
- ART services for married couples using own gametes only
- No donor eggs, no donor sperm, no surrogacy — aligned with BMDC ethics and Bangladeshi Islamic bioethics
- This is stated dignifiedly as her clinical principle, not as a constraint

---

## 3. Site Architecture

### 3.1 Sitemap

```
/                                Home

/about                           About Dr. Liza
├── /about/journey               The CMH Founding Story
├── /about/credentials           Credentials & Training
├── /about/publications          Publications & Research
└── /about/teaching              Teaching Legacy

/treatments                      Treatments overview
├── /treatments/ivf              IVF
├── /treatments/icsi             ICSI
├── /treatments/iui              IUI
├── /treatments/pesa-tesa        Male Factor (PESA/TESA)
├── /treatments/recurrent-loss   Recurrent Pregnancy Loss
├── /treatments/laparoscopy      Fertility-Preserving Laparoscopy
└── /treatments/hysteroscopy     Hysteroscopy for Fertility

/journey                         Your Journey (patient roadmap)

/laboratory                      The UFCL Laboratory

/chambers                        Chambers & Booking (hub)
├── /chambers/ufcl               Uttara Fertility Centre Limited
├── /chambers/hitech             Hitech Multicare Hospital
├── /chambers/ibn-sina-uttara    Ibn Sina Diagnostic Centre Uttara
├── /chambers/ibn-sina-kallyanpur Ibn Sina Medical College Hospital
└── /chambers/lubana             Lubana General Hospital

/learning                        Learning Centre (hub)
├── /learning/videos             Video library
├── /learning/articles           Written articles
└── /learning/glossary           Bangla + English glossary

/stories                         Patient Stories

/contact                         Contact / Book a Consultation

/ethics                          Practice Ethics (linked from footer)
/privacy                         Privacy & Confidentiality
```

### 3.2 Primary Navigation
Header (left to right):
- Logo (Dr. Liza Chowdhury)
- About
- Treatments
- The Lab
- Chambers
- Learning
- Stories
- **Book Consultation** (button, accented)

Mobile: hamburger; the Book Consultation button persists at the bottom of the screen on scroll.

### 3.3 Footer
Three columns:
- **Contact** — primary hotline, WhatsApp, email
- **Chambers** — five chambers listed with quick links
- **About** — credentials summary, publications link, ethics statement link, privacy link

Bottom strip: copyright, BMDC registration number, "This site does not provide medical advice — for clinical concerns please book a consultation."

### 3.4 URL Structure Rationale
- No date-based URLs (medical content shouldn't look dated)
- All lowercase, hyphen-separated
- Treatment URLs use the clinical name patients search for (not branded names)
- Chamber URLs use the chamber's short name (so /chambers/hitech, not /chambers/hitech-multicare-hospital-limited)
- Bangla content lives at the same URLs with language switching client-side (not /bn/ subpath) — preserves SEO authority

### 3.5 Language Strategy in URLs
A language toggle in the header switches the UI strings and triggers the Bangla content variant for that page. URLs remain English-slugged for SEO, but page content renders in either language based on the toggle state. This is simpler than a dual-URL approach and avoids splitting SEO authority.

---

## 4. Page-by-Page Specifications

For each page below: **purpose, sections, content blocks, what Madam needs to provide**, and notes for the demo.

### 4.1 Home (`/`)

**Purpose:** In 10 seconds, communicate who Dr. Liza is, why patients trust her, and how to start a consultation.

**Sections (in order):**
1. **Hero**
   - Background: soft purple gradient / warm off-white
   - Foreground left: Headline + sub + CTA
   - Foreground right: Madam's portrait (the existing flyer photo for the demo; production needs a dedicated shoot)
   - Headline: *"The doctor who founded Bangladesh's first government fertility centre."*
   - Subhead: *Major Gen. Prof. Dr. Liza Chowdhury (Retd.) — Infertility & Reproductive Medicine specialist, now seeing patients in Uttara.*
   - Bangla subhead beneath: *স্বপ্নের সন্তানের সাথে হোক আজীবনের আনন্দ*
   - Primary CTA: "Book a Consultation"
   - Secondary CTA: "Watch Dr. Liza's introduction" (links to the 90-second welcome video)

2. **Credibility Strip**
   - Six logos / icons in a single row: AFMC, CMH Dhaka, Ibn Sina Medical College, ESHRE, BCPS, OGSB
   - Single-line caption: *"Trained in India & Germany. 30+ years in reproductive medicine."*

3. **What I Treat (compact)**
   - 6 treatment cards in a grid: IVF, ICSI, IUI, Male Factor, Recurrent Pregnancy Loss, Fertility Laparoscopy
   - Each card: icon, name, one-line description, link

4. **Why Patients Choose This Practice**
   - Three-column "trust pillars":
     - **Pioneer Credentials** — founder of CMH Fertility Centre, the first government IVF programme in Bangladesh
     - **International Training** — Fellowship & Diploma in Infertility and Reproductive Medicine from accredited centres in India and Germany
     - **Advanced Laboratory** — Esco MIRI Multiroom Incubator and ISO Class 3 ART Workstation at UFCL

5. **The Patient Journey (preview)**
   - Horizontal scrolling card row, 6 cards: First Consultation → Diagnostics → Treatment Plan → During the Cycle → Two-Week Wait → After the Result
   - CTA: "See the full journey"

6. **Learning Centre (preview)**
   - 3 video thumbnails from the 20-video library
   - One featured article
   - CTA: "Visit the Learning Centre"

7. **Chambers (preview)**
   - Map of Dhaka with 5 chamber pins
   - List of chambers with day/time at-a-glance
   - CTA: "See all chambers and book"

8. **Patient Stories (preview)**
   - 2 anonymized story cards
   - CTA: "Read more stories"

9. **Final CTA Strip**
   - Single sentence: *"When you're ready to talk, I'm here."*
   - Three buttons: Call, WhatsApp, Book Online

10. **Footer** (as specified in §3.3)

**What Madam needs to provide:**
- Approved headline portrait (production shoot)
- Approval for the headline + subhead language
- Confirmation of which six credibility logos to display
- The 90-second welcome video (one of the 20)

**Demo note:** Use the existing flyer photo. All other photography is placeholder. Use a single representative video thumbnail.

---

### 4.2 About Dr. Liza (`/about`)

**Purpose:** Biographical narrative that establishes Madam as a pioneer, scholar, and clinician. Reads like a profile in a serious medical magazine.

**Sections:**
1. **Hero** — full-width portrait + name + full credentials line
2. **Opening narrative** — 250–350 words, written in third person, opens with the CMH founding story, traces her career arc through AFMC, into India/Germany training, and current private practice
3. **Career milestones timeline** — vertical timeline with 8–12 key milestones:
   - MBBS, Mymensingh Medical College
   - Joining the Bangladesh Army Medical Corps
   - DGO completion
   - MCPS, FCPS in Obs & Gynae
   - Fellowship — India
   - Fellowship & Diploma — Germany
   - Founder Head, Dept. of Obs & Gynae, AFMC
   - Founder of Fertility Centre, CMH Dhaka
   - Promotion to Brigadier General
   - Promotion to Major General
   - Retirement and transition to private practice
   - Founding of Uttara Fertility Centre Ltd
4. **Honours & recognition** — list of major awards, military commendations, named lectures
5. **Quote block** — a single sentence in Madam's voice about her practice philosophy (to be sourced from her)
6. **CTA** — "See my credentials" → /about/credentials and "Read my research" → /about/publications

**Sub-pages under /about:**

#### `/about/journey` — The CMH Founding Story
Long-form narrative (~800 words) telling the story of how she built the CMH Fertility Centre. This is the brand's strongest content asset. It should read like a profile piece, not a CV. Photos: archival CMH photos if available, otherwise stylised illustrations or her current portraits.

#### `/about/credentials` — Credentials & Training
Structured list, two columns:
- **Degrees** — MBBS, DGO, MCPS, FCPS
- **Fellowships** — Infertility & Reproductive Medicine (India), Infertility & Reproductive Medicine (Germany)
- **Memberships** — OGSB, BCPS, SLSB, BMS, IAGE, IFS, ESHRE (each with logo and one-line description)
- **Examiner roles** — Dhaka University, BUP, BCPS — for MBBS, DGO, MCPS, FCPS
- **Academic positions** — Founder Head AFMC Obs & Gynae, Professor Ibn Sina Medical College, Honorary roles

#### `/about/publications` — Publications & Research
List of 5–10 selected publications from the 36 peer-reviewed papers. Each entry: title, journal, year, link to PMC or journal where available. Specifically include the 2020 JAFMC paper on the First Government Set-up Fertility Centre — that's the headline publication. Also reference her Cambridge University Press review work.

#### `/about/teaching` — Teaching Legacy
Narrative paragraph + list of institutions where she's taught + names of senior fellows trained under her at CMH (with permission). This page establishes that she has trained the next generation — a credibility multiplier.

**What Madam needs to provide for /about:**
- Approved biographical narrative (we can draft from existing public sources; she approves)
- 4–6 archival photos from her career if available
- List of milestones with rough years
- A quote about her practice philosophy
- List of selected publications with full citations (5–10)
- List of fellows/students trained at CMH (with their permission)
- Confirmation of which memberships to display

---

### 4.3 Treatments (`/treatments`)

**Purpose:** Treatment hub. Patient searching by what's wrong with them lands here and finds the right path.

**Hub page sections:**
1. **Intro** — One paragraph framing her treatment philosophy: conservative, fertility-preserving, evidence-based, individualised
2. **Treatment grid** — Each of 7 treatment pages as a card
3. **"Not sure where to start?"** block — CTA to book a first consultation

#### `/treatments/ivf` — IVF (template for all treatment pages)

**Sections each treatment page must have:**

1. **Hero**
   - Page title
   - Single sentence definition in plain language
   - "Is this for me?" — 3–5 bullet points of indications

2. **What it is** (plain-language explanation, 150–200 words)

3. **The process at this practice** (step-by-step)
   - For IVF: Initial consultation → Diagnostic workup → Ovarian stimulation (10–12 days) → Trigger and OPU → Fertilisation in the lab → Embryo culture (3–5 days) → Embryo transfer → Two-week wait → Beta-hCG test
   - Each step: 1–2 sentences + estimated time

4. **What makes this practice's approach different**
   - Specific to Madam: military-discipline protocol design, individualised ovarian stimulation, OHSS-conscious dosing (her published research area)
   - Specific to UFCL: Esco MIRI Multiroom Incubator (independent chambers prevent cross-contamination), ISO Class 3 ART Workstation, on-site embryology

5. **Cost transparency**
   - Range: BDT [X] to BDT [Y]
   - What's included / what's not
   - Note: medication costs vary by individual protocol
   - Multi-cycle pricing if applicable
   - "Schedule a consultation for a precise estimate based on your case"

6. **Success rates context**
   - Honest, age-banded
   - Reference to her published outcomes data (JAFMC 2020)
   - Statement: *"Success rates depend on individual factors. We discuss realistic outcomes openly during your consultation."*

7. **FAQs** (5–8 questions)
   - How long does a cycle take?
   - How many cycles will I need?
   - Is it painful?
   - Can I work during the cycle?
   - What if it doesn't work the first time?
   - Etc.

8. **CTA** — Book a consultation specifically for IVF

**What Madam needs to provide for each treatment page:**
- Approval of the plain-language definition
- Her preferred protocol description for the "process at this practice" section
- Cost range she's comfortable publishing
- FAQ answers (or approval of drafted ones)
- Any specific cases or research she wants referenced

**Apply this template to all 7 treatment pages.** The structure is the same; the content is treatment-specific.

---

### 4.4 Your Journey (`/journey`)

**Purpose:** Demystify what the patient experience actually feels like, from first call to outcome.

**Sections:**
1. **Hero** — *"Knowing what to expect makes the journey easier."*
2. **Stage 1: First Consultation** — what happens, what to bring, what's discussed, duration, cost
3. **Stage 2: Diagnostic Week** — tests typically run, why each one matters, how to read results
4. **Stage 3: Treatment Planning** — the conversation where you and the doctor decide together
5. **Stage 4: During the Cycle** — what daily life looks like, how often you visit the chamber, side-effect realities
6. **Stage 5: The Two-Week Wait** — emotionally the hardest part; what to expect, what NOT to do (no early home tests)
7. **Stage 6: After the Result** — both outcomes covered: pregnancy follow-through plan, OR next-cycle conversation; recognition that both paths are part of the journey
8. **Throughout: Mental Health & Support** — a parallel track acknowledging the emotional reality

**What Madam needs to provide:**
- Approval of stage descriptions
- Her preferred clinical realities (e.g., what tests she actually runs in the diagnostic week)
- Whether to recommend specific external mental health support

---

### 4.5 The Laboratory (`/laboratory`)

**Purpose:** Establish that the UFCL lab is genuinely world-class. This is a major trust signal.

**Sections:**
1. **Hero** — title: *"Where embryos are protected like patients."*
2. **The Esco MIRI Multiroom Incubator**
   - Plain language: six independent, sealed chambers — opening one doesn't disturb the others
   - Why this matters for outcomes
   - Photo of the incubator (production shoot needed)
3. **ISO Class 3 ART Workstation**
   - What ISO Class 3 means in plain Bangla and English
   - "Our laboratory air is cleaner than most operating theatres" — analogy
   - Photo of the workstation
4. **Customised gas control**
   - CO₂ and N₂ regulation
   - Why this simulates the body's natural environment for embryos
5. **The embryology team**
   - Brief on the embryologist(s) — name, training, role
   - Photo
6. **Quality control protocols**
   - Daily lab checks, witnessing procedures (two-person verification at every embryo transfer step), traceability
7. **Virtual tour**
   - A 60–90 second video tour of the lab (shoot priority)

**What Madam needs to provide:**
- Access for a lab photography and video shoot
- Bio/photo of the embryology team
- Approval of the QC protocols description
- Any specific certifications to mention

---

### 4.6 Chambers (`/chambers`)

**Purpose:** Show patients where Madam practices, when, and how to book at each location.

**Hub page sections:**
1. **Map of Dhaka with 5 pins** (UFCL highlighted as primary)
2. **Day-of-week schedule grid** — a single visual showing which chamber on which day
3. **Chamber cards** — 5 cards, each linking to its dedicated page

#### Each chamber sub-page contains:

1. **Hero** — chamber name, address, "Where Dr. Liza sees patients at [chamber name]"
2. **Embedded Google Map**
3. **Schedule** — days and times
4. **Hotlines** — chamber-specific phone numbers (from Appendix B)
5. **What to bring** — list specific to first vs. follow-up visits
6. **Parking & access** — practical info
7. **Photos of the chamber** (5–8 interior/exterior shots)
8. **"Book at this chamber"** CTA — WhatsApp deep link with prefilled message ("I'd like to book at the [chamber name] chamber")

**Per Chamber Data (from Appendix B):**

| Chamber | Primary Role | Days | Times |
|---|---|---|---|
| UFCL | Primary (IVF & lab) | Sun, Tue, Thu | 11am–1pm |
| Hitech Multicare | Consultation & follow-up | Sat, Mon, Wed AND Sun, Tue, Thu, Fri | 2pm–6pm AND 3pm–8pm |
| Ibn Sina Diagnostic Centre Uttara | Consultation | Verify schedule | Verify |
| Ibn Sina Medical College Hospital | Consultation | Saturday | 6pm–8pm |
| Lubana General Hospital | Consultation | Mon, Wed, Sat | 8pm–9pm |

*Verify all schedules with Madam — public listings are inconsistent.*

**What Madam needs to provide:**
- Confirmation of which chambers are currently active
- Confirmed schedules per chamber
- Permission to photograph each chamber's waiting area and consultation room
- The specific hotline number per chamber she wants displayed publicly

---

### 4.7 Learning Centre (`/learning`)

**Purpose:** The educational engine. SEO authority and patient-conversion driver. Bangla-first.

**Hub page sections:**
1. **Hero** — *"Knowledge is the first step toward parenthood."* (or Bangla equivalent)
2. **Featured video** — large embedded video, latest or most-watched
3. **Video grid** — the 20 videos organised by patient journey stage (Awareness, Diagnosis, Treatment, Support)
4. **Featured articles** — 6 lead articles
5. **Article archive link**
6. **Glossary link**

#### `/learning/videos` — Full video library
Grid of all 20 videos. Filter by topic. Each video card: thumbnail, title (Bangla), duration, view count, description.

#### `/learning/articles` — Article archive
List of all written articles. Filterable by topic. Search bar.

#### Individual article page (`/learning/articles/[slug]`)
- Hero with article title (Bangla and English)
- Author byline: *"By Dr. Liza Chowdhury"* with portrait
- Estimated reading time
- Article body (1,000–1,800 words typical)
- Related videos at the bottom
- "Have a question? Book a consultation" CTA

#### `/learning/glossary` — Glossary
Alphabetical list of fertility terms, Bangla and English, with short plain-language definitions. Useful for SEO and patient comprehension.

**What Madam needs to provide:**
- Approval of the 20 video slate (see §5.2)
- Time for filming with Nuvista
- Approval of articles drafted from her clinical expertise (each ~1,500 words; we draft, she reviews)
- Glossary terms she wants prioritised

---

### 4.8 Patient Stories (`/stories`)

**Purpose:** Trust through real outcomes. Anonymised, respectful, voice-of-patient.

**Sections:**
1. **Hero** — *"Every family has a story. These are a few."*
2. **Story grid** — Each story is a card with: a quote or headline, patient initials or anonymous label, treatment type, year
3. **Filter by treatment** — IVF, ICSI, IUI, etc.

#### Individual story page (`/stories/[slug]`)
- Hero with the story headline (e.g., *"After two failed IUI cycles, IVF gave us our daughter."*)
- Long-form narrative (400–700 words), patient voice
- Treatment details box: what treatment, how long, outcome
- Photo: optional — many patients won't want recognition; silhouettes, hands, or baby-only photos are acceptable alternatives
- Closing line from Madam: a one-line clinical reflection on the case
- CTA: *"Your story could be next."*

**What Madam needs to provide:**
- Identification of 5–8 patients willing to share their story
- Consent documentation for each
- Coordination of interviews (15–20 min per patient, recorded with consent)
- Permission to use any photos provided by patients

**Sensitive note:** Patient stories in fertility require *real* informed consent. The patient should review and approve their final story before publication, and have the ability to withdraw at any time.

---

### 4.9 Contact / Book a Consultation (`/contact`)

**Purpose:** Single, low-friction entry point to actually start treatment.

**Sections:**
1. **Hero** — *"When you're ready to talk, I'm here."*
2. **Booking options grid:**
   - **WhatsApp** (primary) — large button, opens to a prefilled message
   - **Call** — primary hotline (01743-243386)
   - **Online form** — quick form for non-urgent enquiries (name, phone, preferred chamber, message)
3. **Choose your chamber** — chamber selector with auto-filled WhatsApp message per chamber
4. **What to expect on your first contact**
   - A patient coordinator (name her — humanise) will respond within [X] hours
   - You'll be asked basic non-clinical details (preferred time, chamber)
   - No clinical history is requested by phone or chat — that's for the consultation room
5. **Map and locations**
6. **Emergency note** — *"For medical emergencies, please call 999 or visit your nearest emergency department. This site is for non-urgent appointment booking and inquiries."*

**What Madam needs to provide:**
- The patient coordinator's name (or a placeholder name like "Mariam" if no real coordinator is named yet)
- The hotlines per chamber she wants published
- Approval of the WhatsApp deep-link template messages

---

### 4.10 Practice Ethics (`/ethics`)

**Purpose:** Dignified statement of practice principles. Pre-empts unspoken patient concerns.

**Sections:**
1. **Hero** — *"How I practise, and why."*
2. **Married couples, own gametes** — one paragraph, dignified, explains that this practice provides ART services for married couples using their own gametes, in alignment with Bangladeshi medical and bioethical standards
3. **Patient consent and autonomy** — every patient is involved in every decision; no procedure proceeds without clear understanding and consent
4. **Confidentiality** — strict confidentiality; no patient information shared without explicit consent; aligned with BMDC Article 2.3.4.3
5. **Transparency** — honest discussion of probabilities; no guaranteed outcomes; published cost ranges
6. **Evidence-based** — protocols guided by international guidelines (ESHRE, ASRM) and her own published research

---

### 4.11 Privacy & Confidentiality (`/privacy`)

Standard privacy page covering:
- What data the site collects (forms, chatbot, cookies)
- How it's stored and protected
- No clinical data is requested or stored online
- Patient records are held only at the chambers, per medical confidentiality standards
- WhatsApp messages: how they're handled
- Cookie policy
- Contact for privacy concerns

---

## 5. Content Inventory — What Madam Needs to Prepare

This section is the actionable checklist. Pull it out and share with Madam separately so she knows exactly what to gather.

### 5.1 Photography (production shoot — recommend 1 dedicated half-day)

| # | Shot | Purpose | Notes |
|---|---|---|---|
| 1 | Hero portrait — formal, white coat | Homepage hero, About hero | Match the flyer energy; soft purple-adjacent backdrop |
| 2 | Hero portrait — formal, semi-formal | Alternate for sub-pages | Different angle / wardrobe |
| 3 | At her desk, consulting | About page, treatment pages | Showing her in clinical environment |
| 4 | Examining a chart / report | Patient journey page | Conveys expertise + attention |
| 5 | With a patient (consented) | Patient stories, Your Journey | Anonymised — silhouette or back-of-head |
| 6 | Speaking — close-up | Quote blocks | Conveys warmth |
| 7 | UFCL exterior | Chamber page (UFCL) | Building, signage |
| 8 | UFCL waiting area | Chamber page | Clean, warm, plants |
| 9 | UFCL consultation room | Chamber page | Where she sees patients |
| 10 | The Esco MIRI Multiroom Incubator | Laboratory page | The actual equipment, clean |
| 11 | The ISO Class 3 ART Workstation | Laboratory page | Embryologist working (consented) |
| 12 | Embryologist team portrait | Laboratory page | The lab team |
| 13 | Lab detail shots (3–5) | Various | Macro shots, equipment, monitors |
| 14 | Hitech chamber exterior + interior | Hitech chamber page | 4–6 shots |
| 15 | Ibn Sina Uttara chamber | Ibn Sina chamber page | 4–6 shots |
| 16 | Ibn Sina Kallyanpur chamber | Ibn Sina Kallyanpur chamber page | 4–6 shots if active |
| 17 | Lubana chamber | Lubana chamber page | 4–6 shots if active |

**Recommended photographer brief:**
- No flash, soft natural or diffused light
- Warm white balance (not clinical-cold blue)
- Mid-tone exposure (not over-bright)
- Honour her dignity — she is a Major General Professor, not a stock photo subject
- Multiple angles per setup
- Deliver: high-res original + web-optimised versions

### 5.2 Video Content — The 20-Video Slate (Nuvista production)

Already discussed in earlier strategy; re-listed here for completeness.

**Shoot Day 1 — Awareness & Education**
1. বন্ধ্যাত্ব মানে সব শেষ নয় — আশা আছে
2. বাচ্চা হচ্ছে না — শীর্ষ ৭টি কারণ
3. PCOS — কেন হয়, কীভাবে চিকিৎসা
4. পুরুষের বন্ধ্যাত্ব — চুপ থাকার বিষয় না
5. Endometriosis এবং fertility — কী করব?
6. বয়স ৩৫ এর পর — এখনও সম্ভব?
7. বার বার মিসক্যারেজ — কেন এবং কী করব
8. AMH টেস্ট কী এবং রিপোর্ট কীভাবে পড়ব
9. ডায়েট ও lifestyle — fertility বাড়াতে
10. ভারত যাওয়া কি লাগবে? — বাংলাদেশে কী সম্ভব

**Shoot Day 2 — Treatment & Trust**
11. IVF আসলে কী? পুরো প্রক্রিয়া step-by-step
12. ICSI vs IVF — কোনটা আমার দরকার?
13. IUI প্রক্রিয়া — কাদের জন্য, সফলতার হার
14. Laparoscopy fertility-এর জন্য কখন দরকার
15. Frozen embryo transfer — সুবিধা ও অসুবিধা
16. IVF এর খরচ বাংলাদেশে — সত্যি কত?
17. IVF এর জন্য মানসিক প্রস্তুতি
18. প্রথম consultation-এ কী আশা করবেন
19. CMH এ আমার যাত্রা — কেন আমি ফার্টিলিটিতে এসেছি (3 min, founder story)
20. Welcome to my practice — Uttara Fertility Centre (used as homepage welcome)

**Specs per video:**
- 2–4 min (videos 19 and 20 may run 3–5 min)
- Single fixed camera, lavalier mic
- Burned-in Bangla subtitles
- Separate English subtitle track on YouTube
- Consistent backdrop across all 20
- Production day yields ~10 long-forms + ~30 vertical short cuts for social

### 5.3 Written Content

| Asset | Approximate Length | Source |
|---|---|---|
| Homepage hero headline + subhead | 30–60 words | Drafted, Madam approves |
| About: opening narrative | 250–350 words | Drafted from public sources, she approves |
| About: long-form CMH founding story | ~800 words | Drafted from her interview |
| About: career milestones list | 8–12 entries | She provides years |
| About: practice philosophy quote | 1 sentence | Her voice |
| Treatment pages × 7 | ~600–800 words each | Drafted, she approves |
| Patient journey page (6 stages) | ~1,000 words total | Drafted, she approves |
| Laboratory page | ~600 words | Drafted from equipment specs |
| Each chamber page | 200 words + photos + schedule | Drafted with her input |
| Learning Centre articles × 10 | ~1,500 words each | Drafted, she approves |
| Glossary | 30–50 terms | Drafted, she reviews |
| Patient stories × 5–8 | 400–700 words each | From patient interviews |
| Ethics statement | 300 words | Drafted, she approves |
| Privacy policy | Standard | Boilerplate, she signs off |

### 5.4 Documents & Records to Provide

- BMDC registration number(s)
- 5–10 selected publications with full citations and PDF links/files
- Photos or scans of major certificates / fellowships (for the credentials wall)
- Military commendation summaries (which she's comfortable sharing publicly)
- AFMC/CMH archival photos if available
- Patient consent form template
- Any existing brand assets (logos, prior brochures, etc.)

### 5.5 Approvals Madam Personally Needs to Sign Off On

- Final headline and positioning statement
- Bio narrative
- Photography selects
- Treatment protocol descriptions
- Cost ranges (per treatment) to publish publicly
- Patient story consents
- Ethics statement language
- Each of the 20 video scripts before shoot
- Chamber schedules to display publicly
- The patient coordinator's name to display

### 5.6 Decisions Still Pending Madam's Input

- Final domain choice (drlizachowdhury.com vs. ivfwithdrliza.com)
- Whether to feature her military rank prominently or subtly
- Whether to publish age-banded success rates
- Whether to include a multi-cycle pricing bundle
- Whether the patient coordinator is a new hire or existing staff
- Whether to feature other consultants from UFCL on her personal site (recommendation: no — keep it her brand)

---

## 6. Visual System

### 6.1 Colour Palette

```
PRIMARY
Brand Purple        #6B2D8C  (the UFCL deep purple — anchor)
Brand Purple Dark   #4A1F61  (hover states, header gradients)
Brand Purple Light  #B594CC  (backgrounds, soft accents)

NEUTRALS
Warm Off-White      #FAF7F5  (page backgrounds — avoid pure white)
Soft Cream          #F2EBE7  (alternating section backgrounds)
Light Border        #E5DDD9  (dividers)
Body Text           #2D2A33  (avoid pure black; warmer charcoal)
Muted Text          #6B6470  (secondary text, captions)

ACCENT (use sparingly — success moments only)
Soft Gold           #C5A361  (success stories, "you're not alone" sections)
Warm Terracotta     #C97B5F  (alternative accent if gold reads too premium)

SYSTEM
Success             #2D7A4C
Warning             #C57A1F
Error               #B5394A
Info                #4A6FB5
```

### 6.2 Typography

```
ENGLISH
Display:     Inter, weight 600–700, tight tracking
Headings:    Inter, weight 600
Body:        Inter, weight 400, line-height 1.7
Captions:    Inter, weight 500, smaller size

BANGLA
Display:     Hind Siliguri, weight 600–700
Headings:    Hind Siliguri, weight 600
Body:        Hind Siliguri, weight 400, line-height 1.8
Captions:    Hind Siliguri, weight 500

ACCENT (selective use)
Serif for pull-quotes and editorial moments: Recoleta or DM Serif Display
Use sparingly — only for emotional or editorial moments
```

Type scale (rem):
```
Display XL    4.0    — Hero headlines only
Display L     3.0    — Page hero headlines
Display M     2.25   — Section headlines
H1            1.875
H2            1.5
H3            1.25
H4            1.125
Body Large    1.125
Body          1.0
Body Small    0.875
Caption       0.75
```

### 6.3 Spacing System

8-point grid. Use Tailwind defaults aligned to the 8px scale (px-1 = 4px, px-2 = 8px, px-4 = 16px, etc.).

Standard section vertical padding: py-16 (desktop), py-12 (tablet), py-10 (mobile).

### 6.4 Photography Direction

- Soft, natural light
- Warm white balance
- Mid-tone exposure
- Real Bangladeshi subjects only
- Faces optional in patient content (silhouettes / hands / backs acceptable)
- No stock photography of any kind
- One or two well-placed baby images at most — not on every page
- Lab and equipment photography should be clean, sharp, but not sterile-feeling

### 6.5 Iconography

- Use Lucide (or Phosphor) icon library — clean line icons
- 1.5px stroke weight default
- Sized to text where used inline
- No custom medical iconography unless commissioned later
- Never use clipart or emoji-style icons

### 6.6 Motion

- Page transitions: fade, 200ms
- Card hovers: subtle lift (translate-y-1) with shadow growth, 150ms
- Button hovers: background colour shift, 150ms
- No parallax
- No scroll-jacking
- No autoplay videos (user-initiated only)
- One emotional moment allowed: slow Ken Burns drift on the patient stories carousel

### 6.7 Component Patterns
(See §7 for the full component library.)

---

## 7. Component Library

Components the demo (and production) site needs. These are written to be implementable in React with Tailwind.

### 7.1 Layout Components

**`<SiteHeader />`**
- Logo + nav links + language toggle + CTA button
- Sticky on scroll with background blur after 100px
- Mobile: collapses to hamburger; CTA persists as floating bottom-bar

**`<SiteFooter />`**
- Three columns (Contact, Chambers, About)
- Bottom strip with copyright, BMDC reg, disclaimer

**`<Container />`**
- Max-width 1280px
- Horizontal padding responsive
- Used everywhere except full-bleed heroes

**`<Section />`**
- Vertical padding helper
- Optional background colour prop

### 7.2 Content Components

**`<Hero variant="home|page|chamber|treatment" />`**
- Configurable hero with portrait, headline, subhead, CTA
- Variants change the layout (home is dual-column, page is single-column, etc.)

**`<CredentialStrip />`**
- Horizontal row of credential logos with hover tooltips
- Six items typical

**`<TreatmentCard treatment={...} />`**
- Icon, name, one-line, link
- Used in grid on home and /treatments

**`<JourneyStepCard step={...} index={1} />`**
- Numbered card with title, description, time estimate
- Used in patient journey horizontal scroll

**`<VideoCard video={...} />`**
- Thumbnail, title (Bangla), duration, view count, play button
- Click opens modal player

**`<ArticleCard article={...} />`**
- Featured image, title, excerpt, read time, link

**`<ChamberCard chamber={...} />`**
- Photo, name, address, day/time, primary hotline
- "View chamber" link

**`<StoryCard story={...} />`**
- Quote pull-out, treatment type, year, "read story" link

**`<QuoteBlock quote="..." attribution="Dr. Liza Chowdhury" />`**
- Large editorial quote, serif typography, purple side-rule

**`<StatBlock value="36" label="Peer-reviewed publications" />`**
- Used in credibility sections

**`<TimelineItem year="..." event="..." />`**
- Used in career milestones

**`<CTABanner heading="..." description="..." primaryAction="..." secondaryAction="..." />`**
- Reusable CTA section

### 7.3 Interactive Components

**`<ChatBubble />`**
- Bottom-right floating chat trigger
- On click opens a chat modal
- For the demo: simple FAQ-style flow with WhatsApp handoff link

**`<LanguageToggle />`**
- EN / BN switch in the header
- Persists choice in localStorage (production) — for demo can be session-only

**`<ChamberSelector />`**
- Dropdown or modal letting patients pick a chamber
- Auto-fills the WhatsApp message
- Used on home final CTA, contact page, and chamber hub

**`<BookingModal />`**
- Three options: WhatsApp, Call, Form
- Form fields: name, phone, preferred chamber, optional message
- For demo: form submits to a console.log; production: form posts to backend

**`<VideoPlayerModal />`**
- Opens when a video card is clicked
- Embeds YouTube
- Closes on Esc or backdrop click

### 7.4 Specialised Components

**`<TreatmentProcess steps={[...]} />`**
- Vertical timeline of treatment process
- Each step: number, title, description, time estimate

**`<CostTransparencyTable treatment="ivf" />`**
- Shows base cost range, what's included, what's not
- Disclaimer about individual variation

**`<FAQAccordion questions={[...]} />`**
- Accordion for treatment-page FAQs
- One open at a time

**`<PublicationItem title="..." journal="..." year="..." link="..." />`**
- Single publication entry on the publications page

**`<EthicsStatement />`**
- Reusable block; appears on /ethics and condensed on relevant pages

---

## 8. Demo Build Plan with Vite

### 8.1 Tech Stack for the Demo

```
Build tool:       Vite
Framework:        React 18
Router:           React Router v6
Styling:          Tailwind CSS v3
Icons:            lucide-react
Fonts:            Google Fonts (Inter + Hind Siliguri)
Deployment:       Vercel (one-click) or Netlify
```

No backend, no CMS, no API for the demo. All content is hardcoded in TypeScript constants files. This is deliberate — the demo is structural, not data-driven.

### 8.2 Folder Structure

```
dr-liza-demo/
├── public/
│   ├── images/
│   │   ├── portraits/        (madam photos — flyer photo + any others)
│   │   ├── chambers/         (chamber placeholders)
│   │   ├── lab/              (lab placeholders)
│   │   └── logos/            (credibility logos)
│   ├── videos/
│   │   └── placeholders/     (use YouTube embeds; no local video files)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── content/
│   │   │   ├── Hero.tsx
│   │   │   ├── CredentialStrip.tsx
│   │   │   ├── TreatmentCard.tsx
│   │   │   ├── JourneyStepCard.tsx
│   │   │   ├── VideoCard.tsx
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── ChamberCard.tsx
│   │   │   ├── StoryCard.tsx
│   │   │   ├── QuoteBlock.tsx
│   │   │   ├── StatBlock.tsx
│   │   │   ├── TimelineItem.tsx
│   │   │   └── CTABanner.tsx
│   │   ├── interactive/
│   │   │   ├── ChatBubble.tsx
│   │   │   ├── LanguageToggle.tsx
│   │   │   ├── ChamberSelector.tsx
│   │   │   ├── BookingModal.tsx
│   │   │   └── VideoPlayerModal.tsx
│   │   └── treatment/
│   │       ├── TreatmentProcess.tsx
│   │       ├── CostTransparencyTable.tsx
│   │       ├── FAQAccordion.tsx
│   │       └── PublicationItem.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── about/
│   │   │   ├── Journey.tsx
│   │   │   ├── Credentials.tsx
│   │   │   ├── Publications.tsx
│   │   │   └── Teaching.tsx
│   │   ├── Treatments.tsx
│   │   ├── treatments/
│   │   │   ├── IVF.tsx
│   │   │   ├── ICSI.tsx
│   │   │   ├── IUI.tsx
│   │   │   ├── PESATESA.tsx
│   │   │   ├── RecurrentLoss.tsx
│   │   │   ├── Laparoscopy.tsx
│   │   │   └── Hysteroscopy.tsx
│   │   ├── Journey.tsx
│   │   ├── Laboratory.tsx
│   │   ├── Chambers.tsx
│   │   ├── chambers/
│   │   │   ├── UFCL.tsx
│   │   │   ├── Hitech.tsx
│   │   │   ├── IbnSinaUttara.tsx
│   │   │   ├── IbnSinaKallyanpur.tsx
│   │   │   └── Lubana.tsx
│   │   ├── Learning.tsx
│   │   ├── learning/
│   │   │   ├── Videos.tsx
│   │   │   ├── Articles.tsx
│   │   │   └── Glossary.tsx
│   │   ├── Stories.tsx
│   │   ├── Contact.tsx
│   │   ├── Ethics.tsx
│   │   └── Privacy.tsx
│   ├── data/
│   │   ├── credentials.ts    (her credentials data)
│   │   ├── treatments.ts     (7 treatments)
│   │   ├── chambers.ts       (5 chambers)
│   │   ├── videos.ts         (20 video metadata)
│   │   ├── articles.ts       (10 article placeholders)
│   │   ├── stories.ts        (5–8 placeholder stories)
│   │   ├── publications.ts   (10 publications)
│   │   ├── faqs.ts           (treatment FAQs)
│   │   └── glossary.ts       (30–50 terms)
│   ├── content/
│   │   ├── en/               (English copy strings)
│   │   └── bn/               (Bangla copy strings)
│   ├── hooks/
│   │   ├── useLanguage.ts
│   │   └── useScroll.ts
│   ├── lib/
│   │   ├── theme.ts          (colour tokens)
│   │   └── analytics.ts      (placeholder for production)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### 8.3 Tailwind Config Essentials

```ts
// tailwind.config.ts
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6B2D8C',
          purpleDark: '#4A1F61',
          purpleLight: '#B594CC',
        },
        bg: {
          warm: '#FAF7F5',
          cream: '#F2EBE7',
        },
        text: {
          body: '#2D2A33',
          muted: '#6B6470',
        },
        accent: {
          gold: '#C5A361',
          terracotta: '#C97B5F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        bangla: ['Hind Siliguri', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
    },
  },
};
```

### 8.4 Placeholder Content Strategy

The demo's content quality determines whether Madam takes it seriously. **Never use Lorem ipsum.** Use realistic placeholder content:

- For her bio: pull the verified narrative from the Perplexity/Gemini research and the JAFMC paper; label it clearly as "draft for your review"
- For treatment pages: real clinical descriptions from established sources (ESHRE, Mayo Clinic, NHS UK), adapted to her voice — note these as "draft pending Madam's clinical review"
- For patient stories: write 5 fictional but realistic anonymized stories. Clearly label them: *"Placeholder story — for structural demonstration only. Real stories will be sourced from consenting patients."*
- For videos: use the actual 20 video titles in Bangla; thumbnails can be designed placeholders showing the title. Don't fake play counts.
- For publications: use the real ones from the research (the JAFMC paper, BJFS papers, etc.) where you can verify; placeholder others as "[Publication X — to be confirmed]"
- For chamber photos: use stock-style architectural photos clearly labelled as "Demo placeholder — real chamber photos to be shot."

The principle: never lie, but make the placeholders feel real enough that Madam can react to the structure rather than the gaps.

### 8.5 Deployment

```bash
# In project root
npm run build
# Output: dist/

# Deploy to Vercel
npx vercel --prod
# Or drag dist/ folder to netlify.com

# Custom domain for the demo
# Use a temporary subdomain: demo-drliza.vercel.app
# DO NOT use the real domain yet — keeps the demo distinct
```

Once Madam approves, the production build moves to the real domain.

### 8.6 Demo Scope Limits

To keep the demo achievable in 5–8 days of solo work:

**Build fully:**
- Home page
- About page (main /about — not all sub-pages)
- One representative treatment page (IVF) — others can be route-stubs that show "coming soon" structure
- Patient Journey page
- Laboratory page
- Chambers hub page + UFCL chamber sub-page (others as stubs)
- Learning Centre hub + one video player demo
- One Patient Story example
- Contact page

**Stub-only (route exists, page says "structure preview"):**
- The other 6 treatment pages
- The other 4 chamber sub-pages
- The full article and video archive
- Glossary
- Privacy and Ethics (link to a one-paragraph placeholder)

This gives Madam a realistic walkthrough of the *full structure* without the overhead of a complete content build.

---

## 9. Walkthrough Script for the Madam Meeting

A 30–35 minute structured walkthrough. Use her own words from the meeting where possible.

### Opening (3 min)
> "Madam, what I'm going to show you today is the structural skeleton of your website. Nothing is final visually or in terms of copy — this is for you to see how your practice would be organised and presented online, and to tell me where the structure is right, where it's off, and what you'd want to add. Once we agree on the structure, we'll work with Nuvista on the videos and the photography, and then build the real site."

### Show the Home Page (5 min)
- Walk through hero → credentials strip → treatments → why-choose → journey preview → learning → chambers → stories → final CTA
- Pause at each section: *"This block does X. Does that feel right to you?"*
- Specifically ask about the headline: *"Madam, the headline currently reads 'The doctor who founded Bangladesh's first government fertility centre.' Are you comfortable leading with that, or would you prefer a softer framing?"*

### Show the About Page (5 min)
- Show the narrative, the timeline, the credentials sub-page
- Ask: *"What's missing here that you'd want patients to know? What's here that you'd want softened?"*

### Show the IVF Treatment Page (5 min)
- Walk through the treatment-page template
- Specifically ask about: cost transparency (*"How comfortable are you publishing a price range?"*), success rates (*"Are you open to publishing age-banded success rates, with appropriate context?"*), the FAQ list

### Show the Lab Page (3 min)
- Show the Esco MIRI and ISO Class 3 sections
- Ask: *"Is there anything in the lab you want featured that I've missed?"*

### Show the Chambers Hub (3 min)
- Show the map, the schedule grid, the UFCL chamber page
- Confirm: *"Are all five chambers currently active, or should we list fewer?"*

### Show the Learning Centre (3 min)
- Show the video library structure
- Confirm: *"The 20-video slate — please review before Nuvista shoots."*

### Show a Patient Story (2 min)
- Show one placeholder story
- Explain: *"Real stories will come from patients you identify, with consent."*

### Close (3 min)
- Ask three structural questions:
  1. *"Is anything missing from the site that should be there?"*
  2. *"Is anything here that shouldn't be?"*
  3. *"What's the one decision you need more information to make?"*
- Confirm next steps: photography shoot date, video shoot dates with Nuvista, content review timeline

### What to Capture from the Meeting

A short notes template to fill in during/after the meeting:

```
DECISIONS LOCKED
- Domain choice: ____
- Headline approved: Yes / No / Needs change → _____
- About narrative: Approved / Needs change → _____
- Cost transparency: Yes / No / Range to publish → _____
- Active chambers: ___, ___, ___
- Patient coordinator name: _____

DECISIONS PENDING
- _____

ACTION ITEMS FOR MADAM
- _____

ACTION ITEMS FOR US
- _____

PHOTOGRAPHY SHOOT DATE
- _____

VIDEO SHOOT DATES (NUVISTA)
- Day 1: _____
- Day 2: _____

NEXT MEETING
- _____
```

---

## 10. Demo → Production Roadmap

### Phase 0 — Pre-Demo (Days 1–7)
- Build the Vite demo per §8
- Source placeholder content per §8.4
- Deploy to Vercel/Netlify
- Internal review and polish
- Print a one-page summary for Madam

### Phase 1 — Demo Review (Day 8–10)
- Walk Madam through per §9
- Capture all feedback
- Send her a written follow-up with decisions captured and content needs listed

### Phase 2 — Content Production (Weeks 2–4)
- Photography shoot (one half-day)
- Nuvista video shoots (two days)
- Bio narrative drafted and reviewed
- Treatment pages drafted and reviewed
- Learning Centre articles drafted (start with 5 of the 10)
- Patient stories interviewed and drafted (3–5 of the 5–8)

### Phase 3 — Production Build with Claude Code (Weeks 3–5, parallel)
This is where this document becomes a Claude Code brief. Workflow:
- Hand this document to Claude Code as the spec
- Build pages component-by-component
- Integrate real photography as it arrives
- Integrate real video as it arrives
- Set up CMS (recommend Sanity or Payload for the production version — allows Madam's team to edit without touching code)
- Set up the booking backend (form submissions → email + simple admin panel)
- Implement the chatbot per §4.9 logic
- Performance optimisation
- Bangla font loading optimisation
- Accessibility audit

### Phase 4 — Soft Launch (Week 6)
- Deploy to the real domain
- Internal soft launch — share with Madam, her team, and a handful of trusted referrers
- Capture feedback for 1 week
- Iterate

### Phase 5 — Public Launch (Week 7)
- Public announcement
- Social media coordinated push
- Email to her existing patient list (with consent)
- Begin SEO content cadence

### Phase 6 — Ongoing (Month 2+)
- Weekly Learning Centre article cadence
- Monthly video (continuing the educational content engine)
- Quarterly photography refresh
- Quarterly content audit
- SEO and analytics review

---

## 11. Quality Bar Checklist

Every page must pass these checks before being considered demo-ready (and again before production-ready):

### Strategic
- [ ] Does this page reflect Dr. Liza personally, not the clinic generically?
- [ ] Does it honour her IVF-only positioning?
- [ ] Does it sound like a Major General Professor's site, not a generic clinic site?
- [ ] Would a referring obstetrician feel comfortable sending a patient to this page?

### Content
- [ ] Is every claim factually accurate (no exaggeration)?
- [ ] Are credentials cited correctly (no inflation)?
- [ ] Is the Bangla copy natively written, not translated word-for-word?
- [ ] Is the English copy free of clinic-marketing clichés ("trusted," "leading," "compassionate care")?

### Visual
- [ ] No stock photography of white couples
- [ ] No more than one baby image per page
- [ ] Purple usage feels intentional, not overwhelming
- [ ] White space gives the page room to breathe
- [ ] Typography hierarchy is clear

### Functional
- [ ] Page loads in < 2.5s on 4G
- [ ] Looks correct on a low-end Android device (test on screens as small as 360px wide)
- [ ] All CTAs are reachable and functional
- [ ] Language toggle works smoothly
- [ ] WhatsApp deep links open the correct prefilled message

### Ethical & Legal
- [ ] No patient information shown without explicit consent
- [ ] Ethics statement linked from footer
- [ ] Privacy policy in place
- [ ] BMDC registration number displayed
- [ ] No medical-advice claims; everything routes to consultation

---

## 12. Open Questions & Risks

### Open Questions for Madam (consolidated)
1. Final domain choice
2. Headline approval
3. How prominently to feature military rank
4. Whether to publish age-banded success rates
5. Cost ranges to publish per treatment
6. Which chambers are currently active
7. Multi-cycle pricing or refund commitment — open to it?
8. Whether other UFCL doctors appear on her personal site (recommendation: no)
9. Patient coordinator identity
10. Photography shoot scheduling
11. Video shoot dates with Nuvista
12. Which 5–8 patients she'd ask for story consent
13. Which of the 36 publications to highlight
14. Whether to keep her general gynae chambers visible or hide them

### Known Risks
- **Election timeline crunch.** If the demo needs to influence OGSB voters' perception, parts of it must be live by the 12th. Realistic scope for that deadline: home + about + chambers + contact only. The rest can be stubbed.
- **Video shoot coordination.** Nuvista's availability vs. Madam's availability on a chamber off-day. Lock this early.
- **Photography approval delays.** Madam may want multiple rounds on portrait selects. Build a 2-week buffer.
- **Bangla copy quality.** Translated Bangla looks amateur to native readers. Engage a writer with literary Bangla, not just bilingual capability.
- **Patient story consent.** Some patients may agree initially and withdraw later. Have backups.
- **Vendor coordination (Factorize + Nuvista + you).** Without a single owner of the production calendar, dates will slip. Recommend you become that single owner.
- **Scope creep.** Madam may add requests as she sees more (e.g., "add a section on PCOS support groups"). Capture every request in a backlog; commit to nothing in the meeting.

---

## Appendix A — Verified Credential Bank

A consolidated reference of every verified credential, for use across the site. Numbered for cross-reference.

### A.1 Identity
- **Full name:** Major General Professor Dr. Liza Chowdhury (Retd.)
- **Current titles:**
  - Chairman & Chief Consultant, Uttara Fertility Centre Limited
  - Professor of Obstetrics & Gynaecology, Ibn Sina Medical College
  - Consultant, Hitech Multicare Hospital
- **Former titles (military / academic):**
  - Major General, Bangladesh Army Medical Corps
  - Founder Head, Department of Obstetrics & Gynaecology, Armed Forces Medical College, Dhaka (~13 years)
  - Founder Head, Department of Reproductive Endocrinology and Infertility, CMH Dhaka
  - Advisor Specialist, Obstetrics & Gynaecology, CMH Dhaka

### A.2 Education
- **MBBS** — Mymensingh Medical College
- **DGO** — National Post-Graduate Medical Board
- **MCPS (OBGYN)** — College of Physicians and Surgeons, Bangladesh
- **FCPS (OBGYN)** — College of Physicians and Surgeons, Pakistan
- **Post-Graduate Grading Course** — AFMI
- **Fellowship in Gynaecological Endoscopy** — India
- **Fellowship & Diploma in Infertility and Reproductive Medicine** — India and Germany

### A.3 Pioneering Work
- **First Government-Set-Up Fertility Centre in Bangladesh** — Founded at Combined Military Hospital (CMH) Dhaka
- Documented in: *"Outcome of In-Vitro Fertilization in the First Government Set-up Fertility Center of Bangladesh"*, Journal of Armed Forces Medical College Bangladesh (JAFMC), Vol. 16, No. 1, June 2020
- Trained the next generation of military OBGYN specialists, including Col. Anjuman Ara Begum and Lt. Col. Mst. Ralifa Akhtar Shikha

### A.4 Academic & Research
- **36 peer-reviewed publications** in national and international medical journals
- Research focus: reproductive endocrinology, hormonal profiles of subfertile women, clinical outcomes of laparoscopic pelvic reconstructions, IVF outcomes in resource-constrained settings
- **Academic reviewer, Cambridge University Press** — evaluating clinical texts on hysteroscopy, laparoscopy, and assisted reproduction
- **External examiner** — Dhaka University, Bangladesh University of Professionals (BUP), Bangladesh College of Physicians and Surgeons (BCPS), for MBBS, DGO, MCPS, and FCPS examinations

### A.5 Professional Memberships
- Obstetrical and Gynecological Society of Bangladesh (**OGSB**) — currently contesting for Organizing Secretary
- Bangladesh College of Physicians and Surgeons (**BCPS**)
- Society of Laparoscopic Surgeons of Bangladesh (**SLSB**)
- Bangladesh Medical Society (**BMS**)
- Indian Association of Gynaecological Endoscopists (**IAGE**)
- Indian Fertility Society (**IFS**)
- European Society of Human Reproduction and Embryology (**ESHRE**)

### A.6 Clinical Expertise (for site copy)
- Assisted Reproductive Technologies (IVF, ICSI, IUI)
- Controlled Ovarian Hyperstimulation (with OHSS-prevention focus)
- Ultrasound-guided oocyte retrieval and embryo transfer
- Advanced laparoscopy: cystectomy, deep infiltrating endometriosis excision, myomectomy with multi-layered uterine reconstruction
- Hysteroscopy: septum resection, polyp removal, submucosal fibroid resection
- Recurrent pregnancy loss workup and management
- High-risk obstetrics following IVF: advanced maternal age, gestational diabetes, pre-eclampsia, cervical insufficiency, multiple gestation monitoring
- Reproductive endocrinology and hormonal evaluation
- Male factor infertility coordination (PESA/TESA)

### A.7 UFCL Laboratory Specifications
- **Esco MIRI Multiroom Incubator** — six independent, isolated chambers preventing cross-contamination; heated lids for uniform thermal regulation; customisable CO₂ and N₂ gas control
- **Esco Multi-Zone ART Workstation** — ISO Class 3 air cleanliness standard (exceeds typical clinical requirements)
- Equipment is from Esco Medical (international supplier specialising in ART laboratory systems)

---

## Appendix B — Full Chamber Directory

Each chamber's data, consolidated. Verify all with Madam before publication.

### B.1 Uttara Fertility Centre Limited (PRIMARY)
- **Role:** Primary practice; lab is here; all IVF cycles
- **Address:** Level 5, House 71, Gausul Azam Avenue, Sector 14, Uttara, Dhaka 1230
- **Schedule:** Sunday, Tuesday, Thursday — 11:00 AM to 1:00 PM
- **Primary Hotline:** 01743-243386 / 01743-253386 (verify which is current)
- **Alternative:** 01858-483722
- **Title held:** Chairman & Chief Consultant

### B.2 Hitech Multicare Hospital Limited
- **Role:** Consultation and follow-up (Cantonment area patients)
- **Address:** 164 East Kafrul Road, Dhaka Cantonment, Dhaka 1206
- **Schedule (verify):**
  - Saturday, Monday, Wednesday: 2:00 PM – 6:00 PM (per one card)
  - Sunday, Tuesday, Thursday, Friday: 3:00 PM – 8:00 PM (per one card)
  - Daily 4:30 PM – 6:30 PM (per public listing)
  - **Madam to confirm the current schedule**
- **Cell:** 01819-220507
- **Email:** dr.lizachy@gmail.com
- **Appointment Centre Hotline:** 01963-353097
- **Title held:** Obs & Gynae Specialist, Gynae Surgeon, Gynae Laparoscopic Surgeon & Infertility Specialist

### B.3 Ibn Sina Diagnostic & Consultation Centre, Uttara
- **Role:** Consultation
- **Address:** House 52, Garib-E-Newaz Avenue, Sector 13, Uttara, Dhaka 1230
- **Schedule (verify):**
  - Saturday, Monday, Wednesday: 7:00 PM – 9:00 PM, OR
  - Sunday, Tuesday, Thursday: 10:00 AM – 12:00 PM
- **Floor / Room:** 3rd Floor, Room 408 (per one listing); Room 409 (per another)
- **Booking:** 09610-009612
- **Title held:** Professor (Ex-AFMC CMH Dhaka)

### B.4 Ibn Sina Medical College Hospital, Kallyanpur
- **Role:** Consultation
- **Address:** 1/1B, Kallyanpur, Dhaka
- **Schedule:** Saturday, 6:00 PM – 8:00 PM
- **Clinical desk:** 01703-725590
- **Title held:** Professor

### B.5 Lubana General Hospital
- **Role:** Consultation
- **Address:** Building 1, Room 208, 8 Gausul Azam Avenue, Sector 13, Uttara, Dhaka 1230
- **Schedule:** Monday, Wednesday, Saturday — 8:00 PM – 9:00 PM
- **Call centre:** 09613-774488

### B.6 Centralized Booking (alternative)
- **Sasthya Seba helplines:** 09611-530530 or 01405-600700

**Verification action:** Madam needs to confirm which of these chambers are currently active and what the current schedules are. Public listings are inconsistent and likely outdated for several of them.

---

## Closing Note

This document is the spec. It's complete enough to build the demo, brief Madam, and hand to Claude Code for the production build. Treat it as a living document — update sections as Madam approves or revises, version it in git alongside the code, and use it as the single source of truth that everyone (you, Factorize, Nuvista, Madam, future hires) refers back to.

The strategic standard, repeated from earlier work and worth re-anchoring on: *Would Dr. Liza herself read this page, look at this photo, hear this chatbot reply, and feel it reflects her standards?* A Major General who founded a government IVF programme, trains examiners, and reviews for Cambridge University Press has very high standards. If a piece of the site can't pass that test, it gets rewritten. That's the daily quality bar.

Build with care.
