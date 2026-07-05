'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/config/site';
import { Button } from '@/components/ui';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/35 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Floating Card Menu matching Frame 48095575 */}
      <div className="absolute top-[85px] right-4 left-4 sm:left-auto sm:w-[350px] bg-white rounded-[20px] shadow-2xl p-6 flex flex-col gap-5 border border-primary-soft/30 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-primary-soft/50">
          <span className="font-serif italic text-base text-primary font-semibold tracking-wide">
            Begin your Blessed journey!
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-primary-soft/30 hover:bg-primary-soft/50 flex items-center justify-center text-primary-light transition-colors"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="py-4 text-primary text-xs font-semibold tracking-[0.15em] border-b border-primary-soft/30 hover:text-accent-gold transition-colors block"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Footer info & CTA */}
        <div className="pt-2 flex flex-col gap-3">
          <span className="text-xs text-primary-muted font-sans font-semibold tracking-wide">
            Need help?
          </span>
          <Button
            variant="primary"
            className="bg-secondary text-white text-xs font-semibold tracking-widest py-4 rounded-[4px] hover:bg-secondary/90 transition-colors w-full"
            onClick={onClose}
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </div>
  );
}

