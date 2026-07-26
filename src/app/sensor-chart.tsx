"use client";

import { motion } from "framer-motion";

export default function SensorChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mb-4 flex items-center gap-6 font-mono text-xs uppercase tracking-[0.1em] text-ink/50">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sage-deep" aria-hidden />
          HR (PPG)
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sage-light" aria-hidden />
          EDA (skin conductance)
        </span>
      </div>
      <svg viewBox="0 0 320 140" fill="none" className="w-full" aria-hidden>
        <line x1="0" y1="120" x2="320" y2="120" stroke="currentColor" className="text-ink/10" />
        <text x="0" y="16" className="fill-ink/40" fontSize="10" fontFamily="var(--font-mono)">
          170 BPM
        </text>
        <text x="0" y="132" className="fill-ink/40" fontSize="10" fontFamily="var(--font-mono)">
          60 BPM
        </text>
        <motion.path
          d="M0 105 C 40 108, 60 108, 80 100 C 110 88, 120 40, 150 30 C 180 22, 210 60, 240 90 C 265 108, 290 112, 320 110"
          stroke="currentColor"
          className="text-sage-deep"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 112 C 50 113, 70 113, 90 110 C 120 104, 130 62, 160 48 C 190 34, 215 72, 245 98 C 270 112, 295 116, 320 115"
          stroke="currentColor"
          className="text-sage-light"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>
      <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-ink/40">
        Onset window: both signals rise together, then settle after response
      </p>
    </div>
  );
}
