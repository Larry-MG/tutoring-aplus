'use client';

import ScrollReveal from './ui/ScrollReveal';
import ChalkDivider from './ui/ChalkDivider';

export default function Footer() {
  return (
    <footer className="relative bg-board py-12 overflow-hidden">
      <ChalkDivider />

      <ScrollReveal>
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber font-display text-xl font-bold text-board">
                  A+
                </div>
                <span className="font-display text-xl text-chalk-bright">
                  Tutoring A+
                </span>
              </div>
              <p className="text-sm leading-relaxed text-chalk-dim">
                Helping students build confidence in math &amp; physics, one
                session at a time.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-chalk-bright">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Services', 'Pricing', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-chalk-dim transition hover:text-sage"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-chalk-bright">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-sage mb-0.5">Location</span>
                  <span className="text-chalk">Oak Park / Agoura Hills, CA</span>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-sage mb-0.5">Email</span>
                  <a
                    href="mailto:info@tutoringaplus.com"
                    className="text-chalk transition hover:text-sage"
                  >
                    info@tutoringaplus.com
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-sage mb-0.5">Hours</span>
                  <span className="text-chalk">Mon — Sat, flexible hours</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t border-chalk-faint pt-6 text-center">
            <p className="text-xs text-chalk-faint">
              &copy; 2026 Tutoring A+. All rights reserved.
            </p>
          </div>
        </div>

        {/* Decorative Equation */}
        <span className="pointer-events-none absolute bottom-4 right-6 select-none font-chalk text-2xl text-chalk opacity-[0.04]">
          ∫f(x)dx
        </span>
      </ScrollReveal>
    </footer>
  );
}
