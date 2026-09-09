import { personal } from '../data/cv';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="font-mono text-[11px] text-slate-500">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="font-mono text-[11px] text-slate-600">
          built with <span className="text-slate-400">React · TypeScript · Tailwind</span>
          <span className="mx-2 text-slate-700">|</span>
          <span className="text-emerald-400/90">$ exit 0</span>
        </p>
      </div>
    </footer>
  );
}
