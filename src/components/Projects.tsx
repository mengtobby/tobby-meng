import { motion } from 'framer-motion';
import { projects } from '../data/content';

const blockStyles = {
  a: 'bg-block-a',
  b: 'bg-block-b',
  c: 'bg-block-c',
} as const;

const tileLayout = [
  'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto',
  'aspect-[16/9] sm:aspect-auto',
  'aspect-[16/9] sm:aspect-auto',
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-4 md:px-8">
      <div className="grid gap-1.5 sm:grid-cols-3 sm:grid-rows-2">
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
            className={`group relative flex flex-col justify-end overflow-hidden rounded-lg p-6 transition-transform duration-300 hover:-translate-y-0.5 sm:p-7 ${blockStyles[project.block]} ${tileLayout[i]}`}
          >
            <h3 className="text-lg font-medium text-cream sm:text-xl">{project.name}</h3>
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-cream/75">{project.tagline}</p>

            <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="max-w-sm text-sm leading-relaxed text-cream/70">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-cream/10 px-2 py-0.5 font-mono text-xs text-cream/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
