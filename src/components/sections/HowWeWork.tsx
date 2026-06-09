"use client";
import { motion } from "motion/react";
import { STEPS } from "@/lib/constants";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function HowWeWork() {
  return (
    <section className="py-[var(--spacing-section)] px-6 bg-paper-muted">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">
            El proceso
          </p>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(2rem, 1rem + 3vw, 3.5rem)" }}
          >
            Rápido, claro y sin vueltas
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div
            aria-hidden
            className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-cyan via-magenta to-yellow hidden sm:block"
          />

          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-ink flex items-center justify-center">
                  <span className="font-mono text-sm font-bold text-cyan">
                    {step.num}
                  </span>
                </div>
                <div className="pt-2.5">
                  <h3 className="font-display font-semibold text-ink text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-14 flex justify-center"
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
