import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { useInView } from '../hooks/useInView';
import { identity, mission, personal, stats, traits } from '../data/cv';
import profileImg from '../image/1.jpg';

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1300;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-cyan-400">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/[0.04] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          label="about"
          title="Engineering Profile"
          description="The engineer behind the commits — identity, mission, and the way I work."
          command="$ cat profile.md"
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* left column — profile */}
          <div className="space-y-6">
            <Reveal>
              <div className="frame-corners overflow-hidden rounded-xl border border-white/10">
                <div className="relative">
                  <img
                    src={profileImg}
                    alt={personal.name}
                    className="block aspect-[2/3] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/70 via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 rounded-md border border-white/10 bg-[#05070d]/70 px-2 py-1 font-mono text-[10px] text-slate-400 backdrop-blur-sm">
                    img/profile.jpg
                  </span>
                  <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md border border-white/10 bg-[#05070d]/70 px-2.5 py-1 font-mono text-[10px] text-emerald-300 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                    status: online
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card overflow-hidden">
                <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60" />
                  <span className="ml-2 font-mono text-[11px] text-slate-500">identity.yml</span>
                </div>
                <div className="space-y-2.5 px-4 py-4 font-mono text-[12px]">
                  {identity.map((row) => (
                    <div key={row.key} className="flex items-baseline gap-3">
                      <span className="w-12 shrink-0 text-cyan-400/90">{row.key}:</span>
                      {row.key === 'status' ? (
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                          {row.value}
                        </span>
                      ) : (
                        <span className="text-slate-200">{row.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* right column — mission */}
          <div>
            <div className="space-y-5">
              {mission.map((paragraph, i) => (
                <Reveal key={i} delay={i * 110}>
                  <p className={`text-[15px] leading-7 ${i === 0 ? 'text-slate-300' : 'text-slate-400'}`}>
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap gap-2">
                {traits.map((trait) => (
                  <span
                    key={trait}
                    className="chip cursor-default px-2.5 py-1 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    <span className="text-cyan-500/80">#</span>
                    {trait}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="card card-hover p-5 text-center">
                <div className="font-mono text-2xl font-bold text-white sm:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
