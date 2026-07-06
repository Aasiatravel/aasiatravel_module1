import type {
  Testimonial,
  Feature,
  Stat,
  PilgrimAvatar,
  AboutData,
  FooterLink,
  FooterSocialLink,
  FooterContactItem,
  HeroTimeWidgetConfig,
} from '@/types';
import { siteConfig } from '@/config/site';

export const stats: Stat[] = [
  { label: 'Years of service', value: '6+' },
  { label: 'Pilgrims served', value: '4k+' },
  { label: 'Travel Partners', value: '10+' },
];

export const features: Feature[] = [
  {
    id: '1',
    number: '01',
    title: 'Visa assistance',
    description: 'We process your Umrah visa end to end, no agents to chase.',
  },
  {
    id: '2',
    number: '02',
    title: '24x7 Guidance',
    description: 'Get 24/7 support for bookings, updates, and assistance anytime.',
  },
  {
    id: '3',
    number: '03',
    title: 'Advanced booking',
    description: 'Book early and enjoy the best deals with guaranteed availability.',
  },
  {
    id: '4',
    number: '04',
    title: 'Stay near Haram',
    description: 'Hotels close to the mosques, with transport arranged door to door.',
  },
  {
    id: '5',
    number: '05',
    title: 'Transport Booking',
    description: 'Reliable and comfortable transport services for a smooth journey.',
  },
  {
    id: '6',
    number: '06',
    title: 'Customized trips',
    description: 'Itineraries shaped to your dates, budget, and pace.',
  },
];

import { packages as packagesList } from './packages';
export const packages = packagesList;

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Fatima ',
    location: 'Mumbai, India',
    quote:
      'The love and care and hospitality shown by their team was exceptional. Our transport was always on time, and the local guides were knowledgeable and kind.',
    rating: 5,
    avatar: '/images/avatar-2.png',
    coverImage: '/images/about.png',
  },
  {
    id: '2',
    name: 'Maryam',
    location: 'delhi, India',
    quote:
      'The love and care and hospitality shown by their team was exceptional. Our transport was always on time, and the local guides were knowledgeable and kind.',
    rating: 5,
    avatar: '/images/avatar-2.png',
    coverImage: '/images/about.png',
  },
  {
    id: '3',
    name: 'Ibrahim.',
    location: 'Delhi, India',
    quote:
      'The love and care and hospitality shown by their team was exceptional. Our transport was always on time, and the local guides were knowledgeable and kind.',
    rating: 5,
    avatar: '/images/avatar-3.png',
    coverImage: '/images/review.png',
  },
  {
    id: '4',
    name: 'Adam.',
    location: 'Hyderabad, India',
    quote:
      'The love and care and hospitality shown by their team was exceptional. Our transport was always on time, and the local guides were knowledgeable and kind.',
    rating: 5,
    avatar: '/images/avatar-1.png',
    coverImage: '/images/card-1.png',
  },
  {
    id: '5',
    name: 'Zainab H.',
    location: 'Bangalore, India',
    quote:
      'The love and care and hospitality shown by their team was exceptional. Our transport was always on time, and the local guides were knowledgeable and kind.',
    rating: 5,
    avatar: '/images/avatar-2.png',
    coverImage: '/images/card-2.png',
  },

  {
    id: '6',
    name: 'Sarah F.',
    location: 'Srinagar, India',
    quote:
      'The love and care and hospitality shown by their team was exceptional. Our transport was always on time, and the local guides were knowledgeable and kind.',
    rating: 5,
    avatar: '/images/avatar-2.png',
    coverImage: '/images/card-1.png',
  },
  {
    id: '7',
    name: 'Ibrahim.',
    location: 'Delhi, India',
    quote:
      'The love and care and hospitality shown by their team was exceptional. Our transport was always on time, and the local guides were knowledgeable and kind.',
    rating: 5,
    avatar: '/images/avatar-3.png',
    coverImage: '/images/review.png',
  },
  {
    id: '8',
    name: 'Maryam',
    location: 'delhi, India',
    quote:
      'The love and care and hospitality shown by their team was exceptional. Our transport was always on time, and the local guides were knowledgeable and kind.',
    rating: 5,
    avatar: '/images/avatar-2.png',
    coverImage: '/images/about.png',
  },

  {
    id: '9',
    name: 'Adam.',
    location: 'Hyderabad, India',
    quote:
      'The love and care and hospitality shown by their team was exceptional. Our transport was always on time, and the local guides were knowledgeable and kind.',
    rating: 5,
    avatar: '/images/avatar-1.png',
    coverImage: '/images/card-1.png',
  },
];

export const pilgrimAvatars: PilgrimAvatar[] = [
  { src: '/images/avatar-1.png', fallbackBg: 'bg-primary-light' },
  { src: '/images/avatar-2.png', fallbackBg: 'bg-primary-muted' },
  { src: '/images/avatar-3.png', fallbackBg: 'bg-primary-soft' },
];

export const aboutData: AboutData = {
  paragraphs: [
    'At Aasia Travel, we are committed to providing genuine, trustworthy, and reliable Umrah services to every guest. Our mission is to make your sacred journey simple and comfortable. We treat every customer with eternal love, care, mercy, and kindness. Your comfort, peace of mind, and satisfaction are our highest priorities throughout your journey.',
    'From the moment you begin planning your Umrah until you safely return home, our experienced team is here to guide and support you every step of the way. We help you perform your Umrah correctly and with ease, ensuring that you can focus on your worship without unnecessary worries. Our dedicated support team is available 24/7 to assist you whenever you need help, bi idhnillah, and seeking the pleasure of Allah through every traveler we have the honor to assist.',
  ],
  quote:
    'May Allah accept your Umrah and make your journey blessed, easy, and full of barakah. Ameen. 🕋',
};

export const footerCompanyLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Reviews', href: '/#reviews' },
];

export const footerSupportLinks: FooterLink[] = [{ label: 'Chat Support', href: '#' }];

export const footerSocialLinks: FooterSocialLink[] = [
  { href: siteConfig.social.facebook, label: 'Facebook', iconName: 'Facebook' },
  { href: siteConfig.social.instagram, label: 'Instagram', iconName: 'Instagram' },
  { href: siteConfig.social.youtube, label: 'Youtube', iconName: 'Youtube' },
];

export const footerContactInfo: FooterContactItem[] = [
  { iconName: 'Mail', text: siteConfig.contact.email },
  { iconName: 'Phone', text: siteConfig.contact.phone },
  { iconName: 'MapPin', text: siteConfig.contact.address },
];

export const heroTimeWidgetConfig: HeroTimeWidgetConfig = {
  label: 'MAKKAH, SAUDI ARABIA',
  timeZone: 'Asia/Riyadh',
  fallbackTime: '1:20:35 pm',
  fallbackDate: '13th Muharram, 1448 AH',
};
