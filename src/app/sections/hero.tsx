"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PulseWave from "../pulse-wave";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10 sm:pt-16">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="w-fit rounded-full bg-sage/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
              AI sensing · Infrasonic nervous system support
            </span>
            <PulseWave className="hidden h-5 w-16 text-sage sm:block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl font-display text-5xl uppercase leading-[0.95] tracking-[-0.01em] text-ink sm:text-6xl lg:text-[4.5rem]"
          >
            Your body knows before you do.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-base leading-7 text-ink/70 sm:text-lg"
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
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#waitlist"
              className="group relative overflow-hidden rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative z-10">Join the waitlist</span>
              <span className="absolute inset-0 -translate-x-full bg-sage-deep transition-transform duration-300 group-hover:translate-x-0" />
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/40"
            >
              How it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink/10 pt-6 font-mono text-xs uppercase tracking-[0.1em] text-ink/50"
          >
            <span>Launching soon</span>
            <span aria-hidden>·</span>
            <span>UK first</span>
            <span aria-hidden>·</span>
            <span>Not a medical device</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream"
        >
          <Image
            src="/band-hero.jpg"
            alt="The Soulace Band worn on a wrist"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur-sm">
            <span className="font-display text-2xl text-ink">100</span>
            <span className="font-mono text-xs uppercase leading-tight tracking-[0.08em] text-ink/60">
              BPM
              <br />
              Heart rate
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
