import { motion } from 'framer-motion';
import { profile } from '../data/content';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="mb-6 font-mono text-xs uppercase tracking-wider text-accent">About</h2>
        <div className="space-y-5 font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
