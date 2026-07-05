'use client';

import React, { useState } from 'react';
import { packages } from '@/data/home';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import PackageCard from './PackageCard';

export default function PackagesSection() {
  const [filter, setFilter] = useState<'ALL' | 'ECONOMY' | 'LUXURY'>('ALL');

  const filteredPackages = packages.filter(
    (p) => filter === 'ALL' || p.type.toUpperCase() === filter
  );

  const economyPackages = filteredPackages.filter((p) => p.type === 'Economy');
  const luxuryPackages = filteredPackages.filter((p) => p.type === 'Luxury');

  return (
    <section id="packages" className="pt-8 pb-8 md:pt-12 md:pb-12 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-sans">
            Featured Packages
          </p>
          <h2 className="text-5xl font-serif text-primary">Choose your journey</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-16 bg-primary-light/5 p-4 rounded-sm border border-primary/5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium tracking-widest text-primary-light font-sans">
              FILTER:
            </span>
            <div className="flex gap-2 flex-wrap">
              {(['ALL', 'ECONOMY', 'LUXURY'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 sm:px-8 py-2 rounded-full text-xs font-semibold tracking-widest transition-all font-sans cursor-pointer ${filter === f
                    ? 'bg-primary text-white'
                    : 'border border-primary text-primary hover:bg-primary/5'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm tracking-widest text-primary-light font-sans">
            {filteredPackages.length} Packages
          </p>
        </div>

        {/* Package Sections (Economy & Luxury) */}
        {[
          { type: 'Economy' as const, title: 'Economy Packages', list: economyPackages },
          { type: 'Luxury' as const, title: 'Luxury Packages', list: luxuryPackages },
        ].map((section, sectionIdx, sectionsArr) => {
          const showSection = (filter === 'ALL' || filter === section.type.toUpperCase()) && section.list.length > 0;
          if (!showSection) return null;

          // Only apply bottom margin on Economy block if both are active
          const showBoth = filter === 'ALL' && economyPackages.length > 0 && luxuryPackages.length > 0;
          const hasMb = section.type === 'Economy' && showBoth;

          return (
            <div key={section.type} className={hasMb ? 'mb-20' : ''}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-serif text-primary">{section.title}</h3>
                <div className="flex gap-3">
                  <button className="p-2 border border-primary/20 rounded-md hover:bg-primary/5 text-primary">
                    <ArrowLeft size={20} />
                  </button>
                  <button className="p-2 border border-primary/20 rounded-md hover:bg-primary/5 text-primary">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.list.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
