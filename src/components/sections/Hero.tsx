"use client";
import { motion } from "motion/react";
import { SplitText } from "@/components/animations/SplitText";
import { WhatsAppCTA } from "./WhatsAppCTA";

const LINE_1 = "Tu imprenta";
const LINE_2 = "en el centro";
const LINE_3 = "de Valparaíso";

const line1Words = LINE_1.split(" ").length;
const line2Words = LINE_2.split(" ").length;

const TRUST_BADGES = [
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" aria-hidden>
        <path d="M7.8 1L2 7.5h4.6L5.2 12l6.5-7H7.3L7.8 1z" />
      </svg>
    ),
    label: "Entrega express",
  },
  {
    icon: (
      <svg width="11" height="14" viewBox="0 0 11 14" fill="currentColor" aria-hidden>
        <path d="M5.5 0C3.01 0 1 2.01 1 4.5c0 3.94 4.5 9.5 4.5 9.5S10 8.44 10 4.5C10 2.01 7.99 0 5.5 0zm0 6.25A1.75 1.75 0 1 1 5.5 2.75a1.75 1.75 0 0 1 0 3.5z" />
      </svg>
    ),
    label: "Plaza Aníbal Pinto",
  },
  {
    icon: (
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M1.5 5.5L5 9L12.5 1.5" />
      </svg>
    ),
    label: "Diseño incluido",
  },
];

function CMYKPlate() {
  return (
    <div className="relative flex items-center justify-center h-52 w-44 select-none" aria-hidden>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-2 w-32 h-32 shadow-xl shadow-ink/20">
          <div className="bg-cyan" />
          <div className="bg-magenta" />
          <div className="bg-yellow" />
          <div className="bg-ink" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
            <circle cx="15" cy="15" r="12" stroke="white" strokeWidth="0.8" fill="none" opacity="0.65" />
            <circle cx="15" cy="15" r="4" stroke="white" strokeWidth="0.8" fill="none" opacity="0.65" />
            <line x1="15" y1="0" x2="15" y2="30" stroke="white" strokeWidth="0.8" opacity="0.65" />
            <line x1="0" y1="15" x2="30" y2="15" stroke="white" strokeWidth="0.8" opacity="0.65" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-3 flex gap-5 font-mono text-[8px] uppercase tracking-[0.28em] text-ink/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        {["C", "M", "Y", "K"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </motion.div>

      <span className="absolute top-4 left-4 font-mono text-xs text-ink/15 leading-none">+</span>
      <span className="absolute top-4 right-4 font-mono text-xs text-ink/15 leading-none">+</span>
      <span className="absolute bottom-9 left-4 font-mono text-xs text-ink/15 leading-none">+</span>
      <span className="absolute bottom-9 right-4 font-mono text-xs text-ink/15 leading-none">+</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-paper px-6 pt-20 pb-16">
      {/* Registration marks — decorative print-craft detail */}
      <span aria-hidden className="absolute top-8 left-8 text-cyan/25 font-mono text-xs select-none">
        + + +
      </span>
      <span aria-hidden className="absolute top-8 right-8 text-cyan/25 font-mono text-xs select-none">
        + + +
      </span>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Eyebrow */}
        <motion.p
          className="mb-6 font-mono text-xs uppercase tracking-widest text-cyan"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          18 años en el corazón de Valparaíso
        </motion.p>

        {/* Display headline + CMYKPlate editorial tile */}
        <div className="relative">
          <h1
            className="font-serif font-normal leading-[0.90] tracking-[-0.025em] text-ink"
            style={{ fontSize: "clamp(3.5rem, 1rem + 9vw, 9.5rem)" }}
          >
            <span className="block">
              <SplitText text={LINE_1} delay={0.1} stagger={0.05} startIndex={0} />
            </span>
            <span className="block">
              <SplitText text={LINE_2} delay={0.1} stagger={0.05} startIndex={line1Words} />
            </span>
            <span className="block text-ink-soft">
              <SplitText text={LINE_3} delay={0.1} stagger={0.05} startIndex={line1Words + line2Words} />
            </span>
          </h1>

          {/* CMYKPlate — editorial image tile floating bottom-right, desktop only */}
          <div className="hidden lg:block absolute bottom-0 right-0 translate-y-1/4" aria-hidden>
            <CMYKPlate />
          </div>
        </div>

        {/* Cyan tick accent — NewForm broadside mark */}
        <motion.div
          className="w-14 h-0.5 bg-cyan mt-8 mb-8 origin-left"
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Subhead */}
        <motion.p
          className="mb-10 max-w-xl font-sans text-lg text-ink-soft leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Tarjetas, folletos, gigantografías, formularios y mucho más. Lo
          hacemos rápido, lo hacemos bien, y puedes retirarlo a pasos de la
          Plaza Aníbal Pinto.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <WhatsAppCTA size="lg" />
        </motion.div>

        {/* Trust badges — editorial rectangular style */}
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-2 rounded-[5px] border border-border bg-paper px-4 py-1.5 font-sans text-sm text-ink-soft"
            >
              <span className="text-cyan">{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/50">
            Scroll
          </span>
          <span className="h-7 w-px bg-gradient-to-b from-ink-soft/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
