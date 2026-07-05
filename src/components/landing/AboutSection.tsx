'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { stats, aboutData } from '@/data/home';

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
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
            <p className="italic font-serif text-primary">
              {aboutData.quote}
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
