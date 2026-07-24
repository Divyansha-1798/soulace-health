import LogoMark from "./logo-mark";
import WaitlistForm from "./waitlist-form";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-cream">
      <header className="mx-auto flex w-full max-w-3xl items-center px-6 py-8">
        <LogoMark />
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 pb-32 text-center">
        <span className="rounded-full bg-sage-light/30 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
          Infrasonic · Vagus nerve toning
        </span>

        <h1 className="max-w-xl font-display text-4xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-5xl">
          Meet anxiety before it builds.
        </h1>

        <p className="max-w-lg text-lg leading-8 text-ink/70">
          The Soulace Band delivers a gentle physical signal at your wrist to
          help tone the vagus nerve and cue your body back toward calm — the
          moment symptoms begin, not minutes after. We&apos;re opening early
          access soon.
        </p>

        <WaitlistForm />
      </main>

      <footer className="border-t border-ink/10 bg-white px-6 py-8">
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-ink/50">
          Soulace Health products are designed to support relaxation and
          general stress resilience. They are not medical devices and are not
          intended to diagnose, treat, cure, or prevent anxiety, panic
          disorder, or any other medical or mental health condition. If you
          are experiencing anxiety that affects your daily life, please
          consult a doctor or licensed mental health professional. In a
          crisis, contact your local emergency services or a crisis helpline.
        </p>
      </footer>
    </div>
  );
}
