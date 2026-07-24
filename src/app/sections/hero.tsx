"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PulseWave from "../pulse-wave";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-4">
      <div
        ref={ref}
        className="relative w-full overflow-hidden rounded-3xl"
      >
        <motion.div className="absolute inset-0 scale-110" style={{ y }}>
          <Image
            src="/band-hero.jpg"
            alt="The Soulace Band worn on a wrist"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
        </motion.div>

        <div className="relative flex min-h-[640px] flex-col justify-end gap-5 p-6 sm:min-h-[600px] sm:p-10 lg:min-h-[680px] lg:p-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="w-fit rounded-full bg-white/15 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              AI sensing · Infrasonic nervous system support
            </span>
            <PulseWave className="hidden h-5 w-16 text-sage-light sm:block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl font-display text-5xl uppercase leading-[0.95] tracking-[-0.01em] text-white sm:text-6xl lg:text-7xl"
          >
            Your body knows before you do.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-base leading-7 text-white/80 sm:text-lg"
          >
            Soulace reads your heart rate and skin conductance in real time,
            and uses an onboard AI model to catch the physical onset of
            anxiety — the racing pulse, the first sweat response — before it
            builds. The moment it detects that shift, the band delivers a
            low-frequency infrasonic vibration to help calm your nervous
            system back down.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#waitlist"
              className="group relative overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative z-10">Join the waitlist</span>
              <span className="absolute inset-0 -translate-x-full bg-sage-light transition-transform duration-300 group-hover:translate-x-0" />
            </a>
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-white/60">
              Launching soon · UK first · Not a medical device
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
