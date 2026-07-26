"use client";

import { motion } from "framer-motion";
import PulseWave from "../pulse-wave";

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-fit rounded-full bg-white/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
            AI sensing · Infrasonic nervous system support
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl font-display font-black text-5xl uppercase leading-[0.95] text-ink sm:text-6xl lg:text-7xl"
        >
          Your body knows before you do.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base leading-7 text-ink/70 sm:text-lg"
        >
          Soulace reads your heart rate and skin conductance in real time,
          and uses an onboard AI model to catch the physical onset of
          anxiety, the racing pulse, the first sweat response, before it
          builds. The moment it detects that shift, the band delivers a
          low-frequency infrasonic vibration to your wrist to help calm your
          nervous system back down.
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
            className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/40"
          >
            How it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.1em] text-ink/50"
        >
          <span>Launching soon</span>
          <span aria-hidden>·</span>
          <span>UK first</span>
          <span aria-hidden>·</span>
          <span>Not a medical device</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="rounded-2xl bg-white px-5 py-4">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink/50">
              Heart rate
            </p>
            <p className="mt-1 font-display font-black text-3xl text-ink">
              100 <span className="text-lg">bpm</span>
            </p>
          </div>
          <PulseWave className="h-8 w-24 text-sage-deep/50" />
        </motion.div>
      </div>
    </section>
  );
}
