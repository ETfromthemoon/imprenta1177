# Design Direction — Imprenta 1177
Dirección elegida: **CMYK Print-craft**
Fecha: 2026-06-08

---

## Por qué esta dirección convierte

Una imprenta no es un negocio cualquiera: su producto *es* el diseño. Cuando el sitio se ve genérico, el cliente inconscientemente concluye que el trabajo tampoco será especial.

La dirección CMYK Print-craft convierte porque hace exactamente lo contrario: usa los colores físicos del proceso de impresión (Cyan, Magenta, Amarillo, Negro) como identidad visual. El visitante reconoce el lenguaje, entiende que hay oficio real detrás, y confía antes de leer una sola línea.

El azul actual del sitio se convierte en el **Cyan** del proceso de impresión — coherencia total con la historia de la marca y un upgrade inmediato de genérico a específico.

---

## Paleta

| Color | Rol | oklch | Uso |
|---|---|---|---|
| **Cyan** (Ink Blue) | Principal | `oklch(0.52 0.18 222)` | Fondos de sección alternos, iconografía principal, links |
| **Magenta** | Acción/CTA | `oklch(0.52 0.26 0)` | Botones WhatsApp, highlights, hover states |
| **Amarillo** | Energía/Detalle | `oklch(0.90 0.19 102)` | Subrayados SVG, marcas de registro, acentos decorativos |
| **Ink** (Negro tinta) | Base tipográfica | `oklch(0.18 0.04 248)` | Texto principal, titulares sobre fondo claro |
| **Paper** | Fondo principal | `oklch(0.97 0.008 80)` | Background del sitio (crema cálido, no blanco frío) |
| **Paper Muted** | Fondo alternativo | `oklch(0.93 0.01 80)` | Secciones alternadas para ritmo visual |

---

## Tipografía

| Rol | Fuente | Peso |
|---|---|---|
| **Display / Titulares** | Space Grotesk | 700 (Bold), 500 (Medium) |
| **Cuerpo** | Inter | 400 (Regular), 500 (Medium) |
| **Etiquetas / Datos técnicos** | JetBrains Mono | 400 — para detalles como horarios, medidas, especificaciones |

**Por qué Space Grotesk:** tiene un trazo con personalidad (variaciones de grosor visibles, detalles geométricos) sin ser rígida. Comunica precisión técnica y calidez al mismo tiempo — exacto para una imprenta artesanal con 18 años.

---

## Elementos de identidad visual

- **Marcas de registro** (+) como detalle decorativo en corners de secciones (CSS puro, 1px)
- **Tramado CMYK** (patrón de puntos de halftoneen algunas secciones de fondo — sutil, no invasivo)
- **Subrayado SVG** (Marker Highlight en magenta o amarillo sobre la palabra clave del hero)
- **Bordure con detalle de color** en cards de servicios — un borde izquierdo de 3px en cyan o magenta según categoría
- **Tipografía mono** para horarios, medidas y specs técnicas — refuerza el lenguaje de taller

---

## Composición del Hero

- **Fondo:** Aurora de blobs en Cyan (#00B4D8 range) con 20% opacidad + Spotlight cursor
- **Eyebrow:** "18 años en Valparaíso" en JetBrains Mono, uppercase, tracking widest
- **Headline:** 2 líneas en Space Grotesk 700, tamaño hero (~6-7rem desktop)
  - Línea 1: "Tu imprenta"
  - Línea 2: "en el centro de Valparaíso" (con subrayado SVG en amarillo sobre "centro")
- **Subhead:** 1 línea en Inter 400 — copy directo sin AI-slop
- **CTA primario:** "Escríbenos por WhatsApp" — botón magnético en magenta
- **Stats:** 3 cifras con animación — "18 años", "7 tipos de impresión", "Horario ampliado"
- **Scroll hint:** línea vertical pulsante

---

## Secciones con su dirección visual

1. **Hero** — Fondo paper + Aurora cyan + Spotlight
2. **Barra confianza** — Fondo ink (azul profundo) + cifras en blanco/crema — contraste fuerte
3. **Servicios** — Fondo paper-muted + bento grid con borde-left cyan por categoría
4. **Galería** — Fondo paper + grid masonry 3 col (desktop) / 2 col (mobile), hover con overlay cyan semitransparente
5. **Cómo trabajamos** — Fondo paper + stepper horizontal en desktop, vertical en mobile
6. **Sobre nosotros** — Fondo paper + texto + mark de registro como detalle decorativo
7. **Contacto/Ubicación** — Fondo ink + info en crema — cierre de fuerza

---

## Micro-interacciones definidas (mínimo 5)

1. **Magnetic WhatsApp** — botón principal se desplaza ~20% hacia el cursor
2. **Hover en cards de servicio** — borde izquierdo pasa de cyan a magenta con transform translateX(-2px)
3. **Hover en galería** — overlay cyan fade in + icono de zoom en blanco
4. **Focus states** — ring de magenta en todos los elementos interactivos (accesibilidad + estética)
5. **Scroll reveal** — cada sección entra con fade+slide desde abajo (RevealOnScroll, once: true)
6. **Subrayado SVG** — pathLength 0→1 en la palabra clave del headline hero

---

## Anti-slop de esta dirección

- ❌ Gradiente morado→azul — reemplazado por Aurora en gama Cyan/Ink
- ❌ Fondo blanco frío #ffffff — reemplazado por Paper crema
- ❌ Grilla de 3 columnas uniformes para servicios — reemplazado por bento con jerarquía variable
- ❌ "Soluciones Gráficas Express" como headline — reemplazado por copy concreto
- ❌ Stock de personas en oficinas — la galería usa trabajos reales de la imprenta
