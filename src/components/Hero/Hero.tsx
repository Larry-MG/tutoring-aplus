'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ChalkEquations from './ChalkEquations';
import HeroCard from './HeroCard';
import styles from './Hero.module.css';

const cards = [
  {
    label: 'Mathematics',
    title: 'Algebra 1 & 2, Geometry',
    description:
      'From linear equations to proofs — build a rock-solid foundation',
  },
  {
    label: 'Physics',
    title: 'Mechanics, E&M',
    description:
      "Newton's laws, circuits, magnetism — concepts that click",
  },
  {
    label: 'Rate',
    title: '$50 / hour',
    description: 'All subjects, all levels, one simple rate',
  },
];

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  },
});

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay: 0.6 + i * 0.15 },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Background layers */}
      <div className={styles.ruledLines} />
      <div className={styles.glow} />
      <ChalkEquations />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Overline */}
            <motion.div
              className="flex items-center gap-2 mb-6"
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sage" />
              </span>
              <span className="font-chalk text-sage text-lg tracking-wide">
                Online &amp; In-Person Tutoring
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-display text-chalk-bright text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight mb-6"
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
            >
              Making Math &amp; Physics
              <br />
              <span className={styles.chalkUnderline}>Finally Make Sense</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-chalk-dim text-base sm:text-lg leading-relaxed max-w-lg mb-8"
              variants={fadeUp(0.6)}
              initial="hidden"
              animate="visible"
            >
              Patient, personalized 1-on-1 tutoring for high school students in
              Oak Park &amp; Agoura Hills — and anywhere online.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp(0.8)}
              initial="hidden"
              animate="visible"
            >
              <Button href="#contact" variant="primary">
                Book a Session
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button href="#services" variant="ghost">
                View Subjects
              </Button>
            </motion.div>
          </div>

          {/* Right column — cards */}
          <div className="flex flex-col gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <HeroCard
                  label={card.label}
                  title={card.title}
                  description={card.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
