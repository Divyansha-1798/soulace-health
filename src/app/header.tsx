import LogoMark from "./logo-mark";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#science", label: "The science" },
  { href: "#app", label: "The app" },
  { href: "#band", label: "The band" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <LogoMark />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.1em] text-ink/60 transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#waitlist"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-sage-deep active:scale-[0.98] sm:inline-block"
        >
          Join the waitlist
        </a>
      </div>
    </header>
  );
}
