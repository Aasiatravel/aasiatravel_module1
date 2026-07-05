'use client';

import Image from 'next/image';
import { stats, aboutData } from '@/data/home';
import { ScrollReveal } from '@/components/ui';

export default function AboutSection() {
  return (
    <section id="about" className="pt-16 pb-8 md:pt-24 md:pb-12 bg-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        <ScrollReveal
          direction="right"
          className="relative w-full aspect-3/2 lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/about.png"
            alt="Al-Masjid an-Nabawi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <p className="text-primary-light text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 font-sans">
            WHO WE ARE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 font-serif text-primary leading-tight">
            Guiding pilgrims since 2020
          </h2>

          <div className="space-y-4 md:space-y-6 text-primary-light leading-relaxed mb-8 lg:mb-12 font-sans text-sm sm:text-base">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
            <p className="text-primary">{aboutData.quote}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-1 sm:mb-2 text-primary">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs text-primary-light uppercase font-sans leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
