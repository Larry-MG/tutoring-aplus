'use client';

import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import ContactForm from './ContactForm';
import { CONTACT_INFO } from '@/lib/constants';

/* ------------------------------------------------------------------ */
/*  Chalk-drawn SVG icons with stroke-dasharray draw-on animation     */
/* ------------------------------------------------------------------ */

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
        className="animate-chalk-draw"
      />
      <circle cx="12" cy="9" r="2.5" className="animate-chalk-draw" />
    </svg>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        className="animate-chalk-draw"
      />
      <path d="M3 5l9 7 9-7" className="animate-chalk-draw" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" className="animate-chalk-draw" />
      <path d="M12 6v6l4 2" className="animate-chalk-draw" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Info card                                                          */
/* ------------------------------------------------------------------ */

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  note?: string;
}

function InfoCard({ icon, label, note }: InfoCardProps) {
  return (
    <div className="group flex items-start gap-4 rounded-xl bg-[rgba(228,224,216,0.03)] border border-[rgba(228,224,216,0.06)] p-5 transition-transform duration-200 hover:translate-x-1">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-dim text-sage">
        {icon}
      </div>
      <div>
        <p className="text-chalk-bright text-sm font-medium">{label}</p>
        {note && (
          <p className="mt-0.5 text-xs text-chalk-dim">{note}</p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact section                                                    */
/* ------------------------------------------------------------------ */

export default function Contact() {
  return (
    <section id="contact" className="relative bg-board-light py-24 px-4 overflow-hidden">
      {/* Top gradient border line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-chalk-faint to-transparent"
        aria-hidden="true"
      />

      <SectionHeader
        chalkLabel="Get in Touch"
        title="Ready to Start Learning?"
        description="Fill out the form below and I'll get back to you within 24 hours to schedule your first session."
        className="mb-16"
      />

      <div className="relative z-10 mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16">
        {/* Left — form column */}
        <ScrollReveal delay={0.1}>
          <div>
            {/* Personal intro */}
            <p className="font-chalk text-chalk-dim italic mb-8 text-lg">
              Hi there! I&apos;m Abir — with 15+ years of international teaching
              experience and an M.Sc. in Physics, I&apos;m here to make math and
              physics finally click for you.
            </p>

            <ContactForm />
          </div>
        </ScrollReveal>

        {/* Right — info cards */}
        <ScrollReveal delay={0.25} staggerChildren={0.1}>
          <div className="flex flex-col gap-4 lg:pt-14">
            <InfoCard
              icon={<MapPinIcon />}
              label={CONTACT_INFO.location}
              note={CONTACT_INFO.locationNote}
            />
            <InfoCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" className="animate-chalk-draw" />
                </svg>
              }
              label={CONTACT_INFO.phone}
            />
            <InfoCard
              icon={<EnvelopeIcon />}
              label={CONTACT_INFO.email}
            />
            <InfoCard
              icon={<ClockIcon />}
              label={CONTACT_INFO.hours}
              note={CONTACT_INFO.hoursNote}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
