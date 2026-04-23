'use client';

import Link from 'next/link';
import { getTechTagColor, formatTechName } from '@/lib/utils';

interface Project {
  _id: string;
  title: string;
  description: string;
  slug?: { current: string };
  techStack?: string[];
  image?: any;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectGridProps {
  projects?: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="bg-gray-50 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: '0s' }}>
          <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
            Selected Work
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-light text-slate-900 tracking-tighter">
            Projects
          </h2>
          <span className="mt-5 block w-8 h-px bg-slate-300" />
        </div>

        {/* ── Grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <article
              key={project._id}
              className="group flex flex-col bg-white border border-slate-100 rounded-xl p-6 animate-fade-up transition-all duration-300 ease-out hover:border-slate-300 hover:-translate-y-0.5"
              style={{ animationDelay: `${0.08 + i * 0.08}s`, boxShadow: 'none' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 8px 32px -12px rgba(15,23,42,0.10)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Index */}
              <span className="font-mono text-[11px] text-slate-300 tracking-widest mb-4 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3 className="text-lg font-light text-slate-900 tracking-tight mb-2 group-hover:text-slate-600 transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 flex-1 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack && project.techStack.length > 0 ? (
                  project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={[
                        'inline-flex items-center px-2.5 py-1',
                        'rounded-full border text-[11px] font-light tracking-wide',
                        getTechTagColor(tech),
                      ].join(' ')}
                    >
                      {formatTechName(tech)}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-300 font-light italic">
                    No tech listed
                  </span>
                )}
              </div>

              {/* ── Links ──────────────────────────────────────── */}
              <div className="flex items-center gap-5 pt-4 border-t border-slate-100">

                {/* ✅ External → <Link> with target="_blank" */}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-900 font-light transition-colors duration-200"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GitHub
                    <span className="group-hover/link:translate-x-0.5 transition-transform duration-150 inline-block">
                      ↗
                    </span>
                  </Link>
                )}

                {/* ✅ External → <Link> with target="_blank" */}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-900 font-light transition-colors duration-200"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3M9 2h5v5M9.5 6.5 14 2" />
                    </svg>
                    Live Demo
                    <span className="group-hover/link:translate-x-0.5 transition-transform duration-150 inline-block">
                      ↗
                    </span>
                  </Link>
                )}

                {/* ✅ Internal route → <Link> */}
                {project.slug?.current && (
                  <Link
                    href={`/projects/${project.slug.current}`}
                    className="group/link inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-900 font-light transition-colors duration-200 ml-auto"
                  >
                    Details
                    <svg
                      className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-150"
                      fill="none"
                      viewBox="0 0 12 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h8M6 2l4 4-4 4" />
                    </svg>
                  </Link>
                )}

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}