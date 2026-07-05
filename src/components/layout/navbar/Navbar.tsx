'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks, siteConfig } from '@/config/site';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Setup scroll spy observer
    const sections = ['home', 'about', 'packages', 'reviews'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-30% 0px -40% 0px',
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return activeSection === 'home';
    }
    return href.endsWith(`#${activeSection}`);
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/') {
      if (typeof window !== 'undefined' && window.location.pathname === '/') {
        e.preventDefault();
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(0, { offset: 0 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      return;
    }

    if (href.startsWith('/#') || href.startsWith('#')) {
      const id = href.replace('/#', '').replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        const lenis = typeof window !== 'undefined' ? (window as any).lenis : undefined;
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(element, { offset: -70 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-[100] transition-all duration-300 py-4 md:py-3 border-b',
          isScrolled
            ? 'bg-white/50 backdrop-blur-lg border-white'
            : 'bg-white/30 backdrop-blur-md border-white'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo or Mobile Title Container */}
          <div className="flex items-center h-[38px] sm:h-[42px] md:h-[46px]">
            {isMobileMenuOpen ? (
              <span className="text-base text-primary font-semibold tracking-wide leading-none">
                Begin your Blessed journey!
              </span>
            ) : (
              <Link href="/" className="flex items-center">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={150}
                  height={40}
                  className="h-[38px] sm:h-[42px] md:h-[46px] w-auto object-contain"
                  style={{ width: '85%', height: '85%' }}
                  priority
                />
              </Link>
            )}
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className={cn(
                    'text-primary text-xs font-semibold tracking-widest hover:text-accent-gold transition-colors py-1 relative',
                    !active && 'hover-underline'
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="navbar-active-underline"
                      className="absolute bottom-0 -left-2 -right-2 h-[1px] bg-accent-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              className="bg-secondary text-white text-xs font-semibold tracking-widest px-6 py-3 rounded-4px hover:bg-secondary/90 transition-colors shadow-sm"
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Mobile Toggle with center alignment & morph rotation animation */}
          <button
            className="lg:hidden text-primary w-10 h-10 flex items-center justify-center relative focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="absolute flex items-center justify-center w-6 h-6"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu Overlay Drawer */}
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

