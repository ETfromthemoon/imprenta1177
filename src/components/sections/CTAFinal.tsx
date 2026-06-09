"use client";
import { motion } from "motion/react";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function CTAFinal() {
  return (
    <section className="relative py-[var(--spacing-section)] px-6 bg-ink overflow-hidden">
      {/* Decorative registration marks */}
      <span
        aria-hidden
        className="absolute top-8 left-8 text-cyan/20 font-mono text-xs select-none"
      >
        + + +
      </span>
      <span
        aria-hidden
        className="absolute bottom-8 right-8 text-magenta/20 font-mono text-xs select-none"
      >
        + + +
      </span>

      {/* Subtle gradient accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.52 0.18 222 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          ¿Listo para imprimir?
        </motion.p>

        <motion.h2
          className="font-display font-bold text-paper mb-6 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 1.5rem + 4vw, 5rem)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Escríbenos y te cotizamos al instante
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-xl font-sans text-lg text-paper/60 leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.16, duration: 0.6 }}
        >
          Sin formularios, sin esperas. En la misma conversación te damos
          precio, plazo y te pedimos el archivo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.24, duration: 0.5 }}
        >
          <WhatsAppCTA size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
