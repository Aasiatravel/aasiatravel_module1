'use client';

import { cn } from '@/lib/utils';
import { useTimeWidget } from '@/hooks';
import type { TimeWidgetProps } from '@/types';

export default function TimeWidget({ className }: TimeWidgetProps) {
  const { makkahTime, makkahDate, label } = useTimeWidget();

  return (
    <div
      className={cn(
        'bg-background-warm/90 backdrop-blur-sm border border-primary-soft p-3.5 sm:p-4 rounded-4px inline-block',
        className
      )}
    >
      <p className="text-[10px] tracking-[0.2em] font-bold text-primary-light mb-1 font-sans">
        {label}
      </p>
      <p className="font-serif text-xl sm:text-2xl font-bold mb-1 tracking-widest text-primary">
        {makkahTime}
      </p>
      <p className="text-[10px] tracking-[0.2em] font-semibold text-primary-light font-sans">
        {makkahDate}
      </p>
    </div>
  );
}
