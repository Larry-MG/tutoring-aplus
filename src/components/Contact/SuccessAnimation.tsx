'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';

interface SuccessAnimationProps {
  show: boolean;
}

function generateConfetti(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (Math.random() * 360 * Math.PI) / 180;
    const distance = 40 + Math.random() * 80;
    const delay = Math.random() * 0.3;
    const type = Math.floor(Math.random() * 3); // 0 = line, 1 = dot, 2 = checkmark
    return { id: i, angle, distance, delay, type };
  });
}

function ConfettiMark({
  angle,
  distance,
  delay,
  type,
}: {
  angle: number;
  distance: number;
  delay: number;
  type: number;
}) {
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  const rotation = (angle * 180) / Math.PI;

  return (
    <motion.svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className="absolute left-1/2 top-1/2 text-chalk"
      style={{ marginLeft: -6, marginTop: -6 }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
      animate={{
        x,
        y,
        opacity: [1, 1, 0],
        scale: [0, 1.2, 0.8],
        rotate: rotation,
      }}
      transition={{
        duration: 1,
        delay,
        ease: 'easeOut' as const,
      }}
    >
      {type === 0 && (
        <line
          x1="2"
          y1="6"
          x2="10"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
      {type === 1 && (
        <circle cx="6" cy="6" r="2.5" fill="currentColor" />
      )}
      {type === 2 && (
        <polyline
          points="2,6 5,9 10,3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </motion.svg>
  );
}

export default function SuccessAnimation({ show }: SuccessAnimationProps) {
  const confettiPieces = useMemo(() => generateConfetti(14), []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex flex-col items-center justify-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* A+ with confetti */}
          <div className="relative mb-6">
            {/* Confetti burst */}
            {confettiPieces.map((piece) => (
              <ConfettiMark
                key={piece.id}
                angle={piece.angle}
                distance={piece.distance}
                delay={piece.delay}
                type={piece.type}
              />
            ))}

            {/* A+ text */}
            <motion.span
              className="font-display text-7xl font-bold text-amber select-none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 10,
              }}
            >
              A+
            </motion.span>
          </div>

          {/* Success copy */}
          <motion.h3
            className="font-display text-2xl font-bold text-chalk-bright mb-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Message Sent!
          </motion.h3>
          <motion.p
            className="text-chalk-dim text-center max-w-xs"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.4 }}
          >
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
