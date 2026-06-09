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
  { icon: "⚡", label: "Entrega express" },
  { icon: "📍", label: "Plaza Aníbal Pinto" },
  { icon: "✓", label: "Diseño incluido" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-paper px-6 pt-24 pb-16">
      <Aurora />
      <Spotlight />

      {/* Registration marks — decorative print-craft detail */}
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

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <motion.p
          className="mb-6 font-mono text-xs uppercase tracking-widest text-cyan"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          18 años en el corazón de Valparaíso
        </motion.p>

        {/* Headline */}
        <h1 className="font-display font-bold leading-[0.95] tracking-tight text-ink mb-6" style={{ fontSize: "clamp(3.25rem, 1rem + 8vw, 7.5rem)" }}>
          <span className="block">
            <SplitText
              text={LINE_1}
              delay={0.08}
              stagger={0.04}
              startIndex={0}
            />
          </span>
          <span className="block text-ink-soft">
            <SplitText
              text={LINE_2_PRE}
              delay={0.08}
              stagger={0.04}
              startIndex={line1Words}
            />
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

        {/* Subhead */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl font-sans text-lg text-ink-soft leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Tarjetas, folletos, gigantografías, formularios y mucho más. Lo
          hacemos rápido, lo hacemos bien, y puedes retirarlo a pasos de la
          Plaza Aníbal Pinto.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <WhatsAppCTA size="lg" />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper/80 px-4 py-1.5 font-sans text-sm text-ink-soft backdrop-blur-sm"
            >
              <span aria-hidden>{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
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
