import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/content';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: EASE_OUT },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,black,transparent)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          custom={0}
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Open to new opportunities
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m {profile.name.split(' ')[0]} —
          <br />
          <span className="bg-gradient-to-r from-accent-bright via-accent to-accent-dim bg-clip-text text-transparent">
            {profile.title}
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div custom={3} variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03] hover:bg-accent-bright"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent-dim hover:text-accent-bright"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} className="mt-8 flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-faint transition-colors hover:text-ink"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-faint transition-colors hover:text-ink"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-faint transition-colors hover:text-ink"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 z-10 text-faint transition-colors hover:text-muted"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
