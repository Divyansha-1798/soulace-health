"use client";

import { motion } from "framer-motion";

export default function PulseWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <motion.path
        d="M0 20 Q 20 20 30 8 T 60 20 Q 80 20 90 32 T 120 20 Q 140 20 150 8 T 180 20 Q 200 20 210 32 T 240 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}
