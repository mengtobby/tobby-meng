import { useEffect, useState } from 'react';
import { profile } from '../data/content';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink hover:text-accent-bright transition-colors"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-border px-4 py-1.5 text-sm text-ink transition-colors hover:border-accent-dim hover:text-accent-bright sm:inline-block"
        >
          Say hello
        </a>
      </nav>
    </header>
  );
}
