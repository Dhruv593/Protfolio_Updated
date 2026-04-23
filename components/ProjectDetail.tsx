'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getTechTagColor, formatTechName } from '@/lib/utils';
import { urlFor } from '@/lib/sanity.image';

type PortableTextBlock = {
  _key: string;
  _type: 'block' | string;
  children?: Array<{ _key: string; _type: string; text: string; marks?: string[] }>;
  markDefs?: Array<{ _key: string; _type: string; [key: string]: unknown }>;
  style?: string;
  [key: string]: unknown;
};

interface ProjectDetailProps {
  title: string;
  description: string;
  detailedDescription?: PortableTextBlock[];
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: any;
}

export function ProjectDetail({
  title,
  description,
  detailedDescription,
  techStack,
  githubUrl,
  liveUrl,
  image,
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* ── Back button ──────────────────────────────────── */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: '0s' }}>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-light tracking-wide text-slate-400 hover:text-slate-900 transition-colors duration-200"
          >
            <svg
              className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 12 12"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H2M5 2 1 6l4 4" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* ── Project header ───────────────────────────────── */}
        <div
          className="mb-16 pb-16 border-b border-slate-100 animate-fade-up"
          style={{ animationDelay: '0.08s' }}
        >
          <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
            Project
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-light text-slate-900 tracking-tighter leading-none mb-6">
            {title}
          </h1>
          <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* ── Project image ────────────────────────────────── */}
        {image && (
          <div
            className="mb-16 animate-fade-up"
            style={{ animationDelay: '0.12s' }}
          >
            <div className="relative w-full h-96 bg-slate-100 rounded-lg overflow-hidden">
              <Image
                src={urlFor(image).width(1200).height(600).url()}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* ── Tech stack ───────────────────────────────────── */}
        {techStack && techStack.length > 0 && (
          <div
            className="mb-16 animate-fade-up"
            style={{ animationDelay: '0.16s' }}
          >
            <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
              Technologies
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
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
              ))}
            </div>
          </div>
        )}

        {/* ── Detailed description ─────────────────────────── */}
        {detailedDescription && detailedDescription.length > 0 && (
          <div
            className="mb-16 animate-fade-up"
            style={{ animationDelay: '0.24s' }}
          >
            <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
              About This Project
            </span>
            <div className="mt-6 prose prose-sm prose-slate max-w-none prose-headings:font-light prose-headings:tracking-tight prose-p:text-slate-500 prose-p:font-light prose-p:leading-relaxed prose-a:text-slate-900 prose-a:font-normal">
              <PortableText value={detailedDescription} />
            </div>
          </div>
        )}

        {/* ── Links ────────────────────────────────────────── */}
        {(githubUrl || liveUrl) && (
          <div
            className="flex flex-wrap gap-3 pt-12 border-t border-slate-100 animate-fade-up"
            style={{ animationDelay: '0.32s' }}
          >
            {/* ✅ External → <Link> with target="_blank" */}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-700 text-white text-sm font-light tracking-wide rounded-lg transition-all duration-200 ease-out hover:-translate-y-0.5"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                View on GitHub
                <span className="group-hover:translate-x-0.5 transition-transform duration-150 inline-block">
                  ↗
                </span>
              </Link>
            )}

            {/* ✅ External → <Link> with target="_blank" */}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-400 text-slate-700 text-sm font-light tracking-wide rounded-lg transition-all duration-200 ease-out hover:-translate-y-0.5"
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  fill="none"
                  viewBox="0 0 16 16"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3M9 2h5v5M9.5 6.5 14 2" />
                </svg>
                Live Demo
                <span className="group-hover:translate-x-0.5 transition-transform duration-150 inline-block">
                  ↗
                </span>
              </Link>
            )}
          </div>
        )}

      </div>
    </div>
  );
}