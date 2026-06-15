"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES, WHATSAPP_NUMBER } from "@/lib/constants";

// ─── Types ────────────────────────────────────────────────────────────────────

type QuoteData = {
  serviceId: string;
  serviceName: string;
  quantity: string;
  hasDesign: boolean | null;
  urgency: string;
  size: string;
  name: string;
  phone: string;
  notes: string;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const QUANTITIES = ["1 – 50", "51 – 200", "201 – 500", "501 – 1.000", "+1.000"];

const URGENCY_OPTIONS = [
  { id: "urgente", label: "Urgente", sub: "1–2 días" },
  { id: "normal", label: "Normal", sub: "3–5 días" },
  { id: "sin-apuro", label: "Sin apuro", sub: "+7 días" },
] as const;

const NEEDS_SIZE = new Set(["gigantografias", "folletos", "etiquetas"]);

const ACCENT: Record<string, string> = {
  cyan: "var(--color-cyan)",
  magenta: "var(--color-magenta)",
  yellow: "oklch(0.70 0.19 102)",
};

const EMPTY: QuoteData = {
  serviceId: "",
  serviceName: "",
  quantity: "",
  hasDesign: null,
  urgency: "normal",
  size: "",
  name: "",
  phone: "",
  notes: "",
};

// ─── WhatsApp builder ─────────────────────────────────────────────────────────

function buildWhatsAppURL(data: QuoteData): string {
  const urgencyLabel =
    URGENCY_OPTIONS.find((u) => u.id === data.urgency)?.label ?? data.urgency;
  const lines = [
    "Hola! Quiero cotizar un trabajo:",
    "",
    `Producto: ${data.serviceName}`,
    `Cantidad: ${data.quantity}`,
    NEEDS_SIZE.has(data.serviceId) && data.size
      ? `Medidas: ${data.size}`
      : null,
    data.hasDesign !== null
      ? `Tengo diseño: ${data.hasDesign ? "Sí" : "No, necesito diseño"}`
      : null,
    `Plazo: ${urgencyLabel}`,
    data.notes ? `\nDetalle: ${data.notes}` : null,
    "",
    `Nombre: ${data.name}`,
    data.phone ? `Tel: ${data.phone}` : null,
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

// ─── Shared slide animation ───────────────────────────────────────────────────

function SlideStep({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Progress indicator ───────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div
      className="flex items-center gap-3 px-7 py-4 border-b"
      style={{
        borderColor: "color-mix(in oklch, var(--color-ink) 10%, transparent)",
      }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const state: "done" | "active" | "idle" =
          i < step ? "done" : i === step ? "active" : "idle";
        return (
          <div key={i} className="flex items-center gap-3">
            <motion.div
              className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0"
              animate={{
                backgroundColor:
                  state === "done"
                    ? "var(--color-cyan)"
                    : state === "active"
                    ? "var(--color-ink)"
                    : "transparent",
                borderColor:
                  state === "done"
                    ? "var(--color-cyan)"
                    : state === "active"
                    ? "var(--color-ink)"
                    : "color-mix(in oklch, var(--color-ink) 20%, transparent)",
              }}
              transition={{ duration: 0.28 }}
            >
              {state === "done" ? (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4l2.5 2.5L9 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span
                  className="font-mono text-[10px] leading-none select-none"
                  style={{
                    color:
                      state === "active"
                        ? "var(--color-paper)"
                        : "var(--color-ink-soft)",
                  }}
                >
                  {i + 1}
                </span>
              )}
            </motion.div>
            {i < total - 1 && (
              <motion.div
                className="h-px w-7"
                animate={{
                  backgroundColor:
                    i < step
                      ? "var(--color-cyan)"
                      : "color-mix(in oklch, var(--color-ink) 15%, transparent)",
                }}
                transition={{ duration: 0.28 }}
              />
            )}
          </div>
        );
      })}
      <span
        className="ml-1 font-mono text-xs"
        style={{ color: "var(--color-ink-soft)" }}
      >
        {step + 1}&thinsp;/&thinsp;{total}
      </span>
    </div>
  );
}

// ─── Step 1 — Service selector ────────────────────────────────────────────────

type Step1Props = {
  value: string;
  onSelect: (id: string, name: string) => void;
};

function Step1({ value, onSelect }: Step1Props) {
  return (
    <SlideStep>
      <p
        className="font-mono text-xs uppercase tracking-widest mb-1"
        style={{ color: "var(--color-cyan)" }}
      >
        Paso 01
      </p>
      <h3
        className="font-display text-2xl font-bold mb-1"
        style={{ color: "var(--color-ink)" }}
      >
        ¿Qué vas a imprimir?
      </h3>
      <p
        className="font-sans text-sm mb-7"
        style={{ color: "var(--color-ink-soft)" }}
      >
        Seleccioná el producto para tu cotización.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {SERVICES.map((svc) => {
          const selected = value === svc.id;
          const accent = ACCENT[svc.accentColor];
          return (
            <button
              key={svc.id}
              type="button"
              onClick={() => onSelect(svc.id, svc.title)}
              className="relative text-left p-4 rounded-lg border transition-colors duration-200"
              style={{
                borderColor: selected
                  ? accent
                  : "color-mix(in oklch, var(--color-ink) 12%, transparent)",
                backgroundColor: selected
                  ? `color-mix(in oklch, ${accent} 7%, white)`
                  : "white",
              }}
            >
              <div
                className="w-2 h-2 rounded-full mb-3"
                style={{ backgroundColor: accent }}
              />
              <span
                className="font-mono text-xs uppercase tracking-widest block mb-0.5"
                style={{ color: selected ? accent : "var(--color-ink-soft)" }}
              >
                {svc.mark}
              </span>
              <span
                className="font-display font-bold text-base block leading-snug"
                style={{ color: "var(--color-ink)" }}
              >
                {svc.title}
              </span>
              <span
                className="font-sans text-xs mt-0.5 block leading-snug"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {svc.description.split(".")[0]}
              </span>
              {selected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accent }}
                >
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path
                      d="M1 3.5l2.2 2.2L8 1"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </SlideStep>
  );
}

// ─── Step 2 — Details ─────────────────────────────────────────────────────────

type Step2Props = {
  data: QuoteData;
  onChange: (patch: Partial<QuoteData>) => void;
};

function Step2({ data, onChange }: Step2Props) {
  return (
    <SlideStep>
      <p
        className="font-mono text-xs uppercase tracking-widest mb-1"
        style={{ color: "var(--color-cyan)" }}
      >
        Paso 02
      </p>
      <h3
        className="font-display text-2xl font-bold mb-1"
        style={{ color: "var(--color-ink)" }}
      >
        Detalles del trabajo
      </h3>
      <p
        className="font-sans text-sm mb-7"
        style={{ color: "var(--color-ink-soft)" }}
      >
        Más datos = cotización más precisa.
      </p>

      <div className="space-y-7">
        {/* Quantity */}
        <div>
          <label
            className="font-mono text-xs uppercase tracking-widest block mb-3"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Cantidad *
          </label>
          <div className="flex flex-wrap gap-2">
            {QUANTITIES.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => onChange({ quantity: q })}
                className="px-4 py-2 rounded border font-mono text-sm transition-all duration-200"
                style={{
                  borderColor:
                    data.quantity === q
                      ? "var(--color-cyan)"
                      : "color-mix(in oklch, var(--color-ink) 15%, transparent)",
                  backgroundColor:
                    data.quantity === q ? "var(--color-cyan)" : "white",
                  color: data.quantity === q ? "white" : "var(--color-ink)",
                }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Size (only for relevant services) */}
        {NEEDS_SIZE.has(data.serviceId) && (
          <div>
            <label
              htmlFor="quote-size"
              className="font-mono text-xs uppercase tracking-widest block mb-2"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Medidas / Formato
            </label>
            <input
              id="quote-size"
              type="text"
              value={data.size}
              onChange={(e) => onChange({ size: e.target.value })}
              placeholder="Ej: 2m × 1m, A4, A3, personalizado…"
              className="w-full border rounded-md px-4 py-3 font-sans text-sm outline-none transition-colors"
              style={{
                borderColor:
                  "color-mix(in oklch, var(--color-ink) 15%, transparent)",
                color: "var(--color-ink)",
                backgroundColor: "white",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-cyan)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  "color-mix(in oklch, var(--color-ink) 15%, transparent)")
              }
            />
          </div>
        )}

        {/* Has design */}
        <div>
          <label
            className="font-mono text-xs uppercase tracking-widest block mb-3"
            style={{ color: "var(--color-ink-soft)" }}
          >
            ¿Tenés diseño listo?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                { val: true, label: "Sí, tengo arte final" },
                { val: false, label: "No, necesito diseño" },
              ] as const
            ).map((opt) => (
              <button
                key={String(opt.val)}
                type="button"
                onClick={() => onChange({ hasDesign: opt.val })}
                className="px-4 py-2.5 rounded border font-sans text-sm transition-all duration-200"
                style={{
                  borderColor:
                    data.hasDesign === opt.val
                      ? "var(--color-cyan)"
                      : "color-mix(in oklch, var(--color-ink) 15%, transparent)",
                  backgroundColor:
                    data.hasDesign === opt.val ? "var(--color-cyan)" : "white",
                  color:
                    data.hasDesign === opt.val ? "white" : "var(--color-ink)",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Urgency */}
        <div>
          <label
            className="font-mono text-xs uppercase tracking-widest block mb-3"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Plazo
          </label>
          <div className="grid grid-cols-3 gap-2">
            {URGENCY_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChange({ urgency: opt.id })}
                className="px-3 py-2.5 rounded border text-center transition-all duration-200"
                style={{
                  borderColor:
                    data.urgency === opt.id
                      ? "var(--color-ink)"
                      : "color-mix(in oklch, var(--color-ink) 15%, transparent)",
                  backgroundColor:
                    data.urgency === opt.id ? "var(--color-ink)" : "white",
                }}
              >
                <span
                  className="font-display font-bold text-sm block"
                  style={{
                    color:
                      data.urgency === opt.id
                        ? "var(--color-paper)"
                        : "var(--color-ink)",
                  }}
                >
                  {opt.label}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{
                    color:
                      data.urgency === opt.id
                        ? "color-mix(in oklch, var(--color-paper) 65%, transparent)"
                        : "var(--color-ink-soft)",
                  }}
                >
                  {opt.sub}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </SlideStep>
  );
}

// ─── Step 3 — Contact + summary ───────────────────────────────────────────────

type Step3Props = {
  data: QuoteData;
  onChange: (patch: Partial<QuoteData>) => void;
};

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span
        className="font-mono text-xs shrink-0"
        style={{ color: "var(--color-ink-soft)" }}
      >
        {label}
      </span>
      <span
        className="font-sans text-sm font-medium text-right"
        style={{ color: "var(--color-ink)" }}
      >
        {value}
      </span>
    </div>
  );
}

function Step3({ data, onChange }: Step3Props) {
  const selectedSvc = SERVICES.find((s) => s.id === data.serviceId);
  const urgencyLabel = URGENCY_OPTIONS.find((u) => u.id === data.urgency)?.label;

  const inputClass =
    "w-full border rounded-md px-4 py-3 font-sans text-sm outline-none transition-colors";
  const inputStyle = {
    borderColor: "color-mix(in oklch, var(--color-ink) 15%, transparent)",
    color: "var(--color-ink)",
    backgroundColor: "white",
  };
  const focusIn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "var(--color-cyan)");
  const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor =
      "color-mix(in oklch, var(--color-ink) 15%, transparent)");

  return (
    <SlideStep>
      <p
        className="font-mono text-xs uppercase tracking-widest mb-1"
        style={{ color: "var(--color-cyan)" }}
      >
        Paso 03
      </p>
      <h3
        className="font-display text-2xl font-bold mb-1"
        style={{ color: "var(--color-ink)" }}
      >
        Tus datos
      </h3>
      <p
        className="font-sans text-sm mb-7"
        style={{ color: "var(--color-ink-soft)" }}
      >
        Así te contactamos con la cotización.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Fields */}
        <div className="space-y-5">
          <div>
            <label
              htmlFor="quote-name"
              className="font-mono text-xs uppercase tracking-widest block mb-2"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Nombre *
            </label>
            <input
              id="quote-name"
              type="text"
              value={data.name}
              onChange={(e) => onChange({ name: e.target.value })}
              placeholder="Tu nombre o empresa"
              className={inputClass}
              style={inputStyle}
              onFocus={focusIn}
              onBlur={focusOut}
            />
          </div>
          <div>
            <label
              htmlFor="quote-phone"
              className="font-mono text-xs uppercase tracking-widest block mb-2"
              style={{ color: "var(--color-ink-soft)" }}
            >
              WhatsApp / Teléfono
            </label>
            <input
              id="quote-phone"
              type="tel"
              value={data.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              placeholder="+56 9 XXXX XXXX"
              className={inputClass}
              style={inputStyle}
              onFocus={focusIn}
              onBlur={focusOut}
            />
          </div>
          <div>
            <label
              htmlFor="quote-notes"
              className="font-mono text-xs uppercase tracking-widest block mb-2"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Detalles adicionales
            </label>
            <textarea
              id="quote-notes"
              value={data.notes}
              onChange={(e) => onChange({ notes: e.target.value })}
              placeholder="Material, colores especiales, acabados, referencias…"
              rows={4}
              className="w-full border rounded-md px-4 py-3 font-sans text-sm outline-none transition-colors resize-none"
              style={inputStyle}
              onFocus={focusIn}
              onBlur={focusOut}
            />
          </div>
        </div>

        {/* Summary */}
        <div
          className="rounded-lg p-5 h-fit space-y-3"
          style={{ backgroundColor: "var(--color-paper-muted)" }}
        >
          <p
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Resumen de tu consulta
          </p>
          <div
            className="border-t pt-3 space-y-2.5"
            style={{
              borderColor:
                "color-mix(in oklch, var(--color-ink) 10%, transparent)",
            }}
          >
            {selectedSvc && (
              <SummaryRow label="Producto" value={selectedSvc.title} />
            )}
            {data.quantity && (
              <SummaryRow label="Cantidad" value={data.quantity} />
            )}
            {NEEDS_SIZE.has(data.serviceId) && data.size && (
              <SummaryRow label="Medidas" value={data.size} />
            )}
            {data.hasDesign !== null && (
              <SummaryRow
                label="Diseño"
                value={data.hasDesign ? "Tengo arte final" : "Necesito diseño"}
              />
            )}
            {urgencyLabel && (
              <SummaryRow label="Plazo" value={urgencyLabel} />
            )}
          </div>
          <p
            className="font-sans text-xs pt-1 leading-relaxed"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Al enviar, WhatsApp se abrirá con este mensaje prellenado. Respondemos el mismo día.
          </p>
        </div>
      </div>
    </SlideStep>
  );
}

