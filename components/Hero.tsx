'use client';

import Link from 'next/link';
import { getStatusColor, getStatusText } from '@/lib/utils';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  availability?: 'available' | 'busy' | 'leave';
}

export function Hero({ headline, subheadline, availability }: HeroProps) {
  if (!headline || !subheadline) {
    return null;
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-50 px-6 py-24 overflow-hidden"
    >
      {/* ── Geometric background ───────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[640px] h-[640px] rounded-full border border-slate-200/60 opacity-60" />
        <div className="absolute w-[420px] h-[420px] rounded-full border border-slate-200/40" />
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative max-w-2xl text-center space-y-8">

        {/* Status badge */}
        {availability && (
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: '0s' }}>
            <span
              className={[
                'inline-flex items-center gap-2 px-3.5 py-1.5',
                'rounded-full border text-xs font-light tracking-widest uppercase',
                getStatusColor(availability),
              ].join(' ')}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-current" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
              </span>
              {getStatusText(availability)}
            </span>
          </div>
        )}

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-light text-slate-900 leading-none tracking-tighter animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          {headline}
        </h1>

        {/* Hairline rule */}
        <div className="flex justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="block w-12 h-px bg-slate-300" />
        </div>

        {/* Subheadline */}
        <p
          className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-md mx-auto animate-fade-up"
          style={{ animationDelay: '0.24s' }}
        >
          {subheadline}
        </p>

        {/* CTA row — ✅ <Link> for internal anchor routes */}
        <div
          className="flex flex-wrap gap-3 justify-center pt-4 animate-fade-up"
          style={{ animationDelay: '0.34s' }}
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-700 text-white text-sm font-light tracking-wide rounded-lg transition-all duration-200 ease-out hover:-translate-y-0.5"
          >
            View Work
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 16 16"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 8h12M9 3l5 5-5 5" />
            </svg>
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-400 text-slate-700 text-sm font-light tracking-wide rounded-lg transition-all duration-200 ease-out hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  );
}