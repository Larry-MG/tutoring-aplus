'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SubjectCard from './SubjectCard';
import { SUBJECTS } from '@/lib/constants';

export default function Services() {
  return (
    <section id="services" className="relative bg-board-light py-24 sm:py-32">
      {/* Top border: subtle gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--color-chalk-faint) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <SectionHeader
          chalkLabel="What I Teach"
          title="Subjects & Topics"
          description="Struggling with formulas or concepts? I break down tough topics into clear, digestible steps so you can build real understanding — not just memorize."
          className="mb-16"
        />

        {/* Subject cards grid */}
        <ScrollReveal staggerChildren={0.08}>
          <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SUBJECTS.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Bottom note */}
        <ScrollReveal className="mt-14" delay={0.4}>
          <div className="flex items-start gap-3 rounded-lg border border-chalk-faint/10 bg-[rgba(228,224,216,0.03)] px-5 py-4">
            {/* Info icon */}
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-sage"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm leading-relaxed text-chalk-dim">
              Sessions available online via Zoom or in-person in the Oak Park /
              Agoura Hills area. Flexible scheduling for busy students.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
