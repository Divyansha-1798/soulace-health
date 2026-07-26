import Image from "next/image";
import Reveal from "../reveal";

const specs = [
  "PPG + EDA sensor",
  "Bluetooth LE 5.0",
  "6–8 hrs continuous wear",
  "IPX7 splash resistant",
];

export default function BandSection() {
  return (
    <section id="band" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <Reveal className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
          The band
        </span>
        <h2 className="mt-4 font-display font-black text-3xl uppercase leading-tight text-ink sm:text-4xl">
          Worn like jewellery, built like a sensor.
        </h2>
        <p className="mt-5 text-base leading-7 text-ink/70">
          A solid metal cuff with the sensor array built into the inner
          face, so it reads skin contact continuously without looking like
          a piece of hardware.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.1em] text-ink/50">
          {specs.map((spec, i) => (
            <span key={spec} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden>·</span>}
              {spec}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal
        delay={0.15}
        className="group relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-3xl"
      >
        <Image
          src="/band-sensor-wrist.jpg"
          alt="The Soulace band worn on a wrist, showing the sensor module"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="100vw"
        />
      </Reveal>
    </section>
  );
}
