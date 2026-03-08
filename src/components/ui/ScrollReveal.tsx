'use client';

import { useRef } from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

const containerVariants = (
  delay: number,
  staggerChildren?: number,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      ...(staggerChildren !== undefined && { staggerChildren }),
    },
  },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  staggerChildren,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-64px' });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants(delay, staggerChildren)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.div variants={itemVariants}>{children}</motion.div>
    </motion.div>
  );
}

export { itemVariants as scrollRevealItemVariants };
