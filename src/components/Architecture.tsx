import { useEffect, useState } from 'react';
import { Boxes, Container, Monitor, Server, Terminal } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { architectureLayers, monitorLogs } from '../data/work';

const LAYER_ICONS = {
  monitor: Monitor,
  server: Server,
  boxes: Boxes,
  container: Container,
} as const;

const PODS = [
  { name: 'siks-frontend-7d9f4c', age: '42d' },
  { name: 'pemadanan-api-5b8dc7', age: '42d' },
  { name: 'matatk-analytics-9c4f2b', age: '17d' },
  { name: 'simkeu-worker-6e1a83', age: '9d' },
];

export default function Architecture() {
  const [logs, setLogs] = useState<string[]>(monitorLogs.slice(0, 3));
  const [logIndex, setLogIndex] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogs((prev) => [...prev.slice(-3), monitorLogs[logIndex % monitorLogs.length]]);
      setLogIndex((i) => i + 1);
    }, 2600);
    return () => clearInterval(timer);
  }, [logIndex]);

  return (
    <section id="stack" className="relative border-t border-white/[0.04] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          label="stack"
          title="System Architecture"
          description="How I structure full-stack platforms — from the client to the infrastructure layer."
          command="$ docker compose ps"
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* layered stack diagram */}
          <div>
            {architectureLayers.map((layer, i) => {
              const Icon = LAYER_ICONS[layer.icon];
              return (
                <div key={layer.path}>
                  <Reveal delay={i * 90}>
                    <div className="card card-hover flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                        <Icon size={17} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-2.5">
                          <span className="font-mono text-sm text-cyan-300">{layer.path}</span>
                          <span className="text-[13px] font-medium text-slate-200">{layer.label}</span>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{layer.description}</p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {layer.tech.map((t) => (
                            <span key={t} className="chip">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                  {i < architectureLayers.length - 1 && (
                    <div
                      className="relative mx-auto h-6 w-px overflow-hidden bg-white/[0.06]"
                      aria-hidden="true"
                    >
                      <span className="absolute inset-x-0 h-full w-px animate-flow-down bg-gradient-to-b from-transparent via-cyan-400/80 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* production monitor terminal */}
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1a]/90 shadow-2xl shadow-black/50 backdrop-blur lg:sticky lg:top-24">
              <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]/70" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]/70" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]/70" />
                <span className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                  <Terminal size={11} className="text-cyan-400" />
                  monitor — production
                </span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-emerald-400/80">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                  live
                </span>
              </div>

              <div className="px-4 py-4 font-mono text-[11px] leading-6 sm:text-[11.5px]">
                <p>
                  <span className="text-emerald-400">$</span>{' '}
                  <span className="text-slate-300">kubectl get pods -n production</span>
                </p>
                <pre className="mt-2 whitespace-pre text-slate-500">
                  <span className="text-slate-600">{'NAME'.padEnd(26) + 'READY'.padEnd(7) + 'STATUS'.padEnd(11) + 'AGE'}</span>
                  {'\n'}
                  {PODS.map((pod) => (
                    <span key={pod.name}>
                      <span className="text-slate-400">{pod.name.padEnd(26)}</span>
                      <span className="text-emerald-400">{'1/1'.padEnd(7)}</span>
                      <span className="text-slate-400">{'Running'.padEnd(11)}</span>
                      <span className="text-slate-500">{pod.age}</span>
                      {'\n'}
                    </span>
                  ))}
                </pre>

                <div className="my-3 border-t border-dashed border-white/10" />

                <p className="text-slate-600">live logs:</p>
                <div className="mt-1 space-y-0.5">
                  {logs.map((log, i) => (
                    <p
                      key={`${log}-${i}`}
                      className={log.startsWith('✓') ? 'text-emerald-400/80' : 'text-cyan-400/80'}
                    >
                      {log}
                    </p>
                  ))}
                  <p className="text-slate-600">
                    <span className="animate-blink text-cyan-400">▍</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.05] px-4 py-1.5 font-mono text-[10px] text-slate-500">
                <span>rancher · ns/production</span>
                <span className="text-emerald-400/80">99.98% uptime</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
