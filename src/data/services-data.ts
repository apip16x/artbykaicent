export type ServiceTab = { id: string; label: string };

export type ServicePreviewItem = { id: string; label: string; image: string };

export type ServiceItem = { name: string; price: string; detail: string };

export type ServiceContent = {
  title: string;
  description: string;
  items: ServiceItem[];
  image: string;
};

/** Tabs for Services page (id matches content keys) */
export const SERVICE_TABS: ServiceTab[] = [
  { id: 'nails', label: 'Nails' },
  { id: 'gems', label: 'Tooth Gems' },
  { id: 'press-ons', label: 'Press-ons' },
  { id: 'aftercare', label: 'Aftercare & Hygiene' },
];

/** Preview list for About page (same ids as SERVICE_TABS, with images) */
export const SERVICES_PREVIEW: ServicePreviewItem[] = [
  { id: 'nails', label: 'Nail Art', image: '/images/hero 2.jpeg' },
  { id: 'gems', label: 'Tooth Gems', image: '/images/hero 1.jpeg' },
  { id: 'press-ons', label: 'Custom Press-ons', image: '/images/hero 5.jpeg' },
];

/** Full content per service for Services page tab content */
export const SERVICES_CONTENT: Record<string, ServiceContent> = {
  nails: {
    title: 'Gel & Extensions',
    description:
      'Meticulous cuticle care and structure gel application. We focus on retention and clean aesthetics.',
    items: [
      { name: 'Nail Gel Only', price: 'IDR 89K', detail: 'Max 3 colors, moisturizer, vitamin oil.' },
      {
        name: 'Gel Manicure',
        price: 'IDR 130K',
        detail: 'Full cuticle care, shaping, prep, overlay, max 3 colors.',
      },
      {
        name: 'Gel X Manicure',
        price: 'IDR 180K',
        detail: 'Soft gel tips (10 fingers) + full manicure prep.',
      },
      { name: 'Design: Easy', price: 'IDR 5K-10K/nail', detail: 'Minimalist lines, dots, chrome, or french.' },
      { name: 'Design: Medium', price: 'IDR 10K-20K/nail', detail: 'Airbrush, blooming gel, aura, etc.' },
      { name: 'Design: Hard', price: 'IDR 20K-30K/nail', detail: 'Intricate hand-painting, complex chrome.' },
      {
        name: 'Charms & Effects',
        price: 'Varies',
        detail: 'Chrome (5k+), Rhinestones (2k+), 3D Gel (10k+), Luxury (20k+).',
      },
    ],
    image: '/images/hero 2.jpeg',
  },
  gems: {
    title: 'Tooth Gems',
    description:
      'Add some sparkle to your smile. We use only lead-free, dental-grade adhesives and genuine Swarovski crystals.',
    items: [
      { name: 'Single Crystal', price: 'IDR 150K', detail: 'Swarovski crystal (various sizes).' },
      { name: 'Butterfly Set', price: 'IDR 450K', detail: '4-6 crystals arranged in a butterfly motif.' },
      { name: 'Window/Frame', price: 'IDR 350K', detail: 'Crystals framing the tooth.' },
      { name: 'Disco Ball', price: 'IDR 600K', detail: 'Full coverage of one tooth.' },
      { name: 'Gold Charms', price: 'Ask for quote', detail: '18k/22k gold charms (pre-order only).' },
    ],
    image: '/images/hero 1.jpeg',
  },
  'press-ons': {
    title: 'Custom Press-ons',
    description:
      "Salon quality nails, reusable and delivered to your door. Perfect for events or those who can't wear nails for work.",
    items: [
      { name: 'Sizing Kit', price: 'IDR 50K', detail: 'Essential for the perfect fit. Shipped to you first.' },
      { name: 'Solid Color Set', price: 'IDR 200K', detail: 'Any shape/length. Includes application kit.' },
      { name: 'Custom Design Set', price: 'IDR 300K', detail: 'Based on your reference or freestyle.' },
      { name: 'Rush Order', price: 'IDR +100K', detail: '3-day turnaround.' },
    ],
    image: '/images/hero 5.jpeg',
  },
  aftercare: {
    title: 'Aftercare & Hygiene',
    description: 'We take sanitation seriously. All tools are disinfected between clients.',
    items: [
      {
        name: 'Hygiene Protocol',
        price: 'Standard',
        detail: 'All tools and stations are disinfected between every service.',
      },
      {
        name: 'Nail Aftercare',
        price: 'Info',
        detail: 'Refrain from picking/peeling. Moisturize cuticles daily.',
      },
      { name: 'Maintenance', price: 'Info', detail: 'Refills recommended every 3-4 weeks.' },
    ],
    image: '/images/hero 4.jpeg',
  },
};
