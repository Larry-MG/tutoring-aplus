'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ChalkCheckmarkProps {
  delay: number;
}

export default function ChalkCheckmark({ delay }: ChalkCheckmarkProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <svg
      ref={ref}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0"
    >
      <motion.path
        d="M4 9l3.5 3.5L14 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sage"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.5, delay, ease: 'easeOut' as const }}
      />
    </svg>
  );
}
