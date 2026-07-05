export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  coverImage?: string;
}

export interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface PilgrimAvatar {
  src: string;
  fallbackBg: string;
}

export interface AboutData {
  paragraphs: string[];
  quote: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  href: string;
  label: string;
  iconName: 'Facebook' | 'Instagram' | 'Youtube';
}

export interface FooterContactItem {
  iconName: 'Mail' | 'Phone' | 'MapPin';
  text: string;
}

export interface HeroTimeWidgetConfig {
  label: string;
  timeZone: string;
  fallbackTime: string;
  fallbackDate: string;
}
