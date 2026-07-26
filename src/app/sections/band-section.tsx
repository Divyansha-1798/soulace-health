import Image from "next/image";
import Reveal from "../reveal";

const specs = [
  "PPG heart-rate sensor + EDA skin-conductance sensor",
  "Bluetooth LE 5.0",
  "6–8 hrs continuous wear",
  "IPX7 splash resistant",
];

export default function BandSection() {
  return (
    <section id="band" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
            The band
          </span>
          <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
            Worn like jewellery, built like a sensor.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-ink/70">
            A solid metal cuff with the sensor array built into the inner
            face, so it reads skin contact continuously without looking like
            a piece of hardware.
          </p>

          <div className="mt-8 flex flex-col gap-3 border-t border-ink/10 pt-6">
            {specs.map((spec) => (
              <p
                key={spec}
                className="font-mono text-xs uppercase tracking-[0.08em] text-ink/50"
              >
                {spec}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="group relative order-1 aspect-square w-full overflow-hidden rounded-3xl lg:order-2"
        >
          <Image
            src="/band-sensor-wrist.jpg"
            alt="The Soulace band worn on a wrist, showing the sensor module"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {["01", "02", "03"].map((n, i) => (
              <span
                key={n}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 0 ? "bg-white" : "bg-white/40"
                }`}
                aria-hidden
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
