const steps = [
  {
    number: "01",
    title: "Sense",
    body: "Optical and electrodermal sensors track heart rate and skin conductance continuously from the wrist.",
  },
  {
    number: "02",
    title: "Detect",
    body: "An onboard AI model compares live readings to your personal baseline to catch early signs of anxiety onset.",
  },
  {
    number: "03",
    title: "Respond",
    body: "The band delivers a low, steady infrasonic pulse designed to help calm the nervous system and support autonomic balance.",
  },
  {
    number: "04",
    title: "Learn",
    body: "A short, optional check-in afterwards refines what anxious looks like for you, so detection sharpens over time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="text-center">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
          How it works
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
          Four steps, running quietly on your wrist.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink/70">
          Soulace doesn&apos;t ask you to manage anything mid-episode. It
          senses, decides, and responds automatically — you only reflect once
          things have settled.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-ink/10 p-6"
          >
            <p className="font-mono text-xs text-sage-deep">{step.number}</p>
            <h3 className="mt-2 font-display text-lg uppercase tracking-[-0.01em] text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
