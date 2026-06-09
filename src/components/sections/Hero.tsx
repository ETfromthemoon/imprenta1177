"use client";
import { motion } from "motion/react";
import { Aurora } from "@/components/animations/Aurora";
import { Spotlight } from "@/components/animations/Spotlight";
import { SplitText } from "@/components/animations/SplitText";
import { MarkerHighlight } from "@/components/animations/MarkerHighlight";
import { WhatsAppCTA } from "./WhatsAppCTA";

const LINE_1 = "Tu imprenta";
const LINE_2_PRE = "en el";
const LINE_2_KEY = "centro";
const LINE_2_POST = "de Valparaíso";

const line1Words = LINE_1.split(" ").length;
const line2PreWords = LINE_2_PRE.split(" ").length;

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
    <div className="relative flex items-center justify-center h-80 w-72 select-none" aria-hidden>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-2 w-44 h-44 shadow-2xl shadow-ink/20">
          <div className="bg-cyan" />
          <div className="bg-magenta" />
          <div className="bg-yellow" />
          <div className="bg-ink" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden>
            <circle cx="19" cy="19" r="15" stroke="white" strokeWidth="0.8" fill="none" opacity="0.65" />
            <circle cx="19" cy="19" r="5" stroke="white" strokeWidth="0.8" fill="none" opacity="0.65" />
            <line x1="19" y1="0" x2="19" y2="38" stroke="white" strokeWidth="0.8" opacity="0.65" />
            <line x1="0" y1="19" x2="38" y2="19" stroke="white" strokeWidth="0.8" opacity="0.65" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 flex gap-8 font-mono text-[9px] uppercase tracking-[0.28em] text-ink/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        {["C", "M", "Y", "K"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </motion.div>

      <span className="absolute top-6 left-6 font-mono text-xs text-ink/15 leading-none">+</span>
      <span className="absolute top-6 right-6 font-mono text-xs text-ink/15 leading-none">+</span>
      <span className="absolute bottom-12 left-6 font-mono text-xs text-ink/15 leading-none">+</span>
      <span className="absolute bottom-12 right-6 font-mono text-xs text-ink/15 leading-none">+</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-paper px-6 pt-24 pb-16">
      <Aurora />
      <Spotlight />

      <span
        aria-hidden
        className="absolute top-8 left-8 text-cyan/30 font-mono text-xs select-none"
      >
        + + +
      </span>
      <span
        aria-hidden
        className="absolute top-8 right-8 text-cyan/30 font-mono text-xs select-none"
      >
        + + +
      </span>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] items-center gap-8 lg:gap-16">
          {/* Content — left aligned */}
          <div>
            <motion.p
              className="mb-6 font-mono text-xs uppercase tracking-widest text-cyan"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              18 años en el corazón de Valparaíso
            </motion.p>

            <h1
              className="font-display font-bold leading-[0.95] tracking-tight text-ink mb-6"
              style={{ fontSize: "clamp(3.25rem, 1rem + 8vw, 7.5rem)" }}
            >
              <span className="block">
                <SplitText text={LINE_1} delay={0.08} stagger={0.04} startIndex={0} />
              </span>
              <span className="block text-ink-soft">
                <SplitText text={LINE_2_PRE} delay={0.08} stagger={0.04} startIndex={line1Words} />
                {" "}
                <MarkerHighlight delay={0.7}>
                  <SplitText
                    text={LINE_2_KEY}
                    delay={0.08}
                    stagger={0.04}
                    startIndex={line1Words + line2PreWords}
                  />
                </MarkerHighlight>
                {" "}
                <SplitText
                  text={LINE_2_POST}
                  delay={0.08}
                  stagger={0.04}
                  startIndex={line1Words + line2PreWords + 1}
                />
              </span>
            </h1>

            <motion.p
              className="mb-10 max-w-xl font-sans text-lg text-ink-soft leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Tarjetas, folletos, gigantografías, formularios y mucho más. Lo
              hacemos rápido, lo hacemos bien, y puedes retirarlo a pasos de la
              Plaza Aníbal Pinto.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 mb-12"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <WhatsAppCTA size="lg" />
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15, duration: 0.6 }}
            >
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-paper/80 px-4 py-1.5 font-sans text-sm text-ink-soft backdrop-blur-sm"
                >
                  <span className="text-cyan">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* CMYK plate — desktop only */}
          <div className="hidden lg:flex items-center justify-center">
            <CMYKPlate />
          </div>
        </div>
      </div>

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
