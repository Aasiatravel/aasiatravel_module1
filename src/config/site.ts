import type { NavLink } from '@/types';

export const siteConfig = {
  name: 'Aasia Travel',
  description: 'Your trusted partner for Hajj, Umrah, and Islamic travel',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aasiatravel.com',
  ogImage: '/images/hero.png',
  logo: '/images/logo.png',
  contact: {
    email: 'aasiatravel0@gmail.com',
    phone: '+91 8800665701',
    address: 'New Delhi',
  },
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
};

export const navLinks: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/#about' },
  { label: 'PACKAGES', href: '/#packages' },
  { label: 'REVIEWS', href: '/#reviews' },
];
