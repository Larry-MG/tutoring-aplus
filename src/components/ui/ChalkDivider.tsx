'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ChalkDividerProps {
  className?: string;
}

export default function ChalkDivider({ className }: ChalkDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-32px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className={cn('w-full py-8', className)}>
      <svg
        viewBox="0 0 1200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-3"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 6 Q 50 2, 100 6 T 200 6 T 300 6 T 400 6 T 500 6 T 600 6 T 700 6 T 800 6 T 900 6 T 1000 6 T 1100 6 T 1200 6"
          stroke="rgba(228,224,216,0.08)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      </svg>
    </div>
  );
}
