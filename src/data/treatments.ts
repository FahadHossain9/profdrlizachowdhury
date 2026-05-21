export type Treatment = {
  slug: string;
  name: string;
  nameBn: string;
  icon: 'flask' | 'syringe' | 'baby' | 'male' | 'heart' | 'scope' | 'uterus';
  oneLiner: string;
  oneLinerBn: string;
  indications: string[];
  process: { step: number; title: string; description: string; duration: string }[];
  differentiator: string;
  cost: {
    rangeBdt: [number, number];
    included: string[];
    excluded: string[];
    note: string;
  };
  successRate: { band: string; rate: string; note: string }[];
  faqs: { q: string; a: string }[];
  bentoSize: 'tall' | 'wide' | 'short';
  isPriority: boolean;
};

export const treatments: Treatment[] = [
  {
    slug: 'ivf',
    name: 'IVF',
    nameBn: 'আইভিএফ',
    icon: 'flask',
    oneLiner: 'In-vitro fertilisation — for cases where natural conception is not possible.',
    oneLinerBn: 'যখন স্বাভাবিকভাবে গর্ভধারণ সম্ভব হয় না, তখন ইন-ভিট্রো ফার্টিলাইজেশন।',
    indications: [
      'Blocked or absent fallopian tubes',
      'Severe male factor infertility',
      'Unexplained infertility after 2+ years',
      'Failed ovulation induction or IUI cycles',
      'Advanced endometriosis affecting fertility',
    ],
    process: [
      { step: 1, title: 'Initial consultation', description: 'A focused conversation about your history, prior tests, and goals. Together we decide whether IVF is the right next step.', duration: '45–60 min' },
      { step: 2, title: 'Diagnostic workup', description: 'AMH, antral follicle count, semen analysis, hysterosalpingogram where indicated. Most tests complete within one week.', duration: '5–7 days' },
      { step: 3, title: 'Ovarian stimulation', description: 'Individualised protocol with OHSS-conscious dosing. Monitored with ultrasound and oestradiol every 2–3 days.', duration: '10–12 days' },
      { step: 4, title: 'Trigger and OPU', description: 'HCG or agonist trigger, then ultrasound-guided oocyte retrieval under brief sedation.', duration: 'Day procedure' },
      { step: 5, title: 'Fertilisation in the lab', description: 'Conventional IVF or ICSI depending on semen parameters, performed inside the ISO Class 3 ART workstation.', duration: 'Same day' },
      { step: 6, title: 'Embryo culture', description: 'Embryos grow in the Esco MIRI Multiroom Incubator — six sealed chambers so opening one does not disturb the others.', duration: '3–5 days' },
      { step: 7, title: 'Embryo transfer', description: 'Ultrasound-guided, single embryo unless clinically indicated otherwise. Two-person witnessing at every step.', duration: '20–30 min' },
      { step: 8, title: 'Two-week wait', description: 'Luteal support and the hardest part of the journey. We stay reachable throughout.', duration: '14 days' },
      { step: 9, title: 'Beta-hCG test', description: 'Quantitative blood test confirms pregnancy. Repeat in 48 hours to confirm doubling.', duration: '15 min' },
    ],
    differentiator:
      'Two principles guide every IVF cycle here: individualised stimulation (no two patients receive the same protocol) and OHSS-conscious dosing — an area of Dr. Liza\'s published research. The lab uses the Esco MIRI Multiroom Incubator and an ISO Class 3 ART workstation, and every embryo transfer is witnessed by two team members.',
    cost: {
      rangeBdt: [180000, 280000],
      included: ['Consultations', 'Monitoring scans', 'OPU and anaesthesia', 'Embryology lab fees', 'Embryo transfer'],
      excluded: ['Stimulation medications (vary by protocol)', 'Frozen embryo storage', 'Pre-implantation genetic testing'],
      note: 'Medication costs vary significantly by individual protocol. The figure below is the procedural fee range; a precise estimate is shared after diagnostics.',
    },
    successRate: [
      { band: 'Under 35', rate: '38–45%', note: 'per cycle live birth, with own gametes' },
      { band: '35–37', rate: '30–38%', note: 'per cycle' },
      { band: '38–40', rate: '20–28%', note: 'per cycle' },
      { band: '41–42', rate: '10–18%', note: 'per cycle; cumulative across cycles is higher' },
    ],
    faqs: [
      { q: 'How long does one IVF cycle take?', a: 'From the start of stimulation to the pregnancy test, about 4–5 weeks. The diagnostic week before that adds another 5–7 days.' },
      { q: 'Will I need more than one cycle?', a: 'It depends on your individual factors. We will discuss realistic expectations during your consultation and review after the first cycle if needed.' },
      { q: 'Is the procedure painful?', a: 'Stimulation involves daily injections; most patients tolerate them well. Oocyte retrieval is done under brief sedation. Embryo transfer is comparable to a smear test.' },
      { q: 'Can I work during the cycle?', a: 'Most patients work normally during stimulation. We recommend taking the OPU day and 1–2 days after off, and one day of rest after transfer.' },
      { q: 'What if the first cycle does not work?', a: 'We review every aspect — protocol, embryo quality, transfer conditions — and adjust the plan. A failed cycle is information, not the end.' },
      { q: 'Do you use donor eggs or sperm?', a: 'No. This practice provides ART services for married couples using their own gametes only, in alignment with Bangladeshi medical and bioethical standards.' },
      { q: 'How many embryos do you transfer?', a: 'Single embryo transfer in most cases. Twin pregnancies carry real risk; success rates with elective single transfer are excellent.' },
      { q: 'Can I freeze remaining embryos?', a: 'Yes, surplus good-quality embryos can be vitrified for future use. Storage fees are quoted separately.' },
    ],
    bentoSize: 'tall',
    isPriority: true,
  },
  {
    slug: 'icsi',
    name: 'ICSI',
    nameBn: 'আইসিএসআই',
    icon: 'syringe',
    oneLiner: 'A single sperm injected directly into an egg — for severe male factor infertility.',
    oneLinerBn: 'গুরুতর পুরুষ বন্ধ্যাত্বে একটি শুক্রাণু সরাসরি ডিম্বাণুতে প্রবেশ করানো হয়।',
    indications: [
      'Severely low sperm count or motility',
      'Abnormal sperm morphology',
      'Failed fertilisation in a previous conventional IVF cycle',
      'Surgically retrieved sperm (PESA / TESA)',
      'Use of frozen sperm where numbers are limited',
    ],
    process: [
      { step: 1, title: 'Initial consultation', description: 'Joint consultation with both partners. Andrology review is part of the plan from day one.', duration: '45–60 min' },
      { step: 2, title: 'Andrology workup', description: 'Detailed semen analysis. If needed, urological referral or hormone profile.', duration: '3–5 days' },
      { step: 3, title: 'Ovarian stimulation', description: 'Same individualised protocol as IVF.', duration: '10–12 days' },
      { step: 4, title: 'OPU and sperm preparation', description: 'On the same day: oocytes retrieved, sperm prepared by density-gradient or surgical retrieval if required.', duration: 'Day procedure' },
      { step: 5, title: 'ICSI in the lab', description: 'Single morphologically-best sperm selected and injected into each mature oocyte, under high-magnification microscope.', duration: 'Same day' },
      { step: 6, title: 'Embryo culture', description: 'Same Esco MIRI Multiroom Incubator culture as IVF.', duration: '3–5 days' },
      { step: 7, title: 'Embryo transfer', description: 'Ultrasound-guided, single embryo unless clinically indicated.', duration: '20–30 min' },
      { step: 8, title: 'Two-week wait and beta-hCG', description: 'Same protocol as IVF.', duration: '14 days' },
    ],
    differentiator:
      'ICSI is a precision procedure; outcomes depend on the embryologist\'s hands and the lab environment. Here, ICSI is performed inside the ISO Class 3 ART workstation by an embryology team trained in micromanipulation, and integrated with andrology workup so the cause of the male factor is addressed alongside.',
    cost: {
      rangeBdt: [200000, 310000],
      included: ['Consultations', 'Monitoring scans', 'OPU and anaesthesia', 'ICSI procedure', 'Embryology lab fees', 'Embryo transfer'],
      excluded: ['Stimulation medications', 'Surgical sperm retrieval (PESA/TESA)', 'Frozen embryo storage'],
      note: 'ICSI adds a procedural fee on top of standard IVF. Surgical sperm retrieval, when required, is quoted separately.',
    },
    successRate: [
      { band: 'Under 35', rate: '36–44%', note: 'per cycle live birth' },
      { band: '35–37', rate: '28–36%', note: 'per cycle' },
      { band: '38–40', rate: '18–26%', note: 'per cycle' },
    ],
    faqs: [
      { q: 'How is ICSI different from IVF?', a: 'In IVF, sperm and egg are placed together in a dish and fertilisation happens naturally. In ICSI, the embryologist selects a single sperm and injects it into the egg under a microscope.' },
      { q: 'Does ICSI cause birth defects?', a: 'Large studies show a small absolute increase compared to natural conception, mostly linked to the underlying male factor rather than the procedure itself. We discuss this honestly during consultation.' },
      { q: 'Will I always need ICSI?', a: 'Only if semen parameters or prior fertilisation history indicate it. We do not perform ICSI by default — only where clinically warranted.' },
      { q: 'Is ICSI more expensive than IVF?', a: 'A procedural fee is added on top of IVF. The exact figure is shared after andrology workup.' },
      { q: 'What if no sperm is found in the ejaculate?', a: 'Surgical retrieval (PESA / TESA) can recover sperm directly from the epididymis or testis in many cases.' },
      { q: 'How many eggs typically fertilise with ICSI?', a: 'Roughly 70–80% of mature eggs fertilise with ICSI, similar to or slightly better than conventional IVF in male-factor cases.' },
    ],
    bentoSize: 'tall',
    isPriority: true,
  },
  {
    slug: 'iui',
    name: 'IUI',
    nameBn: 'আইইউআই',
    icon: 'syringe',
    oneLiner: 'Intrauterine insemination — a simpler first-line treatment for selected couples.',
    oneLinerBn: 'নির্বাচিত দম্পতিদের জন্য সহজতর প্রাথমিক চিকিৎসা — ইন্ট্রাইউটেরাইন ইনসেমিনেশন।',
    indications: [
      'Mild male factor infertility',
      'Unexplained infertility, < 2 years duration',
      'Cervical factor infertility',
      'Mild ovulation disorders',
      'Single woman or same-sex couples (not offered at this practice)',
    ],
    process: [
      { step: 1, title: 'Consultation and workup', description: 'Confirm tubes are patent, semen parameters are sufficient for IUI, and stimulation plan if any.', duration: '1 week' },
      { step: 2, title: 'Ovulation induction', description: 'Oral or low-dose injectables if needed; monitored by ultrasound.', duration: '8–14 days' },
      { step: 3, title: 'Trigger', description: 'When the lead follicle is mature, an HCG trigger times ovulation precisely.', duration: '36 hours pre-IUI' },
      { step: 4, title: 'Sperm preparation', description: 'Density-gradient wash and concentration in the andrology lab.', duration: '60–90 min' },
      { step: 5, title: 'Insemination', description: 'Prepared sperm placed into the uterine cavity via a thin catheter. Outpatient, no sedation.', duration: '10–15 min' },
      { step: 6, title: 'Luteal support and wait', description: 'Progesterone support; pregnancy test 14 days later.', duration: '14 days' },
    ],
    differentiator:
      'IUI is offered selectively. Not every couple benefits, and we are honest when IUI is unlikely to work — we move directly to IVF in those cases. When IUI is indicated, monitoring is intensive and the andrology lab prepares each sample to international standards.',
    cost: {
      rangeBdt: [30000, 55000],
      included: ['Monitoring scans', 'Sperm preparation', 'Insemination procedure', 'Post-procedure progesterone protocol'],
      excluded: ['Oral or injectable stimulation medications', 'Diagnostic workup'],
      note: 'IUI is the most accessible ART option but has lower per-cycle success than IVF.',
    },
    successRate: [
      { band: 'Under 35', rate: '12–18%', note: 'per cycle' },
      { band: '35–37', rate: '8–12%', note: 'per cycle' },
      { band: '38+', rate: '4–8%', note: 'per cycle; consider IVF instead' },
    ],
    faqs: [
      { q: 'How many IUI cycles before moving to IVF?', a: 'Typically 3 cycles. If those do not succeed, the conversation moves to IVF.' },
      { q: 'Is IUI painful?', a: 'No. It feels similar to a smear test. Most patients return to normal activity the same day.' },
      { q: 'Can I do IUI in a natural cycle without stimulation?', a: 'Yes, in cases of confirmed ovulation. Success rates are lower; we discuss the trade-off.' },
      { q: 'How soon can I test after IUI?', a: 'Wait 14 days for a blood test. Earlier urine tests can mislead.' },
      { q: 'Why does IUI fail?', a: 'Most often: fertilisation does not happen, the embryo does not implant, or there are unidentified issues that only IVF reveals.' },
    ],
    bentoSize: 'short',
    isPriority: false,
  },
  {
    slug: 'pesa-tesa',
    name: 'Male Factor (PESA / TESA)',
    nameBn: 'পুরুষ বন্ধ্যাত্ব (PESA / TESA)',
    icon: 'male',
    oneLiner: 'Surgical sperm retrieval when none is found in the ejaculate.',
    oneLinerBn: 'বীর্যে শুক্রাণু না পাওয়া গেলে শল্যচিকিৎসার মাধ্যমে শুক্রাণু সংগ্রহ।',
    indications: [
      'Azoospermia confirmed on two semen analyses',
      'Obstructive azoospermia (vasectomy, blockage, infection sequel)',
      'Some cases of non-obstructive azoospermia after appropriate workup',
      'Failed prior retrieval attempts elsewhere',
    ],
    process: [
      { step: 1, title: 'Andrology consultation', description: 'Hormone profile, genetic workup where indicated, urological assessment.', duration: '1–2 weeks' },
      { step: 2, title: 'Decide PESA vs TESA', description: 'PESA (epididymal aspiration) is first-line for obstructive cases. TESA (testicular aspiration) for non-obstructive cases or PESA failure.', duration: '—' },
      { step: 3, title: 'Coordinate with the IVF cycle', description: 'Retrieval is timed to oocyte pickup so fresh sperm is available for ICSI on the same day.', duration: 'Cycle dependent' },
      { step: 4, title: 'Procedure', description: 'Outpatient, local or short general anaesthesia. PESA: 20–30 min. TESA: 30–45 min.', duration: 'Same day' },
      { step: 5, title: 'ICSI with retrieved sperm', description: 'Sperm injected into mature oocytes by the embryologist.', duration: 'Same day' },
    ],
    differentiator:
      'Male-factor cases are coordinated end-to-end here — andrology workup, retrieval, ICSI, and embryo culture all under one team. Many couples have been told "no sperm, no chance" elsewhere; in suitable cases that conversation can change.',
    cost: {
      rangeBdt: [40000, 75000],
      included: ['Retrieval procedure', 'Anaesthesia', 'Same-day sperm processing'],
      excluded: ['ICSI and IVF cycle (quoted separately)', 'Hospital stay if required'],
      note: 'This is the retrieval fee only. The IVF/ICSI cycle is quoted separately.',
    },
    successRate: [
      { band: 'Obstructive azoospermia', rate: '85–95%', note: 'sperm retrieval rate' },
      { band: 'Non-obstructive azoospermia', rate: '30–50%', note: 'depends on testicular histology' },
    ],
    faqs: [
      { q: 'Is the procedure painful?', a: 'Discomfort is mild and short-lived. Local anaesthesia is sufficient for most PESA cases; TESA is usually done under brief general anaesthesia.' },
      { q: 'How long is recovery?', a: 'Most patients return to office work the next day. Strenuous activity for 5–7 days.' },
      { q: 'If sperm is found, what happens next?', a: 'Sperm goes directly to the embryologist for ICSI. Surplus may be frozen for future cycles.' },
      { q: 'What if no sperm is found?', a: 'We discuss next options openly — repeat attempt with different technique, or donor pathways (which this practice does not offer; we can refer).' },
    ],
    bentoSize: 'short',
    isPriority: false,
  },
  {
    slug: 'recurrent-loss',
    name: 'Recurrent Pregnancy Loss',
    nameBn: 'বারবার গর্ভপাত',
    icon: 'heart',
    oneLiner: 'A structured workup and treatment plan after two or more miscarriages.',
    oneLinerBn: 'দুই বা তার বেশি গর্ভপাতের পর একটি কাঠামোবদ্ধ পরীক্ষা ও চিকিৎসা পরিকল্পনা।',
    indications: [
      'Two or more clinical miscarriages',
      'Pregnancy loss after IVF',
      'Late first-trimester or second-trimester losses',
      'Unexplained recurrent loss',
    ],
    process: [
      { step: 1, title: 'Detailed history', description: 'Past pregnancies, ages at loss, ultrasound and pathology findings reviewed together.', duration: '60 min' },
      { step: 2, title: 'Comprehensive workup', description: 'Thrombophilia screen, antiphospholipid antibodies, thyroid, prolactin, uterine cavity assessment (sonohysterogram or hysteroscopy), parental karyotype.', duration: '2–3 weeks' },
      { step: 3, title: 'Identify and treat', description: 'Treatable causes (e.g., antiphospholipid syndrome, septate uterus, thyroid dysfunction) are addressed before the next pregnancy.', duration: 'Varies' },
      { step: 4, title: 'Pregnancy support plan', description: 'Early monitoring, low-dose aspirin or heparin where indicated, mental-health support, scheduled scans.', duration: 'Throughout' },
    ],
    differentiator:
      'Recurrent loss is emotionally exhausting and often dismissed elsewhere as "bad luck." Here, every loss is investigated, every couple gets a written plan, and pregnancy after recurrent loss is monitored more intensively than a routine pregnancy.',
    cost: {
      rangeBdt: [25000, 60000],
      included: ['Consultations', 'Workup coordination', 'Pregnancy support plan'],
      excluded: ['Individual investigations (charged at diagnostic-centre rates)', 'Operative hysteroscopy if needed', 'IVF if indicated'],
      note: 'Workup costs depend on which investigations are clinically warranted.',
    },
    successRate: [
      { band: 'Identified cause', rate: '60–75%', note: 'live birth in the next pregnancy with treatment' },
      { band: 'Unexplained recurrent loss', rate: '50–65%', note: 'live birth with structured monitoring and support' },
    ],
    faqs: [
      { q: 'How long should we wait after a miscarriage to try again?', a: 'Medically, one normal cycle is sufficient. Emotionally, take the time you need — this varies for every couple.' },
      { q: 'Is recurrent loss a sign that IVF will fail too?', a: 'Not necessarily. Recurrent loss has many causes; some are addressed by IVF (e.g., with PGT-A), others by medical treatment, others by uterine surgery.' },
      { q: 'Should both partners be tested?', a: 'Yes. Parental karyotype is part of a complete workup.' },
      { q: 'Will the workup find a cause?', a: 'About 50–60% of cases have an identifiable cause after a complete workup.' },
    ],
    bentoSize: 'wide',
    isPriority: false,
  },
  {
    slug: 'laparoscopy',
    name: 'Fertility-Preserving Laparoscopy',
    nameBn: 'ফার্টিলিটি-প্রিজার্ভিং ল্যাপারোস্কপি',
    icon: 'scope',
    oneLiner: 'Minimal-access surgery for endometriosis, cysts, and adhesions affecting fertility.',
    oneLinerBn: 'বন্ধ্যাত্বে প্রভাব ফেলা এন্ডোমেট্রিওসিস, সিস্ট ও আঁশের জন্য মিনিমাল-অ্যাকসেস সার্জারি।',
    indications: [
      'Endometriosis (stages I–IV)',
      'Ovarian cysts impacting ovarian reserve',
      'Fibroids affecting cavity or implantation',
      'Tubal disease — adhesiolysis, salpingostomy',
      'Pelvic adhesions from prior surgery or infection',
    ],
    process: [
      { step: 1, title: 'Pre-operative consultation', description: 'Imaging review, fertility goals, plan to preserve ovarian reserve.', duration: '45 min' },
      { step: 2, title: 'Procedure', description: 'Laparoscopic excision (not just ablation) of endometriosis, cystectomy with care to preserve ovarian tissue, myomectomy or adhesiolysis as needed.', duration: '60–180 min' },
      { step: 3, title: 'Recovery', description: 'Most patients discharged same day or next morning. Office work in 5–7 days.', duration: '1 week' },
      { step: 4, title: 'Post-op fertility window', description: 'Best conception window is the first 6–12 months after surgery. Plan IVF or natural attempts during this window.', duration: '6–12 months' },
    ],
    differentiator:
      'The surgical principle here is fertility preservation: excision over ablation for endometriosis, multi-layered uterine reconstruction in myomectomy, and meticulous haemostasis to spare ovarian tissue. Membership in the Indian Association of Gynaecological Endoscopists (IAGE) and the Society of Laparoscopic Surgeons of Bangladesh (SLSB) reflects active practice in the field.',
    cost: {
      rangeBdt: [80000, 180000],
      included: ['Surgery', 'Anaesthesia', 'OT charges', 'Routine post-op care'],
      excluded: ['Hospital stay beyond one night', 'Post-op imaging if needed', 'Pathology'],
      note: 'Cost varies by procedure complexity and operating time.',
    },
    successRate: [
      { band: 'Stage I–II endometriosis', rate: '40–60%', note: 'natural conception within 12 months post-op' },
      { band: 'Stage III–IV endometriosis', rate: '30–45%', note: 'with IVF following surgery' },
      { band: 'Cystectomy for endometrioma', rate: '—', note: 'measured by AMH preservation and pregnancy outcome' },
    ],
    faqs: [
      { q: 'Is laparoscopy always needed before IVF?', a: 'No. Only when there is a specific surgically-treatable condition that affects implantation or oocyte quality.' },
      { q: 'How soon can I try to conceive after surgery?', a: 'Usually after 6–8 weeks, depending on the procedure.' },
      { q: 'Does cyst surgery damage ovarian reserve?', a: 'Any cyst surgery carries this risk. The technique used here is designed to minimise tissue loss, and AMH is monitored before and after.' },
      { q: 'What is the difference between excision and ablation?', a: 'Excision removes the endometriosis lesion entirely. Ablation burns the surface, often leaving deeper disease behind. Excision generally gives better fertility outcomes.' },
    ],
    bentoSize: 'short',
    isPriority: false,
  },
  {
    slug: 'hysteroscopy',
    name: 'Hysteroscopy for Fertility',
    nameBn: 'হিস্টেরোস্কপি (ফার্টিলিটির জন্য)',
    icon: 'uterus',
    oneLiner: 'Direct visualisation and correction of the uterine cavity.',
    oneLinerBn: 'জরায়ু গহ্বরের সরাসরি পরিদর্শন ও সংশোধন।',
    indications: [
      'Suspected septate or sub-septate uterus',
      'Endometrial polyps',
      'Submucosal fibroids',
      'Asherman syndrome (intrauterine adhesions)',
      'Recurrent implantation failure after IVF',
      'Recurrent pregnancy loss with suspected cavity factor',
    ],
    process: [
      { step: 1, title: 'Imaging review', description: 'Sonohysterogram or 3D ultrasound findings confirmed before scheduling.', duration: '—' },
      { step: 2, title: 'Procedure', description: 'Outpatient, brief anaesthesia. The cavity is inspected and any pathology resected in the same session.', duration: '30–60 min' },
      { step: 3, title: 'Recovery', description: 'Most patients return home the same day; office work next day.', duration: '24 hours' },
      { step: 4, title: 'Conception plan', description: 'Conception attempts or IVF transfer typically resume in the next 1–2 cycles.', duration: '4–8 weeks' },
    ],
    differentiator:
      'Hysteroscopy is underused in Bangladesh; many couples reach IVF without ever having had their cavity inspected. Where there is a suggestion of a cavity factor, we resolve it before transfer rather than after a failed cycle.',
    cost: {
      rangeBdt: [45000, 90000],
      included: ['Hysteroscopy', 'Anaesthesia', 'Same-session pathology removal'],
      excluded: ['Histopathology', 'Repeat hysteroscopy if needed'],
      note: 'Operative hysteroscopy costs more than diagnostic; quoted after imaging review.',
    },
    successRate: [
      { band: 'Septum resection before IVF', rate: '+15–20%', note: 'improvement in live birth rate' },
      { band: 'Polyp removal', rate: '+10–15%', note: 'improvement in implantation' },
    ],
    faqs: [
      { q: 'Is hysteroscopy painful?', a: 'It is brief and done under anaesthesia. Mild cramping for 24–48 hours afterwards is normal.' },
      { q: 'Why was this not done at my last clinic?', a: 'Many clinics skip hysteroscopy if the basic ultrasound looks normal. We use it more proactively when there is unexplained IVF failure or recurrent loss.' },
      { q: 'Can I conceive in the same cycle?', a: 'Most patients wait one to two cycles for the cavity to heal before the next conception attempt.' },
    ],
    bentoSize: 'short',
    isPriority: false,
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
