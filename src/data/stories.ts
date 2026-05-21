export type Story = {
  slug: string;
  headline: string;
  initials: string;
  treatment: 'IVF' | 'ICSI' | 'IUI' | 'Laparoscopy + IVF' | 'Recurrent Loss Care';
  year: number;
  outcome: 'pregnancy' | 'pregnancy-after-multiple-cycles' | 'continuing-care';
  pullQuote: string;
  narrative: string;
  closingFromDoctor: string;
  isPlaceholder: true;
};

export const stories: Story[] = [
  {
    slug: 'after-two-iui-cycles',
    headline: 'After two failed IUI cycles, IVF gave us our daughter.',
    initials: 'S.R. & M.R.',
    treatment: 'IVF',
    year: 2024,
    outcome: 'pregnancy',
    pullQuote:
      'For three years we were told to wait, to relax, to try herbal remedies. The first thing Madam said was: let\'s find out what is actually happening.',
    narrative:
      'We had been married seven years. The first year we were not trying — we were settling into life. The next two years we were quietly hopeful. By the fourth year we were both quietly anxious, though neither of us would say it out loud. By the fifth year we had been to two different doctors, both of whom told us to wait, to relax, to try a list of herbal preparations that I now know change nothing.\n\nA friend whose cousin had been treated by Madam suggested we book a consultation. I remember walking into UFCL feeling defeated already. Madam did not start by writing a prescription. She asked us, in detail, what we had already tried, what had been investigated, and what we understood about why we had not conceived. Then she ordered the workup that nobody else had ordered.\n\nMy AMH came back lower than expected for my age. My husband\'s semen analysis showed moderately low motility. Two issues, neither catastrophic, but together significant. Madam recommended IUI first. We tried two cycles. Neither worked. After the second failed cycle, she sat us down and said honestly: the data does not support a third IUI for your case. She recommended IVF.\n\nThe IVF cycle itself was easier than I feared. I had read terrifying stories online. The injections were uncomfortable but not painful. The retrieval was over before I had finished worrying about it. The wait afterwards was the hardest part. I called the clinic three times in two weeks, and each time someone answered patiently.\n\nThe beta-hCG came back positive. Our daughter is now nine months old.',
    closingFromDoctor:
      'A typical case of two contributing factors that together cross the threshold for IVF. The strongest predictor of a good outcome here was not the lab — it was the couple\'s willingness to do the workup before treating empirically.',
    isPlaceholder: true,
  },
  {
    slug: 'icsi-after-azoospermia',
    headline: 'They told us there was no sperm. They were wrong about what came next.',
    initials: 'R.K. & N.K.',
    treatment: 'ICSI',
    year: 2023,
    outcome: 'pregnancy',
    pullQuote:
      'My husband had been told he was the problem. That kind of sentence can break a marriage. Madam refused to accept the verdict without checking.',
    narrative:
      'My husband\'s semen analysis showed no sperm. Two analyses. He was thirty-four. The first doctor we saw said our options were donor sperm or adoption. We are observant Muslims and donor pathways were not something we would consider. We went home and did not speak about it for two months.\n\nMadam was the third opinion. She did not promise anything. She ordered a hormone profile and asked about my husband\'s medical history more carefully than anyone had before. He had had a childhood inguinal hernia repair that no one had connected to fertility. She suggested surgical sperm retrieval — PESA, she explained, would likely succeed in his case.\n\nThe procedure took twenty minutes. The embryologist found sperm. They performed ICSI on the same day. Of nine mature eggs, seven fertilised.\n\nWe are now expecting twins. We are also frightened, hopeful, and grateful in roughly equal measures.',
    closingFromDoctor:
      'Obstructive azoospermia after surgical history is a very specific picture, and retrieval success in those cases is over ninety percent. The hardest part of this case was not the procedure — it was the time lost to a verdict given too quickly.',
    isPlaceholder: true,
  },
  {
    slug: 'recurrent-loss',
    headline: 'After four miscarriages, we needed someone to investigate, not console.',
    initials: 'F.A. & T.A.',
    treatment: 'Recurrent Loss Care',
    year: 2024,
    outcome: 'pregnancy-after-multiple-cycles',
    pullQuote:
      'Everyone said "it just happens sometimes." Madam said "let us find out why it keeps happening."',
    narrative:
      'Between 2021 and 2023 I had four miscarriages. Three were in the first trimester, one was a missed miscarriage at fourteen weeks. After the fourth, my husband and I were no longer functional. The advice from family and from previous doctors was always some version of "it just happens — keep trying."\n\nMadam was different. She told us, kindly but plainly, that four losses was not bad luck. It deserved a structured workup. Over the next three weeks I had thrombophilia testing, antiphospholipid antibodies, thyroid panel, a sonohysterogram, and parental karyotyping. My husband\'s testing was normal. Mine showed antiphospholipid syndrome.\n\nWith a diagnosis, there was a plan. The next pregnancy was conceived naturally. I started low-dose aspirin before conception and heparin from a positive test. The pregnancy was monitored intensively. Our son was born at thirty-seven weeks. He is eight months old now and unaware that he is a small miracle.',
    closingFromDoctor:
      'Antiphospholipid syndrome is one of the most treatable causes of recurrent loss. The treatment is straightforward. The hard part is getting the workup done at all — too many couples are told their losses are "unexplained" before a complete investigation has been performed.',
    isPlaceholder: true,
  },
  {
    slug: 'late-thirties-ivf',
    headline: 'I was thirty-nine. I had stopped believing it could happen.',
    initials: 'A.M.',
    treatment: 'IVF',
    year: 2024,
    outcome: 'pregnancy',
    pullQuote:
      'The first doctor told me, gently, to consider that biology had moved on. Madam said: let us see what your biology is actually doing.',
    narrative:
      'I married late, at thirty-six. We tried for two years with no success. By the time I came to Madam, I was thirty-nine and emotionally prepared for a no. I had read enough about age-related fertility decline to expect that conversation.\n\nMadam ran the workup without commentary. My AMH was lower than ideal but not unusable. My uterine cavity was normal. My husband\'s parameters were good. She told me, honestly, that my odds per cycle were lower than a twenty-eight-year-old\'s — but they were not zero, and they were better than I had been led to believe.\n\nWe did one IVF cycle. Five eggs retrieved, three fertilised, one good-quality blastocyst. A single embryo transfer.\n\nMy son is now four months old. He will be the only child I have. That is something I have accepted with more peace than I expected.',
    closingFromDoctor:
      'Single-blastocyst transfer in the late thirties has better outcomes than people assume, but the realistic conversation about diminishing reserves must happen up front. Honesty about probabilities serves the patient better than false reassurance — or false discouragement.',
    isPlaceholder: true,
  },
  {
    slug: 'endometriosis-and-ivf',
    headline: 'Stage IV endometriosis. Surgery first, then IVF. Then our daughter.',
    initials: 'N.S. & R.S.',
    treatment: 'Laparoscopy + IVF',
    year: 2023,
    outcome: 'pregnancy',
    pullQuote:
      'The pain I had endured since fifteen turned out to have a name. The name turned out to be treatable.',
    narrative:
      'I had been dismissed for years. "Period pain is normal." It was not normal — it was, eventually, diagnosed as stage IV endometriosis with bilateral endometriomas. By then I was twenty-nine and had been trying to conceive for three years.\n\nMadam laid out two paths. Path one: proceed directly to IVF, accepting that endometriosis might affect implantation. Path two: laparoscopic excision first, with the understanding that surgery on endometriomas would temporarily lower my ovarian reserve. We chose path two, knowing it added six months to the timeline.\n\nThe surgery was meticulous — Madam emphasised excision over ablation, and her words about preserving ovarian tissue stayed with me. Three months after surgery, my pain was the lowest it had been in fifteen years. Six months after surgery, we did an IVF cycle. Four eggs, two embryos, one transfer.\n\nOur daughter is two years old.',
    closingFromDoctor:
      'Stage IV endometriosis cases are surgical decisions as much as fertility decisions. The trade-off between immediate ovarian preservation and downstream implantation environment must be discussed with each couple individually — there is no template.',
    isPlaceholder: true,
  },
  {
    slug: 'iui-success-first-cycle',
    headline: 'IUI in our first cycle. Sometimes the simple plan works.',
    initials: 'M.H. & S.H.',
    treatment: 'IUI',
    year: 2025,
    outcome: 'pregnancy',
    pullQuote:
      'We came prepared for IVF. Madam looked at the workup and said: not yet. Let us try simpler first.',
    narrative:
      'We had been trying for fourteen months. My cycles were irregular, my husband\'s analysis was normal except for slightly low motility. I had assumed IVF would be the recommendation and had emotionally prepared for it. I was relieved and also slightly suspicious when Madam suggested IUI.\n\nShe explained why. My fallopian tubes were patent, my cavity was clean, my husband\'s sperm count was sufficient for IUI to be biologically reasonable. The cycle was simple. Letrozole for five days, two monitoring scans, an HCG trigger, and the IUI itself.\n\nThe pregnancy test was positive at fourteen days. We were stunned. Our son was born last month.\n\nI tell this story because not every fertility journey is dramatic. Sometimes the answer is the simpler one — but you only know that if someone takes the time to assess properly first.',
    closingFromDoctor:
      'Per-cycle IUI success rates are modest, but for the right patient profile it remains the first-line option. This couple\'s case was unambiguous; IVF would have been over-treatment.',
    isPlaceholder: true,
  },
];
