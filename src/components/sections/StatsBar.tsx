"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { METRICS } from "@/lib/constants";

function Counter({
  value,
  suffix,
  prefix,
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();
    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix ?? ""}
      {display}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="bg-ink py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-paper/10">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="flex flex-col items-center text-center py-10 sm:py-6 px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p
                className="font-display font-bold text-paper mb-2 tabular-nums"
                style={{ fontSize: "clamp(3rem, 1.5rem + 4vw, 5.5rem)" }}
              >
                <Counter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                />
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
