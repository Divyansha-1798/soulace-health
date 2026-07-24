import WaitlistForm from "../waitlist-form";
import Reveal from "../reveal";
import PulseWave from "../pulse-wave";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="px-6 pb-24">
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 overflow-hidden rounded-3xl bg-cream px-6 py-16 text-center sm:px-12 grain">
        <PulseWave className="h-8 w-24 text-sage-deep/60" />
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
          Get early access
        </span>
        <h2 className="font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
          Join the waitlist.
        </h2>
        <p className="max-w-md text-base leading-7 text-ink/70">
          Soulace isn&apos;t available to buy yet. Leave your email and
          we&apos;ll let you know the moment early units are ready.
        </p>
        <WaitlistForm />
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink/40">
          No spam · just one email when the band is ready to ship
        </p>
      </Reveal>
    </section>
  );
}
