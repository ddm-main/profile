import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="gutter border-t border-line py-8 safe-b">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-[10.5px] tracking-[0.16em] uppercase text-faint">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex items-center gap-6 -my-2">
          <a href={profile.github} target="_blank" rel="noreferrer" data-cursor className="sweep py-2 text-muted hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor className="sweep py-2 text-muted hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="#top" data-cursor className="sweep py-2 text-muted hover:text-accent transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
