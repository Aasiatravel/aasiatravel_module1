'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/home';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="section-padding bg-background-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4 font-sans">
            Pilgrim Stories
          </p>
          <h2 className="text-5xl font-serif">What our pilgrims say</h2>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="min-w-[350px] md:min-w-[400px] bg-white rounded-2xl p-8 snap-center flex flex-col border border-primary-light/5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col font-sans">
                  <h4 className="text-background-dark font-bold text-sm text-primary">{t.name}</h4>
                  <p className="text-background-dark/60 text-xs text-primary-light">{t.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <p className="text-background-dark text-base leading-relaxed mb-10 grow font-sans italic text-primary-light">
                "{t.quote}"
              </p>

              <div className="relative w-20 h-20 -mb-12">
                <div className="absolute inset-0 rounded-full border border-primary-soft overflow-hidden bg-background-cream">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
