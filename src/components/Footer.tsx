import { profile } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 text-sm text-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
