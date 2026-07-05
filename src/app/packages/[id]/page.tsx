import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { packageDetails } from '@/data/packages';
import PackageHero from '@/components/package-details/PackageHero';
import AtAGlance from '@/components/package-details/AtAGlance';
import FlightCard from '@/components/package-details/FlightCard';
import HotelCard from '@/components/package-details/HotelCard';
import ExperienceTimeline from '@/components/package-details/ExperienceTimeline';
import PriceCalculator from '@/components/package-details/PriceCalculator';
import { ScrollReveal } from '@/components/ui';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(packageDetails).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const pkg = packageDetails[id];
  if (!pkg) return {};

  return {
    title: pkg.title,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { id } = await params;
  const pkg = packageDetails[id];

  if (!pkg) {
    notFound();
  }

  return (
    <div className="bg-white pb-20">
      {/* Hero Section */}
      <PackageHero
        title={pkg.title}
        subtitle={pkg.subtitle}
        duration={pkg.duration}
        description={pkg.description}
        basePrice={pkg.price}
      />

      {/* At a Glance */}
      <AtAGlance
        duration={pkg.duration}
        dates={pkg.date}
        departureCity={pkg.departureCity}
        seatsLeft={pkg.seatsLeft}
      />

      {/* Confirmed Flight Details */}
      <ScrollReveal direction="up" className="container-custom section-padding font-sans">
        <div className="mb-8 md:mb-12">
          <span className="text-[12px] sm:text-[14px] font-normal tracking-widest text-primary uppercase block mb-3 sm:mb-4">
            CONFIRMED FLIGHT DETAILS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-semibold">
            Your round trip, already booked.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {[pkg.departureFlight, pkg.returnFlight].map((flight, idx) => (
            <FlightCard key={idx} {...flight} />
          ))}
        </div>
      </ScrollReveal>

      {/* Experience Timeline */}
      <ExperienceTimeline steps={pkg.steps} />

      {/* Where You'll Stay */}
      <ScrollReveal direction="up" className="container-custom section-padding border-t border-primary-soft/30 font-sans">
        <div className="mb-8 md:mb-12">
          <span className="text-[12px] sm:text-[14px] font-medium tracking-widest text-primary uppercase block mb-3 sm:mb-4">
            WHERE YOU&apos;LL STAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-semibold">
            Makkah & Madina accommodation
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {pkg.hotels.map((hotel, idx) => (
            <HotelCard key={idx} {...hotel} />
          ))}
        </div>
      </ScrollReveal>

      {/* Price Calculator */}
      <ScrollReveal direction="up" className="container-custom section-padding border-t border-primary-soft/30 font-sans">
        <div className="mb-8 md:mb-12">
          <span className="text-[12px] sm:text-[14px] font-medium tracking-widest text-primary uppercase block mb-3 sm:mb-4">
            PLAN YOUR COST
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-semibold">Price calculator.</h2>
        </div>
        <PriceCalculator
          basePrice={pkg.price}
          sharingPrices={pkg.sharingPrices}
          addonPrices={pkg.addonPrices}
        />
      </ScrollReveal>
    </div>
  );
}
