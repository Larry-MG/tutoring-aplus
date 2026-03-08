'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SubjectIconProps {
  subjectId: string;
  className?: string;
}

const drawTransition = {
  duration: 1.2,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

function IconPaths({ subjectId }: { subjectId: string }) {
  switch (subjectId) {
    case 'algebra1':
      // x+y on a small grid/graph
      return (
        <>
          {/* grid lines */}
          <motion.line
            x1="6" y1="24" x2="42" y2="24"
            variants={pathVariants}
          />
          <motion.line
            x1="24" y1="6" x2="24" y2="42"
            variants={pathVariants}
          />
          {/* x */}
          <motion.line x1="10" y1="14" x2="18" y2="22" variants={pathVariants} />
          <motion.line x1="18" y1="14" x2="10" y2="22" variants={pathVariants} />
          {/* + */}
          <motion.line x1="21" y1="18" x2="27" y2="18" variants={pathVariants} />
          <motion.line x1="24" y1="15" x2="24" y2="21" variants={pathVariants} />
          {/* y */}
          <motion.line x1="30" y1="14" x2="33" y2="18" variants={pathVariants} />
          <motion.line x1="36" y1="14" x2="30" y2="22" variants={pathVariants} />
        </>
      );

    case 'algebra2':
      // polynomial curve
      return (
        <motion.path
          d="M8 36 Q 16 8, 24 24 T 40 12"
          variants={pathVariants}
        />
      );

    case 'geometry':
      // triangle with angle marks
      return (
        <>
          <motion.path
            d="M24 8 L40 38 L8 38 Z"
            variants={pathVariants}
          />
          {/* angle arc bottom-left */}
          <motion.path
            d="M12 35 Q 14 33, 16 35"
            variants={pathVariants}
          />
          {/* angle arc bottom-right */}
          <motion.path
            d="M36 35 Q 34 33, 32 35"
            variants={pathVariants}
          />
          {/* angle arc top */}
          <motion.path
            d="M22 14 Q 24 16, 26 14"
            variants={pathVariants}
          />
        </>
      );

    case 'mechanics':
      // force vector / arrow
      return (
        <>
          <motion.line
            x1="12" y1="36" x2="36" y2="12"
            variants={pathVariants}
          />
          {/* arrowhead */}
          <motion.path
            d="M36 12 L28 14 M36 12 L34 20"
            variants={pathVariants}
          />
          {/* base dot / pivot */}
          <motion.circle
            cx="12" cy="36" r="2"
            variants={pathVariants}
          />
        </>
      );

    case 'electricity':
      // lightning bolt / circuit
      return (
        <motion.path
          d="M28 6 L18 22 L28 22 L20 42"
          variants={pathVariants}
        />
      );

    case 'magnetism':
      // magnetic field lines
      return (
        <>
          <motion.path
            d="M12 24 Q 12 12, 24 12 Q 36 12, 36 24"
            variants={pathVariants}
          />
          <motion.path
            d="M16 24 Q 16 16, 24 16 Q 32 16, 32 24"
            variants={pathVariants}
          />
          <motion.path
            d="M12 24 Q 12 36, 24 36 Q 36 36, 36 24"
            variants={pathVariants}
          />
          {/* poles */}
          <motion.line x1="10" y1="22" x2="10" y2="26" variants={pathVariants} />
          <motion.line x1="38" y1="22" x2="38" y2="26" variants={pathVariants} />
        </>
      );

    default:
      return null;
  }
}

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: drawTransition,
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function SubjectIcon({ subjectId, className }: SubjectIconProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-32px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-12 h-12', className)}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={containerVariants}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate={isInView ? 'visible' : 'hidden'}
    >
      <IconPaths subjectId={subjectId} />
    </motion.svg>
  );
}
