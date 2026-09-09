import { useEffect, useState } from 'react';
import { GitBranch } from 'lucide-react';

export default function StatusBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 hidden border-t border-white/[0.06] bg-[#0a0f1a]/90 backdrop-blur-md md:block">
      <div className="mx-auto flex h-7 max-w-6xl items-center justify-between px-6 font-mono text-[10px] text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-400">
            <GitBranch size={10} /> main
          </span>
          <span>UTF-8</span>
          <span>TypeScript React</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400/90">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
            SYS: ONLINE
          </span>
          <span className="text-slate-400">{time}</span>
        </div>
      </div>
    </div>
  );
}
