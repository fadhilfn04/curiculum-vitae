import { useEffect, useState } from 'react';
import { ChevronRight, Github, Menu, X } from 'lucide-react';
import { personal } from '../data/cv';

interface NavbarProps {
  sections: { id: string; label: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const offset = window.scrollY + 140;
      let current = '';
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= offset) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/[0.06] bg-[#05070d]/85 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 font-mono text-[13px] text-cyan-300 transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]">
            &lt;/&gt;
          </span>
          <span className="font-mono text-sm text-slate-300">
            erlanda<span className="text-slate-600">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {sections.map((s, i) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative rounded-md px-3 py-2 font-mono text-[13px] transition-colors ${
                  isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                <span className="mr-1.5 text-[10px] text-cyan-500/70">0{i + 1}.</span>
                {s.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-cyan-400/80 to-transparent" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          {personal.available && (
            <span className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 font-mono text-[11px] text-emerald-300 sm:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              open to work
            </span>
          )}
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 sm:grid"
          >
            <Github size={16} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="absolute inset-x-0 top-full border-b border-white/[0.06] bg-[#05070d]/95 backdrop-blur-xl md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/[0.04] py-3.5 font-mono text-sm text-slate-300 last:border-0 hover:text-cyan-300"
              >
                <span>
                  <span className="mr-2 text-cyan-500/80">0{i + 1}.</span>
                  {s.label}
                </span>
                <ChevronRight size={14} className="text-slate-600" />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
