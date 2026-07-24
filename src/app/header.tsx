import LogoMark from "./logo-mark";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <LogoMark />
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
