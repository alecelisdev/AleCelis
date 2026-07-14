// Archivo central de configuración — edita aquí todos los textos del sitio

import imgDominga from "../assets/projects/terraza-dona-dominga.jpg";
import imgKinesioVital from "../assets/projects/kinesiovital.jpg";
import imgValeBeauty from "../assets/projects/vale-beauty-studio.jpg";

export const SITE = {
  name: "Ale Celis",
  tagline: "Tecnología que trabaja para tu negocio. Tú te dedicas a lo que importa.",
  whatsapp: "56966192139",
  whatsappMessage: "Hola, me interesa que me ayudes a mejorar mi negocio..",
  email: "alecelisdev@gmail.com",
  // TODO: reemplazar con URLs reales
  linkedin: "https://www.linkedin.com/in/alejandro-gonzalez-celis/",
  github: "https://github.com/alecelisdev",
  gtag: "G-Y07HGWZYB9",
};

export const NAV = {
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo trabajo", href: "#como-trabajo" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: "Hablemos",
};

export const HERO = {
  headline1: "Tu negocio puede trabajar mejor.",
  headline2: "No código. No herramientas. Resultados.",
  subheadline:
    "Desarrollo webs, automatizaciones e inteligencia artificial para negocios que necesitan crecer sin contratar más gente.",
  ctaPrimary: "Quiero resultados",
  ctaSecondary: "Ver proyectos",
};

export const SOCIAL_PROOF = {
  label: "Negocios que ya confían en este trabajo",
  logos: [
    { name: "Terraza Doña Dominga" },
    { name: "KinesioVital" },
    { name: "Vale Beauty Studio" },
  ],
};

export const SERVICES = {
  sectionTitle: "Lo que tu negocio gana",
  items: [
    {
      id: "presencia",
      icon: "monitor",
      title: "Tu negocio visible y vendiendo",
      description:
        "Diseño y desarrollo sitios web y tiendas online que aparecen en Google cuando te buscan y convierten visitas en clientes. No solo una página bonita — una herramienta que vende 24/7.",
      tags: ["Landing pages", "Portfolios", "Tiendas online", "Páginas corporativas"],
    },
    {
      id: "automatizacion",
      icon: "bot",
      title: "Menos tareas manuales. Más tiempo para lo que importa.",
      description:
        "Automatizo lo que te quita horas cada semana: responder WhatsApp, pasar datos de un sistema a otro, tareas repetitivas. Ese tiempo vuelve a ti y a tu equipo.",
      tags: ["Agente de WhatsApp con IA", "Automatización de procesos", "Creación de anuncios con IA"],
    },
    {
      id: "datos",
      icon: "chart",
      title: "Entiende tu negocio. Decide con información.",
      description:
        "Construyo paneles que te muestran en tiempo real qué está pasando en tu negocio: qué se vende, qué no, dónde se va la plata. Sin Excel. Sin adivinar.",
      tags: ["Dashboards de gestión", "Reportes automatizados", "KPIs en tiempo real"],
    },
  ],
};

export const HOW_I_WORK = {
  sectionTitle: "De conversación a resultados, en semanas",
  steps: [
    {
      number: "01",
      title: "Me cuentas tu problema",
      description:
        "No me expliques qué herramienta quieres. Cuéntame qué te está costando dinero o tiempo. Conversemos, sin costo, sin compromiso.",
    },
    {
      number: "02",
      title: "Te presento la solución",
      description:
        "Antes de que decidas algo, tienes sobre la mesa: qué se va a hacer, en cuánto tiempo y a qué precio fijo. Sin sorpresas. Si no tiene sentido para tu negocio, te lo digo antes.",
    },
    {
      number: "03",
      title: "Construimos juntos",
      description:
        "No desaparezco semanas. Cada pocos días ves el avance, opinas y ajustamos. Cuando lanzamos, ya sabías exactamente qué esperar.",
    },
    {
      number: "04",
      title: "Lanzamos y medimos",
      description:
        "El lanzamiento es el inicio, no el final. Revisamos qué funciona, qué hay que ajustar y cómo seguir escalando.",
    },
  ],
};

export const PROJECTS = {
  sectionTitle: "Casos reales. Puedes visitarlos.",
  ctaText: "¿Tu proyecto podría ser el próximo?",
  items: [
    {
      title: "Terraza Doña Dominga",
      category: "Web · Reservas online",
      description:
        "Restobar en Mallarauco con shows de artistas en vivo. Reservas, cartelera de eventos y venta de entradas, todo conectado a WhatsApp.",
      url: "https://doniadominga.vercel.app/",
      image: imgDominga,
    },
    {
      title: "KinesioVital",
      category: "Web · Salud",
      description:
        "Clínica de kinesiología y rehabilitación. Agendamiento de horas integrado y preguntas frecuentes que reducen consultas repetitivas por WhatsApp.",
      url: "https://alegonzalezcelis.github.io/Clinical-Web/",
      image: imgKinesioVital,
    },
    {
      title: "Vale Beauty Studio",
      category: "Web · Belleza",
      description:
        "Estudio de extensiones de pestañas, lifting coreano y cejas. Catálogo de servicios con precios y agenda de citas directo por WhatsApp.",
      url: "https://vale-beauty-studio.vercel.app/",
      image: imgValeBeauty,
    },
  ],
};

export const CONTACT = {
  sectionTitle: "¿Listo para que tu negocio trabaje mejor?",
  subtitle:
    "Agenda una llamada o una reunión de 30 minutos. Sin costo. Sin presión. Solo conversamos sobre tu negocio y vemos si puedo ayudarte.",
  ctaText: "Agendar llamada por WhatsApp",
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Ale Celis. Todos los derechos reservados.`,
};
