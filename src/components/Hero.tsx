import { motion } from 'framer-motion';
import { profile, timeline } from '../data/content';

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:px-8 md:pt-28">
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl font-serif text-5xl leading-[1.15] text-ink sm:text-6xl md:text-7xl"
        >
          I&apos;m {profile.firstName}, a {profile.heroLead} who <em className="italic">{profile.heroVerb}</em>.
        </motion.h1>

        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 md:pt-3"
        >
          {timeline.map((entry) => (
            <div
              key={entry.name}
              className="grid grid-cols-[3rem_minmax(11rem,auto)_1fr] items-baseline gap-x-6 py-1"
            >
              <dt className="font-mono text-sm text-faint">{entry.year}</dt>
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  {entry.name}
                </a>
              ) : (
                <span className="text-sm font-medium text-ink">{entry.name}</span>
              )}
              <dd className="text-sm text-muted">{entry.role}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
