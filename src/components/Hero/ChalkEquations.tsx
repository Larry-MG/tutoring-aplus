'use client';

import { motion } from 'framer-motion';

const equations = [
  // Top area — visible above the fold
  { text: 'F = ma', top: '2%', left: '6%', rotate: -12, size: '2.2rem', skewX: 4 },
  { text: 'π ≈ 3.14159…', top: '3%', right: '10%', rotate: 8, size: '2rem', skewX: -3 },
  { text: 'E = mc²', top: '14%', right: '5%', rotate: 11, size: '2.5rem', skewX: 5 },
  { text: 'Δx / Δt', top: '12%', left: '3%', rotate: -8, size: '2.1rem', skewX: -6 },

  // Middle area
  { text: 'x = −b ± √(b²−4ac) / 2a', top: '32%', left: '1%', rotate: -10, size: '1.8rem', skewX: 3 },
  { text: 'V = IR', top: '50%', right: '3%', rotate: 14, size: '2.4rem', skewX: -5 },
  { text: 'a² + b² = c²', top: '42%', right: '6%', rotate: -7, size: '2.2rem', skewX: 4 },
  { text: '∫ f(x) dx', top: '48%', left: '4%', rotate: 9, size: '2rem', skewX: -4 },

  // Lower area
  { text: 'ΣF = 0', top: '65%', left: '7%', rotate: -13, size: '2.1rem', skewX: 6 },
  { text: 'y = mx + b', top: '78%', right: '9%', rotate: 10, size: '2rem', skewX: -3 },
  { text: 'sin²θ + cos²θ = 1', top: '72%', right: '2%', rotate: -9, size: '1.9rem', skewX: 5 },
  { text: 'd = vt + ½at²', top: '88%', left: '5%', rotate: 7, size: '2.1rem', skewX: -5 },
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
            transform: `rotate(${eq.rotate}deg) skewX(${eq.skewX}deg)`,
            fontSize: eq.size,
            color: 'rgba(255, 255, 255, 0.14)',
          }}
        >
          {eq.text}
        </motion.span>
      ))}
    </motion.div>
  );
}
