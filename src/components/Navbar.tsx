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
      {/* ── Main nav bar ── */}
      <nav
        ref={panelRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: 'rgba(30, 42, 42, 0.97)',
          borderBottom: '1px solid rgba(143, 192, 169, 0.12)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => navigate(e, '#home')}
            className="group flex items-center gap-3"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-lg font-chalk text-lg font-bold text-board transition-all duration-300 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #e8a759, #f0b76a)',
                boxShadow: '0 2px 8px rgba(232,167,89,0.25)',
              }}
            >
              A+
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold leading-tight text-chalk-bright transition-colors duration-300 group-hover:text-amber">
                Tutoring A+
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-sage" style={{ opacity: 0.6 }}>
                Math & Physics
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => navigate(e, link.href)}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-chalk-bright' : 'text-chalk-dim hover:text-chalk-bright'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-amber" />
                  )}
                </a>
              );
            })}
            <div className="ml-3 h-5 w-px" style={{ backgroundColor: 'rgba(228,224,216,0.1)' }} />
            <a
              href="#contact"
              onClick={(e) => navigate(e, '#contact')}
              className="group relative ml-4 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-bold text-board transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #e8a759, #f0b76a)',
                boxShadow: '0 2px 12px rgba(232,167,89,0.25)',
              }}
            >
              <span className="relative z-10">Book a Session</span>
              <span
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, #f0b76a 0%, #f5c87d 100%)',
                }}
              />
            </a>
          </div>

          {/* Hamburger */}
          <button
            ref={toggleRef}
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors duration-200 hover:bg-chalk-faint md:hidden"
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
              ? '1px solid rgba(143, 192, 169, 0.08)'
              : '1px solid transparent',
          }}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => navigate(e, link.href)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-amber'
                      : 'text-chalk hover:text-chalk-bright'
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? 'rgba(232, 167, 89, 0.1)'
                      : 'transparent',
                  }}
                >
                  {isActive && (
                    <span
                      className="h-5 w-[3px] rounded-full"
                      style={{ background: 'linear-gradient(180deg, #e8a759, #f0b76a)' }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}

            <div
              className="my-2 h-px"
              style={{ backgroundColor: 'rgba(143, 192, 169, 0.08)' }}
            />

            <a
              href="#contact"
              onClick={(e) => navigate(e, '#contact')}
              className="rounded-xl px-5 py-3.5 text-center text-sm font-bold text-board transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #e8a759 0%, #f0b76a 100%)',
                boxShadow: '0 2px 12px rgba(232, 167, 89, 0.25)',
              }}
            >
              Book a Session
            </a>
          </div>
        </div>
      </nav>

      {/* ── Mobile backdrop ── */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
        }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
