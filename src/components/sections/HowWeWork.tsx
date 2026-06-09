"use client";
import { motion } from "motion/react";
import { STEPS } from "@/lib/constants";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function HowWeWork() {
  return (
    <section className="py-[var(--spacing-section)] px-6 bg-paper">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan">
            El proceso
          </p>
          <h2
            className="font-serif font-normal leading-[0.90] text-ink"
            style={{ fontSize: "clamp(2.5rem, 1rem + 4vw, 4rem)" }}
          >
            Rápido, claro y sin vueltas
          </h2>
        </motion.div>

        {/* Editorial numbered steps — no circle icons, no connector line */}
        <div className="border-t border-border">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="border-b border-border py-10 grid grid-cols-[72px_1fr] sm:grid-cols-[110px_1fr] gap-6 items-start"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Large editorial step number */}
              <div
                className="font-serif font-normal text-ink/15 leading-none select-none"
                style={{ fontSize: "clamp(3rem, 2rem + 2vw, 4.5rem)" }}
              >
                {step.num}
              </div>

              {/* Content */}
              <div className="pt-1.5">
                <h3 className="font-sans text-base font-semibold text-ink mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-ink-soft leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 flex justify-start"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <WhatsAppCTA />
        </motion.div>
      </div>
    </section>
  );
}
