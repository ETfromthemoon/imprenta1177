export const WHATSAPP_NUMBER = "56322236726";
export const WHATSAPP_MESSAGE = "Hola%2C%20quiero%20cotizar%20un%20impreso";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const CONTACT = {
  phone: "+56 32 223 67 26",
  phoneDesign: "(32) 223 26 69",
  email: "imprenta1177@gmail.com",
  address: "Plaza Aníbal Pinto 1177, 2do Piso, Oficina 1",
  city: "Valparaíso",
};

export const HOURS = [
  { days: "Lunes · Martes · Viernes", time: "09:00 – 17:30" },
  { days: "Miércoles · Jueves", time: "09:00 – 18:30" },
];

type Metric = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
};

export const METRICS: readonly Metric[] = [
  { value: 18, suffix: "", label: "años en el rubro" },
  { value: 7, suffix: "+", prefix: "", label: "líneas de productos" },
  { value: 1, suffix: "", label: "lugar — en el centro" },
];

type Service = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  size: "large" | "medium" | "small";
  accentColor: "cyan" | "magenta" | "yellow";
};

export const SERVICES: readonly Service[] = [
  {
    id: "gigantografias",
    title: "Gigantografías y plotter",
    description:
      "Pendones, letreros, cajas de luz, rotulado de vehículos. Si lo ves grande en la calle, probablemente pasó por aquí.",
    emoji: "🖼",
    size: "large",
    accentColor: "cyan",
  },
  {
    id: "papeleria",
    title: "Papelería corporativa",
    description:
      "Tarjetas de presentación, hojas membretadas, carpetas y timbres. Lo que dice quién eres antes de abrir la boca.",
    emoji: "📋",
    size: "medium",
    accentColor: "magenta",
  },
  {
    id: "formularios",
    title: "Formularios papel químico",
    description:
      "Boletas, facturas, guías de despacho, órdenes de compra. Los formularios que tu negocio necesita para operar.",
    emoji: "🧾",
    size: "medium",
    accentColor: "cyan",
  },
  {
    id: "diseno",
    title: "Diseño gráfico",
    description:
      "¿No tienes el archivo? Lo diseñamos nosotros. Logotipos, imagen corporativa, diseño de piezas. Desde cero o partiendo de lo que tienes.",
    emoji: "✏️",
    size: "medium",
    accentColor: "yellow",
  },
  {
    id: "folletos",
    title: "Folletos y afiches",
    description:
      "Trípticos, flyers, postales, afiches. El material impreso que reparte tu mensaje donde tú no puedes estar.",
    emoji: "📰",
    size: "small",
    accentColor: "magenta",
  },
  {
    id: "etiquetas",
    title: "Etiquetas y adhesivos",
    description:
      "Etiquetas autoadhesivas, vinilos, adhesivos. Para productos, equipos, locales o vehículos.",
    emoji: "🏷",
    size: "small",
    accentColor: "cyan",
  },
  {
    id: "eventos",
    title: "Eventos",
    description:
      "Pulseras, invitaciones, diplomas. Que cada evento tenga impresos a la altura.",
    emoji: "🎉",
    size: "small",
    accentColor: "yellow",
  },
];

export const GALLERY_CATEGORIES = [
  { id: "timbres", label: "Timbres", placeholder: "/images/gallery/timbres.webp" },
  { id: "pendones", label: "Pendones", placeholder: "/images/gallery/pendones.webp" },
  { id: "adhesivos", label: "Adhesivos", placeholder: "/images/gallery/adhesivos.webp" },
  { id: "grafica", label: "Gráfica", placeholder: "/images/gallery/grafica.webp" },
  { id: "tarjetas", label: "Tarjetas", placeholder: "/images/gallery/tarjetas.webp" },
  { id: "papeleria", label: "Papelería", placeholder: "/images/gallery/papeleria.webp" },
];

export const STEPS = [
  {
    num: "01",
    title: "Nos escribes por WhatsApp",
    description:
      "Cuéntanos qué necesitas. Si no tienes claro, te preguntamos nosotros.",
  },
  {
    num: "02",
    title: "Cotizamos al instante",
    description:
      "Sin esperar días. Te damos precio y plazo en la misma conversación.",
  },
  {
    num: "03",
    title: "Diseñamos o ajustamos el archivo",
    description: "Si no tienes el arte listo, lo hacemos por ti.",
  },
  {
    num: "04",
    title: "Imprimes y retiras",
    description:
      "Listo en el plazo acordado. Pasas por Plaza Aníbal Pinto o coordinamos envío.",
  },
];
