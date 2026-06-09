"use client";
import { motion } from "motion/react";
import { SERVICES } from "@/lib/constants";
import { WhatsAppCTA } from "./WhatsAppCTA";

const accentText = {
  cyan: "text-cyan",
  magenta: "text-magenta",
  yellow: "text-yellow",
} as const;

export function Services() {
  return (
    <section id="servicios" className="py-[var(--spacing-section)] px-6 bg-paper">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan">
            ¿Qué hacemos?
          </p>
          <h2
            className="font-serif font-normal leading-[0.90] text-ink"
            style={{ fontSize: "clamp(2.5rem, 1rem + 4vw, 4rem)" }}
          >
            Servicios de imprenta
          </h2>
        </motion.div>

        {/* Editorial service list — no cards, type hierarchy only */}
        <div className="border-t border-border">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className="group border-b border-border py-8 grid grid-cols-[90px_1fr] sm:grid-cols-[140px_1fr] gap-6 items-start hover:bg-paper-muted transition-colors duration-200"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Mark — accent typographic label */}
              <div className="pt-1">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.18em] font-bold ${accentText[service.accentColor]}`}
                >
                  {service.mark}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-serif font-normal text-ink mb-2 leading-tight group-hover:text-ink transition-colors"
                  style={{ fontSize: "clamp(1.25rem, 1rem + 1.2vw, 1.75rem)" }}
                >
                  {service.title}
                </h3>
                <p className="font-sans text-[14px] text-ink-soft leading-relaxed max-w-lg">
                  {service.description}
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
          <WhatsAppCTA label="Cotizar mi impreso" />
        </motion.div>
      </div>
    </section>
  );
}
