'use client';

import { motion } from 'framer-motion';

const equations = [
  { text: 'F = ma', top: '8%', left: '5%', rotate: -6, size: '1.4rem' },
  { text: 'E = mc²', top: '18%', right: '8%', rotate: 4, size: '1.3rem' },
  { text: 'x = −b ± √(b²−4ac) / 2a', top: '35%', left: '2%', rotate: -3, size: '1.1rem' },
  { text: 'V = IR', top: '55%', right: '4%', rotate: 5, size: '1.5rem' },
  { text: 'ΣF = 0', top: '70%', left: '8%', rotate: -4, size: '1.3rem' },
  { text: 'y = mx + b', top: '82%', right: '12%', rotate: 3, size: '1.2rem' },
  { text: 'a² + b² = c²', top: '45%', right: '2%', rotate: -2, size: '1.4rem' },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' as const },
  },
};

export default function ChalkEquations() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none hidden md:block"
      variants={container}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      {equations.map((eq) => (
        <motion.span
          key={eq.text}
          variants={item}
          className="absolute font-chalk select-none whitespace-nowrap"
          style={{
            top: eq.top,
            left: eq.left,
            right: eq.right,
            transform: `rotate(${eq.rotate}deg)`,
            fontSize: eq.size,
            color: 'rgba(255, 255, 255, 0.06)',
          }}
        >
          {eq.text}
        </motion.span>
      ))}
    </motion.div>
  );
}
