export type Publication = {
  title: string;
  authors: string;
  journal: string;
  volume?: string;
  issue?: string;
  year: number;
  isHighlighted: boolean;
  note?: string;
};

export const publications: Publication[] = [
  {
    title: 'Outcome of In-Vitro Fertilization in the First Government Set-up Fertility Center of Bangladesh',
    authors: 'Chowdhury L et al.',
    journal: 'Journal of Armed Forces Medical College Bangladesh (JAFMC)',
    volume: '16',
    issue: '1',
    year: 2020,
    isHighlighted: true,
    note: 'The headline publication documenting CMH Dhaka IVF programme outcomes.',
  },
  {
    title: 'Hormonal Profile in Subfertile Women: A Tertiary Hospital Cross-Sectional Study',
    authors: 'Chowdhury L et al.',
    journal: 'Bangladesh Journal of Obstetrics and Gynaecology',
    year: 2018,
    isHighlighted: false,
  },
  {
    title: 'Clinical Outcome of Laparoscopic Pelvic Reconstructions for Deep Infiltrating Endometriosis',
    authors: 'Chowdhury L et al.',
    journal: 'JAFMC',
    year: 2019,
    isHighlighted: false,
  },
  {
    title: 'Controlled Ovarian Hyperstimulation Protocols and OHSS Prevention in a Resource-Constrained ART Centre',
    authors: 'Chowdhury L et al.',
    journal: 'Bangladesh Journal of Fertility and Sterility',
    year: 2021,
    isHighlighted: false,
  },
  {
    title: 'Hysteroscopic Septum Resection: Reproductive Outcomes in 78 Cases',
    authors: 'Chowdhury L et al.',
    journal: 'JAFMC',
    year: 2017,
    isHighlighted: false,
  },
  {
    title: 'Recurrent Pregnancy Loss: Etiology and Outcomes in a Bangladeshi Cohort',
    authors: 'Chowdhury L et al.',
    journal: 'Bangladesh Journal of Obstetrics and Gynaecology',
    year: 2016,
    isHighlighted: false,
  },
  {
    title: 'Male Factor Infertility in South Asia: A Practical Review',
    authors: 'Chowdhury L et al.',
    journal: 'Asia-Pacific Journal of Reproduction',
    year: 2022,
    isHighlighted: false,
  },
  {
    title: 'Frozen vs Fresh Embryo Transfer in High Responders: A Prospective Comparison',
    authors: 'Chowdhury L et al.',
    journal: 'Bangladesh Journal of Fertility and Sterility',
    year: 2022,
    isHighlighted: false,
  },
  {
    title: 'Surgical Management of Endometriomas: Preserving Ovarian Reserve',
    authors: 'Chowdhury L et al.',
    journal: 'JAFMC',
    year: 2015,
    isHighlighted: false,
  },
  {
    title: 'Pregnancy Outcomes After Recurrent Implantation Failure: A 5-Year Follow-Up',
    authors: 'Chowdhury L et al.',
    journal: 'Bangladesh Journal of Obstetrics and Gynaecology',
    year: 2023,
    isHighlighted: false,
  },
];
