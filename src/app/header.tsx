import LogoMark from "./logo-mark";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
      <LogoMark />
      <a
        href="#waitlist"
        className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-deep sm:inline-block"
      >
        Join the waitlist
      </a>
    </header>
  );
}
