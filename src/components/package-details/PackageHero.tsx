'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button, ScrollReveal } from '@/components/ui';
import { getWhatsAppPackageBookingLink } from '@/lib/whatsapp';

interface PackageHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  basePrice: number;
  departureCity: string;
  date: string;
  category: string;
}

export default function PackageHero({
  title,
  subtitle,
  duration,
  description,
  basePrice,
  departureCity,
  date,
  category,
}: PackageHeroProps) {
  const handleBookJourney = () => {
    const whatsappLink = getWhatsAppPackageBookingLink({
      title,
      category,
      duration,
      departureCity,
      date,
      basePrice,
    });
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="font-sans pt-20 md:pt-24">
      <div className="container-custom py-6 sm:py-8 flex items-center gap-3 text-sm">
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

      <section className="container-custom pt-4 pb-16 grid lg:grid-cols-[1fr_415px] gap-12 items-start">
        <ScrollReveal direction="up" className="space-y-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[11.2px] sm:text-xs font-semibold tracking-[0.2em] text-primary-muted uppercase">
              {subtitle}
            </span>
            <span className="px-3 py-1 border border-primary-light/40 text-primary-light/95 rounded-full text-[11px] sm:text-[12px] font-medium font-sans">
              {duration}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] leading-tight text-primary max-w-[709px] tracking-tight font-serif font-semibold">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-primary-light/90 leading-relaxed max-w-[709px] font-normal font-sans">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1} className="bg-background-dark rounded-4px p-6 sm:p-8 text-center space-y-6 shadow-xl w-full">
          <div className="space-y-2">
            <span className="text-[11.2px] sm:text-xs font-semibold tracking-[0.2em] text-primary-light/99 uppercase block">
              CURRENT JOURNEY BUDGET
            </span>
            <h2 className="text-3xl sm:text-[36px] font-serif text-white tracking-wide font-semibold">
              Rs {basePrice.toLocaleString()}{' '}
              <span className="text-xs sm:text-[15px] font-sans font-normal text-primary-light/99">/ person</span>
            </h2>
            <p className="text-xs sm:text-[13px] text-primary-light/99 tracking-wide font-normal font-sans">
              Visa, flights & accommodation included
            </p>
          </div>
          <Button
            variant="secondary"
            fullWidth
            onClick={handleBookJourney}
            className="text-primary text-xs sm:text-[13px] font-bold tracking-[0.2em] py-4"
          >
            BOOK JOURNEY
          </Button>
        </ScrollReveal>
      </section>
    </div>
  );
}
