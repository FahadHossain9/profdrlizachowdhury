export type Video = {
  idx: number;
  day: 1 | 2;
  title: string;
  description: string;
  topic: 'awareness' | 'diagnosis' | 'treatment' | 'trust';
  estimatedDuration: string;
};

export const videos: Video[] = [
  // Shoot Day 1 — Awareness & Education
  { idx: 1, day: 1, title: 'বন্ধ্যাত্ব মানে সব শেষ নয় — আশা আছে', description: 'বন্ধ্যাত্বের নির্ণয় শুনে অনেকেই ভেঙে পড়েন। কিন্তু আজ চিকিৎসা অনেক এগিয়েছে।', topic: 'awareness', estimatedDuration: '3 min' },
  { idx: 2, day: 1, title: 'বাচ্চা হচ্ছে না — শীর্ষ ৭টি কারণ', description: 'গর্ভধারণে সমস্যার সবচেয়ে সাধারণ সাতটি চিকিৎসাযোগ্য কারণ।', topic: 'diagnosis', estimatedDuration: '4 min' },
  { idx: 3, day: 1, title: 'PCOS — কেন হয়, কীভাবে চিকিৎসা', description: 'পলিসিস্টিক ওভারি সিনড্রোমের কারণ ও আধুনিক চিকিৎসা।', topic: 'diagnosis', estimatedDuration: '4 min' },
  { idx: 4, day: 1, title: 'পুরুষের বন্ধ্যাত্ব — চুপ থাকার বিষয় না', description: 'বন্ধ্যাত্বে পুরুষের ভূমিকা প্রায় অর্ধেক — পরীক্ষা ও চিকিৎসা সম্পর্কে।', topic: 'awareness', estimatedDuration: '3 min' },
  { idx: 5, day: 1, title: 'Endometriosis এবং fertility — কী করব?', description: 'এন্ডোমেট্রিওসিস কীভাবে fertility প্রভাবিত করে এবং সার্জারি বনাম IVF।', topic: 'diagnosis', estimatedDuration: '4 min' },
  { idx: 6, day: 1, title: 'বয়স ৩৫ এর পর — এখনও সম্ভব?', description: '৩৫-এর পর গর্ভধারণের বাস্তবতা ও সফল কৌশল।', topic: 'awareness', estimatedDuration: '4 min' },
  { idx: 7, day: 1, title: 'বার বার মিসক্যারেজ — কেন এবং কী করব', description: 'বারবার গর্ভপাত হলে কোন পরীক্ষাগুলো অপরিহার্য।', topic: 'diagnosis', estimatedDuration: '4 min' },
  { idx: 8, day: 1, title: 'AMH টেস্ট কী এবং রিপোর্ট কীভাবে পড়ব', description: 'ডিম্বাশয়ের রিজার্ভ বোঝার সবচেয়ে গুরুত্বপূর্ণ টেস্ট।', topic: 'diagnosis', estimatedDuration: '3 min' },
  { idx: 9, day: 1, title: 'ডায়েট ও lifestyle — fertility বাড়াতে', description: 'প্রমাণিত পুষ্টি ও জীবনযাত্রার পরিবর্তন যা সত্যিই কাজ করে।', topic: 'awareness', estimatedDuration: '4 min' },
  { idx: 10, day: 1, title: 'ভারত যাওয়া কি লাগবে? — বাংলাদেশে কী সম্ভব', description: 'বাংলাদেশে এখন কী চিকিৎসা পাওয়া যায়, কখন বিদেশে যাওয়া যৌক্তিক।', topic: 'awareness', estimatedDuration: '4 min' },

  // Shoot Day 2 — Treatment & Trust
  { idx: 11, day: 2, title: 'IVF আসলে কী? পুরো প্রক্রিয়া step-by-step', description: 'প্রথম পরামর্শ থেকে গর্ভধারণ পর্যন্ত পুরো IVF যাত্রা।', topic: 'treatment', estimatedDuration: '4 min' },
  { idx: 12, day: 2, title: 'ICSI vs IVF — কোনটা আমার দরকার?', description: 'কখন ICSI প্রয়োজন এবং কখন IVF যথেষ্ট।', topic: 'treatment', estimatedDuration: '3 min' },
  { idx: 13, day: 2, title: 'IUI প্রক্রিয়া — কাদের জন্য, সফলতার হার', description: 'IUI উপযুক্ত কাদের জন্য এবং বাস্তব সফলতার হার।', topic: 'treatment', estimatedDuration: '3 min' },
  { idx: 14, day: 2, title: 'Laparoscopy fertility-এর জন্য কখন দরকার', description: 'কখন সার্জারি IVF-এর আগে করা উচিত।', topic: 'treatment', estimatedDuration: '4 min' },
  { idx: 15, day: 2, title: 'Frozen embryo transfer — সুবিধা ও অসুবিধা', description: 'FET কেন প্রায়ই ফ্রেশ ট্রান্সফারের চেয়ে ভালো ফলাফল দেয়।', topic: 'treatment', estimatedDuration: '3 min' },
  { idx: 16, day: 2, title: 'IVF এর খরচ বাংলাদেশে — সত্যি কত?', description: 'IVF-এর প্রকৃত খরচ — সৎ আলোচনা।', topic: 'trust', estimatedDuration: '4 min' },
  { idx: 17, day: 2, title: 'IVF এর জন্য মানসিক প্রস্তুতি', description: 'যাত্রার মানসিক দিক — দম্পতি হিসেবে কীভাবে প্রস্তুত হবেন।', topic: 'trust', estimatedDuration: '4 min' },
  { idx: 18, day: 2, title: 'প্রথম consultation-এ কী আশা করবেন', description: 'প্রথম দেখায় কী হবে, কী জিজ্ঞাসা করবেন।', topic: 'trust', estimatedDuration: '3 min' },
  { idx: 19, day: 2, title: 'CMH এ আমার যাত্রা — কেন আমি ফার্টিলিটিতে এসেছি', description: 'প্রতিষ্ঠাতার গল্প — সিএমএইচ ফার্টিলিটি সেন্টার শুরু করার পেছনে।', topic: 'trust', estimatedDuration: '5 min' },
  { idx: 20, day: 2, title: 'Welcome to my practice — Uttara Fertility Centre', description: 'ম্যাডামের সরাসরি স্বাগত বার্তা — হোমপেজে দেখানো হবে।', topic: 'trust', estimatedDuration: '3 min' },
];

export const featuredVideo = videos[19]; // The welcome video
