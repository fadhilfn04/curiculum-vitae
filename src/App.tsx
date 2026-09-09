import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StatusBar from './components/StatusBar';

const NAV_SECTIONS = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'stack', label: 'stack' },
  { id: 'contact', label: 'contact' },
];

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#05070d] font-sans text-slate-300">
      {/* ambient backdrop */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="bg-grid grid-mask absolute inset-0" />
        <div className="absolute -top-44 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-3xl" />
        <div className="absolute right-[-160px] top-[38%] h-[380px] w-[380px] rounded-full bg-violet-500/[0.05] blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-160px] h-[380px] w-[420px] rounded-full bg-emerald-500/[0.04] blur-3xl" />
      </div>

      {/* scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Navbar sections={NAV_SECTIONS} />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Achievements />
        <Contact />
      </main>

      <Footer />

      {/* spacer so the fixed status bar never covers footer content (md+) */}
      <div className="hidden h-7 md:block" aria-hidden="true" />

      <StatusBar />
    </div>
  );
}
