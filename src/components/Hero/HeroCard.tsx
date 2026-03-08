'use client';

import { motion } from 'framer-motion';

interface HeroCardProps {
  label: string;
  title: string;
  description: string;
}

export default function HeroCard({ label, title, description }: HeroCardProps) {
  return (
    <motion.div
      className="rounded-xl px-5 py-4 cursor-default"
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      whileHover={{
        background: 'rgba(255, 255, 255, 0.07)',
        x: 4,
        transition: { duration: 0.2, ease: 'easeOut' as const },
      }}
    >
      <span className="block text-sage font-chalk text-sm mb-1">{label}</span>
      <h3 className="text-chalk-bright font-semibold text-base mb-1">{title}</h3>
      <p className="text-chalk-dim text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
