'use client';

import { motion } from 'framer-motion';
import type { FadeInProps } from '@/types';

export default function FadeIn({ children, delay = 0, duration = 0.8, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
