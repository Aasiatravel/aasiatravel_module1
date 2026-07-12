'use client';

import { motion } from 'framer-motion';
import type { SlideRevealProps } from '@/types';

export default function SlideReveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'left',
  distance = 16,
  className,
}: SlideRevealProps) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
