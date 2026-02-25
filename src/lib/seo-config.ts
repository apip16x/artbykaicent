/**
 * SEO metadata config for artby.kaicent.id
 * Domain: https://artby.kaicent.id
 */

export const SITE_URL = 'https://artby.kaicent.id';

export const DEFAULT_TITLE = 'Art By Kaicent | Private Nail Tech & Tooth Gems Jakarta/Depok';
export const TITLE_TEMPLATE = '%s | Art By Kaicent';

export const DEFAULT_DESCRIPTION =
  "Depok's first Amsterdam-trained Tooth Gem specialist and private nail artist. Custom Gel X, authentic tooth jewelry, and house calls available in Jakarta & Depok.";

export const DEFAULT_KEYWORDS = [
  'Nail Art Depok',
  'Tooth Gems Jakarta',
  'Amsterdam Tooth Gems',
  'Private Nail Studio',
  'Gel X Jakarta',
].join(', ');

/** OG/Twitter: luxury dark theme (#050505 = --dark-100) */
export const OG_IMAGE_URL = `${SITE_URL}/images/og-preview.png`;
export const OG_COLOR = '#050505';
export const TWITTER_HANDLE = '@artbykaicent';

export type RouteMeta = {
  title: string;
  description: string;
  keywords?: string;
};

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Art By Kaicent | Private Nail Tech & Tooth Gems Jakarta/Depok',
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
  },
  '/about': {
    title: 'About',
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
  },
  '/services': {
    title: 'Menu & Services',
    description:
      'Transparent pricing: Gel X (IDR 180K), Gel Manicure (IDR 130K), Nail Gel from IDR 89K. Amsterdam-style Tooth Gems, custom press-ons, and house calls in Jakarta & Depok.',
    keywords:
      'Gel X Jakarta, Gel Manicure Depok, Nail Art price, Tooth Gem price, press-ons Jakarta, ' + DEFAULT_KEYWORDS,
  },
  '/work': {
    title: 'Our Work',
    description:
      'Portfolio of custom nail art and Amsterdam-style tooth gem applications. Nail sets and tooth jewelry by Art By Kaicent in Jakarta & Depok.',
    keywords: 'Nail art portfolio Jakarta, Tooth gem portfolio Depok, ' + DEFAULT_KEYWORDS,
  },
  '/rules': {
    title: 'Rules & Policy',
    description: 'Studio rules and booking policy. Art By Kaicent — private nail and tooth gem artist in Jakarta & Depok.',
    keywords: DEFAULT_KEYWORDS,
  },
};

export function getMetaForPath(pathname: string): RouteMeta {
  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  return ROUTE_META[normalized] ?? {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
  };
}
