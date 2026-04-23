'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavbarProps {
  hasHero: boolean;
  hasAbout: boolean;
  hasExperience: boolean;
  hasProjects: boolean;
  hasContact: boolean;
}

export function Navbar({
  hasHero,
  hasAbout,
  hasExperience,
  hasProjects,
  hasContact,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const sections = [
    { name: 'Home',       href: '#hero',       visible: hasHero },
    { name: 'About',      href: '#about',      visible: hasAbout },
    { name: 'Experience', href: '#experience', visible: hasExperience },
    { name: 'Projects',   href: '#projects',   visible: hasProjects },
    { name: 'Contact',    href: '#contact',    visible: hasContact },
  ];

  const visibleSections = sections.filter((s) => s.visible);

  return (
    <>
      <nav
        className={[
          'sticky top-0 z-50 transition-all duration-300 ease-out',
          scrolled || menuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_12px_-4px_rgba(15,23,42,0.06)]'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

          {/* ── Wordmark ─────────────────────────────────────── */}
          <Link
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-sm font-light tracking-widest text-slate-400 hover:text-slate-900 transition-colors duration-200 select-none"
          >
            PORTFOLIO
          </Link>

          {/* ── Desktop nav ──────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {visibleSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="relative px-4 py-2 text-[13px] font-light tracking-wide text-slate-500 hover:text-slate-900 transition-colors duration-200 group"
              >
                {section.name}
                <span className="absolute bottom-1.5 left-4 right-4 h-px bg-slate-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
              </Link>
            ))}
          </div>

          {/* ── Hamburger button (mobile only) ───────────────── */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg hover:bg-slate-100 transition-colors duration-200 focus:outline-none"
          >
            {/* Top bar */}
            <span
              className={[
                'block w-5 h-px bg-slate-700 transition-all duration-300 ease-out origin-center',
                menuOpen ? 'translate-y-[6px] rotate-45' : '',
              ].join(' ')}
            />
            {/* Middle bar */}
            <span
              className={[
                'block w-5 h-px bg-slate-700 transition-all duration-300 ease-out',
                menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100',
              ].join(' ')}
            />
            {/* Bottom bar */}
            <span
              className={[
                'block w-5 h-px bg-slate-700 transition-all duration-300 ease-out origin-center',
                menuOpen ? '-translate-y-[6px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>

        </div>
      </nav>

      {/* ── Mobile drawer ──────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={[
          'fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-sm md:hidden',
          'transition-opacity duration-300 ease-out',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={[
          'fixed top-16 left-0 right-0 z-40 md:hidden',
          'bg-white border-b border-slate-100',
          'transition-all duration-300 ease-out',
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none',
        ].join(' ')}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col">
          {visibleSections.map((section, i) => (
            <Link
              key={section.href}
              href={section.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between py-4 border-b border-slate-50 last:border-0"
              style={{
                transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
              }}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-slate-300 select-none w-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-light text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                  {section.name}
                </span>
              </div>
              <svg
                className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all duration-200"
                fill="none"
                viewBox="0 0 12 12"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h8M6 2l4 4-4 4" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}