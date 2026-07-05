'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={`w-[280px] md:w-[350px] h-[330px] md:h-[390px] shrink-0 flex flex-col relative rounded-[28px] md:rounded-[32px] overflow-hidden shadow-lg border border-primary-light/5 ${className || ''}`}
    >
      <div className="relative h-[140px] md:h-[175px] w-full overflow-hidden">
        <Image
          src={testimonial.coverImage || '/images/about.png'}
          alt={testimonial.name}
          fill
          sizes="(max-width: 768px) 280px, 350px"
          className="object-cover"
        />
      </div>

      <div className="absolute top-[88px] md:top-[110px] left-6 md:left-8 z-20 w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white bg-[#D9D9D9] overflow-hidden flex items-center justify-center">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 -mt-6 bg-white rounded-t-[28px] p-5 md:p-6 pt-[62px] md:pt-[68px] flex flex-col grow justify-between">
        <div>
          <div className="flex items-start justify-between mb-3">
            <div className="flex flex-col font-sans">
              <h4 className="text-primary font-bold text-sm md:text-base leading-tight">{testimonial.name}</h4>
              <p className="text-primary-light/60 text-[10px] md:text-xs mt-0.5">{testimonial.location}</p>
            </div>
            <div className="flex gap-0.5 pt-0.5 shrink-0">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={13} className="fill-accent text-accent" />
              ))}
            </div>
          </div>

          <p className="text-[#333333] text-xs md:text-sm leading-relaxed font-sans line-clamp-3 md:line-clamp-4">
            {testimonial.quote}
          </p>
        </div>
      </div>
    </div>
  );
}
