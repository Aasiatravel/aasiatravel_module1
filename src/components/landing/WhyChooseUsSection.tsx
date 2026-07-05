'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/home';

export default function WhyChooseUsSection() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
      <div className="container-custom">
        <div className="mb-10 md:mb-12 lg:mb-16">
          <p className="text-primary-light text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 font-sans font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-5xl font-serif text-primary">What sets us apart</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 lg:gap-x-20 gap-y-10 md:gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-6xl lg:text-7xl font-serif text-primary-light/20 mb-4 md:mb-6 font-semibold leading-none">
                {feature.number}
              </span>
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-primary font-sans">{feature.title}</h4>
              <p className="text-sm sm:text-base text-primary-light leading-relaxed font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
