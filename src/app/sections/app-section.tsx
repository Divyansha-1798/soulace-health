import Reveal from "../reveal";

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

const weekBars = [30, 45, 35, 60, 50, 70, 55];

export default function AppSection() {
  return (
    <section id="app" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
            The Soulace app
          </span>
          <h2 className="mt-4 font-display font-black text-3xl uppercase leading-tight text-ink sm:text-4xl">
            Every reading, made visible.
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/70">
            The app shows the same heart rate and skin conductance data the
            band is already reading, alongside every onset it caught and how
            you responded, so you can see, over weeks, whether things are
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
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink/40">
            Right now
          </span>
          <p className="mt-1 font-display font-black text-2xl uppercase text-ink">
            Calm
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-cream px-4 py-3">
              <p className="font-mono text-sm font-medium text-ink">
                68 bpm
              </p>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.08em] text-ink/50">
                Heart rate
              </p>
            </div>
            <div className="rounded-2xl bg-cream px-4 py-3">
              <p className="font-mono text-sm font-medium text-ink">
                Stable
              </p>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.08em] text-ink/50">
                Skin cond.
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-ink/10 pt-6">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink/40">
              This week
            </span>
            <div className="mt-3 flex h-16 items-end gap-1.5">
              {weekBars.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-sm bg-sage-light"
                  style={{ height: `${h}%` }}
                  aria-hidden
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-ink/60">
              Onsets detected, down from last week
            </p>

            <div className="mt-4 rounded-2xl bg-ink/[0.03] p-4">
              <p className="font-mono text-sm font-medium text-ink">
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
