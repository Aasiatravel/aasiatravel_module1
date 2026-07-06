'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Calendar } from 'lucide-react';
import { Badge, ImageSlideshow } from '@/components/ui';
import { formatPrice } from '@/lib/utils';
import type { Package } from '@/types';

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const images = pkg.images && pkg.images.length > 0 ? pkg.images : [pkg.image];

  return (
    <motion.div className="group bg-primary-light/5 border border-primary/5 rounded-sm overflow-hidden flex flex-col h-full">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-primary-soft/10">
        <ImageSlideshow
          images={images}
          alt={pkg.title}
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />

        {pkg.limitedSeats && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="danger">Limited seats</Badge>
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6 flex flex-col grow">
        <div className="flex items-center justify-between mb-3 sm:mb-4 font-sans">
          <span className="text-[10px] tracking-widest text-primary-light uppercase font-semibold">
            {pkg.category} · {pkg.type}
          </span>
          <div className="flex items-center gap-1 text-primary">
            <span className="text-xs font-semibold">{pkg.rating}</span>
            <Star size={12} className="fill-primary text-primary" />
          </div>
        </div>

        <h4 className="text-base sm:text-lg font-serif mb-3 sm:mb-4 grow text-primary font-bold">
          {pkg.title}
        </h4>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-primary-light text-xs mb-5 sm:mb-6 font-sans">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-primary-light shrink-0" />
            <span>{pkg.date}</span>
          </div>
          <span className="text-primary-light/40 hidden xs:inline">•</span>
          <span>From {pkg.departureCity}</span>
          <span className="ml-auto shrink-0 font-medium text-primary text-[10px] sm:text-[11px] bg-primary-soft/60 px-2 py-0.5 rounded-sm">
            {pkg.duration}
          </span>
        </div>

        <div className="pt-4 sm:pt-6 border-t border-primary/10 flex items-center justify-between font-sans">
          <p className="text-xs sm:text-sm text-primary">
            <span className="font-bold">{formatPrice(pkg.price)}</span>
            <span className="text-[10px] text-primary-light ml-1 font-normal">/ person</span>
          </p>
          <Link
            href={`/packages/${pkg.id}`}
            className="text-[10px] tracking-widest font-bold uppercase text-primary border-b border-primary/50 hover:border-primary transition-all pb-0.5"
          >
            VIEW PACKAGE
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
