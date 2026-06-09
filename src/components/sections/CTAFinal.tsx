"use client";
import { motion } from "motion/react";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function CTAFinal() {
  return (
    <section className="py-[var(--spacing-section)] px-6 bg-paper border-t border-border">
      <div className="mx-auto max-w-4xl">
        <motion.p
          className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          ¿Listo para imprimir?
        </motion.p>

        {/* Cyan tick accent */}
        <motion.div
          className="w-14 h-0.5 bg-cyan mb-8 origin-left"
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.h2
          className="font-serif font-normal leading-[0.90] text-ink mb-6"
          style={{ fontSize: "clamp(2.5rem, 1.5rem + 4vw, 5rem)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Escríbenos y te cotizamos al instante
        </motion.h2>

        <motion.p
          className="mb-10 max-w-xl font-sans text-lg text-ink-soft leading-relaxed"
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
