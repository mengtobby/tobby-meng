import { profile } from '../data/content';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24 md:px-8">
      <h2 className="mb-6 font-display text-3xl font-bold text-ink sm:text-4xl">About</h2>
      <div className="max-w-prose space-y-5 text-lg leading-relaxed text-muted">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
