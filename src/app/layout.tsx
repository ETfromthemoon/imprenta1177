import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imprenta 1177 — Impresión express en el corazón de Valparaíso",
  description:
    "18 años imprimiendo Valparaíso. Tarjetas, gigantografías, folletos, formularios, diseño gráfico y mucho más. Plaza Aníbal Pinto 1177, 2do Piso.",
  keywords: "imprenta, Valparaíso, gigantografías, tarjetas de presentación, folletos, diseño gráfico, impresión express",
  openGraph: {
    title: "Imprenta 1177 — Valparaíso",
    description:
      "18 años imprimiendo Valparaíso. Lo hacemos rápido, lo hacemos bien.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
