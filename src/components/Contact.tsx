import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-8 max-w-lg font-display text-3xl font-bold leading-snug text-ink sm:text-4xl">
            Let&apos;s build something together.
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center border-b border-ink pb-0.5 text-lg text-ink transition-colors hover:border-accent hover:text-accent-bright"
          >
            {profile.email}
          </a>

          <div className="mt-10 flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-faint transition-colors hover:text-ink"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-faint transition-colors hover:text-ink"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
