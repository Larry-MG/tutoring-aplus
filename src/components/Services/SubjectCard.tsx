'use client';

import { motion } from 'framer-motion';
import { scrollRevealItemVariants } from '@/components/ui/ScrollReveal';
import SubjectIcon from './SubjectIcon';

interface Subject {
  id: string;
  title: string;
  category: 'Math' | 'Physics';
  description: string;
  equation: string;
}

interface SubjectCardProps {
  subject: Subject;
}

const categoryStyles = {
  Math: {
    badge: 'bg-sage/10 text-sage',
    glow: '0 8px 32px -8px rgba(106,153,78,0.25)',
  },
  Physics: {
    badge: 'bg-amber/10 text-amber',
    glow: '0 8px 32px -8px rgba(217,164,65,0.25)',
  },
} as const;

export default function SubjectCard({ subject }: SubjectCardProps) {
  const styles = categoryStyles[subject.category];

  return (
    <motion.div
      variants={scrollRevealItemVariants}
      whileHover={{
        y: -6,
        boxShadow: styles.glow,
        transition: { duration: 0.3, ease: 'easeOut' as const },
      }}
      className="relative overflow-hidden rounded-xl border border-[rgba(228,224,216,0.06)] bg-[rgba(228,224,216,0.03)] p-6 transition-colors"
    >
      {/* Category badge */}
      <span
        className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium tracking-wide ${styles.badge} mb-4`}
      >
        {subject.category}
      </span>

      {/* Icon */}
      <div className="mb-4 text-chalk-dim">
        <SubjectIcon subjectId={subject.id} />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-chalk-bright mb-2">
        {subject.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-chalk-dim">
        {subject.description}
      </p>

      {/* Decorative equation */}
      <span
        className="pointer-events-none absolute bottom-3 right-4 select-none font-chalk text-lg text-chalk-faint/30"
        aria-hidden="true"
      >
        {subject.equation}
      </span>
    </motion.div>
  );
}
