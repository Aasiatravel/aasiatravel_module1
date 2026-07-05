'use client';

import { useRef } from 'react';

export function useScrollContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right', gap = 24, fallbackWidth = 350) => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.firstElementChild?.getBoundingClientRect().width || fallbackWidth;
      const scrollAmount = cardWidth + gap;
      container.scrollTo({
        left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth',
      });
    }
  };

  return { containerRef, scroll };
}
