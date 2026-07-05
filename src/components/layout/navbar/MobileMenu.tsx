'use client';

import React from 'react';
import Link from 'next/link';
import { navLinks } from '@/config/site';
import { Button } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { useLockScroll, useSmoothScrollTo } from '@/hooks';
import { getWhatsAppGetInTouchLink } from '@/lib/whatsapp';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useLockScroll(isOpen);
  const handleScrollToSection = useSmoothScrollTo();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-90 lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs z-10"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 w-full bg-white border-b border-primary-soft/30 shadow-2xl px-6 pt-[76px] pb-6 flex flex-col gap-5 z-20 overflow-hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    onClose();
                    handleScrollToSection(e, link.href, 50);
                  }}
                  className="py-4 text-[#B0895B] text-sm font-normal border-b border-primary-soft hover:text-accent-gold transition-colors block uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3 items-start">
              <span className="text-sm text-secondary">
                Need help?
              </span>
              <Button
                variant="primary"
                className="bg-secondary hover:bg-secondary/90 text-white text-xs tracking-widest px-8 py-3.5 rounded-4px transition-colors"
                onClick={() => {
                  onClose();
                  window.open(getWhatsAppGetInTouchLink(), '_blank');
                }}
              >
                GET IN TOUCH
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
