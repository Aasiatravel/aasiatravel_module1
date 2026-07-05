# Aasia Travel - Trusted Hajj & Umrah Specialists

![Next.js](https://img.shields.io/badge/Next.js-16.2.10-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.42.2-FF0050?style=for-the-badge&logo=framer&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-000000?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Design-Responsive-22C55E?style=for-the-badge)
![SEO](https://img.shields.io/badge/SEO-Optimized-FF6B00?style=for-the-badge)

A production-grade, consolidated Hajj & Umrah pilgrimage platform built with Next.js 16 App Router, React 19, Tailwind CSS v4, and Framer Motion featuring modern typography, smooth custom scroll physics, interactive package cost calculation, dynamic sitemaps, semantic layout loading skeleton screens, custom 404 boundaries, and a unified theme palette.

**DEVELOPED BY** - Aaditya Gunjal (Full Stack Developer) ...

---

## Core Features

- **Makkah Real-time Tracker Widget:** Displays live timezone time and Hijri dates in Makkah, Saudi Arabia, integrated directly into the landing hero block for spiritual alignment.
- **Interactive Price Calculator:** Allows prospective pilgrims to configure their package dynamically on the client side (select Quad/Triple/Double room sharing adjustments, add services like Ziyarat Tours or Airport Fast-Track, and increment/decrement the number of travellers) with live cost estimation and instant WhatsApp booking triggers.
- **Smooth Eased Scrolling:** Lenis-powered custom smooth scroll wrapper with customized exponential easing, 1.2s duration, and responsive gesture multipliers.
- **Dynamic Showcase Filters:** Clean interactive package grid on the landing page enabling immediate sorting between `ALL`, `ECONOMY`, and `LUXURY` tour categories.
- **Confirmed Flight Outlines:** Lists return flight info cards detailing Boeing aircraft identifiers, departure/arrival codes, date, time, and transit orientation.
- **Accommodation Detail Cards:** Pre-booked stays in Makkah & Madina outlining hotel names, star ratings, precise walking distances from both Holy Mosques, free shuttle transport services, and direct links for location directions.
- **Pilgrim Experience Timeline:** Renders a step-by-step visual chronological progress tracker (Visa Processing, Return Flights, Hotel Stays, Buffets, ZamZam water, 24/7 Assistance) using Lucide icon resolutions.
- **Interactive Star Rating & Testimonials:** Smooth horizontal snap carousel showcasing verified pilgrim reviews, text citations, and location details.
- **Route-Level Skeleton Loaders:** Custom loader fallbacks matching the component designs to eliminate visual Layout Shifts (CLS) while downloading dynamic client states.
- **Custom Error & Not-Found Boundaries:** Includes global error fallback resets and dedicated local page boundaries for non-existent package IDs.
- **Zero CMS Dependency:** Fully typed static mock databases stored inside repository directories — easily configure package items by updating clean TypeScript models.
- **Dynamic SEO Metadata:** Per-page header parameters loaded via Next.js Metadata API, enabling template titles, canonical URLs, Twitter cards, and Open Graph previews.

---

## Technology Stack

### Core Framework & Runtime

| Technology | Version | Purpose                                               |
| ---------- | ------- | ----------------------------------------------------- |
| Next.js    | 16.2.10 | App Router, SSR/SSG, Metadata API, Image Optimization |
| React      | 19.2.4  | UI Component Library with server-side components      |
| TypeScript | 5.x     | Strict Type Safety                                    |
| Node.js    | 20+     | Runtime Environment                                   |

### Styling & Animation

| Technology     | Version | Purpose                                                               |
| -------------- | ------- | --------------------------------------------------------------------- |
| Tailwind CSS   | 4.x     | Utility-first styling with inline custom `@theme` directives          |
| Framer Motion  | 12.42.2 | Micro-interactions, hover offsets, and viewport visibility animations |
| Lenis          | 1.3.25  | Premium smooth scrolling container                                    |
| clsx           | 2.1.1   | Conditional CSS class composer                                        |
| tailwind-merge | 3.6.0   | Intelligent Tailwind CSS class utility consolidator                   |

### UI Components & Icons

| Technology   | Version | Purpose                           |
| ------------ | ------- | --------------------------------- |
| Lucide React | 0.475.0 | High-quality visual outline icons |

### Package Manager

- **pnpm** (lockfile: `pnpm-lock.yaml`)

---

## Project Structure

```text
aasiatravel_module1/
├── public/
│   ├── images/                             # Clean local image directory
│   │   ├── about.png                       # High-resolution Al-Masjid an-Nabawi image
│   │   ├── card-1.png                      # Makkah Stay card illustration
│   │   ├── card-2.png                      # Madina Stay card illustration
│   │   ├── hero.png                        # Main Kaaba banner image
│   │   ├── logo.png                        # Aasia Travel brand logo
│   │   └── review.png                      # Customer testimonial avatars
│   ├── favicon.ico                         # Site favicon
│   ├── file.svg                            # Default public files
│   ├── globe.svg                           # Default public files
│   ├── next.svg                            # Next.js asset
│   ├── vercel.svg                          # Vercel deploy asset
│   └── window.svg                          # Default public files
│
├── src/
│   ├── app/                                # Next.js App Router root
│   │   ├── packages/                       # Package pages group
│   │   │   └── [id]/                       # Dynamic package detail page
│   │   │       ├── loading.tsx             # Skeleton loader for package details
│   │   │       ├── not-found.tsx           # Custom 404 boundary for missing package ID
│   │   │       └── page.tsx                # Page controller using SSG generateStaticParams
│   │   ├── error.tsx                       # Global error boundary handler
│   │   ├── favicon.ico                     # Favicon redirect hook
│   │   ├── globals.css                     # Tailwind v4 import, custom theme definitions, utility classes
│   │   ├── layout.tsx                      # Root layout, Google Fonts (Inter, Playfair, Poppins), SEO Metadata
│   │   ├── loading.tsx                     # Global loading screen placeholder
│   │   ├── not-found.tsx                   # Global 404 page
│   │   ├── page.tsx                        # Main landing page assembling sections
│   │   ├── robots.ts                       # SEO robots.txt configurations
│   │   └── sitemap.ts                      # Dynamic sitemap xml generator for packages
│   │
│   ├── components/                         # Application components
│   │   ├── landing/                        # Landing page sectional components
│   │   │   ├── AboutSection.tsx            # Agency history, statistics display
│   │   │   ├── HeroSection.tsx             # Main call to action, live Makkah widget, trust indicators
│   │   │   ├── PackageCard.tsx             # Individual package showcase card with hover lift
│   │   │   ├── PackagesSection.tsx         # Category filter (All/Economy/Luxury) & list wrapper
│   │   │   ├── TestimonialsSection.tsx     # Horizontal scroll snap customer reviews
│   │   │   └── WhyChooseUsSection.tsx      # Services grid (Visa, Haram proximity, etc.)
│   │   ├── layout/                         # Core frame elements
│   │   │   ├── footer/                     # Global footer with links & contacts
│   │   │   └── navbar/                     # Sticky scrolled navbar & MobileMenu modal
│   │   │       ├── index.ts                # Barrel export
│   │   │       ├── MobileMenu.tsx          # Mobile slide-down menu overlay
│   │   │       └── Navbar.tsx              # Scrolled state visual controller
│   │   └── ui/                             # UI Primitives
│   │       ├── index.ts                    # Barrel export
│   │       ├── Badge.tsx                   # Small tag status indicator (e.g. "Limited seats")
│   │       ├── Button.tsx                  # Configurable action buttons (variants: primary/outline/dark/ghost)
│   │       └── Skeleton.tsx                # Pulsing placeholder loader
│   │
│   ├── config/                             # Site configuration
│   │   ├── env.ts                          # Client environment variables
│   │   └── site.ts                         # SEO defaults, contact detail configurations, links
│   │
│   ├── data/                               # Static typed database files
│   │   ├── home.ts                         # Home page features, testimonials, stats lists
│   │   └── packages.ts                     # Full Hajj & Umrah package structures, hotels, flights
│   │
│   ├── hooks/                              # Custom hook helpers
│   │   ├── index.ts                        # Barrel export
│   │   └── useMediaQuery.ts                # Window matchMedia hook
│   │
│   ├── lib/                                # Utilities
│   │   ├── constants.ts                    # Routing definitions, layout breakpoints
│   │   └── utils.ts                        # Tailwind merge helper, formatPrice currency formatter
│   │
│   ├── providers/                          # React context providers
│   │   ├── Providers.tsx                   # Master wrapper for application context
│   │   └── SmoothScrollProvider.tsx        # Lenis scroll controller
│   │
│   └── types/                              # Custom TypeScript types
│       ├── common.ts                       # General definitions (NavLink, Stat, Testimonial, Feature)
│       ├── index.ts                        # Barrel export
│       └── package.ts                      # Interfaces for Package, HotelInfo, FlightInfo, Reviews
│
├── .env                                    # Local environment configs
├── .env.example                            # Config examples
├── .gitignore                              # Git ignored entries
├── .npmrc                                  # npm settings
├── .prettierrc                             # Code formatting guidelines
├── eslint.config.mjs                       # Linter configurations
├── next-env.d.ts                           # Next.js global types
├── next.config.ts                          # Next.js config
├── package.json                            # Package dependencies
├── pnpm-lock.yaml                          # lockfile
├── pnpm-workspace.yaml                     # pnpm workspace config
├── postcss.config.mjs                      # PostCSS plugins config
└── tsconfig.json                           # TypeScript configuration
```

---

## Quick Start

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm
- A modern web browser
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/aasiatravel.git
   cd aasiatravel_module1
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open the app**

   ```text
   http://localhost:3000
   ```

### Production Build

```bash
pnpm build
pnpm start
```

### Available Scripts

| Script      | Command          | Purpose                                  |
| ----------- | ---------------- | ---------------------------------------- |
| `dev`       | `pnpm dev`       | Start development server with hot reload |
| `dev:turbo` | `pnpm dev:turbo` | Start development server with Turbopack  |
| `build`     | `pnpm build`     | Create optimized production build        |
| `start`     | `pnpm start`     | Serve production build locally           |
| `lint`      | `pnpm lint`      | Run ESLint checks                        |

---

## Site Routes

| Route          | URL              | Description                                                                                              |
| -------------- | ---------------- | -------------------------------------------------------------------------------------------------------- |
| Home           | `/`              | Hero section, live Makkah widget, about summary, packages, choose indicators, and customer testimonials. |
| Package Detail | `/packages/[id]` | Individual package page containing flight logs, timeline progress, hotels, and cost calculators.         |

**Dynamic Package Pages (SSG):**

| Package ID | Package Title                             | Departure | Category |
| ---------- | ----------------------------------------- | --------- | -------- |
| `e1`       | AASIA Tours Asaan Muharram Umrah Package  | Delhi     | Umrah    |
| `e2`       | Mumbai Umrah Semi Deluxe Package          | Mumbai    | Umrah    |
| `l1`       | AASIA Tours Luxury Muharram Umrah Package | Delhi     | Umrah    |

---

## UI & Design

- **Tailwind CSS v4 Engine:** Leverages modern custom theme extensions defined inside the stylesheet `@theme` directive, utilizing custom color states.
- **Typography Matrix:** Loads Google Fonts via `next/font/google` for layout efficiency:
  - **Playfair Display** (serif) for title headlines (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`).
  - **Inter** (sans-serif) as the core body text style.
  - **Poppins** (sans-serif) for badge and metadata indicators.
- **Luxurious Palette Scheme:**
  - Primary Base: `#362017` (Rich Earth Brown)
  - Primary Light: `#84593D` (Terracotta Accent)
  - Primary Muted: `#9C7B5E` (Warm Taupe)
  - Primary Soft: `#E8DDD0` (Sand Cream)
  - Background Cream: `#F2EEEB` (Warm Silk Gray)
  - Background Warm: `#FAF7F2` (Parchment White)
  - Background Dark: `#1A1008` (Charcoal Black-Brown)
  - Secondary Accent: `#2E385B` (Navy Blue)
  - Accent Color: `#FFC452` (Islamic Gold)
- **Responsive Breaks:** Responsive adaptation using Tailwind `sm:`, `md:`, `lg:` boundaries.
- **Micro-Animations:** Fitted with Framer Motion triggers on list item entries and package grid card hover lifts (`whileHover={{ y: -10 }}`).

---

## Architecture & Patterns

### Component Model

- **Server Components:** Serves search engine crawlers with static contents (e.g. loading screens, sitemaps, error boundaries, fonts layout).
- **Client Components (`"use client"`):** Implements state management for filters (ALL/ECONOMY/LUXURY), navigation toggling (MobileMenu), scroll interpolation (Lenis SmoothScrollProvider), and dynamic math operations (PriceCalculator).

### Data Flow

- Structured TypeScript collections placed in `src/data/` act as localized file databases:
  - `home.ts`: Statistics, visual services, and reviews.
  - `packages.ts`: Detailed flight routes, stays, and pricing maps.

### Performance Architecture

- **Asset Compression & Delivery:** Preconnect optimization hints and Next.js Image component optimization to enforce AVIF/WebP image caching.
- **Layout Shift Prevention:** Employs explicit skeleton templates matching layout hierarchies to maintain visual stability while loading resources.
- **RAF Scroll Loops:** Hooks Lenis smooth scrolling inside `requestAnimationFrame` loops for high performance rendering.

### SEO Architecture

- Implements structured Next.js configurations via App Router metadata.
- **Dynamic XML Sitemap:** Automatically maps packages in `src/app/sitemap.ts` to output compliant XML maps.
- **Robots.txt Directives:** Configures search rules, crawler settings, and site paths in `src/app/robots.ts`.

---

## Customization

### Change Studio / Agency Contact Info

Edit variables in `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: 'Aasia Travel',
  description: 'Trusted Hajj & Umrah specialists...',
  url: 'https://aasiatravel.com',
  contact: {
    email: 'aasiatravel@gmail.com',
    phone: '+91 8800665701',
    address: 'New Delhi',
  },
};
```

### Add a New Hajj or Umrah Package

1. Paste the preview thumbnail image to `public/images/`.
2. Open `src/data/home.ts` and append a summary record to the `packages` list:
   ```typescript
   {
     id: 'new-id',
     title: 'Aasia Premium Winter Umrah Package',
     type: 'Luxury',
     category: 'Umrah',
     price: 150000,
     duration: '14 Nights',
     date: '10 Dec 2026',
     departureCity: 'Delhi',
     rating: 4.9,
     image: '/images/your-card-image.png',
     limitedSeats: true,
   }
   ```
3. Open `src/data/packages.ts` and declare the corresponding details object matching the ID:
   ```typescript
   'new-id': {
     id: 'new-id',
     title: 'Aasia Premium Winter Umrah Package',
     subtitle: 'Policies & Pilgrim Safety',
     description: 'Detailed description here...',
     duration: '14 nights',
     dates: '10 – 24 Dec 2026',
     departureCity: 'Delhi',
     seatsLeft: 12,
     basePrice: 150000,
     sharingPrices: { Quad: 0, Triple: 20000, Double: 40000 },
     addonPrices: { 'Ziyarat City Tour': 6000, 'VIP Private Transport': 12000 },
     steps: [ ... ],
     departureFlight: { ... },
     returnFlight: { ... },
     hotels: [ ... ]
   }
   ```

### Change Theme Colors

Overwrite color hex definitions within the CSS variables of the `@theme` block inside `src/app/globals.css`:

```css
@theme {
  --color-primary: #your-hex;
  --color-accent: #your-hex;
}
```

---

## Troubleshooting

**A package detail page loads a 404 error**

- Double check that the ID defined in `src/data/home.ts` matches the key defined in the `packageDetails` record inside `src/data/packages.ts` exactly.

**Next.js Turbopack fails to start in development**

- If your system does not support Next.js Turbopack, launch the dev server with standard configuration using `pnpm dev`.

**Lenis scroll overrides native browser behaviors**

- Ensure that the browser layout height rules matches standard parameters: `html.lenis` and `html.lenis body` should have `height: auto` configured in `src/app/globals.css`.

---

## Roadmap

- **Interactive WhatsApp Templates:** Build a direct message compiler string that formats cost choices (Sharing + Add-ons) from the PriceCalculator to send directly.
- **Pilgrim Reviews Sync:** Sync Google Business Profile customer ratings.
- **Interactive Makkah/Madina Map Widgets:** Embed interactive markers of Makkah and Madina hotels relative to the holy sites.
- **PWA Manifest Integration:** Configure web manifests for offline installation support.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your edits: `git commit -m "feat: add your feature"`.
4. Push to origin: `git push origin feature/your-feature`.
5. Open a Pull Request.

---

## Contact & Support

- **Developer:** aadigunjal0975@gmail.com
- **WhatsApp:** +91 84335 09521
- **Support Team:** aasiatravel@gmail.com
- **Helpline:** +91 8800665701
- **Headquarters:** New Delhi, India

---

## Acknowledgments

- [Next.js](https://nextjs.org) for the App Router SSR framework.
- [Tailwind CSS](https://tailwindcss.com) for the utility styling system.
- [Lenis](https://lenis.darkroom.engineering) for high-performance scroll loops.
- [Framer Motion](https://www.framer.com/motion) for UI transition states.
- The open-source Hajj & Umrah dev contributors.

---

## License

This project is licensed under the [MIT License](LICENSE).
