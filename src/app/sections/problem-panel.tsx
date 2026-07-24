const stats = [
  {
    title: "2 sensors",
    body: "Heart rate (PPG) and skin conductance (EDA), read continuously from the wrist.",
  },
  {
    title: "On-device AI",
    body: "A personalised model learns your baseline and flags meaningful shifts, not generic thresholds.",
  },
  {
    title: "Infrasonic",
    body: "A felt, low-frequency pulse — not a sound, not a buzz — delivered at the wrist.",
  },
  {
    title: "Private",
    body: "Sensor and symptom data stays yours: exportable, deletable, never sold.",
  },
];

export default function ProblemPanel() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto w-full max-w-6xl rounded-3xl bg-ink px-6 py-14 sm:px-12 sm:py-16">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-light">
          The problem with most tools
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-white sm:text-4xl">
          Most anxiety support arrives after the moment has already passed.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Breathing apps, journals, and check-ins all ask you to notice
          you&apos;re anxious first — often minutes after your body already
          has. Soulace&apos;s sensors watch the physical signals directly, so
          it can respond at the moment of onset, not after the thought spiral
          has taken hold.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="font-mono text-sm text-sage-light">
                {stat.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
