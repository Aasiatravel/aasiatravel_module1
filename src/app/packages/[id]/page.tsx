import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { packageDetails } from '@/data/packages';
import PackageHero from '@/components/package-details/PackageHero';
import AtAGlance from '@/components/package-details/AtAGlance';
import FlightCard from '@/components/package-details/FlightCard';
import HotelCard from '@/components/package-details/HotelCard';
import ExperienceTimeline from '@/components/package-details/ExperienceTimeline';
import PriceCalculator from '@/components/package-details/PriceCalculator';

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
        basePrice={pkg.basePrice}
      />

      {/* At a Glance */}
      <AtAGlance
        duration={pkg.duration}
        dates={pkg.dates}
        departureCity={pkg.departureCity}
        seatsLeft={pkg.seatsLeft}
      />

      {/* Confirmed Flight Details */}
      <section className="container-custom section-padding font-sans">
        <div className="mb-12">
          <span className="text-[16px] font-semibold tracking-widest text-primary uppercase block mb-4">
            CONFIRMED FLIGHT DETAILS
          </span>
          <h2 className="text-4xl font-serif text-primary font-bold">
            Your round trip, already booked.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {[pkg.departureFlight, pkg.returnFlight].map((flight, idx) => (
            <FlightCard key={idx} {...flight} />
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <ExperienceTimeline steps={pkg.steps} />

      {/* Where You'll Stay */}
      <section className="container-custom section-padding border-t border-primary-soft/30 font-sans">
        <div className="mb-12">
          <span className="text-[16px] font-semibold tracking-widest text-primary uppercase block mb-4">
            WHERE YOU'LL STAY
          </span>
          <h2 className="text-4xl font-serif text-primary font-bold">
            Makkah & Madina accommodation
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {pkg.hotels.map((hotel, idx) => (
            <HotelCard key={idx} {...hotel} />
          ))}
        </div>
      </section>

      {/* Price Calculator */}
      <section className="container-custom section-padding border-t border-primary-soft/30 font-sans">
        <div className="mb-12">
          <span className="text-[16px] font-semibold tracking-widest text-primary uppercase block mb-4">
            PLAN YOUR COST
          </span>
          <h2 className="text-4xl font-serif text-primary font-bold">Price calculator.</h2>
        </div>
        <PriceCalculator
          basePrice={pkg.basePrice}
          sharingPrices={pkg.sharingPrices}
          addonPrices={pkg.addonPrices}
        />
      </section>
    </div>
  );
}
