import Link from "next/link";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-ink border-t border-paper/10 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-xl text-paper mb-2">
              Imprenta <span className="text-cyan">1177</span>
            </p>
            <p className="font-sans text-sm text-paper/50 leading-relaxed">
              {CONTACT.address}
              <br />
              {CONTACT.city}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-cyan mb-4">
              Navegar
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-paper/50 hover:text-paper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-cyan mb-4">
              Contacto
            </p>
            <div className="space-y-1.5">
              <p className="font-sans text-sm text-paper/50">
                <a
                  href={`tel:${CONTACT.phone.replace(/[\s]/g, "")}`}
                  className="hover:text-paper transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p className="font-sans text-sm text-paper/50">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-paper transition-colors"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p className="font-sans text-sm text-paper/50">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan transition-colors"
                >
                  WhatsApp →
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-paper/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-paper/30 uppercase tracking-widest">
            © 2026 Imprenta 1177 · Valparaíso
          </p>
          <p className="font-mono text-[10px] text-paper/20 uppercase tracking-widest">
            Diseño · Impresión · 18 años
          </p>
        </div>
      </div>
    </footer>
  );
}
