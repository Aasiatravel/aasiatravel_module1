'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { features } from '@/data/home';

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16">
          <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-sans font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-5xl font-serif text-primary">What sets us apart</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-7xl font-serif text-primary-light/20 mb-6 font-bold leading-none">
                {feature.number}
              </span>
              <h4 className="text-lg font-bold mb-4 text-primary font-serif">{feature.title}</h4>
              <p className="text-primary-light leading-relaxed font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
