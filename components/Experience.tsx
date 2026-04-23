'use client';

import { formatDate, calculateDuration } from '@/lib/utils';

interface Achievement {
  achievement?: string;
}

interface Experience {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description?: string;
  achievements?: Achievement[];
}

interface ExperienceProps {
  experience?: Experience[];
}

export function Experience({ experience }: ExperienceProps) {
  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: '0s' }}>
          <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
            Career
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-light text-slate-900 tracking-tighter">
            Experience
          </h2>
          <span className="mt-5 block w-8 h-px bg-slate-300" />
        </div>

        {/* ── Timeline ───────────────────────────────────────── */}
        <div className="relative">

          {/* Vertical rail */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-100" />

          <div className="space-y-0">
            {experience.map((role, index) => (
              <div
                key={role._id}
                className="relative flex gap-8 pb-12 animate-fade-up"
                style={{ animationDelay: `${0.08 + index * 0.1}s` }}
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 mt-1.5">
                  <div
                    className={[
                      'w-[11px] h-[11px] rounded-full border-2 bg-white',
                      role.isCurrent
                        ? 'border-slate-900'
                        : 'border-slate-300',
                    ].join(' ')}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-50 border border-slate-100 rounded-xl p-6 transition-all duration-300 ease-out hover:border-slate-300 hover:-translate-y-0.5 group"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 8px 32px -12px rgba(15,23,42,0.10)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >

                  {/* Header row */}
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <h3 className="text-base font-light text-slate-900 tracking-tight">
                        {role.role}
                      </h3>
                      <p className="text-sm text-slate-500 font-light mt-0.5">
                        {role.company}
                      </p>
                    </div>

                    {/* Duration chip */}
                    <span className="font-mono text-[11px] text-slate-400 tracking-wide whitespace-nowrap">
                      {calculateDuration(role.startDate, role.endDate)}
                    </span>
                  </div>

                  {/* Date range + current badge */}
                  <div className="flex items-center gap-2 mt-2 mb-4">
                    <span className="font-mono text-[11px] text-slate-400 tracking-wide">
                      {formatDate(role.startDate, 'short')} —{' '}
                      {role.endDate ? formatDate(role.endDate, 'short') : 'Present'}
                    </span>
                    {role.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-[11px] font-light tracking-wide">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        Current
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {role.description && (
                    <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">
                      {role.description}
                    </p>
                  )}

                  {/* Achievements */}
                  {role.achievements && role.achievements.length > 0 && (
                    <ul className="space-y-2 pt-4 border-t border-slate-100">
                      {role.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-slate-500 font-light"
                        >
                          <span className="font-mono text-slate-300 select-none mt-px">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="leading-relaxed">{item.achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}