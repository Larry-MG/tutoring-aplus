'use client';

import { useRef, useEffect } from 'react';
import {
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  motion,
} from 'framer-motion';

export default function AnimatedPrice() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const display = useTransform(springVal, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      motionVal.set(50);
    }
  }, [isInView, motionVal]);

  return (
    <div ref={ref} className="flex items-baseline justify-center gap-1">
      <span className="font-display text-sage" style={{ fontSize: '1.5rem' }}>
        $
      </span>
      <motion.span
        className="font-display text-chalk-bright font-bold leading-none"
        style={{ fontSize: 'clamp(5rem, 10vw, 8rem)' }}
      >
        {display}
      </motion.span>
      <span className="font-display text-sage" style={{ fontSize: '1.5rem' }}>
        /hour
      </span>
    </div>
  );
}
