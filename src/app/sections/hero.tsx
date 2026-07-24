import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-4">
      <div className="relative w-full overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <Image
            src="/band-hero.jpg"
            alt="The Soulace Band worn on a wrist"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
        </div>
        <div className="relative flex min-h-[600px] flex-col justify-end gap-4 p-6 sm:min-h-[520px] sm:p-10">
          <span className="w-fit rounded-full bg-white/15 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            AI sensing · Infrasonic nervous system support
          </span>
          <h1 className="max-w-xl font-display text-4xl uppercase leading-tight tracking-[-0.01em] text-white sm:text-5xl">
            Your body knows before you do.
          </h1>
          <p className="max-w-lg text-base leading-7 text-white/80 sm:text-lg">
            Soulace reads your heart rate and skin conductance in real time,
            and uses an onboard AI model to catch the physical onset of
            anxiety — the racing pulse, the first sweat response — before it
            builds. The moment it detects that shift, the band delivers a
            low-frequency infrasonic vibration to help calm your nervous
            system back down.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#waitlist"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-sage-light"
            >
              Join the waitlist
            </a>
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-white/60">
              Launching soon · UK first · Not a medical device
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
