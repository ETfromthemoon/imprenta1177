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
    <section className="bg-paper border-y border-border py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="flex flex-col items-center text-center py-12 sm:py-8 px-8"
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
                className="font-serif font-normal text-ink mb-0 tabular-nums leading-none"
                style={{ fontSize: "clamp(3rem, 1.5rem + 4vw, 5.5rem)" }}
              >
                <Counter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                />
              </p>
              <div className="w-8 h-0.5 bg-cyan my-3" aria-hidden />
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft/60">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
