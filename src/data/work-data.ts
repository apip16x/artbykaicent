export type WorkItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  /** Descriptive alt for Google Image Search (e.g. Amsterdam-style Tooth Gem, Custom Jakarta Nail Art). */
  alt?: string;
};

/** All work items for Work page gallery and About page teaser (images from public/images) */
export const WORK_ITEMS: WorkItem[] = [
  { id: '1', title: 'Chrome Hearts', category: 'Nails', image: '/images/hero 1.jpeg', alt: 'Chrome Hearts custom nail art set, Jakarta nail studio' },
  { id: '2', title: 'Emerald City', category: 'Gems', image: '/images/hero 2.jpeg', alt: 'Amsterdam-style tooth gem application, Emerald City Swarovski crystal' },
  { id: '3', title: 'Tortoise Shell', category: 'Nails', image: '/images/hero 3.png', alt: 'Tortoise shell nail design, custom nail art Jakarta' },
  { id: '4', title: 'Butterfly Effect', category: 'Gems', image: '/images/hero 4.jpeg', alt: 'Butterfly tooth gem set, Amsterdam-trained specialist Depok' },
  { id: '5', title: 'Aura Blush', category: 'Nails', image: '/images/hero 5.jpeg', alt: 'Aura blush gel nail art, private nail studio Jakarta' },
  { id: '6', title: 'Gold Grillz', category: 'Gems', image: '/images/hero 6.jpeg', alt: 'Gold tooth jewelry and gems, tooth gem Jakarta' },
  { id: '7', title: 'Cyber Y2K', category: 'Nails', image: '/images/hero 7.jpeg', alt: 'Cyber Y2K custom nail art, gel X Jakarta' },
  { id: '8', title: 'Swarovski Dust', category: 'Gems', image: '/images/hero 8.png', alt: 'Swarovski crystal tooth gems, Amsterdam-style application Depok' },
  { id: '9', title: 'French Micro', category: 'Nails', image: '/images/hero 9.png', alt: 'French micro nail design, custom nail art Depok' },
];

/** Category filters for Work page (All + unique categories from WORK_ITEMS) */
export const WORK_FILTERS = ['All', 'Nails', 'Gems'];

/** Subset for About page work teaser (e.g. first 4) */
export const WORK_TEASER_ITEMS = WORK_ITEMS.slice(0, 4);
