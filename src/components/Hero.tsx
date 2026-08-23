import { motion } from 'framer-motion';
import { profile, timeline } from '../data/content';

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-20 pt-20 md:px-8 md:pt-28">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl font-serif text-5xl leading-[1.1] text-ink sm:text-6xl md:text-[4.5rem]"
        style={{ fontVariationSettings: "'opsz' 90" }}
      >
        {profile.heroPrefix}{' '}
        <span className="relative inline-block whitespace-nowrap">
          <span className="relative z-10 font-serif italic">{profile.heroHighlight}</span>
          <span className="absolute inset-x-0 bottom-1 -z-0 h-[0.3em] bg-accent-dim/70" aria-hidden="true" />
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
                className="group flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm transition-colors hover:border-accent-dim"
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

function ChipContent({ year, name, role }: { year: string; name: string; role: string }) {
  return (
    <>
      <span className="font-mono text-xs text-faint">{year}</span>
      <span className="font-medium text-ink">{name}</span>
      <span className="text-muted">·</span>
      <span className="text-muted">{role}</span>
    </>
  );
}
