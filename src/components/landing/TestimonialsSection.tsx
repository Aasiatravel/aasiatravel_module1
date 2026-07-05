'use client';

import Image from 'next/image';
import { testimonials } from '@/data/home';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);

  const renderCard = (t: typeof testimonials[0], uniqueKey: string) => (
    <div
      key={uniqueKey}
      className="w-[280px] md:w-[350px] h-[330px] md:h-[390px] shrink-0 flex flex-col relative rounded-[28px] md:rounded-[32px] overflow-hidden shadow-lg border border-primary-light/5"
    >
      {/* Cover Image */}
      <div className="relative h-[140px] md:h-[175px] w-full overflow-hidden">
        <Image
          src={t.coverImage || '/images/about.png'}
          alt={t.name}
          fill
          sizes="(max-width: 768px) 280px, 350px"
          className="object-cover"
        />
      </div>

      {/* Overlapping Avatar */}
      <div className="absolute top-[88px] md:top-[110px] left-6 md:left-8 z-20 w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white bg-[#D9D9D9] overflow-hidden flex items-center justify-center">
        <Image
          src={t.avatar}
          alt={t.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 -mt-6 bg-white rounded-t-[28px] p-5 md:p-6 pt-[62px] md:pt-[68px] flex flex-col grow justify-between">
        <div>
          <div className="flex items-start justify-between mb-3">
            <div className="flex flex-col font-sans">
              <h4 className="text-primary font-bold text-sm md:text-base leading-tight">{t.name}</h4>
              <p className="text-primary-light/60 text-[10px] md:text-xs mt-0.5">{t.location}</p>
            </div>
            <div className="flex gap-0.5 pt-0.5 shrink-0">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={13} className="fill-accent text-accent" />
              ))}
            </div>
          </div>

          <p className="text-[#333333] text-xs md:text-sm leading-relaxed font-sans line-clamp-3 md:line-clamp-4">
            {t.quote}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="section-padding bg-background-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-10 md:mb-16">
          <p className="text-accent text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 font-sans font-medium">
            Pilgrim Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">What our pilgrims say</h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 lg:w-48 bg-linear-to-r from-background-dark to-transparent z-20 pointer-events-none" />

        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 lg:w-48 bg-linear-to-l from-background-dark to-transparent z-20 pointer-events-none" />

        <div className="space-y-6 md:space-y-10 w-full relative">
          <div className="flex overflow-hidden w-full py-2">
            <div className="animate-marquee-ltr gap-6 md:gap-8 flex flex-row flex-nowrap px-3 md:px-4">
              {[...row1, ...row1].map((t, idx) => renderCard(t, `${t.id}-ltr-${idx}`))}
            </div>
          </div>

          <div className="flex overflow-hidden w-full py-2">
            <div className="animate-marquee-rtl gap-6 md:gap-8 flex flex-row flex-nowrap px-3 md:px-4">
              {[...row2, ...row2].map((t, idx) => renderCard(t, `${t.id}-rtl-${idx}`))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
