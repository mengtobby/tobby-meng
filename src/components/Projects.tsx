import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-16 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="mb-2 font-mono text-sm text-accent">03 — Projects</h2>
        <h3 className="mb-10 text-3xl font-semibold tracking-tight text-ink">Selected work</h3>
      </motion.div>

      <div className="flex flex-col gap-5">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-hover hover:bg-surface-hover sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-xl font-medium text-ink transition-colors group-hover:text-accent-bright">
                {project.name}
              </h4>
              <ArrowUpRight
                size={20}
                className="mt-1 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-bright"
              />
            </div>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-bg px-2.5 py-1 font-mono text-xs text-faint"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
