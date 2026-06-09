"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-paper transition-[border-color] duration-300 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-12 py-[15px]">
        {/* Wordmark */}
        <Link href="/" className="font-display font-bold text-[14px] tracking-tight leading-none">
          <span className="text-ink">Imprenta</span>
          <span className="text-cyan"> 1177</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-[14px] text-ink-soft hover:text-ink transition-colors hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Menú label + cyan mark */}
        <div className="hidden md:flex items-center gap-2">
          <span className="font-sans text-[14px] text-ink-soft">Menú</span>
          <span className="text-cyan font-bold text-base leading-none select-none" aria-hidden>‖</span>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex items-center gap-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-sm"
        >
          <span className="font-sans text-[14px]">Menú</span>
          <span className="text-cyan font-bold leading-none" aria-hidden>‖</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-paper border-t border-border px-6 sm:px-12 pb-8">
          <ul className="flex flex-col gap-5 pt-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-sans text-base text-ink hover:text-cyan transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
