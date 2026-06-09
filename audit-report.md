# Audit Report — Imprenta 1177
URL: https://www.imprenta1177.cl/
Fecha: 2026-06-08

---

## Resumen ejecutivo

| Dimensión | Score |
|---|---|
| **Score estético** | 16/70 |
| **Score conversión** | 3/10 |
| **Score técnico** | ~4/10 (estimado sin Lighthouse) |
| **Recomendación** | Rediseño total — el sitio actual no comunica la experiencia de 18 años ni la calidad del trabajo |

El problema central: una imprenta vive de demostrar que sabe de diseño. Un sitio plano y genérico cancela esa señal de calidad justo en el momento en que el cliente potencial evalúa si contratar.

---

## Hallazgos críticos (top 5)

1. **No hay prueba social visible.** 18 años de trayectoria, decenas de clientes, y el sitio no muestra ningún número, testimonio ni logo de cliente. OK Se Imprime (competidor con solo 8 años) tiene sus métricas clave en portada: 783 carpetas de clientes, 1000+ diseños. Imprenta 1177 tiene el doble de experiencia y no lo comunica.

2. **Propuesta de valor vaga y enterrada.** El tagline "Soluciones Gráficas Express Valparaíso" y la frase "Por más de 18 años..." aparecen dentro del texto corrido, no como headline de impacto. El visitante no capta en 5 segundos qué los hace distintos.

3. **Arquitectura de una sola página plana sin jerarquía.** Las secciones son anclas (las URLs `/servicios` y `/nosotros` devuelven 404). El diseño trata todos los servicios con el mismo peso visual — formularios, gigantografías, etiquetas y diseño web todos al mismo nivel. Sin bento, sin categorización por uso.

4. **Cero micro-interacciones y cero animaciones.** El sitio no respira. No hay hover states diseñados, no hay scroll triggers, no hay un solo elemento que transmita energía y calidad de producción. Contrasta dramáticamente con lo que la imprenta produce físicamente.

5. **No comunica la ubicación como ventaja.** Plaza Aníbal Pinto 1177 es una dirección emblemática en el corazón de Valparaíso. El sitio la lista como dato de contacto, no como señal de arraigo y accesibilidad.

---

## Diagnóstico estético (scorecard 1-10)

| Dimensión | Score | Observación |
|---|---|---|
| Jerarquía visual | 2/10 | No se sabe en 3s cuál es el mensaje principal ni qué hacer |
| Tipografía | 2/10 | Fuentes web-safe genéricas (probablemente Arial/Verdana), sin contraste display/body, sin fuente premium |
| Paleta de colores | 2/10 | Azul corporativo + blanco + gris: la paleta por defecto de cualquier plantilla |
| Spacing | 3/10 | Cramped en mobile, sin ritmo vertical consistente, secciones pegadas sin aire |
| Motion | 1/10 | Prácticamente ninguna animación; máximo un hover básico en botones |
| Imagery | 3/10 | Existen 6 categorías de portfolio (thumbnails), pero sin tratamiento editorial ni jerarquía visual |
| Visual detail | 2/10 | Sin bordes intencionales, sombras por defecto, gradientes ausentes |

**Total estético: 15/70** (umbral de rediseño total: < 35)

---

## Diagnóstico de conversión

- **CTA primario:** Existe (WhatsApp), pero compite con otros links y no está estilizado para destacar
- **Cantidad de CTAs:** Múltiples links de navegación + WhatsApp + Instagram + Email — demasiadas opciones sin jerarquía clara
- **Prueba social:** NINGUNA arriba del fold (ni abajo)
- **Propuesta de valor:** No se entiende en 5s qué ofrecen de distinto
- **Trust signals:** Los 18 años se mencionan en párrafo de nosotros, no en el hero
- **Mobile:** La conversión por WhatsApp funciona en mobile, pero el CTA no es sticky ni prominente
- **FAQ / Objeciones:** No existe sección de preguntas frecuentes

---

## Benchmark competitivo

| | **Imprenta 1177** | **OK Se Imprime** | **GSR** | **impresion.cl** |
|---|---|---|---|---|
| **Años de experiencia** | 18 años (no comunicados) | 8 años (prominentes) | — | No indicado |
| **Propuesta de valor** | "Soluciones Gráficas Express" | SMEs en crecimiento, región Valparaíso | "Compromiso eficiente" | Imprenta + merchandising |
| **CTA principal** | WhatsApp (funcional) | Contacto + WhatsApp | Contacto info básico | E-commerce + WhatsApp |
| **Prueba social visible** | ❌ Ninguna | ✅ Métricas (783 clientes, 1000+ diseños) | ❌ Ninguna | ⚠️ Mínima (1 review) |
| **Score visual (1-10)** | 2 | 5 | 2 | 5 |
| **Portfolio** | Thumbnails sin jerarquía | Galería por categoría | No visible | Por producto |
| **Diferenciador** | Ubicación céntrica (no comunicada) | "Para empresas en crecimiento" | Offset technology | Merchandising integrado |

### Oportunidades de diferenciación

1. **Imprenta 1177 ya gana en antigüedad pero no lo comunica.** 18 años > 8 años de OK Se Imprime. Con cifras prominentes ("18 años", "cientos de clientes en Valparaíso"), la balanza se inclina.

2. **La ubicación es un activo real.** Nadie en el sector dice "estamos en el corazón de Valparaíso, venimos a buscar o llevas en 5 minutos". Ese servicio de proximidad y rapidez express es un diferenciador poderoso.

3. **No replicar:** el modelo e-commerce de impresion.cl es complejo y no se alinea con el servicio personalizado de Imprenta 1177. Tampoco replicar el "WordPress moderno funcional" de OK Se Imprime — hay que ir claramente por encima en calidad visual.

---

## Stack actual detectado

- Sitio web: aparentemente HTML/CSS estático o plantilla básica
- Una sola página con anclas de navegación (no rutas reales)
- No se detecta CMS ni framework moderno
- Imágenes sin optimización aparente (no hay evidencia de WebP)

---

## Plan recomendado para Fase 2

**Dirección visual:** Editorial/Print-craft con acentos CMYK o Swiss/International.

Razón: la imprenta necesita una identidad que diga "somos profesionales del diseño" desde el primer pixel. Las direcciones que mejor lo logran son:

1. **Editorial/Print-craft con acentos CMYK** *(recomendada)* — tipografía display con carácter, texturas de papel, colores cian/magenta/amarillo como acentos (los colores físicos de la impresión), marcas de registro como micro-detalle decorativo. Celebra el oficio.
2. **Bold/Expresivo** — titulares enormes en tipografía condensada, alto contraste, energía que entra fuerte.
3. **Swiss/International** — grilla estricta, grotesca fuerte, bloques de color: autoridad de estudio gráfico europeo.

Las tres son coherentes con el sector y están muy por encima del nivel visual actual. La elección final la hace el cliente en Fase 2.
