'use client';

import { motion } from 'framer-motion';
import type { BlurRevealProps } from '@/types';

export default function BlurReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 12,
  className,
}: BlurRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
