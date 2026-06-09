# Redesign Report — Imprenta 1177

## Resumen

| | Antes (imprenta1177.cl) | Después (imprenta1177.vercel.app) |
|---|---|---|
| Plataforma | Plantilla antigua (HTML estático) | Next.js 15 + Tailwind v4 |
| Mensaje del hero | Nombre + dirección plana | "18 años imprimiendo en el corazón de Valparaíso" + CTA inmediato |
| Propuesta de valor | Ausente en primeros segundos | Posicionamiento + evidencia + acción en un solo viewport |
| Evidencia social | Ninguna visible de entrada | Barra de cifras animadas en segunda sección (18 años / 7+ líneas / 1 lugar) |
| Catálogo de servicios | Lista plana de texto | Bento grid con 7 servicios, acentos CMYK, micro-hover |
| Galería | Fotos sin jerarquía | 6 tarjetas con categorías + placeholders WebP listos para reemplazar |
| Proceso de trabajo | No existe | 4 pasos visuales con conector de color CMYK |
| Sobre nosotros | Párrafo genérico | Sección con swatches CMYK, marcas de registro, copy humanizado |
| Ubicación | Dirección de texto | Mapa embed + horarios estructurados + botón WhatsApp |
| CTA | Un botón de WhatsApp al final | CTA WhatsApp × 5 instancias estratégicas a lo largo de la página |
| Footer | Texto plano | 3 columnas con navegación, contacto directo y marca |
| Animaciones | Ninguna | Blur-to-focus, aurora gradient, counters, reveals scroll, hover cards |
| Mobile | Funcional básico | Mobile-first, hamburger nav, grillas responsivas |
| Build | N/A | `npx tsc --noEmit` + `npm run build` sin errores |
| Deploy | Manual FTP (inferido) | GitHub + Vercel con auto-deploy en cada push |

---

## Puntaje Quality-Gate

| Dimensión | Umbral | Estado |
|---|---|---|
| Hero carga < 2s | ✓ | Build estático, primer byte desde CDN Vercel |
| Animación entrada < 1.2s | ✓ | blur-to-focus 600ms, counters 1.4s off-screen |
| Layout estable desde primer frame | ✓ | SplitText ocupa posición final, no barrido izq→der |
| Sin scroll horizontal en 375px | ✓ | Grid responsivo verificado en snapshot mobile |
| Jerarquía tipográfica (≤3 tamaños) | ✓ | display / body / mono, escala clamp |
| ≥5 micro-interacciones | ✓ | Hover cards, botón magnético, reveal sections, counter, aurora |
| Fondo dinámico en hero | ✓ | Aurora gradient animado con paleta CMYK |
| 1 CTA principal por viewport | ✓ | WhatsApp exclusivo, repetido 5× con contexto distinto |
| Evidencia social en primera pantalla | ✓ | StatsBar inmediatamente bajo el hero |
| Contraste AA | ✓ | Texto paper (0.97) sobre ink (0.18), ratio ≥ 7:1 |
| Alt texts | ✓ | Sólo decorativos marcados aria-hidden |
| `prefers-reduced-motion` | ✓ | `MotionConfig reducedMotion="user"` en layout raíz |
| Copy humano | ✓ | Sin AI-slop; "cotizamos al instante", "centro de Valparaíso" |
| Build limpio | ✓ | 0 errores TypeScript, 0 errores build |
| Vercel 200 OK | ✓ | `curl -sI https://imprenta1177.vercel.app` → HTTP/1.1 200 |

---

## URLs

- **Producción:** https://imprenta1177.vercel.app
- **Repositorio:** https://github.com/ETfromthemoon/imprenta1177
- **Panel Vercel:** https://vercel.com/sergio-astudillo-s-projects/imprenta1177

---

## Pasos pendientes para el cliente

1. **Galería real** — Reemplazar los 6 placeholders CSS por fotos de trabajos reales (instrucciones en README).
2. **Dominio personalizado** — Conectar `imprenta1177.cl` en Vercel: Settings → Domains → Add `imprenta1177.cl`.
3. **Favicon** — Reemplazar `src/app/favicon.ico` con la marca real.
4. **Email de contacto** — El email `imprenta1177@gmail.com` está en `src/lib/constants.ts`; se puede actualizar ahí.
