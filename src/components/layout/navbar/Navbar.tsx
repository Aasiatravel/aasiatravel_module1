'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks, siteConfig } from '@/config/site';
import { Button } from '@/components/ui';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Track active hash
    setActiveHash(window.location.hash || '#home');
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return activeHash === '#home' || activeHash === '';
    }
    return href.endsWith(activeHash);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-[100] transition-all duration-300 py-4 md:py-5',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-primary-soft/20' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={160}
            height={56}
            className="h-10 md:h-12 w-auto object-contain"
            style={{ width: 'auto', height: 'auto' }}
            priority
            loading="eager"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-primary text-xs font-semibold tracking-[0.15em] hover:text-accent-gold transition-colors relative py-1',
                  active && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent-gold'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            variant="primary"
            className="bg-secondary text-white text-xs font-semibold tracking-widest px-6 py-3 rounded-[4px] hover:bg-secondary/90 transition-colors shadow-sm"
          >
            GET IN TOUCH
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm hover:bg-white/90 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}

