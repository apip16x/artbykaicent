import type { LucideIcon } from 'lucide-react';
import { CalendarDays, Instagram, MapPin, MessageCircle } from 'lucide-react';

export type LinkItem = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
  cta: string;
};

export const LINKS: LinkItem[] = [
  {
    id: 'wa',
    title: 'WhatsApp',
    subtitle: 'Fastest way to book or ask questions',
    href: 'https://wa.me/6285178275267',
    icon: MessageCircle,
    cta: 'Open WhatsApp',
  },
  // {
  //   id: 'book-lestari-event',
  //   title: 'Book Your Appointment for Event at Lestari',
  //   subtitle: 'Available From 8-10 May 2026!',
  //   href: 'https://calendar.app.google/1iQnX6erY7Z6dPeHA',
  //   icon: CalendarDays,
  //   cta: 'Open Booking',
  // },
  {
    id: 'ig',
    title: 'Instagram',
    subtitle: 'Portfolio drops, updates, and stories',
    href:
      'https://www.instagram.com/artbykaicentid/',
    icon: Instagram,
    cta: 'Open Instagram',
  },
  {
    id: 'google',
    title: 'Location & Review',
    subtitle: 'Find our studio and leave a Google review',
    href: 'https://www.google.com/maps/search/artbykaicent',
    icon: MapPin,
    cta: 'Open Google',
  },
];
