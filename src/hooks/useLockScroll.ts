'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLockScroll(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('lenis-stopped');

    const lenisInstance =
      typeof window !== 'undefined' ? ((window as any).lenis as Lenis | undefined) : undefined;
    if (lenisInstance) {
      lenisInstance.stop();
    }

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('wheel', preventScroll, { passive: false });

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.classList.remove('lenis-stopped');

      const lenisInstanceCleanup =
        typeof window !== 'undefined' ? ((window as any).lenis as Lenis | undefined) : undefined;
      if (lenisInstanceCleanup) {
        lenisInstanceCleanup.start();
      }
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('wheel', preventScroll);
    };
  }, [isLocked]);
}
