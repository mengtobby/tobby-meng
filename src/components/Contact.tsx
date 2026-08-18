import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-32 text-center md:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <h2 className="mb-2 font-mono text-sm text-accent">04 — Contact</h2>
        <h3 className="mb-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Let&apos;s build something together
        </h3>
        <p className="mx-auto mb-9 max-w-md text-lg leading-relaxed text-muted">
          I&apos;m always happy to talk about new projects, opportunities, or interesting
          engineering problems.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03] hover:bg-accent-bright"
        >
          <Mail size={16} />
          {profile.email}
        </a>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-faint transition-colors hover:text-ink"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-faint transition-colors hover:text-ink"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
