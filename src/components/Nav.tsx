import { profile } from '../data/content';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-8">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-mono text-sm font-bold uppercase tracking-wider text-ink">
            {profile.name}
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-wider text-faint sm:inline">
            {profile.title}
          </span>
        </a>

        <ul className="hidden items-center gap-7 sm:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                  i === 0
                    ? 'text-accent underline decoration-2 underline-offset-4'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          {profile.resumeUrl && (
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-ink"
              >
                Resume
              </a>
            </li>
          )}
        </ul>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="hidden font-mono text-xs tracking-wider text-faint transition-colors hover:text-ink sm:inline"
        >
          /{profile.handle.replace('@', '')}
        </a>
      </nav>
    </header>
  );
}
