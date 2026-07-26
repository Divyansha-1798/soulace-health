import Reveal from "../reveal";
import PulseWave from "../pulse-wave";

const bullets = [
  {
    title: "Live sensor view",
    body: "Real-time heart rate and skin conductance readings, not just a daily summary.",
  },
  {
    title: "Onset detection log",
    body: "Every moment the band responded, timestamped, with your own note on whether it helped.",
  },
  {
    title: "Trend view",
    body: "Weekly and monthly views of frequency and intensity, so progress is visible, not just felt.",
  },
  {
    title: "Share with your therapist",
    body: "Export a clean summary of sensor trends to bring to a session, if and when you choose to.",
  },
];

export default function AppSection() {
  return (
    <section id="app" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
            The Soulace app
          </span>
          <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
            Every reading, made visible.
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/70">
            The app shows the same heart rate and skin conductance data the
            band is already reading, alongside every onset it caught and how
            you responded — so you can see, over weeks, whether things are
            actually easing.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {bullets.map((bullet) => (
              <li key={bullet.title} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                  aria-hidden
                />
                <span>
                  <span className="font-medium text-ink">
                    {bullet.title}
                  </span>{" "}
                  <span className="text-ink/70">{bullet.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.15}
          className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink/40">
              Right now
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-sage-light/20 px-2.5 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-sage-deep">
                Live
              </span>
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <p className="font-display text-2xl uppercase text-ink">
                Calm
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-sage-deep">
                68 bpm · heart rate
              </p>
            </div>
            <div>
              <p className="font-display text-2xl uppercase text-ink">
                Stable
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-sage-deep">
                Skin conductance
              </p>
            </div>
          </div>
          <PulseWave className="mt-4 h-8 w-full text-sage-light" />

          <div className="mt-6 border-t border-ink/10 pt-6">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink/40">
              This week
            </span>
            <p className="mt-2 font-display text-lg uppercase text-ink">
              Fewer, shorter onsets
            </p>
            <div className="mt-4 rounded-2xl bg-sage-light/20 p-4">
              <p className="text-sm font-medium text-ink">
                Onset flagged, 2:14pm
              </p>
              <p className="mt-1 text-sm leading-6 text-ink/60">
                HR +22% and rising EDA vs. baseline. Band responded
                automatically. Marked as &ldquo;helped&rdquo; by you.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
