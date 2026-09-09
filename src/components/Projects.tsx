import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { projects, type Project } from '../data/work';

type Filter = 'all' | 'government' | 'enterprise' | 'product';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'all' },
  { id: 'government', label: 'government' },
  { id: 'enterprise', label: 'enterprise' },
  { id: 'product', label: 'product' },
];

const categorize = (p: Project): Filter =>
  p.type?.includes('Government') ? 'government' : p.type?.includes('Enterprise') ? 'enterprise' : 'product';

const STATUS_STYLES: Record<Project['status'], { dot: string; text: string }> = {
  Active: { dot: 'animate-pulse-soft bg-emerald-400', text: 'text-emerald-400' },
  Staging: { dot: 'bg-amber-400', text: 'text-amber-400' },
  Completed: { dot: 'bg-sky-400', text: 'text-sky-400' },
};

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => categorize(p) === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative border-t border-white/[0.04] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          label="projects"
          title="Projects & Systems"
          description="Production platforms shipped for government institutions and enterprise clients — plus independent products."
          command="$ ls ~/projects"
        />

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-all ${
                  filter === f.id
                    ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200'
                    : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <span className="font-mono text-[11px] text-slate-500">
            {filtered.length} / {projects.length} systems
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, i) => {
            const status = STATUS_STYLES[project.status];
            const cardClass =
              'card card-hover group flex h-full animate-fade-up flex-col p-5 hover:shadow-[0_12px_40px_-16px_rgba(34,211,238,0.25)]';
            return (
              <Reveal key={`${filter}-${project.name}`} delay={Math.min(i, 5) * 70} className="h-full">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className={cardClass}>
                    <ProjectCard project={project} status={status} linked />
                  </a>
                ) : (
                  <div className={cardClass}>
                    <ProjectCard project={project} status={status} />
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  status,
  linked = false,
}: {
  project: Project;
  status: { dot: string; text: string };
  linked?: boolean;
}) {
  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-3">
        <span
          className={`flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider ${status.text}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          {project.status}
        </span>
        {linked && (
          <ArrowUpRight
            size={14}
            className="text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
          />
        )}
      </div>

      <h3 className="text-[15px] font-semibold leading-snug text-white transition-colors group-hover:text-cyan-100">
        {project.name}
      </h3>

      {project.type && (
        <span className="mt-2.5 inline-block w-fit rounded border border-violet-400/20 bg-violet-400/[0.07] px-2 py-0.5 font-mono text-[10px] text-violet-300/90">
          {project.type}
        </span>
      )}

      <p className="mt-3 flex-1 text-[13px] leading-6 text-slate-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}
