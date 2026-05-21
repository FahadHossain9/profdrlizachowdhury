export type ChamberSlug =
  | 'ufcl'
  | 'hitech'
  | 'ibn-sina-uttara'
  | 'ibn-sina-kallyanpur'
  | 'lubana'
  | 'unknown';

// Verify with Madam before launch. Number from master spec Appendix B.1.
const WHATSAPP_NUMBER = '8801743243386';

const messageFor: Record<ChamberSlug, string> = {
  ufcl: "Assalamualaikum, I'd like to book a consultation at the Uttara Fertility Centre (UFCL).",
  hitech: "Assalamualaikum, I'd like to book a consultation at Hitech Multicare.",
  'ibn-sina-uttara': "Assalamualaikum, I'd like to book a consultation at Ibn Sina Uttara.",
  'ibn-sina-kallyanpur': "Assalamualaikum, I'd like to book a consultation at Ibn Sina Kallyanpur.",
  lubana: "Assalamualaikum, I'd like to book a consultation at Lubana General Hospital.",
  unknown: "Assalamualaikum, I'd like to book a consultation with Dr. Liza Chowdhury.",
};

export function whatsappLink(chamber: ChamberSlug = 'unknown'): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageFor[chamber])}`;
}

export const hotline = '+880 1743-243386';
