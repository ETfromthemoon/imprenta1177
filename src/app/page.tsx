import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Imprenta 1177 — Valparaíso",
  description:
    "Imprenta express en el centro de Valparaíso. Tarjetas, folletos, gigantografías, formularios, diseño y más. 18 años en Plaza Aníbal Pinto.",
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Gallery />
        <HowWeWork />
        <About />
        <Contact />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
