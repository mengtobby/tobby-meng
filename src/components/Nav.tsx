import { profile } from '../data/content';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5 md:px-8">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-base font-bold text-ink">{profile.name}</span>
          <span className="hidden text-sm text-faint sm:inline">{profile.title}</span>
        </a>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ease-out ${
                  i === 0
                    ? 'text-accent-bright underline decoration-2 underline-offset-[6px]'
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
                className="text-sm font-medium text-muted transition-colors duration-200 ease-out hover:text-ink"
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
          className="hidden text-sm text-faint transition-colors duration-200 ease-out hover:text-ink sm:inline"
        >
          /{profile.handle.replace('@', '')}
        </a>
      </nav>
    </header>
  );
}
