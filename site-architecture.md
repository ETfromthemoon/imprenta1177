# Site Architecture — Imprenta 1177
Objetivo primario: **Que el visitante escriba por WhatsApp para cotizar**
CTA primario: "Escríbenos por WhatsApp" → `https://wa.me/56322236726?text=Hola%2C%20quiero%20cotizar%20un%20impreso`

---

## Estructura de la página (orden secuencial)

---

### 1. Nav

- Logo: "Imprenta 1177" (tipografía Space Grotesk, sin imagen adicional)
- Links: Servicios · Trabajos · Contacto (anclas)
- CTA nav: "Cotizar" → botón pequeño en magenta
- Mobile: hamburger con drawer lateral
- Sticky con blur de fondo al hacer scroll

---

### 2. Hero (above the fold)

**Eyebrow:**
> 18 años en el corazón de Valparaíso

**Headline (2 líneas):**
```
Tu imprenta
en el centro de Valparaíso
```
*(Subrayado SVG en amarillo sobre "centro")*

**Subhead:**
> Tarjetas, folletos, gigantografías, formularios y mucho más. Lo hacemos rápido, lo hacemos bien, y puedes retirarlo a pasos de la Plaza Aníbal Pinto.

**CTA primario:**
> Escríbenos por WhatsApp

**Trust badges (3 pills bajo el CTA):**
- ⚡ Entrega express
- 📍 Plaza Aníbal Pinto
- ✓ Diseño incluido

**Visual:** Aurora de blobs en gama Cyan + Spotlight cursor. Fondo Paper.

---

### 3. Barra de confianza (stats)

Fondo ink (azul profundo). Tres cifras animadas en crema/blanco:

| Cifra | Descripción |
|---|---|
| **18** | Años en el rubro |
| **+7** | Líneas de productos |
| **1** | Lugar. En el centro. |

*Texto bajo las cifras en JetBrains Mono, uppercase, tracking widest.*

---

### 4. Servicios

**Intro:**
> Lo que necesitas para que tu empresa se vea profesional — todo en un solo lugar.

**Bento grid con 7 tarjetas** (algunas grandes, otras pequeñas para jerarquía):

1. **Gigantografías y plotter** *(tarjeta grande, hero de la sección)*
   > Pendones, letreros, cajas de luz, rotulado de vehículos. Si lo ves grande en la calle, probablemente pasó por aquí.
   
2. **Papelería corporativa**
   > Tarjetas de presentación, hojas membretadas, carpetas y timbres. Lo que dice quién eres antes de abrir la boca.

3. **Formularios papel químico**
   > Boletas, facturas, guías de despacho, órdenes de compra. Los formularios que tu negocio necesita para operar, listos para usar.

4. **Diseño gráfico**
   > ¿No tienes el archivo? Lo diseñamos nosotros. Logotipos, imagen corporativa, diseño de piezas. Desde cero o partiendo de lo que tienes.

5. **Folletos y afiches**
   > Trípticos, flyers, postales, afiches. El material impreso que reparte tu mensaje donde tú no puedes estar.

6. **Etiquetas y adhesivos**
   > Etiquetas autoadhesivas, vinilos, adhesivos. Para productos, equipos, locales o vehículos.

7. **Eventos**
   > Pulseras, invitaciones, diplomas. Que cada evento tenga impresos a la altura.

**CTA al final de la sección:**
> ¿No ves lo que necesitas? Escríbenos — si se puede imprimir, lo hacemos.
> [Cotizar por WhatsApp]

---

### 5. Galería de trabajos

**Intro:**
> Así quedan los trabajos. Lo que ves es lo que hacemos.

**Grid de 6 categorías con placeholder WebP:**
- Timbres
- Pendones
- Adhesivos
- Gráfica
- Tarjetas
- Papelería

*Nota para el cliente: reemplaza las imágenes de marcador de posición con fotos reales de tus trabajos.*

**Hover:** overlay cyan semitransparente + etiqueta de categoría.

---

### 6. Cómo trabajamos

**Título:**
> Del WhatsApp al impreso en tu mano

**Stepper de 4 pasos:**

1. **Nos escribes por WhatsApp** — Cuéntanos qué necesitas. Si no tienes claro, te preguntamos nosotros.
2. **Cotizamos al instante** — Sin esperar días. Te damos precio y plazo en la misma conversación.
3. **Diseñamos o ajustamos el archivo** — Si no tienes el arte listo, lo hacemos por ti.
4. **Imprimes y retiras** — Listo en el plazo acordado. Pasas por Plaza Aníbal Pinto o coordinamos envío.

**CTA:**
> [Empezar ahora →]

---

### 7. Sobre nosotros

**Título:**
> 18 años imprimiendo Valparaíso

**Cuerpo:**
> Desde el año 2006, la imprenta en Plaza Aníbal Pinto 1177 es la misma: rápida, de confianza, y con ganas de que tu empresa se vea bien.
>
> Hemos hecho tarjetas para el kiosco de la esquina y folletos para empresas con varias sedes. Trabajamos con pequeños negocios, con eventos familiares y con empresas que necesitan cantidad. Lo que no cambia es la calidad ni la atención.
>
> Si tienes una duda antes de encargar, llámanos o escríbenos. No hace falta que vengas con todo resuelto.

**Datos de contacto integrados:**
- 📍 Plaza Aníbal Pinto 1177, 2do Piso, Oficina 1, Valparaíso
- 📞 +56 32 223 67 26 (Central / WhatsApp)
- 🎨 (32) 223 26 69 (Línea diseño)
- ✉ imprenta1177@gmail.com

---

### 8. Horarios y ubicación

**Título:**
> Estamos aquí

**Grid 2 col (desktop) / stack (mobile):**

**Columna izq — Horarios (en JetBrains Mono):**
```
Lunes · Martes · Viernes     09:00 – 17:30
Miércoles · Jueves           09:00 – 18:30
Sábado                       Cerrado
Domingo                      Cerrado
```

**Columna der — Mapa Google Maps embebido:**
Plaza Aníbal Pinto 1177, Valparaíso

---

### 9. CTA final

Fondo ink (azul profundo). Copy en blanco/crema.

**Headline:**
> ¿Necesitas algo impreso?

**Subhead:**
> Escríbenos ahora y te cotizamos al instante. Sin formularios, sin esperas.

**CTA (Magnetic, tamaño grande):**
> Escríbenos por WhatsApp →

---

### 10. Footer

- Logo
- Instagram (enlace externo)
- Email: imprenta1177@gmail.com
- Dirección: Plaza Aníbal Pinto 1177, Valparaíso
- © Imprenta 1177

---

## Componentes por sección

| Sección | Magic UI / shadcn | Custom |
|---|---|---|
| Nav | shadcn Sheet (mobile) | sticky + blur |
| Hero | ShimmerButton (CTA), BlurFade | SplitText, Aurora, Spotlight, MarkerHighlight, Magnetic, ScrollHint |
| Stats | NumberTicker (patched) | RevealOnScroll |
| Servicios | BentoGrid (Magic UI) | borde-left color-coded |
| Galería | — | grid 3-col, hover overlay |
| Cómo trabajamos | — | stepper custom |
| Footer | — | simple |

---

## Notas de copy

- Tono: cercano, directo, chileno. Tuteo.
- Sin: "soluciones", "transforma", "potencia", "innovación", "de calidad superior"
- Con: nombres concretos de productos, tiempos reales, lugar real
- CTA texto siempre con verbo: "Escríbenos", "Cotizar", "Empezar ahora"
- La palabra "express" del nombre se usa solo si encaja — no forzar
