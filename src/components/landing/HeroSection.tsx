'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { pilgrimAvatars } from '@/data/home';

export default function HeroSection() {
  const [makkahTime, setMakkahTime] = useState('1:20:35 pm');
  const [makkahDate, setMakkahDate] = useState('13th Muharram, 1448 AH');

  useEffect(() => {
    const updateMakkahTime = () => {
      const now = new Date();

      try {
        // Time in Makkah (UTC+3 / Asia/Riyadh)
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Riyadh',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });

        // Formats as "1:20:35 PM" -> convert to lowercase "1:20:35 pm"
        const timeStr = timeFormatter.format(now).toLowerCase();
        setMakkahTime(timeStr);

        // Hijri Date in Makkah
        const hijriFormatter = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', {
          timeZone: 'Asia/Riyadh',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });

        const hijriStr = hijriFormatter.format(now);

        // Parse and format into "20th Muharram, 1448 AH" style
        const dayMatch = hijriStr.match(/\b\d{1,2}\b/);
        const yearMatch = hijriStr.match(/\b\d{4}\b/);

        const months = [
          'Muharram', 'Safar', "Rabi' al-Awwal", "Rabi' al-Thani",
          'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', "Sha'ban",
          'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah'
        ];

        let monthName = 'Muharram';
        for (const m of months) {
          if (hijriStr.includes(m) || hijriStr.toLowerCase().includes(m.toLowerCase().replace("'", ""))) {
            monthName = m;
            break;
          }
        }

        if (dayMatch && yearMatch) {
          const dayNum = parseInt(dayMatch[0]);
          const yearNum = yearMatch[0];

          let suffix = 'th';
          if (dayNum % 10 === 1 && dayNum !== 11) suffix = 'st';
          else if (dayNum % 10 === 2 && dayNum !== 12) suffix = 'nd';
          else if (dayNum % 10 === 3 && dayNum !== 13) suffix = 'rd';

          setMakkahDate(`${dayNum}${suffix} ${monthName}, ${yearNum} AH`);
        } else {
          setMakkahDate(hijriStr.includes('AH') ? hijriStr : `${hijriStr} AH`);
        }
      } catch (e) {
        // Fallback to static time if formatting fails
        setMakkahTime('1:20:35 pm');
        setMakkahDate('13th Muharram, 1448 AH');
      }
    };

    updateMakkahTime();
    const interval = setInterval(updateMakkahTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      {/* ── Mobile/Tablet Background Image (below lg) ── */}
      <div className="absolute inset-0 lg:hidden z-0">
        <Image
          src="/images/hero-2.png"
          alt="Pilgrims at Kaaba"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-linear-to-b from-white/95 via-white/90 via-50% to-white/35" />
      </div>

      {/* ── Desktop Background Image (lg and above) ── */}
      <div className="hidden lg:block absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero.png"
          alt="Pilgrims at Kaaba Desktop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 container-custom min-h-screen flex flex-col pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-auto flex flex-col items-start max-w-xl lg:max-w-lg xl:max-w-xl w-full"
        >
          {/* Makkah Time Widget */}
          <div className="bg-background-warm/90 backdrop-blur-sm border border-primary-soft p-3.5 sm:p-4 rounded-4px mb-6 md:mb-8 inline-block">
            <p className="text-[10px] tracking-[0.2em] font-bold text-primary-light mb-1 font-sans">
              MAKKAH, SAUDI ARABIA
            </p>
            <p className="font-serif text-xl sm:text-2xl font-bold mb-1 tracking-widest text-primary">
              {makkahTime}
            </p>
            <p className="text-[10px] tracking-[0.2em] font-semibold text-primary-light font-sans">
              {makkahDate}
            </p>
          </div>

          <p className="text-accent-gold text-xs sm:text-sm tracking-[0.22em] uppercase mb-4 font-semibold font-sans">
            Trusted Hajj & Umrah Specialists
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-serif text-primary mb-5 md:mb-6">
            <span className="italic">Guiding Every Step</span> of Your{' '}
            Sacred Journey.
          </h1>

          <p className="text-primary-muted text-sm sm:text-base max-w-md mb-6 md:mb-8 leading-relaxed font-sans">
            Thoughtfully Guided Pilgrimages For Those Who Seek More Than Just A Trip — A Transformation.
          </p>

          <Link href="/#packages">
            <Button className="bg-primary text-white text-xs font-semibold tracking-widest py-4 px-8 rounded-4px hover:bg-primary/95 transition-colors">
              EXPLORE PACKAGES
            </Button>
          </Link>

          <div className="mt-8 md:mt-10 flex items-center gap-3 sm:gap-4 flex-wrap">
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
            <p className="text-xs sm:text-sm text-primary font-sans font-semibold tracking-wide">
              Trusted By <span className="text-primary-light font-bold">1329</span> Happy Pilgrims
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

