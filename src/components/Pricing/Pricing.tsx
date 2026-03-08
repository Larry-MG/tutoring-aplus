'use client';

import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import AnimatedPrice from './AnimatedPrice';
import ChalkCheckmark from './ChalkCheckmark';
import { PRICING_FEATURES } from '@/lib/constants';

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-board py-24 px-4 overflow-hidden">
      {/* Decorative radial glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-amber-glow/10 blur-3xl" />
      </div>

      <ScrollReveal className="relative z-10">
        <SectionHeader
          chalkLabel="Simple Pricing"
          title="Invest in Your Success"
          description="No packages, no commitments. Just straightforward, affordable tutoring."
          className="mb-16"
        />

        {/* Centered pricing card */}
        <div className="mx-auto max-w-lg">
          <div className="relative rounded-2xl border border-[rgba(228,224,216,0.07)] bg-board-light p-8 md:p-10">
            {/* Most Popular badge */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <span className="inline-block rounded-b-lg bg-amber px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-board">
                Most Popular
              </span>
            </div>

            {/* Plan title */}
            <h3 className="mt-6 text-center font-display text-2xl font-bold text-chalk-bright">
              1-on-1 Tutoring
            </h3>

            {/* Animated price */}
            <div className="my-6">
              <AnimatedPrice />
            </div>

            {/* Tagline */}
            <p className="mb-8 text-center text-sm text-chalk-dim">
              All subjects. All levels. One rate.
            </p>

            {/* Features list */}
            <ul className="mb-8 space-y-4">
              {PRICING_FEATURES.map((feature, i) => (
                <li key={feature} className="flex items-center gap-3 text-chalk">
                  <ChalkCheckmark delay={i * 0.1} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <Button href="#contact" fullWidth className="text-base py-3.5">
              Get Started Today
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
