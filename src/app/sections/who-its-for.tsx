import Image from "next/image";

const cases = [
  {
    number: "01",
    title: "Work pressure",
    body: "A presentation, a deadline, a hard conversation. Soulace catches the climb in heart rate and skin conductance before it crests, and answers it in the moment.",
  },
  {
    number: "02",
    title: "Social settings",
    body: "Crowds, calls, the build-up before you walk in. The band meets the onset where it starts, so you can stay present instead of bracing.",
  },
  {
    number: "03",
    title: "Restless nights",
    body: "Pulse still up when the lights go out. The infrasonic pulse cues the wind-down your body doesn't always find on its own.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
        Who it&apos;s for
      </span>
      <h2 className="mt-4 max-w-2xl font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
        Built for the moments your body reacts first.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/lifestyle-window.jpg"
            alt="Woman sitting calmly by a window"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-col gap-6">
          {cases.map((item) => (
            <div
              key={item.number}
              className="border-b border-ink/10 pb-6 last:border-b-0"
            >
              <p className="font-mono text-xs text-sage-deep">
                {item.number}
              </p>
              <h3 className="mt-2 font-display text-lg uppercase tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
