import type { Package } from '@/types';

/**
 * MOCK PACKAGE TEMPLATE FOR AASIA TRAVEL
 * Use this boilerplate to add new packages to src/data/packages.ts.
 * Simply copy this object, paste it into the `packages` array in packages.ts,
 * customize the values, and the landing cards + details page will render automatically.
 */
export const packageTemplateSample: Package = {
  // ── 1. CARD & GENERAL IDENTIFIERS (Landing Page & Sitemap) ──
  id: 'template-id',                       // URL Slug (e.g., '/packages/template-id')
  title: 'Sample Umrah Package Title',     // Title displayed on cards & hero banner
  type: 'Economy',                         // Filter type: 'Economy' | 'Luxury' (adds filter tab dynamically)
  category: 'Umrah',                       // Category classification label
  price: 85000,                            // Base price of package (serves as base price in calculator)
  duration: '14 Nights',                   // Duration description badge
  date: '12 – 26 Oct 2026',                // Dates display string
  departureCity: 'Delhi',                  // Departure city name
  rating: 4.8,                             // Star rating (out of 5) shown on card
  image: '/images/card-1.png',             // Main landing card thumbnail image
  limitedSeats: true,                      // Toggles the "Limited Seats" banner on cards

  // ── 2. DETAILS HERO BANNER SECTION (Package details header) ──
  subtitle: 'Policies & Pilgrim Safety',   // Mini-heading above main title
  description: 'Provide a detailed description of the journey, service quality, inclusions, and convenience.', 
                                           // Descriptive paragraph

  // ── 3. AT A GLANCE SECTION (Highlights strip) ──
  seatsLeft: 8,                            // Seats count shown under "Group Size"

  // ── 4. PRICE CALCULATOR SECTION (Interactive calculator input) ──
  sharingPrices: {                         // Upgrades added to base price
    Quad: 0,                               // Quad occupancy surcharge (default inclusion)
    Triple: 12000,                         // Triple occupancy surcharge per person
    Double: 22000,                         // Double occupancy surcharge per person
  },
  addonPrices: {                           // Add-on service options checkboxes
    'Ziyarat City Tour': 5000,             // Extra tour surcharge
    'Airport Fast-Track': 3000,            // VIP fast-track surcharge
  },

  // ── 5. EXPERIENCE TIMELINE SECTION (Step-by-step itinerary flow) ──
  steps: [
    {
      id: '01',
      title: 'Visa Processing',
      description: 'Umrah visa handled end-to-end, documents collected and submitted for you.',
      iconName: 'ClipboardCheck',          // Allowed: ClipboardCheck, Plane, Building, Utensils, Droplets, PhoneCall
    },
    {
      id: '02',
      title: 'Return Flight Tickets',
      description: 'Confirmed round-trip flights between your city and Jeddah/Medina.',
      iconName: 'Plane',
    },
    {
      id: '03',
      title: 'Hotel Booking',
      description: 'Pre-booked stays in Makkah and Medina, walking distance from both Haramain.',
      iconName: 'Building',
    },
  ],

  // ── 6. CONFIRMED FLIGHT DETAILS SECTION (Round-trip flight cards) ──
  departureFlight: {
    type: 'Departure',
    code: 'DEL',                           // Departure airport code
    city: 'Delhi',                         // Departure city
    destCode: 'JED',                       // Arrival airport code
    destCity: 'Jeddah',                    // Arrival destination
    plane: 'Boeing 777-300ER',             // Aircraft model
    date: '12 Oct 2026',                   // Flight date
    time: '03:40 AM',                      // Local departure time
  },
  returnFlight: {
    type: 'Return',
    code: 'MED',                           // Return origin airport code
    city: 'Medina',                        // Return origin city
    destCode: 'DEL',                       // Return arrival airport code
    destCity: 'Delhi',                     // Return arrival destination
    plane: 'Boeing 777-300ER',
    date: '26 Oct 2026',
    time: '11:15 PM',
  },

  // ── 7. WHERE YOU'LL STAY SECTION (Hotels showcase cards) ──
  hotels: [
    {
      type: 'Makkah Stay',
      name: 'Asala Al Bakiyah Hotel',
      rating: 3,
      distance: '350m from Haram',
      features: ['Breakfast & dinner included', 'Quad-sharing rooms', 'Free shuttle to Haram'],
      image: '/images/card-1.png',
    },
    {
      type: 'Madina Stay',
      name: 'Rehab Al Madain Hotel',
      rating: 3,
      distance: '400m from Masjid an-Nabawi',
      features: ['Breakfast & dinner included', 'Quad-sharing rooms', 'Near bus services'],
      image: '/images/card-2.png',
    },
  ],
};
