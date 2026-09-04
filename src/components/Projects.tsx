import { projects } from '../data/content';

const tileLayout = [
  'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto',
  'aspect-[16/9] sm:aspect-auto',
  'aspect-[16/9] sm:aspect-auto',
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <h2 className="mb-8 font-display text-3xl font-bold text-ink sm:text-4xl">Selected work</h2>
      <div className="grid gap-3 sm:grid-cols-3 sm:grid-rows-2">
        {projects.map((project, i) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={`group relative flex flex-col justify-end overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors duration-200 ease-out hover:border-accent-dim hover:bg-surface-hover sm:p-7 ${tileLayout[i]}`}
          >
            <h3 className="text-lg font-semibold text-ink sm:text-xl">{project.name}</h3>
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted">{project.tagline}</p>

            <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="max-w-sm text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-bg px-2 py-0.5 font-mono text-xs text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
