import { motion } from 'framer-motion';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-16 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="mb-8 font-mono text-xs uppercase tracking-wider text-accent">Skills</h2>

        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category} className="border-t border-border pt-4">
              <h3 className="mb-2.5 font-mono text-xs uppercase tracking-wider text-faint">
                {group.category}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{group.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
