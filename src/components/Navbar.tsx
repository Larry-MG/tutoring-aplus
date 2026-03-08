'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { useScrollActive } from '@/hooks/useScrollActive';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const activeId = useScrollActive(
    NAV_LINKS.map((l) => l.href.replace('#', '')),
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on outside click (exclude panel + toggle)
  useEffect(() => {
    if (!mobileOpen) return;
    function onDown(e: MouseEvent) {
      const t = e.target as Node;
      if (
        panelRef.current && !panelRef.current.contains(t) &&
        toggleRef.current && !toggleRef.current.contains(t)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [mobileOpen]);

  const navigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    },
    [],
  );

  return (
    <>
      {/* ── Top bar ── */}
      <nav
        ref={panelRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled || mobileOpen
            ? 'rgba(30, 42, 42, 0.97)'
            : 'rgba(30, 42, 42, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom:
            scrolled || mobileOpen
              ? '1px solid rgba(228, 224, 216, 0.08)'
              : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => navigate(e, '#home')}
            className="flex items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber font-chalk text-lg font-bold text-board">
              A+
            </span>
            <span className="font-display text-lg font-semibold text-chalk-bright">
              Tutoring A+
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => navigate(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    activeId === id
                      ? 'text-amber'
                      : 'text-chalk-dim hover:text-chalk-bright'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => navigate(e, '#contact')}
              className="rounded-lg bg-amber px-5 py-2 text-sm font-bold text-board transition-colors hover:bg-amber-hover"
            >
              Book a Session
            </a>
          </div>

          {/* Hamburger */}
          <button
            ref={toggleRef}
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-[2px] w-5 rounded-full bg-chalk transition-all duration-300 origin-center ${
                mobileOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-chalk transition-all duration-300 ${
                mobileOpen ? 'scale-0 opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-chalk transition-all duration-300 origin-center ${
                mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* ── Mobile dropdown menu (below header) ── */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            borderTop: mobileOpen
              ? '1px solid rgba(228, 224, 216, 0.06)'
              : '1px solid transparent',
          }}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => navigate(e, link.href)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    activeId === id
                      ? 'text-amber'
                      : 'text-chalk hover:text-chalk-bright'
                  }`}
                  style={{
                    backgroundColor:
                      activeId === id
                        ? 'rgba(232, 167, 89, 0.1)'
                        : 'transparent',
                  }}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="my-2 h-px" style={{ backgroundColor: 'rgba(228, 224, 216, 0.06)' }} />

            <a
              href="#contact"
              onClick={(e) => navigate(e, '#contact')}
              className="rounded-lg bg-amber px-5 py-3 text-center text-sm font-bold text-board transition-colors hover:bg-amber-hover"
            >
              Book a Session
            </a>
          </div>
        </div>
      </nav>

      {/* ── Mobile backdrop ── */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? 'opacity-40 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
