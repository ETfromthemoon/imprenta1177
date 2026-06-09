"use client";
import { motion } from "motion/react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

type InkSwatch = { bg: string; label: string; desc: string };

const INK_SWATCHES: InkSwatch[] = [
  { bg: "bg-cyan", label: "C", desc: "Cyan" },
  { bg: "bg-magenta", label: "M", desc: "Magenta" },
  { bg: "bg-yellow", label: "Y", desc: "Amarillo" },
  { bg: "bg-ink", label: "K", desc: "Negro" },
];

export function About() {
  return (
    <section
      id="nosotros"
      className="py-[var(--spacing-section)] px-6 bg-paper overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <RevealOnScroll>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan">
              Quiénes somos
            </p>

            {/* Cyan tick */}
            <motion.div
              className="w-14 h-0.5 bg-cyan mb-8 origin-left"
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            <h2
              className="font-serif font-normal leading-[0.90] text-ink mb-6"
              style={{ fontSize: "clamp(2rem, 1rem + 3vw, 3.5rem)" }}
            >
              18 años imprimiendo en Valparaíso
            </h2>
            <p className="font-sans text-base text-ink-soft leading-relaxed mb-4">
              Desde 2007 estamos en el corazón de Valparaíso, a pasos de la
              Plaza Aníbal Pinto. No somos una plataforma digital, no somos una
              franquicia: somos una imprenta de barrio que conoce el oficio.
            </p>
            <p className="font-sans text-base text-ink-soft leading-relaxed mb-4">
              Atendemos a pequeñas empresas, comerciantes, profesionales,
              organizaciones y personas que necesitan impresos con calidad real.
              Si tienes el archivo, lo imprimimos. Si no lo tienes, lo diseñamos.
            </p>
            <p className="font-sans text-base text-ink-soft leading-relaxed">
              En 18 años aprendimos que lo que más valora la gente es la
              atención directa, el precio justo y que el trabajo salga bien.
              Eso es lo que ofrecemos, sin vueltas.
            </p>
          </RevealOnScroll>

          {/* CMYK visual */}
          <RevealOnScroll delay={0.15}>
            <div className="relative flex items-center justify-center min-h-[360px]">
              {/* Registration marks */}
              <span
                aria-hidden
                className="absolute top-0 left-0 text-cyan/25 font-mono text-sm select-none"
              >
                + + +
              </span>
              <span
                aria-hidden
                className="absolute bottom-0 right-0 text-magenta/25 font-mono text-sm select-none"
              >
                + + +
              </span>

              {/* Dashed frame */}
              <div
                aria-hidden
                className="absolute inset-8 border border-dashed border-border pointer-events-none"
              />

              {/* CMYK swatches — editorial square, no radius */}
              <div className="grid grid-cols-2 gap-4">
                {INK_SWATCHES.map((ink) => (
                  <div
                    key={ink.label}
                    className={`${ink.bg} aspect-square w-28 flex flex-col items-center justify-center`}
                  >
                    <span className="font-mono text-3xl font-bold text-paper/80">
                      {ink.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50 mt-1">
                      {ink.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
