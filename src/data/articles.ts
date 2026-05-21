export type Article = {
  slug: string;
  title: string;
  titleBn: string;
  excerpt: string;
  topic: 'IVF' | 'Diagnosis' | 'Male Factor' | 'Lifestyle' | 'Emotional Health' | 'Surgery';
  readingTimeMin: number;
  publishedAt: string;
  openingParagraph: string;
};

export const articles: Article[] = [
  {
    slug: 'understanding-amh',
    title: 'Understanding AMH: What Your Ovarian Reserve Test Really Means',
    titleBn: 'AMH বোঝা: আপনার ডিম্বাশয়ের রিজার্ভ টেস্ট আসলে কী বলে',
    excerpt:
      'AMH is the single most informative test of your ovarian reserve, but it is also one of the most misunderstood. This article walks through what AMH measures, what it does not measure, how it changes with age, and the realistic limits of what an AMH number can predict about your fertility journey.',
    topic: 'Diagnosis',
    readingTimeMin: 7,
    publishedAt: '2026-04-12',
    openingParagraph:
      'When a patient walks into the consultation room with an AMH result, the first reaction is usually anxiety. Either the number is "low" and feels like a verdict, or it is "high" and feels like a different kind of warning. Both reactions miss what AMH actually tells us — and what it cannot.',
  },
  {
    slug: 'first-consultation',
    title: 'What to Expect at Your First Fertility Consultation',
    titleBn: 'প্রথম পরামর্শে কী আশা করবেন',
    excerpt:
      'The first consultation sets the tone for the entire journey. We use this conversation to understand your history, your expectations, and your fears — not to start treatment immediately. Here is how the first visit is structured at this practice, and what to bring with you.',
    topic: 'IVF',
    readingTimeMin: 6,
    publishedAt: '2026-04-05',
    openingParagraph:
      'Most couples arrive at the first fertility consultation with more anxiety than questions. That is normal. The conversation that day is not about starting a cycle — it is about understanding where you are, where you have been, and what genuinely makes sense as the next step.',
  },
  {
    slug: 'pcos-and-fertility',
    title: 'PCOS and Fertility: A Practical Guide for Bangladeshi Women',
    titleBn: 'PCOS ও ফার্টিলিটি: বাংলাদেশী নারীদের জন্য একটি ব্যবহারিক নির্দেশিকা',
    excerpt:
      'Polycystic ovary syndrome affects roughly one in ten women of reproductive age in Bangladesh. With the right diagnosis and a structured plan, the vast majority of women with PCOS conceive — many naturally. This article covers diagnostic criteria, treatment paths, and the lifestyle changes that genuinely matter.',
    topic: 'Diagnosis',
    readingTimeMin: 9,
    publishedAt: '2026-03-28',
    openingParagraph:
      'PCOS is one of the most over-diagnosed and under-treated conditions in fertility medicine. Many women are told they have PCOS based on a single ultrasound finding; many others have classic PCOS and have never had the diagnosis confirmed. This guide is for both groups.',
  },
  {
    slug: 'male-factor-infertility',
    title: 'When the Issue Is on the Other Side: Male Factor Infertility',
    titleBn: 'যখন সমস্যা অন্য দিকে: পুরুষ বন্ধ্যাত্ব',
    excerpt:
      'Roughly half of all infertility cases involve a significant male factor, yet semen analysis is often delayed or skipped in Bangladeshi practice. This article explains why early andrology workup matters, what a good semen analysis includes, and what the results actually mean for your treatment options.',
    topic: 'Male Factor',
    readingTimeMin: 8,
    publishedAt: '2026-03-15',
    openingParagraph:
      'Of all the conversations in the consultation room, the one about male factor infertility is the most often avoided. It should not be. The data is clear: in nearly half of couples seeking fertility care, there is a meaningful male factor contributing to the difficulty.',
  },
  {
    slug: 'lifestyle-fertility',
    title: 'The Five Lifestyle Changes That Actually Affect Fertility',
    titleBn: 'যে পাঁচটি জীবনযাত্রার পরিবর্তন প্রকৃতপক্ষে ফার্টিলিটিতে প্রভাব ফেলে',
    excerpt:
      'For every evidence-based lifestyle intervention, there are ten internet myths. This article narrows the field to five changes with real, measured effects on fertility outcomes — backed by published studies, not folklore.',
    topic: 'Lifestyle',
    readingTimeMin: 7,
    publishedAt: '2026-03-08',
    openingParagraph:
      'Patients arrive at fertility clinics having tried every herbal preparation, dietary fad, and "secret method" their relatives swore by. Some of these are harmless; some delay real treatment by months or years. This article focuses on the five things that the evidence actually supports.',
  },
  {
    slug: 'two-week-wait',
    title: 'Surviving the Two-Week Wait',
    titleBn: 'দুই সপ্তাহের অপেক্ষা: কীভাবে পার করবেন',
    excerpt:
      'The fortnight between embryo transfer and the pregnancy test is, for most patients, harder than the cycle itself. There is no clinical action to take and no information to gather — only waiting. Here is how to make it bearable.',
    topic: 'Emotional Health',
    readingTimeMin: 6,
    publishedAt: '2026-02-22',
    openingParagraph:
      'Almost every patient says some version of the same thing: the cycle itself, with all its injections and scans, was easier than the two weeks afterwards. The two-week wait is not just clinical — it is psychological, and it deserves the same attention as any other part of the journey.',
  },
  {
    slug: 'frozen-vs-fresh',
    title: 'Frozen vs Fresh Embryo Transfer: Why FET Often Wins',
    titleBn: 'ফ্রোজেন vs ফ্রেশ এমব্রিও ট্রান্সফার: কেন FET প্রায়ই ভালো',
    excerpt:
      'A decade ago, fresh embryo transfer was the default. Today, in many cases, freezing all embryos and transferring in a later cycle gives better results. This article explains why — and when fresh is still the right choice.',
    topic: 'IVF',
    readingTimeMin: 5,
    publishedAt: '2026-02-10',
    openingParagraph:
      'When patients hear the embryologist will freeze all their embryos and transfer in a later cycle, the first reaction is often disappointment — as if a delay means something has gone wrong. In most cases, it means the opposite.',
  },
  {
    slug: 'when-to-consider-ivf',
    title: 'When Is It Time to Consider IVF?',
    titleBn: 'কখন IVF বিবেচনা করার সময়?',
    excerpt:
      'IVF is neither the first option nor the last resort — it is a specific treatment for specific conditions. This article walks through the clinical triggers that suggest IVF is the next step, and the cases where simpler treatments deserve more time.',
    topic: 'IVF',
    readingTimeMin: 6,
    publishedAt: '2026-01-30',
    openingParagraph:
      'There is a wide gap between "we have been trying for a year" and "we need IVF." For some couples, that gap is bridged by a short course of investigations; for others, the clinical picture points directly to IVF. The decision depends on five factors.',
  },
  {
    slug: 'endometriosis-fertility',
    title: 'Endometriosis: The Surgery vs IVF Decision',
    titleBn: 'এন্ডোমেট্রিওসিস: সার্জারি না IVF — সিদ্ধান্ত',
    excerpt:
      'When endometriosis is found in a fertility workup, the next question is whether to operate first or proceed to IVF. The right answer depends on stage, age, pain severity, and ovarian reserve. This article unpacks the trade-offs.',
    topic: 'Surgery',
    readingTimeMin: 8,
    publishedAt: '2026-01-15',
    openingParagraph:
      'A laparoscopy report mentioning "endometriosis stage III" can feel like a setback. It is rarely the end of the road, but the decision that follows — surgery first, or IVF directly — has real consequences for both fertility outcomes and ovarian reserve.',
  },
  {
    slug: 'mental-health-fertility',
    title: 'Mental Health During Fertility Treatment Is Not Optional',
    titleBn: 'ফার্টিলিটি চিকিৎসায় মানসিক স্বাস্থ্য একটি বিকল্প নয়',
    excerpt:
      'Fertility treatment is one of the most psychologically demanding experiences a couple can go through. Looking after mental health is not a luxury during treatment — it is part of the treatment. Here is how to think about support, when to seek it, and what the practice does to help.',
    topic: 'Emotional Health',
    readingTimeMin: 7,
    publishedAt: '2026-01-02',
    openingParagraph:
      'When a couple starts fertility treatment, the conversation focuses on protocols, drugs, and timelines. The emotional dimension is often acknowledged briefly and then set aside. That is a mistake — and one we try not to make at this practice.',
  },
];
