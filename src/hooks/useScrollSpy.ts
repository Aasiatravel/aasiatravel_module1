'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], options?: IntersectionObserverInit): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        options || {
          rootMargin: '-30% 0px -40% 0px',
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [sectionIds, options]);

  return activeSection;
}
