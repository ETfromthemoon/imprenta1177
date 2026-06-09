# Imprenta 1177 — Landing Premium

Landing page de [Imprenta 1177](https://www.imprenta1177.cl/), ubicada en Plaza Aníbal Pinto 1177, 2º piso, Valparaíso. Rediseño completo desde el sitio original a una experiencia editorial CMYK de alta gama.

**Sitio en producción:** https://imprenta1177.vercel.app

---

## Correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Republicar en Vercel

Cada `git push` a `master` dispara un deploy automático (integración GitHub ↔ Vercel activa).

Para deploy manual desde la línea de comandos:

```bash
npx vercel --prod
```

## Stack

- **Next.js 15** (App Router, static generation)
- **Tailwind CSS v4** con tokens CMYK en `oklch`
- **motion/react** para animaciones (blur-to-focus, aurora, counters, reveals)
- **Space Grotesk** + **Inter** + **JetBrains Mono**
- Deploy en **Vercel**

## Estructura

```
src/
├── app/
│   ├── globals.css       # Tokens CMYK + keyframes aurora
│   ├── layout.tsx        # MotionConfig reducedMotion="user"
│   └── page.tsx          # Composición de secciones
├── components/
│   ├── animations/       # Aurora, SplitText, Spotlight, Magnetic, etc.
│   ├── sections/         # Hero, StatsBar, Services, Gallery, …
│   └── ui/               # Button, Sheet (shadcn/ui)
└── lib/
    └── constants.ts      # Datos reales: teléfonos, horarios, métricas
```

## Galería — reemplazar placeholders

Las tarjetas de galería usan degradados CSS como placeholders. Para agregar fotos reales:

1. Optimizar imágenes a **WebP ≤ 500 KB** (`sharp` recomendado)
2. Colocar en `public/gallery/`
3. En `src/components/sections/Gallery.tsx`, reemplazar el `div` de placeholder por `<Image>` de Next.js con `width` y `height` explícitos

## Contacto y datos

Los datos de contacto, horarios y métricas están centralizados en [`src/lib/constants.ts`](src/lib/constants.ts). Editar ahí para actualizar en toda la página.
