import Image from "next/image";

export default function BandSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
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
        </div>

        <div className="relative order-1 aspect-square w-full overflow-hidden rounded-3xl lg:order-2">
          <Image
            src="/band-sensor-wrist.jpg"
            alt="The Soulace band worn on a wrist, showing the sensor module"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
