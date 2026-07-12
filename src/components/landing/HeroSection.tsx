'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, TimeWidget, FadeIn, BlurReveal, SlideReveal } from '@/components/ui';
import { pilgrimAvatars } from '@/data/home';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 lg:hidden z-0">
        <Image
          src="/images/hero-2.jpg"
          alt="Pilgrims at Kaaba"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/95 via-white/50 via-50% to-white/35" />
      </div>

      <div className="hidden lg:block absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero.jpg"
          alt="Pilgrims at Kaaba Desktop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      <div className="relative z-20 container-custom min-h-screen flex flex-col pt-18 pb-12 sm:pt-20 sm:pb-16 md:pt-28 md:pb-24 lg:pt-32">
        <div className="mt-2 sm:mt-6 lg:my-auto flex flex-col items-start max-w-xl lg:max-w-lg xl:max-w-xl w-full">
          <FadeIn delay={0.15} className="mb-4 md:mb-8">
            <TimeWidget />
          </FadeIn>

          <SlideReveal direction="left" delay={0.25} duration={0.8}>
            <p className="text-accent-gold text-xs sm:text-sm tracking-[0.22em] uppercase mb-2 md:mb-4 font-semibold font-sans">
              Trusted Hajj & Umrah Specialists
            </p>
          </SlideReveal>

          <BlurReveal delay={0.35} duration={1.0} y={12}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-serif text-primary mb-3 md:mb-6">
              <span className="italic">Guiding Every Step</span> of Your Sacred Journey.
            </h1>
          </BlurReveal>

          <SlideReveal direction="left" delay={0.45} duration={0.8} distance={16}>
            <p className="text-primary-muted text-sm sm:text-base max-w-md mb-4 md:mb-8 leading-relaxed font-sans">
              Thoughtfully Guided Pilgrimages For Those Who Seek More Than Just A Trip A
              Transformation.
            </p>
          </SlideReveal>

          <FadeIn delay={0.55} duration={0.8}>
            <Link href="/#packages">
              <Button className="bg-primary text-white text-xs font-semibold tracking-widest py-4 px-8 rounded-4px hover:bg-primary/95 transition-colors">
                EXPLORE PACKAGES
              </Button>
            </Link>
          </FadeIn>

          <FadeIn delay={0.65} duration={0.8}>
            <div className="mt-4 md:mt-10 flex items-center gap-3 sm:gap-4 flex-wrap">
              <div className="flex -space-x-3">
                {pilgrimAvatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white ${avatar.fallbackBg}`}
                  >
                    <Image
                      src={avatar.src}
                      alt={`Pilgrim Avatar ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 32px, 40px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-white text-[10px] sm:text-xs font-bold border-2 border-white z-10">
                  +
                </div>
              </div>
              <p className="text-xs text-primary font-sans font-medium tracking-wide">
                Trusted By <span className="text-primary-light font-bold">1500+</span> Happy
                Pilgrims
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
