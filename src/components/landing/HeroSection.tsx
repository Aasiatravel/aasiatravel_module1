'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          {/* Makkah Time Widget */}
          <div className="bg-primary-light/10 border border-primary/20 p-4 rounded-sm mb-8 inline-block">
            <p className="text-[10px] tracking-widest text-primary-light mb-1">MAKKAH, SAUDI ARABIA</p>
            <p className="font-serif text-xl font-semibold mb-1 tracking-widest text-primary">1:20:35 pm</p>
            <p className="text-[10px] tracking-widest text-primary-light">13th Muharram, 1448 AH</p>
          </div>

          <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-sans">
            Trusted Hajj & Umrah Specialists
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight mb-8 font-serif text-primary">
            <span className="italic">Guiding Every Step</span> of Your Sacred Journey.
          </h1>

          <p className="text-primary-light text-lg max-w-md mb-10 leading-relaxed font-sans">
            Thoughtfully guided pilgrimages for those who seek more than just a trip — a transformation.
          </p>

          <Link href="/#packages">
            <Button className="bg-primary text-sm tracking-widest py-4 px-8">
              EXPLORE PACKAGES
            </Button>
          </Link>

          {/* Trust Indicator */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-primary-light overflow-hidden relative">
                  <Image
                    src="/images/review.png"
                    alt="Pilgrim Avatar"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-white text-xs font-bold z-10">
                +
              </div>
            </div>
            <p className="text-sm font-bold text-primary font-sans">
              Trusted By <span className="text-primary-light">1329</span> Happy Pilgrims
            </p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[450px] aspect-square rounded-full overflow-hidden border-12 border-background-cream shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="Pilgrims at Kaaba"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
