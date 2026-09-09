import { Container, Database, Monitor, Server, Terminal, type LucideIcon } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { useInView } from '../hooks/useInView';
import { coreStack, exploring, skills, type SkillCategory } from '../data/cv';

const CATEGORY_ICONS: Record<SkillCategory, LucideIcon> = {
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
  DevOps: Container,
};

const CATEGORIES: SkillCategory[] = ['Frontend', 'Backend', 'Database', 'DevOps'];

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="skills" className="relative border-t border-white/[0.04] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          label="skills"
          title="Technical Skills"
          description="A production-oriented toolkit refined across 4+ years of shipping and operating real systems — from TypeScript frontends and Node.js APIs to PostgreSQL data layers and containerized infrastructure."
          command="$ ls -la ~/skills"
        />

        <div ref={ref} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {CATEGORIES.map((category, ci) => {
            const Icon = CATEGORY_ICONS[category];
            const list = skills.filter((s) => s.category === category);
            return (
              <Reveal key={category} delay={ci * 90} className="h-full">
                <div className="card card-hover h-full p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-300">
                        <Icon size={15} />
                      </span>
                      <h3 className="font-mono text-sm text-slate-200">{category}</h3>
                    </div>
                    <span className="font-mono text-[10px] text-slate-600">{list.length} modules</span>
                  </div>
                  <div className="space-y-4">
                    {list.map((skill, si) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-baseline justify-between gap-2">
                          <span className="text-[13px] text-slate-300">{skill.name}</span>
                          <span className="font-mono text-[11px] text-cyan-300/80">{skill.level}%</span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-1000 ease-out"
                            style={{
                              width: inView ? `${skill.level}%` : '0%',
                              transitionDelay: `${(ci * 4 + si) * 80}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="card p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-slate-500">
              <Terminal size={12} className="text-cyan-400" />
              <span>$ ls ~/core-stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <span key={tech} className="chip px-2.5 py-1 hover:border-cyan-400/40 hover:text-cyan-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 border-t border-white/[0.05] pt-4 font-mono text-[11px] leading-6 text-slate-500">
              <span className="text-emerald-400">$</span> currently exploring →{' '}
              <span className="text-slate-300">{exploring.join(' · ')}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
