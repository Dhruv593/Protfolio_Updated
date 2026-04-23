'use client';

import Link from 'next/link';

interface ContactProps {
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
}

export function Contact({ email, phone, location, socialLinks }: ContactProps) {
  if (!email && !phone && !location && (!socialLinks || socialLinks.length === 0)) {
    return null;
  }

  return (
    <section id="contact" className="bg-gray-50 px-6 py-24">
      <div className="max-w-2xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: '0s' }}>
          <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-light text-slate-900 tracking-tighter">
            Get in Touch
          </h2>
          <span className="mt-5 block w-8 h-px bg-slate-300" />
        </div>

        {/* ── Contact rows ───────────────────────────────────── */}
        <div className="space-y-3">

          {/* Email — mailto: protocol must use bare <a> */}
          {email && (
            <div
              className="flex items-center justify-between bg-white border border-slate-100 rounded-xl px-6 py-5 animate-fade-up transition-all duration-300 hover:border-slate-300 hover:-translate-y-0.5 group"
              style={{ animationDelay: '0.08s' }}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] tracking-widest text-slate-300 uppercase w-14">
                  Email
                </span>
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-slate-600 font-light hover:text-slate-900 transition-colors duration-200"
                >
                  {email}
                </a>
              </div>
              <a
                href={`mailto:${email}`}
                className="text-slate-300 group-hover:text-slate-900 transition-colors duration-200 text-xs"
              >
                ↗
              </a>
            </div>
          )}

          {/* Phone — tel: protocol must use bare <a> */}
          {phone && (
            <div
              className="flex items-center justify-between bg-white border border-slate-100 rounded-xl px-6 py-5 animate-fade-up transition-all duration-300 hover:border-slate-300 hover:-translate-y-0.5 group"
              style={{ animationDelay: '0.14s' }}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] tracking-widest text-slate-300 uppercase w-14">
                  Phone
                </span>
                <a
                  href={`tel:${phone}`}
                  className="text-sm text-slate-600 font-light hover:text-slate-900 transition-colors duration-200"
                >
                  {phone}
                </a>
              </div>
              <a
                href={`tel:${phone}`}
                className="text-slate-300 group-hover:text-slate-900 transition-colors duration-200 text-xs"
              >
                ↗
              </a>
            </div>
          )}

          {/* Location — plain text, no link needed */}
          {location && (
            <div
              className="flex items-center bg-white border border-slate-100 rounded-xl px-6 py-5 animate-fade-up"
              style={{ animationDelay: '0.20s' }}
            >
              <span className="font-mono text-[11px] tracking-widest text-slate-300 uppercase w-14">
                Based
              </span>
              <span className="text-sm text-slate-600 font-light">{location}</span>
            </div>
          )}

          {/* Social links — external https:// URLs → <Link> */}
          {socialLinks && socialLinks.length > 0 && (
            <div
              className="flex items-center bg-white border border-slate-100 rounded-xl px-6 py-5 gap-4 flex-wrap animate-fade-up"
              style={{ animationDelay: '0.26s' }}
            >
              <span className="font-mono text-[11px] tracking-widest text-slate-300 uppercase w-14">
                Links
              </span>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-sm text-slate-500 font-light hover:text-slate-900 transition-colors duration-200"
                  >
                    {link.platform}
                    <span className="group-hover/link:translate-x-0.5 transition-transform duration-150 inline-block text-xs">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ── CTA ────────────────────────────────────────────── */}
        {email && (
          <div
            className="mt-12 pt-12 border-t border-slate-100 animate-fade-up"
            style={{ animationDelay: '0.32s' }}
          >
            <p className="text-sm text-slate-400 font-light mb-6 leading-relaxed">
              I'd love to hear from you. Feel free to reach out at any time.
            </p>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-700 text-white text-sm font-light tracking-wide rounded-lg transition-all duration-200 ease-out hover:-translate-y-0.5"
            >
              Send Email
              <span className="group-hover:translate-x-0.5 transition-transform duration-150 inline-block">
                ↗
              </span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
}