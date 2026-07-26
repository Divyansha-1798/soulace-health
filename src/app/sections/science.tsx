import Reveal from "../reveal";
import SensorChart from "../sensor-chart";

const signals = [
  {
    title: "PPG heart-rate sensor",
    body: "An optical sensor at the wrist tracks beat-to-beat heart rate continuously.",
  },
  {
    title: "EDA skin-conductance sensor",
    body: "Two small electrodes measure the skin's electrical conductance, which shifts with sweat gland activity tied to sympathetic arousal.",
  },
  {
    title: "Infrasonic vibration response",
    body: "Low-frequency vibration, below typical hearing range, delivered as a felt pulse designed to help calm the nervous system and support autonomic balance.",
  },
];

export default function Science() {
  return (
    <section id="science" className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
            The science, plainly
          </span>
          <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
            Two signals, read together.
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/70">
            Heart rate alone rises for lots of reasons — exercise, caffeine,
            standing up. Skin conductance (electrodermal activity) responds
            specifically to sympathetic nervous system arousal, the same
            system involved in anxiety. Reading both together, against your
            own baseline, gives a more reliable signal than either alone.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {signals.map((signal) => (
              <div key={signal.title}>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-sage-deep">
                  {signal.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-ink/70">
                  {signal.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-sage pl-4 text-sm leading-6 text-ink/60">
            Soulace is a wellness device, not a diagnostic or clinical
            neurostimulation device. Sensor readings support the
            product&apos;s response and your own insight — they are not a
            medical-grade diagnosis of anxiety or any other condition.
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="flex w-full flex-col justify-center rounded-3xl border border-ink/10 bg-white p-8 shadow-sm sm:p-10"
        >
          <SensorChart />
        </Reveal>
      </div>
    </section>
  );
}
