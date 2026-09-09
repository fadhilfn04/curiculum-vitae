import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experiences } from '../data/work';

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/[0.04] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          label="experience"
          title="Work Experience"
          description="A git log of roles — every commit shipped to production."
          command="$ git log --oneline"
        />

        <div className="relative ml-2 space-y-8 border-l border-white/[0.07] pl-8 sm:ml-4 sm:pl-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 100}>
              <article className="relative">
                {/* commit marker */}
                <span className="absolute -left-[41px] top-2 grid h-[15px] w-[15px] place-items-center rounded-full border border-cyan-400/40 bg-[#05070d] sm:-left-[49px]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      exp.current ? 'animate-pulse-soft bg-emerald-400' : 'bg-cyan-400'
                    }`}
                  />
                </span>

                <div className="card card-hover p-6">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.05] pb-4">
                    <div>
                      <h3 className="flex flex-wrap items-center gap-2.5 text-lg font-semibold text-white">
                        {exp.title}
                        {exp.current && (
                          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] font-normal text-emerald-300">
                            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                            current
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 font-mono text-sm text-cyan-300/90">@ {exp.company}</p>
                    </div>
                    <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  {exp.stack && (
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement, ai) => (
                      <li key={ai} className="flex items-start gap-2.5 text-sm leading-6 text-slate-400">
                        <span className="mt-0.5 select-none font-mono text-[12px] text-emerald-400/90">+</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
