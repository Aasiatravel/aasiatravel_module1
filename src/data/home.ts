import type {
  Package,
  Testimonial,
  Feature,
  Stat,
  PilgrimAvatar,
  AboutData,
  FooterLink,
  FooterSocialLink,
  FooterContactItem,
} from '@/types';
import { siteConfig } from '@/config/site';

export const stats: Stat[] = [
  { label: 'Years of service', value: '6+' },
  { label: 'Pilgrims served', value: '4k+' },
  { label: 'Travel Partners', value: '10+' },
];

export const features: Feature[] = [
  { id: '1', number: '01', title: 'Visa assistance', description: 'We process your Umrah visa end to end, no agents to chase.' },
  { id: '2', number: '02', title: '24x7 Guidance', description: 'Get 24/7 support for bookings, updates, and assistance anytime.' },
  { id: '3', number: '03', title: 'Advanced booking', description: 'Book early and enjoy the best deals with guaranteed availability.' },
  { id: '4', number: '04', title: 'Stay near Haram', description: 'Hotels close to the mosques, with transport arranged door to door.' },
  { id: '5', number: '05', title: 'Transport Booking', description: 'Reliable and comfortable transport services for a smooth journey.' },
  { id: '6', number: '06', title: 'Customized trips', description: 'Itineraries shaped to your dates, budget, and pace.' },
];

export const packages: Omit<Package, 'description' | 'highlights' | 'itinerary' | 'inclusions' | 'exclusions' | 'galleryImages' | 'reviews' | 'location'>[] = [
  {
    id: 'e1',
    title: 'Aima Tours Muharram Umrah Package',
    type: 'Economy',
    category: 'Umrah',
    price: 99999,
    duration: '14 Nights',
    date: '06 July 2026',
    departureCity: 'Delhi',
    rating: 4.8,
    image: '/images/card-1.png',
    limitedSeats: true,
  },
  {
    id: 'e2',
    title: 'Mumbai Umrah Semi Deluxe',
    type: 'Economy',
    category: 'Umrah',
    price: 79999,
    duration: '14 Nights',
    date: '06 July 2026',
    departureCity: 'Mumbai',
    rating: 4.8,
    image: '/images/card-2.png',
    limitedSeats: true,
  },
  {
    id: 'l1',
    title: 'Aima Tours Muharram Umrah Package',
    type: 'Economy',
    category: 'Umrah',
    price: 1200000,
    duration: '14 Nights',
    date: '06 July 2026',
    departureCity: 'Delhi',
    rating: 4.2,
    image: '/images/card-1.png',
    limitedSeats: true,
  },
  {
    id: 'l4',
    title: 'Aima Tours Muharram Umrah Package',
    type: 'Luxury',
    category: 'Umrah',
    price: 1200000,
    duration: '14 Nights',
    date: '06 July 2026',
    departureCity: 'Delhi',
    rating: 4.2,
    image: '/images/card-1.png',
    limitedSeats: true,
  },
  {
    id: 'l5',
    title: 'Aima Tours Muharram Umrah Package',
    type: 'Luxury',
    category: 'Umrah',
    price: 1200000,
    duration: '14 Nights',
    date: '06 July 2026',
    departureCity: 'Delhi',
    rating: 4.2,
    image: '/images/card-1.png',
    limitedSeats: true,
  },
  {
    id: 'l6',
    title: 'Aima Tours Muharram Umrah Package',
    type: 'Luxury',
    category: 'Umrah',
    price: 1200000,
    duration: '14 Nights',
    date: '06 July 2026',
    departureCity: 'Delhi',
    rating: 4.2,
    image: '/images/card-1.png',
    limitedSeats: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Fatima Shaikh',
    location: 'Mumbai, India',
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
    avatar: '/images/review.png',
  },
  {
    id: '2',
    name: 'Umar. R',
    location: 'Rajasthan, India',
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
    avatar: '/images/review.png',
  },
  {
    id: '3',
    name: 'Ali K.',
    location: 'Delhi, India',
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
    avatar: '/images/review.png',
  },
  {
    id: '4',
    name: 'Ali K.',
    location: 'Delhi, India',
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
    avatar: '/images/review.png',
  },
  {
    id: '5',
    name: 'Ali K.',
    location: 'Delhi, India',
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
    avatar: '/images/review.png',
  },
  {
    id: '6',
    name: 'Ali K.',
    location: 'Delhi, India',
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
    avatar: '/images/review.png',
  },
  {
    id: '7',
    name: 'Ali K.',
    location: 'Delhi, India',
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
    avatar: '/images/review.png',
  },
  {
    id: '8',
    name: 'Ali K.',
    location: 'Delhi, India',
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
    avatar: '/images/review.png',
  },
];

export const pilgrimAvatars: PilgrimAvatar[] = [
  { src: '/images/avatar-1.png', fallbackBg: 'bg-primary-light' },
  { src: '/images/avatar-2.png', fallbackBg: 'bg-primary-muted' },
  { src: '/images/avatar-3.png', fallbackBg: 'bg-primary-soft' },
];

export const aboutData: AboutData = {
  paragraphs: [
    'At Aasia Travel, we are committed to providing genuine, trustworthy, and reliable Umrah services to every guest. Our mission is to make your sacred journey simple and comfortable. We treat every customer with eternal love, care, mercy, and kindness.',
    'From the moment you begin planning your Umrah until you safely return home, our experienced team is here to guide and support you every step of the way. We help you perform your Umrah correctly and with ease, ensuring that you can focus on your worship.',
  ],
  quote: 'May Allah accept your Umrah and make your journey blessed, easy, and full of barakah. Ameen.',
};

export const footerCompanyLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Reviews', href: '/#reviews' },
];

export const footerSupportLinks: FooterLink[] = [
  { label: 'Chat Support', href: '#' },
];

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
