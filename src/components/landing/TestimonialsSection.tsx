'use client';

import { testimonials } from '@/data/home';
import { TestimonialCard, ScrollReveal } from '@/components/ui';

export default function TestimonialsSection() {
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);

  return (
    <section id="reviews" className="section-padding bg-background-dark text-white overflow-hidden">
      <ScrollReveal className="container-custom">
        <div className="mb-10 md:mb-16">
          <p className="text-accent text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 font-sans font-medium">
            Pilgrim Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">What our pilgrims say</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal className="relative w-full overflow-hidden" delay={0.1}>
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 lg:w-48 bg-linear-to-r from-background-dark to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 lg:w-48 bg-linear-to-l from-background-dark to-transparent z-20 pointer-events-none" />

        <div className="space-y-6 md:space-y-10 w-full relative">
          <div className="flex overflow-hidden w-full py-2">
            <div className="animate-marquee-ltr gap-6 md:gap-8 flex flex-row flex-nowrap px-3 md:px-4">
              {[...row1, ...row1].map((t, idx) => (
                <TestimonialCard key={`${t.id}-ltr-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden w-full py-2">
            <div className="animate-marquee-rtl gap-6 md:gap-8 flex flex-row flex-nowrap px-3 md:px-4">
              {[...row2, ...row2].map((t, idx) => (
                <TestimonialCard key={`${t.id}-rtl-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