// ─── Success state ────────────────────────────────────────────────────────────

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-14"
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ backgroundColor: "var(--color-cyan)" }}
      >
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
          <path
            d="M2 9l7 7L22 2"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3
        className="font-display text-2xl font-bold mb-2"
        style={{ color: "var(--color-ink)" }}
      >
        ¡Consulta enviada!
      </h3>
      <p
        className="font-sans text-sm mb-8 mx-auto"
        style={{ color: "var(--color-ink-soft)", maxWidth: "34ch" }}
      >
        WhatsApp se abrió con tu mensaje listo. Respondemos en el día, en horario de atención.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="font-mono text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
        style={{ color: "var(--color-cyan)" }}
      >
        Hacer otra consulta
      </button>
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuoteData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const patch = (p: Partial<QuoteData>) => setData((d) => ({ ...d, ...p }));

  const canProceed =
    [
      data.serviceId !== "",
      data.quantity !== "",
      data.name.trim() !== "",
    ][step] ?? false;

  function handleSubmit() {
    window.open(buildWhatsAppURL(data), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function handleReset() {
    setStep(0);
    setData(EMPTY);
    setSubmitted(false);
  }

  return (
    <section id="cotizar" className="py-[var(--spacing-section)] bg-paper">
      <div className="mx-auto px-6 lg:px-8 max-w-4xl">
        {/* Section header */}
        <div className="mb-12">
          <div
            className="w-8 h-0.5 mb-4"
            style={{ backgroundColor: "var(--color-magenta)" }}
          />
          <p
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{ color: "var(--color-magenta)" }}
          >
            Cotizaciones — Imprenta 1177
          </p>
          <h2
            className="font-display font-bold leading-tight mb-3"
            style={{
              fontSize: "var(--text-3xl)",
              color: "var(--color-ink)",
            }}
          >
            Cotizá tu{" "}
            <span style={{ color: "var(--color-cyan)" }}>
              trabajo de impresión
            </span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-ink-soft)",
              maxWidth: "40ch",
            }}
          >
            Tres pasos y tu consulta llega directo a nuestro WhatsApp. Respondemos el mismo día.
          </p>
        </div>

        {/* Form card */}
        <div
          className="rounded-[var(--radius-lg)] overflow-hidden"
          style={{
            border:
              "1px solid color-mix(in oklch, var(--color-ink) 10%, transparent)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {!submitted && <ProgressBar step={step} total={3} />}

          <div className="p-7 lg:p-10 bg-white">
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessState key="success" onReset={handleReset} />
              ) : step === 0 ? (
                <Step1
                  key="step1"
                  value={data.serviceId}
                  onSelect={(id, name) =>
                    patch({ serviceId: id, serviceName: name })
                  }
                />
              ) : step === 1 ? (
                <Step2 key="step2" data={data} onChange={patch} />
              ) : (
                <Step3 key="step3" data={data} onChange={patch} />
              )}
            </AnimatePresence>
          </div>

          {!submitted && (
            <div
              className="px-7 lg:px-10 py-4 flex items-center justify-between bg-paper border-t"
              style={{
                borderColor:
                  "color-mix(in oklch, var(--color-ink) 10%, transparent)",
              }}
            >
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
                style={{
                  color: "var(--color-ink-soft)",
                  opacity: step === 0 ? 0 : 1,
                  pointerEvents: step === 0 ? "none" : "auto",
                }}
              >
                ← Anterior
              </button>

              {step < 2 ? (
                <motion.button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed}
                  whileHover={canProceed ? { scale: 1.02 } : {}}
                  whileTap={canProceed ? { scale: 0.97 } : {}}
                  className="px-6 py-2.5 font-display font-bold text-sm rounded-md transition-colors"
                  style={{
                    backgroundColor: canProceed
                      ? "var(--color-ink)"
                      : "color-mix(in oklch, var(--color-ink) 22%, transparent)",
                    color: "var(--color-paper)",
                    cursor: canProceed ? "pointer" : "not-allowed",
                  }}
                >
                  Siguiente →
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canProceed}
                  whileHover={canProceed ? { scale: 1.02 } : {}}
                  whileTap={canProceed ? { scale: 0.97 } : {}}
                  className="px-6 py-2.5 font-display font-bold text-sm rounded-md flex items-center gap-2 transition-colors"
                  style={{
                    backgroundColor: canProceed
                      ? "var(--color-magenta)"
                      : "color-mix(in oklch, var(--color-ink) 22%, transparent)",
                    color: "var(--color-paper)",
                    cursor: canProceed ? "pointer" : "not-allowed",
                  }}
                >
                  <WhatsAppIcon />
                  Enviar por WhatsApp
                </motion.button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
