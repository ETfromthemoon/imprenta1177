"use client";
import { motion } from "motion/react";
import { GALLERY_CATEGORIES } from "@/lib/constants";

const CATEGORY_COLORS = [
  "from-cyan/20 to-cyan/5",
  "from-magenta/20 to-magenta/5",
  "from-yellow/20 to-yellow/5",
  "from-cyan/15 to-magenta/10",
  "from-magenta/15 to-yellow/10",
  "from-yellow/15 to-cyan/10",
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
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">
            Nuestros trabajos
          </p>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(2rem, 1rem + 3vw, 3.5rem)" }}
          >
            Lo que sale de nuestras manos
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {GALLERY_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${GALLERY_CONFIG[i].span}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
            >
              {/* Placeholder visual */}
              <div
                className={`${GALLERY_CONFIG[i].aspect} bg-gradient-to-br ${CATEGORY_COLORS[i]} flex items-center justify-center border border-border`}
              >
                <div className="text-center px-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/40 mb-2">
                    Foto próximamente
                  </p>
                  <p className="font-display font-semibold text-xl text-ink">
                    {cat.label}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="font-display font-bold text-xl text-paper">
                  {cat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-center font-mono text-[10px] text-ink-soft/40 uppercase tracking-widest"
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
