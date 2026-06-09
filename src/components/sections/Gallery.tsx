"use client";
import { motion } from "motion/react";
import { GALLERY_CATEGORIES } from "@/lib/constants";

const CATEGORY_COLORS = [
  "bg-cyan/12",
  "bg-magenta/12",
  "bg-yellow/12",
  "bg-cyan/8",
  "bg-magenta/8",
  "bg-yellow/8",
];

const GALLERY_CONFIG = [
  { span: "sm:col-span-2", aspect: "aspect-[16/9]" },
  { span: "sm:col-span-1", aspect: "aspect-[3/4]" },
  { span: "sm:col-span-1", aspect: "aspect-[4/3]" },
  { span: "sm:col-span-2", aspect: "aspect-[16/9]" },
  { span: "sm:col-span-1", aspect: "aspect-[3/4]" },
  { span: "sm:col-span-2", aspect: "aspect-[16/9]" },
];

export function Gallery() {
  return (
    <section id="trabajos" className="py-[var(--spacing-section)] px-6 bg-paper">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan">
            Nuestros trabajos
          </p>
          <h2
            className="font-serif font-normal leading-[0.90] text-ink"
            style={{ fontSize: "clamp(2.5rem, 1rem + 4vw, 4rem)" }}
          >
            Lo que sale de nuestras manos
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {GALLERY_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              className={`group relative overflow-hidden cursor-pointer border border-border ${GALLERY_CONFIG[i].span}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.012, transition: { duration: 0.2 } }}
            >
              {/* Placeholder visual */}
              <div
                className={`${GALLERY_CONFIG[i].aspect} ${CATEGORY_COLORS[i]} flex flex-col items-start justify-end p-5`}
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft/40 mb-1.5">
                  Foto próximamente
                </p>
                <p className="font-serif font-normal text-xl leading-tight text-ink">
                  {cat.label}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/85 flex flex-col items-start justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan mb-1.5">
                  Ver trabajos
                </p>
                <p className="font-serif font-normal text-xl leading-tight text-paper">
                  {cat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 font-mono text-[10px] text-ink-soft/40 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          — Fotos de trabajos reales se agregarán aquí —
        </motion.p>
      </div>
    </section>
  );
}
