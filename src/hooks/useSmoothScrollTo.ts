'use client';

import Lenis from 'lenis';

export function useSmoothScrollTo() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, delay = 0) => {
    if (href === '/') {
      if (typeof window !== 'undefined' && window.location.pathname === '/') {
        e.preventDefault();
        const lenis = (window as any).lenis as Lenis | undefined;
        const executeScroll = () => {
          if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(0, { offset: 0 });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };

        if (delay > 0) {
          setTimeout(executeScroll, delay);
        } else {
          executeScroll();
        }
      }
      return;
    }

    if (href.startsWith('/#') || href.startsWith('#')) {
      const id = href.replace('/#', '').replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        const lenis =
          typeof window !== 'undefined' ? ((window as any).lenis as Lenis | undefined) : undefined;
        const executeScroll = () => {
          if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(element, { offset: -70 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        };

        if (delay > 0) {
          setTimeout(executeScroll, delay);
        } else {
          executeScroll();
        }
      }
    }
  };

  return scrollToSection;
}
