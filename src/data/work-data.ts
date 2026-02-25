export type WorkItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};

/** All work items for Work page gallery and About page teaser (images from public/images) */
export const WORK_ITEMS: WorkItem[] = [
  { id: '1', title: 'Chrome Hearts', category: 'Nails', image: '/images/hero 1.jpeg' },
  { id: '2', title: 'Emerald City', category: 'Gems', image: '/images/hero 2.jpeg' },
  { id: '3', title: 'Tortoise Shell', category: 'Nails', image: '/images/hero 3.png' },
  { id: '4', title: 'Butterfly Effect', category: 'Gems', image: '/images/hero 4.jpeg' },
  { id: '5', title: 'Aura Blush', category: 'Nails', image: '/images/hero 5.jpeg' },
  { id: '6', title: 'Gold Grillz', category: 'Gems', image: '/images/hero 6.jpeg' },
  { id: '7', title: 'Cyber Y2K', category: 'Nails', image: '/images/hero 7.jpeg' },
  { id: '8', title: 'Swarovski Dust', category: 'Gems', image: '/images/hero 8.png' },
  { id: '9', title: 'French Micro', category: 'Nails', image: '/images/hero 9.png' },
];

/** Category filters for Work page (All + unique categories from WORK_ITEMS) */
export const WORK_FILTERS = ['All', 'Nails', 'Gems'];

/** Subset for About page work teaser (e.g. first 4) */
export const WORK_TEASER_ITEMS = WORK_ITEMS.slice(0, 4);
