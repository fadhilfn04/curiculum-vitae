import {
  Gauge,
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { impact } from '../data/work';

const ICONS: Record<string, LucideIcon> = {
  gauge: Gauge,
  globe: Globe,
  users: Users,
  trending: TrendingUp,
  workflow: Workflow,
  shield: ShieldCheck,
};

export default function Achievements() {
  return (
    <section id="impact" className="relative border-t border-white/[0.04] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="06"
          label="achievements"
          title="Impact & Highlights"
          description="Measurable outcomes delivered in production — numbers, not adjectives."
          command="$ cat impact.log"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={i * 80} className="h-full">
                <div className="card card-hover group h-full p-5">
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-300 transition-colors group-hover:border-cyan-400/30">
                      <Icon size={16} />
                    </span>
                    <span className="font-mono text-[10px] text-slate-600">
                      [{String(i + 1).padStart(2, '0')}]
                    </span>
                  </div>
                  <div className="mt-4 font-mono text-xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 text-sm font-medium text-slate-200">{item.title}</div>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
