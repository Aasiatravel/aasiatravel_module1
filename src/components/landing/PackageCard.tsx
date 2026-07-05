'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui';
import { formatPrice } from '@/lib/utils';
import type { Package } from '@/types';

interface PackageCardProps {
  pkg: Omit<Package, 'description' | 'highlights' | 'itinerary' | 'inclusions' | 'exclusions' | 'galleryImages' | 'reviews' | 'location'>;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-primary-light/5 border border-primary/5 rounded-sm overflow-hidden flex flex-col h-full shadow-sm"
    >
      <div className="relative aspect-4/3 w-full">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {pkg.limitedSeats && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="danger">Limited seats</Badge>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center justify-between mb-4 font-sans">
          <span className="text-[10px] tracking-widest text-primary-light uppercase font-semibold">
            {pkg.category} · {pkg.type}
          </span>
          <div className="flex items-center gap-1 text-primary">
            <span className="text-xs font-semibold">{pkg.rating}</span>
            <Star size={12} className="fill-primary text-primary" />
          </div>
        </div>

        <h4 className="text-lg font-serif mb-4 grow text-primary font-bold">{pkg.title}</h4>

        <div className="flex items-center gap-2 text-primary-light text-xs mb-6 font-sans">
          <Calendar size={14} className="text-primary-light" />
          <span>
            {pkg.date} | From {pkg.departureCity}
          </span>
          <span className="ml-auto font-medium">{pkg.duration}</span>
        </div>

        <div className="pt-6 border-t border-primary/10 flex items-center justify-between font-sans">
          <p className="text-sm text-primary">
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
