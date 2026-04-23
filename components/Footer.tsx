'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Wordmark */}
        <span className="font-mono text-[11px] tracking-widest text-slate-300 uppercase select-none">
          Portfolio
        </span>

        {/* Hairline divider — desktop only */}
        <span className="hidden md:block flex-1 h-px bg-slate-100 mx-6" />

        {/* Right side */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] tracking-wide text-slate-300">
            Dhruv Lad
          </span>
          <span className="block w-px h-3 bg-slate-200" />
          <span className="font-mono text-[11px] tracking-wide text-slate-300">
            © {currentYear}
          </span>
        </div>

      </div>
    </footer>
  );
}