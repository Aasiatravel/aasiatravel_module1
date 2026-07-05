'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks, siteConfig } from '@/config/site';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getWhatsAppGetInTouchLink } from '@/lib/whatsapp';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { useScrollState, useScrollSpy, useSmoothScrollTo } from '@/hooks';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use custom reusable hooks
  const isScrolled = useScrollState(50);
  const activeSection = useScrollSpy(['home', 'about', 'packages', 'reviews']);
  const handleScrollToSection = useSmoothScrollTo();

  const isActive = (href: string) => {
    if (href === '/') {
      return activeSection === 'home';
    }
    return href.endsWith(`#${activeSection}`);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-100 transition-all duration-300 py-4 md:py-3 border-b',
          isScrolled
            ? 'bg-white/50 backdrop-blur-lg border-white'
            : 'bg-white/30 backdrop-blur-md border-white'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
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
                      className="absolute bottom-0 -left-2 -right-2 h-px bg-accent-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button
              variant="primary"
              onClick={() => window.open(getWhatsAppGetInTouchLink(), '_blank')}
              className="bg-secondary text-white text-xs font-semibold tracking-widest px-6 py-3 rounded-4px hover:bg-secondary/90 transition-colors shadow-sm"
            >
              GET IN TOUCH
            </Button>
          </div>

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
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
