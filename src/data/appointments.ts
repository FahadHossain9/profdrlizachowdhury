export type AppointmentStatus = 'new' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';

export type Appointment = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  chamberSlug: string;
  treatmentInterest?: string;
  message?: string;
  status: AppointmentStatus;
  submittedAt: string; // ISO timestamp
  notes?: string;      // internal admin note
};

export const appointments: Appointment[] = [
  {
    id: 'apt-demo-1',
    name: 'Tasnim & Rashed',
    phone: '01711-234567',
    email: 'tasnim.ahmed@example.bd',
    chamberSlug: 'ufcl',
    treatmentInterest: 'IVF',
    message: 'Three years of trying. Two prior IUI cycles elsewhere did not work. Would like a second opinion before considering IVF.',
    status: 'new',
    submittedAt: '2026-05-22T09:42:00.000Z',
  },
  {
    id: 'apt-demo-2',
    name: 'Rumana K.',
    phone: '01919-887766',
    chamberSlug: 'ufcl',
    treatmentInterest: 'Recurrent Pregnancy Loss',
    message: 'Two consecutive miscarriages, both in first trimester. No clear cause found yet.',
    status: 'contacted',
    submittedAt: '2026-05-21T14:10:00.000Z',
    notes: 'Coordinator called — patient confirmed available Thursday afternoon. Pending chamber confirmation.',
  },
  {
    id: 'apt-demo-3',
    name: 'Mr. & Mrs. Chowdhury',
    phone: '01755-554433',
    email: 'a.chowdhury@example.bd',
    chamberSlug: 'hitech',
    treatmentInterest: 'Male Factor (PESA / TESA)',
    message: 'Azoospermia confirmed on two analyses. Cardiac patient, prefer Hitech chamber.',
    status: 'scheduled',
    submittedAt: '2026-05-19T11:20:00.000Z',
    notes: 'Booked Saturday 2 PM at Hitech. Confirmed via WhatsApp.',
  },
];
