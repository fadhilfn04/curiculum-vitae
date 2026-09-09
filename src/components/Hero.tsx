import { ArrowRight, Github, Mail } from 'lucide-react';
import CodeWindow from './CodeWindow';
import { useTypewriter } from '../hooks/useTypewriter';
import { coreStack, heroSummary, personal, typewriterPhrases } from '../data/cv';

export default function Hero() {
  const typed = useTypewriter(typewriterPhrases);

  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
        {/* left column */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 font-mono text-[11px] text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            open to opportunities
          </div>

          <p className="font-mono text-sm text-cyan-400/90">$ whoami</p>

          <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {personal.nameFirst}
            <br />
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              {personal.nameLast}
            </span>
          </h1>

          <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              {personal.role}
            </h2>
            <span className="font-mono text-sm text-slate-500">({personal.roleDetail})</span>
          </div>

          <p className="mt-4 font-mono text-sm text-slate-400 sm:text-base">
            <span className="text-emerald-400">❯</span> {typed}
            <span className="ml-0.5 animate-blink text-cyan-400">▍</span>
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-400">{heroSummary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-300 hover:shadow-cyan-400/40"
            >
              View Projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/40 hover:text-white"
            >
              <Mail size={15} className="text-cyan-300" />
              Get in Touch
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-[42px] w-[42px] place-items-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Github size={17} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>4+ years experience
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>10+ production systems
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>government &amp; enterprise
            </span>
          </div>
        </div>

        {/* right column — editor window */}
        <div className="animate-fade-up" style={{ animationDelay: '250ms' }}>
          <CodeWindow />
        </div>
      </div>

      {/* tech marquee */}
      <div className="mask-fade-x relative overflow-hidden border-y border-white/[0.05] bg-white/[0.01] py-3.5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...coreStack, ...coreStack].map((tech, i) => (
            <span key={i} className="flex items-center font-mono text-xs text-slate-500">
              <span className="px-6">{tech}</span>
              <span className="h-1 w-1 rounded-full bg-cyan-400/30" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
