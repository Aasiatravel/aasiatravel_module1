'use client';

import React, { useState } from 'react';
import { packages } from '@/data/home';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';
import PackageCard from './PackageCard';
import { useScrollContainer } from '@/hooks';
import { ScrollReveal } from '@/components/ui';
import type { Package } from '@/types';

interface PackageTypeSectionProps {
  title: string;
  list: Package[];
  hasMb: boolean;
}

function PackageTypeSection({ title, list, hasMb }: PackageTypeSectionProps) {
  const { containerRef, scroll } = useScrollContainer();
  return (
    <div className={hasMb ? 'mb-16 md:mb-24' : ''}>
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-primary">{title}</h3>
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={() => scroll('left')}
            className="p-1.5 sm:p-2 border border-primary/20 rounded-full hover:bg-primary/5 text-primary cursor-pointer transition-all active:scale-95 duration-200 lg:hover:bg-primary lg:hover:text-white lg:hover:border-primary"
            aria-label="Scroll left"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1.5 sm:p-2 border border-primary/20 rounded-full hover:bg-primary/5 text-primary cursor-pointer transition-all active:scale-95 duration-200 lg:hover:bg-primary lg:hover:text-white lg:hover:border-primary"
            aria-label="Scroll right"
          >
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 -mx-4 pl-4 pr-0 sm:-mx-6 sm:pl-6 lg:-mx-8 lg:pl-8 after:content-[''] after:block after:w-0 lg:after:w-2 after:shrink-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {list.map((pkg) => (
          <div
            key={pkg.id}
            className="shrink-0 w-[calc(100%-96px)] sm:w-[calc((100%-96px)/2)] lg:w-[calc((100%-112px)/3)]"
          >
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PackagesSection() {
  const [filter, setFilter] = useState<string>('ALL');

  const uniqueTypes = Array.from(new Set(packages.map((p) => p.type)));

  const filteredPackages = packages.filter(
    (p) => filter === 'ALL' || p.type.toUpperCase() === filter
  );

  return (
    <section id="packages" className="pt-12 pb-12 md:pt-20 md:pb-20 bg-white">
      <ScrollReveal className="container-custom">
        <div className="mb-8 md:mb-12">
          <p className="text-primary-light text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 font-sans">
            Featured Packages
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary leading-tight">
            Choose your journey
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 mb-8 md:mb-12 bg-background-warm border border-primary-soft/30 p-3.5 sm:p-4 rounded-md">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-primary-muted font-sans uppercase">
              Filter by:
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {uniqueTypes.map((type) => {
                const filterVal = type.toUpperCase();
                const isActive = filter === filterVal;
                return (
                  <button
                    key={type}
                    onClick={() => setFilter(isActive ? 'ALL' : filterVal)}
                    className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest transition-all duration-300 font-sans cursor-pointer ${isActive
                      ? 'bg-primary text-white border border-primary shadow-sm'
                      : 'border border-primary-soft/60 text-primary-muted bg-white hover:border-primary-muted/60 hover:text-primary hover:bg-background-warm/30'
                      }`}
                  >
                    {filterVal}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto text-primary-muted text-[10px] sm:text-xs font-medium font-sans">
            {filter !== 'ALL' && (
              <button
                onClick={() => setFilter('ALL')}
                className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs font-bold tracking-widest text-primary-light hover:text-primary transition-colors cursor-pointer font-sans border-b border-dashed border-primary-light/40 hover:border-primary mr-1"
              >
                <X size={12} />
                CLEAR
              </button>
            )}

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-muted/30"></span>
              <span>
                {filteredPackages.length} {filteredPackages.length === 1 ? 'Package' : 'Packages'}
              </span>
            </div>

            {filter !== 'ALL' && (
              <button
                onClick={() => setFilter('ALL')}
                className="inline-flex md:hidden items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs font-bold tracking-widest text-primary-light hover:text-primary transition-colors cursor-pointer font-sans border-b border-dashed border-primary-light/40 hover:border-primary ml-1"
              >
                <X size={12} />
                CLEAR
              </button>
            )}
          </div>
        </div>

        {uniqueTypes.map((type) => {
          const filterVal = type.toUpperCase();
          const sectionList = filteredPackages.filter((p) => p.type === type);
          const showSection = (filter === 'ALL' || filter === filterVal) && sectionList.length > 0;
          if (!showSection) return null;

          const visibleTypes = uniqueTypes.filter((t) => {
            const val = t.toUpperCase();
            return (filter === 'ALL' || filter === val) && filteredPackages.some((p) => p.type === t);
          });
          const isLastVisible = visibleTypes[visibleTypes.length - 1] === type;

          return (
            <PackageTypeSection
              key={type}
              title={`${type} Packages`}
              list={sectionList}
              hasMb={!isLastVisible}
            />
          );
        })}
      </ScrollReveal>
    </section>
  );
}
