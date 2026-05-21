export type LabFeature = {
  slug: string;
  title: string;
  oneLine: string;
  body: string;
  videoSlot: string;
};

export const labFeatures: LabFeature[] = [
  {
    slug: 'esco-miri',
    title: 'The Esco MIRI Multiroom Incubator',
    oneLine: 'Six independent, sealed chambers — opening one does not disturb the others.',
    body:
      'In a conventional shared incubator, every door opening drops the temperature and CO₂ for every embryo inside. The Esco MIRI separates each patient into its own sealed chamber, with its own heating, humidity, and gas environment. Each chamber has heated lids and individual gas lines. The result is a more stable embryo environment, particularly during the critical 3–5 day culture window.',
    videoSlot: 'esco-celculture',
  },
  {
    slug: 'iso-class-3',
    title: 'ISO Class 3 ART Workstation',
    oneLine: 'Our laboratory air is cleaner than most operating theatres.',
    body:
      'The ISO 14644 cleanroom standard sets allowable particle counts per cubic metre. Most clinical operating theatres meet ISO Class 7 or 8. Our ART workstation meets ISO Class 3 — roughly four orders of magnitude cleaner. This matters because embryos cultured in cleaner air implant at higher rates. The cleanroom is the foundation of every other lab process.',
    videoSlot: 'miri-workstation',
  },
  {
    slug: 'gas-control',
    title: 'Customised CO₂ and N₂ gas control',
    oneLine: 'A gas environment that mimics the body, not the atmosphere.',
    body:
      'Inside the body, the embryo develops in a low-oxygen, controlled-CO₂ environment. Standard incubation uses room-air oxygen, which is several times higher than physiological. Our gas mixing reduces O₂ and tunes CO₂ to closer to natural conditions — a small change with measurable improvements in embryo quality.',
    videoSlot: 'esco-controls',
  },
  {
    slug: 'embryology-team',
    title: 'The embryology team',
    oneLine: 'Hands matter as much as machines.',
    body:
      'IVF outcomes are decided as much in the lab as in the consultation room. Our embryology team trained at internationally accredited centres and performs all procedures — fertilisation, ICSI, embryo culture, vitrification, transfer preparation — in-house. Every step is logged. Every transfer is double-witnessed.',
    videoSlot: 'microscope',
  },
  {
    slug: 'quality-control',
    title: 'Quality control protocols',
    oneLine: 'Witnessing, traceability, daily checks.',
    body:
      'Two-person witnessing is mandatory at every step that involves moving gametes or embryos. Each patient\'s samples are labelled, scanned, and verified by a second team member before any transfer. Daily lab checks log temperature, humidity, gas concentrations, and incubator status. The QC log is open for clinical review.',
    videoSlot: 'ot-corridor',
  },
  {
    slug: 'virtual-tour',
    title: 'Virtual tour',
    oneLine: 'A walk through the lab, narrated.',
    body:
      'A short video tour of the facility — from the entrance to the cleanroom to the cryostorage area — narrated by the embryology team. Best watched before your first consultation.',
    videoSlot: 'lab-walkthrough',
  },
];
