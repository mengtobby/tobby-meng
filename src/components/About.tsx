import { motion } from 'framer-motion';
import { profile } from '../data/content';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="mb-2 font-mono text-sm text-accent">01 — About</h2>
        <h3 className="mb-8 text-3xl font-semibold tracking-tight text-ink">A bit about me</h3>
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
