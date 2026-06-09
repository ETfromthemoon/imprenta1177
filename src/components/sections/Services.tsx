"use client";
import { motion } from "motion/react";
import { SERVICES } from "@/lib/constants";
import { WhatsAppCTA } from "./WhatsAppCTA";

const accentBorder = {
  cyan: "border-cyan",
  magenta: "border-magenta",
  yellow: "border-yellow",
} as const;

const accentBg = {
  cyan: "bg-cyan/5",
  magenta: "bg-magenta/5",
  yellow: "bg-yellow/5",
} as const;

const accentText = {
  cyan: "text-cyan",
  magenta: "text-magenta",
  yellow: "text-yellow",
} as const;

export function Services() {
  return (
    <section id="servicios" className="py-[var(--spacing-section)] px-6 bg-paper-muted">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">
            ¿Qué hacemos?
          </p>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(2rem, 1rem + 3vw, 3.5rem)" }}
          >
            Servicios de imprenta
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className={[
                "rounded-xl border border-border p-6 border-l-4 transition-shadow",
                accentBorder[service.accentColor],
                accentBg[service.accentColor],
                service.size === "large" ? "sm:col-span-2 lg:col-span-2" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
            >
              <div
                className={[
                  "w-10 h-10 rounded mb-4 flex items-center justify-center border",
                  accentBg[service.accentColor],
                  accentBorder[service.accentColor],
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span
                  className={`font-mono text-[10px] font-bold tracking-wider ${accentText[service.accentColor]}`}
                >
                  {service.mark}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-ink-soft leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
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
