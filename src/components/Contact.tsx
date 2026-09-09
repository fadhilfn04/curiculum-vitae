import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
  Terminal,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { personal } from '../data/cv';

interface Channel {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  copy?: boolean;
}

const channels: Channel[] = [
  { icon: Mail, label: 'email', value: personal.email, href: `mailto:${personal.email}`, copy: true },
  { icon: Github, label: 'github', value: personal.githubHandle, href: personal.github },
  { icon: Linkedin, label: 'linkedin', value: personal.linkedinHandle, href: personal.linkedin },
];

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const href = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject || 'Hello Erlanda'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = href;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative border-t border-white/[0.04] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="07"
          label="contact"
          title="Get In Touch"
          description="Open for opportunities, collaborations, and interesting engineering problems."
          command="$ ping erlanda"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* channels */}
          <div>
            <Reveal>
              <h3 className="text-xl font-semibold text-white">Let&apos;s build something production-grade.</h3>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-slate-400">
                Whether it&apos;s a national-scale platform, a data-driven dashboard, or a product that needs
                to ship — my inbox is the fastest channel.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {channels.map((channel, i) => (
                <Reveal key={channel.label} delay={i * 90}>
                  <div className="card card-hover group flex items-center gap-4 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-300 transition-colors group-hover:border-cyan-400/30">
                      <channel.icon size={16} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        {channel.label}
                      </div>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noreferrer"
                        className="block truncate text-sm text-slate-200 transition-colors hover:text-cyan-300"
                      >
                        {channel.value}
                      </a>
                    </div>
                    {channel.copy ? (
                      <button
                        type="button"
                        onClick={copyEmail}
                        aria-label="Copy email address"
                        className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-slate-500 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                      >
                        {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      </button>
                    ) : (
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                      />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <p className="mt-6 font-mono text-[11px] text-slate-500">
                <span className="text-emerald-400">$</span> response_time → usually &lt; 24h
              </p>
            </Reveal>
          </div>

          {/* message terminal form */}
          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1a]/90 shadow-2xl shadow-black/50 backdrop-blur"
            >
              <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]/70" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]/70" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]/70" />
                <span className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                  <Terminal size={11} className="text-cyan-400" />
                  message.sh
                </span>
              </div>

              <div className="space-y-4 p-5">
                <p className="font-mono text-[11px] text-slate-500">
                  <span className="text-emerald-400">$</span> ./message.sh --to erlanda
                </p>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block font-mono text-[11px] text-cyan-400/90">
                    --subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Let's build something great"
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 font-mono text-sm text-slate-200 transition-colors placeholder:text-slate-600 focus:border-cyan-400/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] text-cyan-400/90">
                    --message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the role or project..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 font-mono text-sm text-slate-200 transition-colors placeholder:text-slate-600 focus:border-cyan-400/50 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-300 hover:shadow-cyan-400/40"
                >
                  <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                  {sent ? '✓ launching mail client…' : 'send_message()'}
                </button>

                <p className="text-center font-mono text-[10px] text-slate-600">
                  // opens your mail client — no data stored
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
