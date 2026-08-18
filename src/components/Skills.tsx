import { motion } from 'framer-motion';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-16 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="mb-2 font-mono text-sm text-accent">02 — Skills</h2>
        <h3 className="mb-10 text-3xl font-semibold tracking-tight text-ink">What I work with</h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-hover"
            >
              <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-faint">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-bg px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
