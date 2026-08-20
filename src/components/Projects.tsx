import { motion } from 'framer-motion';
import { projects } from '../data/content';

const blockStyles = {
  a: 'bg-block-a',
  b: 'bg-block-b',
} as const;

export default function Projects() {
  return (
    <section id="work" className="border-t border-border">
      <div className="grid sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative flex aspect-[4/3] flex-col justify-end p-6 sm:p-8 ${blockStyles[project.block]} ${
              i === 0 ? 'sm:border-r border-border' : ''
            }`}
          >
            <div className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="text-xl font-medium text-ink">{project.name}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/70">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm bg-bg/60 px-2 py-0.5 font-mono text-xs text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span className="absolute right-6 top-6 font-mono text-xs uppercase tracking-wider text-ink/50 transition-opacity duration-300 group-hover:opacity-0 sm:top-8">
              {project.name}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
