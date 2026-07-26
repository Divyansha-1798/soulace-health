"use client";

import { motion } from "framer-motion";

const UNIT_WIDTH = 60;

const UNIT_POINTS: [number, number][] = [
  [0, 20],
  [15, 20],
  [17, 15],
  [19, 20],
  [21, 26],
  [23, 4],
  [25, 32],
  [27, 20],
  [30, 20],
  [33, 15],
  [36, 20],
  [60, 20],
];

function buildPath(units: number, startOffset: number) {
  let d = "";
  for (let u = 0; u < units; u++) {
    const offset = startOffset + u * UNIT_WIDTH;
    UNIT_POINTS.forEach(([x, y], i) => {
      d += `${u === 0 && i === 0 ? "M" : "L"}${x + offset},${y} `;
    });
  }
  return d.trim();
}

const PATH = buildPath(6, -UNIT_WIDTH);

export default function PulseWave({
  className,
  duration = 1,
}: {
  className?: string;
  duration?: number;
}) {
  return (
    <svg viewBox="0 0 240 40" fill="none" className={className} aria-hidden>
      <motion.g
        animate={{ x: [0, -UNIT_WIDTH] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <path
          d={PATH}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}
