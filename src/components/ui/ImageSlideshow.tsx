'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ImageSlideshowProps {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  interval?: number;
}

export default function ImageSlideshow({
  images,
  alt,
  className,
  imageClassName,
  interval = 4000,
}: ImageSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`${alt} - Image ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn('object-cover', imageClassName)}
            priority={currentImageIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/35 backdrop-blur-xs px-2 py-1 rounded-full">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImageIndex(idx);
              }}
              className={cn(
                'w-1.5 h-1.5 rounded-full transition-all duration-300',
                idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
