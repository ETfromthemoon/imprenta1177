"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { CONTACT, HOURS } from "@/lib/constants";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function Contact() {
  return (
    <section id="contacto" className="py-[var(--spacing-section)] px-6 bg-ink">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">
            Cómo llegarnos
          </p>
          <h2
            className="font-display font-bold text-paper"
            style={{ fontSize: "clamp(2rem, 1rem + 3vw, 3.5rem)" }}
          >
            Estamos en el centro de Valparaíso
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyan mb-2">
                Dirección
              </p>
              <p className="font-sans text-paper leading-relaxed">
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </p>
              <Link
                href="https://maps.google.com/?q=Plaza+Anibal+Pinto+1177+Valparaiso+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 font-mono text-xs text-cyan hover:text-cyan-light transition-colors"
              >
                Ver en Google Maps →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyan mb-3">
                Horarios de atención
              </p>
              <div className="space-y-2">
                {HOURS.map((h) => (
                  <div
                    key={h.days}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                  >
                    <span className="font-sans text-sm text-paper/60">
                      {h.days}
                    </span>
                    <span className="font-mono text-sm text-paper font-medium">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyan mb-3">
                Teléfonos y correo
              </p>
              <div className="space-y-1.5">
                <p className="font-sans text-sm text-paper/60">
                  Central:{" "}
                  <a
                    href={`tel:${CONTACT.phone.replace(/[\s]/g, "")}`}
                    className="text-paper hover:text-cyan transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
                <p className="font-sans text-sm text-paper/60">
                  Diseño:{" "}
                  <span className="text-paper">{CONTACT.phoneDesign}</span>
                </p>
                <p className="font-sans text-sm text-paper/60">
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-paper hover:text-cyan transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <WhatsAppCTA label="Escribirnos ahora" />
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            className="rounded-xl overflow-hidden border border-paper/10 min-h-[360px] lg:min-h-[480px]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title="Ubicación Imprenta 1177, Plaza Aníbal Pinto, Valparaíso"
              src="https://maps.google.com/maps?width=100%25&height=480&hl=es&q=Plaza+An%C3%ADbal+Pinto+Valpara%C3%ADso+Chile&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              className="w-full h-full grayscale opacity-70 hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
