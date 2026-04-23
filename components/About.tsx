'use client';

import { PortableText } from '@portabletext/react';

type PortableTextBlock = {
  _key: string;
  _type: 'block' | string;
  children?: Array<{ _key: string; _type: string; text: string; marks?: string[] }>;
  markDefs?: Array<{ _key: string; _type: string; [key: string]: unknown }>;
  style?: string;
  [key: string]: unknown;
};

interface AboutProps {
  title?: string;
  bio?: PortableTextBlock[] | string;
  skills?: string[];
}

export function About({ title, bio, skills }: AboutProps) {
  if (!bio && (!skills || skills.length === 0)) {
    return null;
  }

  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: '0s' }}>
          <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
            Background
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-light text-slate-900 tracking-tighter">
            {title ?? 'About'}
          </h2>
          <span className="mt-5 block w-8 h-px bg-slate-300" />
        </div>

        <div className="space-y-16">

          {/* ── Bio ──────────────────────────────────────────── */}
          {bio && (
            <div
              className="animate-fade-up"
              style={{ animationDelay: '0.08s' }}
            >
              {Array.isArray(bio) ? (
                <div className="prose prose-sm prose-slate max-w-none prose-headings:font-light prose-headings:tracking-tight prose-p:text-slate-500 prose-p:font-light prose-p:leading-relaxed prose-a:text-slate-900 prose-a:font-normal prose-strong:font-normal prose-strong:text-slate-700">
                  <PortableText value={bio} />
                </div>
              ) : (
                <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
                  {bio}
                </p>
              )}
            </div>
          )}

          {/* ── Skills ───────────────────────────────────────── */}
          {skills && skills.length > 0 && (
            <div
              className="animate-fade-up"
              style={{ animationDelay: '0.16s' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
                  Skills & Tools
                </span>
                <span className="flex-1 h-px bg-slate-100" />
                <span className="font-mono text-[11px] text-slate-300">
                  {String(skills.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-slate-100 rounded-lg text-xs text-slate-600 font-light tracking-wide transition-all duration-200 hover:border-slate-300 hover:bg-white hover:-translate-y-0.5 cursor-default animate-fade-up"
                    style={{ animationDelay: `${0.20 + i * 0.03}s` }}
                  >
                    <span className="font-mono text-[10px] text-slate-300 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}