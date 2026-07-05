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

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-100 transition-all duration-300 py-3 border-b',
          isScrolled
            ? 'bg-white/50 backdrop-blur-lg border-white'
            : 'bg-white/30 backdrop-blur-md border-white'
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
              className="h-8 sm:h-9 md:h-[38px] w-auto object-contain"
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
                    'text-primary text-xs font-semibold tracking-widest hover:text-accent-gold transition-colors py-1',
                    active
                      ? 'relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent-gold'
                      : 'hover-underline'
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
              className="bg-secondary text-white text-xs font-semibold tracking-widest px-6 py-3 rounded-4px hover:bg-secondary/90 transition-colors shadow-sm"
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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

