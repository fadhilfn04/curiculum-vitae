interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  command?: string;
}

export default function SectionHeading({ index, label, title, description, command }: SectionHeadingProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400/90">
        <span className="text-slate-600">{'//'}</span>
        <span>
          {index}.{label}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/25 to-transparent" />
        {command && <span className="hidden text-slate-600 sm:block">{command}</span>}
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
