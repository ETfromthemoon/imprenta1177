"use client";
import { motion } from "motion/react";

type MarkerHighlightProps = {
  children: React.ReactNode;
  delay?: number;
  color?: string;
};

export function MarkerHighlight({
  children,
  delay = 0,
  color = "oklch(0.90 0.19 102)",
}: MarkerHighlightProps) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <motion.svg
        aria-hidden
        className="absolute inset-x-[-2%] bottom-[0.05em] h-[0.55em] w-[104%]"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.2 }}
      >
        <motion.path
          d="M1,7 Q20,3 40,6 T80,5 T99,6"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.85 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{
            delay: delay + 0.02,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.svg>
    </span>
  );
}
