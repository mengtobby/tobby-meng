import { motion } from 'framer-motion';
import { profile, timeline } from '../data/content';

interface ChipContentProps {
  year: string;
  name: string;
  role: string;
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-20 pt-20 md:px-8 md:pt-28">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl font-display text-5xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-[4.25rem]"
      >
        {profile.heroPrefix}{' '}
        <span className="inline-block whitespace-nowrap rounded-md bg-accent px-2 text-bg">
          {profile.heroHighlight}
        </span>
        .
      </motion.h1>

      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-wrap gap-2.5"
      >
        {timeline.map((entry) => (
          <li key={entry.name}>
            {entry.href ? (
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm transition-colors hover:border-accent-dim hover:bg-surface-hover"
              >
                <ChipContent year={entry.year} name={entry.name} role={entry.role} />
              </a>
            ) : (
              <span className="flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm">
                <ChipContent year={entry.year} name={entry.name} role={entry.role} />
              </span>
            )}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}

function ChipContent({ year, name, role }: ChipContentProps) {
  return (
    <>
      <span className="tabular-nums font-mono text-xs text-faint">{year}</span>
      <span className="font-medium text-ink">{name}</span>
      <span className="text-faint">·</span>
      <span className="text-muted">{role}</span>
    </>
  );
}
