export type JourneyStage = {
  index: number;
  title: string;
  subtitle: string;
  duration: string;
  details: string[];
};

export const journeyStages: JourneyStage[] = [
  {
    index: 1,
    title: 'First Consultation',
    subtitle: 'A conversation, not a prescription',
    duration: '45–60 minutes',
    details: [
      'A focused conversation about your history and goals',
      'Review of any prior tests or treatments',
      'Honest discussion of what is realistic',
      'No clinical procedures on this first visit',
    ],
  },
  {
    index: 2,
    title: 'Diagnostic Week',
    subtitle: 'Find out what is actually happening',
    duration: '5–7 days',
    details: [
      'AMH, hormone profile, AFC scan for the woman',
      'Semen analysis for the man',
      'HSG or sonohysterogram where indicated',
      'Reports reviewed together in a follow-up consultation',
    ],
  },
  {
    index: 3,
    title: 'Treatment Planning',
    subtitle: 'A plan written for you, not from a template',
    duration: '1 session',
    details: [
      'Options laid out with realistic outcomes',
      'Costs discussed openly, no surprises',
      'Decisions made together, not handed down',
      'Written plan you can take home',
    ],
  },
  {
    index: 4,
    title: 'During the Cycle',
    subtitle: 'Routine, not crisis',
    duration: '2–6 weeks depending on treatment',
    details: [
      'Monitoring visits 2–3 times per week during stimulation',
      'Most patients continue working normally',
      'Daily injections (when applicable) — we teach you how',
      'A direct line to the team for any concern',
    ],
  },
  {
    index: 5,
    title: 'The Two-Week Wait',
    subtitle: 'The hardest part — and we know it',
    duration: '14 days',
    details: [
      'Luteal-phase support continues',
      'No early home pregnancy tests recommended',
      'Light activity, normal eating, no special diet required',
      'Reach out whenever you need to — emotional support is part of the plan',
    ],
  },
  {
    index: 6,
    title: 'After the Result',
    subtitle: 'Both paths are part of the journey',
    duration: '—',
    details: [
      'Positive: follow-up scans at 6–7 weeks, then ongoing pregnancy care',
      'Negative: a structured conversation about what we learned',
      'Frozen embryos available for future cycles where applicable',
      'No couple ever walks out alone, in either outcome',
    ],
  },
];
