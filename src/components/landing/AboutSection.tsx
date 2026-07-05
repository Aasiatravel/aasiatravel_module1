'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { stats } from '@/data/home';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/about.png"
            alt="Al-Masjid an-Nabawi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-sans">
            WHO WE ARE
          </p>
          <h2 className="text-5xl mb-8 font-serif text-primary">Guiding pilgrims since 2020</h2>

          <div className="space-y-6 text-primary-light leading-relaxed mb-12 font-sans">
            <p>
              At Aasia Travel, we are committed to providing genuine, trustworthy, and reliable
              Umrah services to every guest. Our mission is to make your sacred journey simple and
              comfortable. We treat every customer with eternal love, care, mercy, and kindness.
            </p>
            <p>
              From the moment you begin planning your Umrah until you safely return home, our
              experienced team is here to guide and support you every step of the way. We help you
              perform your Umrah correctly and with ease, ensuring that you can focus on your worship.
            </p>
            <p className="italic font-serif text-primary">
              May Allah accept your Umrah and make your journey blessed, easy, and full of barakah.
              Ameen.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-serif font-bold mb-2 text-primary">{stat.value}</p>
                <p className="text-xs tracking-widest text-primary-light uppercase font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
