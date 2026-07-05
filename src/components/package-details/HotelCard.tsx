import Image from 'next/image';
import type { HotelInfo } from '@/types';
import { getWhatsAppHotelDirectionsLink } from '@/lib/whatsapp';

export default function HotelCard({ type, name, rating, distance, features, image }: HotelInfo) {
  return (
    <div className="bg-white border border-primary-soft rounded-4px overflow-hidden flex flex-col h-full font-sans">
      <div className="h-[200px] sm:h-[282px] relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4 sm:p-6 lg:p-[27px] flex flex-col grow">
        <span className="text-[10px] font-semibold tracking-wider text-primary-light uppercase mb-2">
          {type}
        </span>
        <h3 className="font-serif text-lg font-bold text-primary mb-1">{name}</h3>
        <p className="text-[12.5px] font-normal text-primary-light mb-6">
          {'★'.repeat(rating)} · {distance}
        </p>

        <ul className="space-y-2 mb-8 grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm font-normal text-primary">
              <span className="text-primary-muted">—</span>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={getWhatsAppHotelDirectionsLink({ name, type, distance })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-primary uppercase border-b border-primary-soft w-fit pb-1 hover:text-primary-light transition-colors"
        >
          Get Directions →
        </a>
      </div>
    </div>
  );
}
