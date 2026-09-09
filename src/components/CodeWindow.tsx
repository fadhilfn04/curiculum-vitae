import type { ReactNode } from 'react';
import { GitBranch } from 'lucide-react';

const kw = (t: string) => <span className="text-violet-400">{t}</span>;
const key = (t: string) => <span className="text-sky-300">{t}</span>;
const str = (t: string) => <span className="text-emerald-400">{t}</span>;
const pn = (t: string) => <span className="text-slate-500">{t}</span>;
const id = (t: string) => <span className="text-cyan-300">{t}</span>;
const cm = (t: string) => <span className="italic text-slate-600">{t}</span>;

const lines: ReactNode[] = [
  cm('// engineer.ts — production profile'),
  <>{kw('const')} {id('engineer')} {pn('=')} {pn('{')}</>,
  <span className="pl-4">
    {key('name')}
    {pn(':')} {str('"Erlanda P. F. Ferdian"')}
    {pn(',')}
  </span>,
  <span className="pl-4">
    {key('role')}
    {pn(':')} {str('"Full-Stack Engineer"')}
    {pn(',')}
  </span>,
  <span className="pl-4">
    {key('experience')}
    {pn(':')} {str('"4+ years"')}
    {pn(',')}
  </span>,
  <span className="pl-4">
    {key('focus')}
    {pn(':')} {pn('[')} {str('"web platforms"')}
    {pn(',')} {str('"REST APIs"')}
    {pn(',')} {str('"dashboards"')} {pn('],')}
  </span>,
  <span className="pl-4">
    {key('frontend')}
    {pn(':')} {pn('[')} {str('"React"')}
    {pn(',')} {str('"Vue.js"')}
    {pn(',')} {str('"Laravel"')}
    {pn(',')} {str('"TypeScript"')} {pn('],')}
  </span>,
  <span className="pl-4">
    {key('backend')}
    {pn(':')} {pn('[')} {str('"Node.js"')}
    {pn(',')} {str('"FastAPI"')}
    {pn(',')} {str('"Python"')}
    {pn(',')} {str('"Golang"')}
    {pn(',')} {str('"Laravel Lumen"')} {pn('],')}
  </span>,
  <span className="pl-4">
    {key('data')}
    {pn(':')} {pn('[')} {str('"PostgreSQL"')}
    {pn(',')} {str('"MySQL"')}
    {pn(',')} {str('"MinIO S3"')} {pn('],')}
  </span>,
  <span className="pl-4">
    {key('infra')}
    {pn(':')} {pn('[')} {str('"Docker"')}
    {pn(',')} {str('"Kubernetes"')}
    {pn(',')} {str('"Rancher"')}
    {pn(',')} {str('"CI/CD"')} {pn('],')}
  </span>,
  <span className="pl-4">
    {key('status')}
    {pn(':')} {str('"shipping to production"')}
    {pn(',')}
  </span>,
  <>{pn('}')}{pn(';')}</>,
  <span aria-hidden="true">&nbsp;</span>,
  <>
    {kw('export')} {kw('default')} {id('engineer')}
    {pn(';')} {cm('// always deploying')}
  </>,
];

export default function CodeWindow() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1a]/90 shadow-2xl shadow-black/50 backdrop-blur">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]/70" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]/70" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]/70" />
          <div className="ml-3 flex items-center gap-2 rounded-t-md border-x border-t border-white/[0.05] bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            engineer.ts
          </div>
          <span className="ml-auto hidden font-mono text-[10px] text-slate-600 sm:block">~/portfolio</span>
        </div>

        {/* editor body */}
        <div className="flex">
          <div className="select-none border-r border-white/[0.05] px-3 py-4 text-right font-mono text-[11px] leading-6 text-slate-600">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="flex-1 overflow-x-auto px-4 py-4">
            <pre className="font-mono text-[12px] leading-6 text-slate-300 sm:text-[13px]">
              {lines.map((line, i) => (
                <code key={i} className="block animate-fade-up" style={{ animationDelay: `${300 + i * 90}ms` }}>
                  {line}
                </code>
              ))}
              <code className="block animate-fade-up" style={{ animationDelay: `${300 + lines.length * 90}ms` }}>
                <span className="animate-blink text-cyan-400">▍</span>
              </code>
            </pre>
          </div>
        </div>

        {/* editor status bar */}
        <div className="flex items-center justify-between border-t border-white/[0.05] px-4 py-1.5 font-mono text-[10px] text-slate-500">
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-400">
              <GitBranch size={10} /> main
            </span>
            <span className="text-emerald-400/80">✓ 0 errors</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="hidden sm:inline">Ln {lines.length}, Col 1</span>
            <span>UTF-8</span>
            <span className="text-cyan-400/80">TypeScript</span>
          </span>
        </div>
      </div>
    </div>
  );
}
