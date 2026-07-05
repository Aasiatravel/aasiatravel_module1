import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui';
import { formatPrice } from '@/lib/utils';

interface PackageHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  basePrice: number;
}

export default function PackageHero({
  title,
  subtitle,
  duration,
  description,
  basePrice,
}: PackageHeroProps) {
  return (
    <div className="font-sans">
      {/* Breadcrumb */}
      <div className="container-custom py-8 flex items-center gap-3 text-sm">
        <Link
          href="/#packages"
          className="flex items-center gap-1 text-primary-light hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Packages
        </Link>
        <span className="text-neutral-gray">/</span>
        <span className="text-primary font-medium">{title}</span>
      </div>

      {/* Hero Section */}
      <section className="container-custom pt-4 pb-16 grid lg:grid-cols-[1fr_415px] gap-12 items-start">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[16px] font-semibold tracking-widest text-primary uppercase">
              {subtitle}
            </span>
            <span className="px-3 py-1 border border-primary-light text-primary-light rounded-full text-[12px] font-medium">
              {duration}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[48px] leading-[1.33] text-primary max-w-[709px] tracking-tight font-serif font-bold">
            {title}
          </h1>
          <p className="text-[16px] text-primary-light leading-[1.3] max-w-[709px] font-normal">
            {description}
          </p>
        </div>

        {/* Budget Card */}
        <div className="bg-background-dark rounded-[4px] p-8 text-center space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-[14px] font-semibold tracking-widest text-primary-soft uppercase">
              CURRENT JOURNEY BUDGET
            </span>
            <h2 className="text-[36px] font-serif text-white tracking-wide font-bold">
              {formatPrice(basePrice)}{' '}
              <span className="text-lg font-light opacity-80">/ person</span>
            </h2>
            <p className="text-[14px] text-primary-soft tracking-wide font-normal">
              Visa, flights & accommodation included
            </p>
          </div>
          <Button variant="secondary" fullWidth className="text-primary font-semibold py-4">
            BOOK JOURNEY
          </Button>
        </div>
      </section>
    </div>
  );
}
