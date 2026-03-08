'use client';

import Image from 'next/image';
import SectionHeader from './ui/SectionHeader';
import ScrollReveal from './ui/ScrollReveal';

const credentials = [
  {
    stat: '15+ Years',
    description: 'Teaching across 3 countries — Egypt, France & the USA',
  },
  {
    stat: 'M.Sc. Physics',
    description: 'Theoretical Nuclear Physics — Cairo University',
  },
  {
    stat: 'NJ Certified',
    description: 'Mathematics Certification of Eligibility',
  },
  {
    stat: '1000+ Students',
    description: 'From free tutoring programs to private instruction',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-board-light py-24 px-4 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-chalk-faint to-transparent"
        aria-hidden="true"
      />

      <SectionHeader
        chalkLabel="Meet Your Tutor"
        title="Hi, I'm Abir"
        description="Dedicated to helping every student build real confidence in math and physics."
        className="mb-16"
      />

      {/* Bio row: text left, photo right */}
      <div className="relative z-10 mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
        <ScrollReveal delay={0.1}>
          <div className="space-y-5">
            <p className="text-chalk leading-relaxed">
              With over 15 years of international teaching experience across
              Egypt, France, and the United States, I&apos;ve taught IGCSE, CP,
              and Honors-level math and physics to students from all
              backgrounds.
            </p>
            <p className="text-chalk leading-relaxed">
              I hold an M.Sc. in Theoretical Nuclear Physics and a B.Sc. in
              Physics from Cairo University, along with a New Jersey
              Mathematics Certification of Eligibility. My approach centers on
              individualized support, hands-on technology, and building deep
              conceptual understanding — not just memorizing formulas.
            </p>
            <p className="text-chalk leading-relaxed">
              Beyond the classroom, I&apos;ve volunteered to lead free tutoring
              programs for grades 1–12 at community centers, and I&apos;m
              passionate about making quality education accessible to everyone.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="overflow-hidden rounded-2xl border border-[rgba(228,224,216,0.08)] w-56 lg:w-64 mx-auto lg:mx-0 shrink-0">
            <Image
              src="/abirphoto.jpg"
              alt="Abir Elshimy"
              width={256}
              height={256}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Credential cards — full width below */}
      <ScrollReveal delay={0.3} staggerChildren={0.1}>
        <div className="relative z-10 mx-auto max-w-5xl mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((cred) => (
            <div
              key={cred.stat}
              className="group rounded-xl bg-[rgba(228,224,216,0.03)] border border-[rgba(228,224,216,0.06)] p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="font-display text-2xl font-bold text-amber mb-1">
                {cred.stat}
              </p>
              <p className="text-sm text-chalk-dim leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
