export interface FlightInfo {
  type: 'Departure' | 'Return';
  code: string;
  city: string;
  destCode: string;
  destCity: string;
  plane: string;
  date: string;
  time: string;
}

export interface HotelInfo {
  type: 'Makkah Stay' | 'Madina Stay';
  name: string;
  rating: number;
  distance: string;
  features: string[];
  image: string;
}

export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Package {
  id: string;
  title: string;
  type: 'Economy' | 'Luxury';
  category: string;
  price: number;
  duration: string;
  date: string;
  departureCity: string;
  rating: number;
  image: string;
  images?: string[];
  limitedSeats: boolean;

  subtitle: string;
  description: string;
  seatsLeft: number;
  sharingPrices: Record<string, number>;
  addonPrices: Record<string, number>;
  steps: StepData[];
  departureFlight: FlightInfo;
  returnFlight: FlightInfo;
  hotels: HotelInfo[];
}

export interface StepData {
  id: string;
  title: string;
  description: string;
  iconName:
    'ClipboardCheck' | 'Plane' | 'Building' | 'Utensils' | 'Droplets' | 'PhoneCall' | string;
}

export type PackageDetailData = Package;
