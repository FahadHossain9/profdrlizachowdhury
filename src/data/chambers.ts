export type Chamber = {
  slug: string;
  name: string;
  shortName: string;
  role: string;
  address: string;
  area: string;
  city: string;
  schedule: { day: string; time: string }[];
  hotline: string;
  alternateHotline?: string;
  whatToBringFirst: string[];
  whatToBringFollowUp: string[];
  parkingNotes: string;
  geo: { lat: number; lng: number };
  titleHeldHere: string;
  isPrimary: boolean;
  mapPosition: { x: number; y: number }; // % positions on stylised Dhaka SVG
};

export const chambers: Chamber[] = [
  {
    slug: 'ufcl',
    name: 'Uttara Fertility Centre Limited',
    shortName: 'UFCL',
    role: 'Primary practice — IVF cycles and embryology lab',
    address: 'Level 5, House 71, Gausul Azam Avenue, Sector 14, Uttara, Dhaka 1230',
    area: 'Uttara, Sector 14',
    city: 'Dhaka',
    schedule: [
      { day: 'Sunday', time: '11:00 AM – 1:00 PM' },
      { day: 'Tuesday', time: '11:00 AM – 1:00 PM' },
      { day: 'Thursday', time: '11:00 AM – 1:00 PM' },
    ],
    hotline: '01743-243386',
    alternateHotline: '01858-483722',
    whatToBringFirst: [
      'All previous medical records, scans and prescriptions',
      'Any prior fertility test reports (semen analysis, AMH, HSG)',
      'A list of medications either partner is taking',
      'Both partners attending, where possible',
    ],
    whatToBringFollowUp: [
      'Most recent scan and hormone reports',
      'Cycle diary if you have been tracking',
      'Any questions written down — appointments move quickly',
    ],
    parkingNotes:
      'Building parking is limited; metered street parking on Gausul Azam Avenue. Ride-share drop-off recommended.',
    geo: { lat: 23.8744, lng: 90.3978 },
    titleHeldHere: 'Chairman & Chief Consultant',
    isPrimary: true,
    mapPosition: { x: 60, y: 18 },
  },
  {
    slug: 'hitech',
    name: 'Hitech Multicare Hospital Limited',
    shortName: 'Hitech Multicare',
    role: 'Consultation and follow-up — Cantonment patients',
    address: '164 East Kafrul Road, Dhaka Cantonment, Dhaka 1206',
    area: 'Dhaka Cantonment',
    city: 'Dhaka',
    schedule: [
      { day: 'Saturday', time: '2:00 PM – 6:00 PM' },
      { day: 'Monday', time: '2:00 PM – 6:00 PM' },
      { day: 'Wednesday', time: '2:00 PM – 6:00 PM' },
    ],
    hotline: '01963-353097',
    alternateHotline: '01819-220507',
    whatToBringFirst: [
      'Referral letter if from a military medical officer',
      'Previous records and scans',
      'Both partners where possible',
    ],
    whatToBringFollowUp: ['Most recent reports', 'Cycle diary if tracking'],
    parkingNotes: 'On-site parking available within hospital compound.',
    geo: { lat: 23.8261, lng: 90.4079 },
    titleHeldHere: 'Obs & Gynae Specialist, Gynae Laparoscopic Surgeon & Infertility Specialist',
    isPrimary: false,
    mapPosition: { x: 56, y: 50 },
  },
  {
    slug: 'ibn-sina-uttara',
    name: 'Ibn Sina Diagnostic & Consultation Centre, Uttara',
    shortName: 'Ibn Sina Uttara',
    role: 'Consultation',
    address: 'House 52, Garib-E-Newaz Avenue, Sector 13, Uttara, Dhaka 1230',
    area: 'Uttara, Sector 13',
    city: 'Dhaka',
    schedule: [
      { day: 'Sunday', time: '10:00 AM – 12:00 PM' },
      { day: 'Tuesday', time: '10:00 AM – 12:00 PM' },
      { day: 'Thursday', time: '10:00 AM – 12:00 PM' },
    ],
    hotline: '09610-009612',
    whatToBringFirst: ['Previous medical records', 'Any prior fertility workup'],
    whatToBringFollowUp: ['Most recent reports'],
    parkingNotes: 'Limited on-site parking; street parking available.',
    geo: { lat: 23.875, lng: 90.39 },
    titleHeldHere: 'Professor (Ex-AFMC CMH Dhaka)',
    isPrimary: false,
    mapPosition: { x: 72, y: 24 },
  },
  {
    slug: 'ibn-sina-kallyanpur',
    name: 'Ibn Sina Medical College Hospital',
    shortName: 'Ibn Sina Kallyanpur',
    role: 'Consultation',
    address: '1/1B, Kallyanpur, Dhaka',
    area: 'Kallyanpur',
    city: 'Dhaka',
    schedule: [{ day: 'Saturday', time: '6:00 PM – 8:00 PM' }],
    hotline: '01703-725590',
    whatToBringFirst: ['Previous medical records', 'Any prior fertility workup'],
    whatToBringFollowUp: ['Most recent reports'],
    parkingNotes: 'Hospital parking available.',
    geo: { lat: 23.7892, lng: 90.3631 },
    titleHeldHere: 'Professor',
    isPrimary: false,
    mapPosition: { x: 40, y: 56 },
  },
  {
    slug: 'lubana',
    name: 'Lubana General Hospital',
    shortName: 'Lubana',
    role: 'Consultation',
    address: 'Building 1, Room 208, 8 Gausul Azam Avenue, Sector 13, Uttara, Dhaka 1230',
    area: 'Uttara, Sector 13',
    city: 'Dhaka',
    schedule: [
      { day: 'Monday', time: '8:00 PM – 9:00 PM' },
      { day: 'Wednesday', time: '8:00 PM – 9:00 PM' },
      { day: 'Saturday', time: '8:00 PM – 9:00 PM' },
    ],
    hotline: '09613-774488',
    whatToBringFirst: ['Previous medical records'],
    whatToBringFollowUp: ['Most recent reports'],
    parkingNotes: 'Street parking nearby; on-site spaces limited.',
    geo: { lat: 23.8718, lng: 90.3936 },
    titleHeldHere: 'Consultant',
    isPrimary: false,
    mapPosition: { x: 48, y: 28 },
  },
];

export const getChamber = (slug: string) => chambers.find((c) => c.slug === slug);
export const primaryChamber = chambers.find((c) => c.isPrimary)!;
