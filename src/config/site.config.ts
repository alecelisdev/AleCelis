// Archivo central de configuración — edita aquí todos los textos del sitio

import imgDominga from "../assets/projects/terraza-dona-dominga.jpg";
import imgKinesioVital from "../assets/projects/kinesiovital.jpg";
import imgValeBeauty from "../assets/projects/vale-beauty-studio.jpg";
import imgTesoreria from "../assets/about/tesorería-nacional.png";
import imgAle from "../assets/about/ale-celis.jpeg";

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
    { label: "Proyectos", href: "#proyectos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Cómo trabajo", href: "#como-trabajo" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: "Hablemos",
};

export const HERO = {
  headline1: "Tu negocio puede trabajar mejor.",
  headline2: "Más ventas, menos trabajo manual.",
  subheadline:
    "Desarrollo webs, Asistentes de IA y automatizaciones para negocios que necesitan crecer sin contratar más gente.",
  ctaPrimary: "Quiero más clientes",
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
        "Construyo paneles que te muestran en tiempo real qué está pasando en tu negocio: qué se vende, qué no, dónde se va la plata. Reemplazan la planilla que hoy nadie actualiza.",
      tags: ["Dashboards de gestión", "Reportes automatizados", "KPIs en tiempo real"],
    },
  ],
};

export const HOW_I_WORK = {
  sectionTitle: "Así avanza un proyecto conmigo",
  steps: [
    {
      number: "01",
      title: "Me cuentas qué te está costando plata o tiempo",
      description:
        "Sin jerga técnica de tu parte: cuéntame el problema, no la solución que crees que necesitas — para eso estoy yo. Conversamos gratis y sin compromiso.",
    },
    {
      number: "02",
      title: "Te muestro qué se puede hacer, en cuánto tiempo y a qué precio",
      description:
        "Precio fijo, sobre la mesa, antes de que decidas algo. Si tu proyecto resulta más simple de lo que pensabas, te lo digo antes de cobrarte de más.",
    },
    {
      number: "03",
      title: "Construyo, muestro avances cada pocos días, y quedamos operando",
      description:
        "No desaparezco hasta el final ni te dejo solo después del lanzamiento. Ajustamos juntos hasta que el resultado funcione de verdad.",
    },
  ],
};

export const ABOUT = {
  sectionTitle: "Sobre mí",
  name: "Alejandro Celis",
  portrait: imgAle,
  portraitAlt: "Alejandro González Celis, desarrollador freelance",
  paragraphs: [
    `Soy Alejandro Celis (Ale). Me dedico a construir tecnología para negocios que necesitan resolver algo concreto — no "tener una web" o "tener un chatbot" porque sí, sino resolver lo que hoy les cuesta tiempo, clientes o plata.`,
    `Antes de construir para otros, construyo para mí: soy tesorero de un club de fútbol amateur, y estoy desarrollando mi propia app de gestión de tesorería para resolver el mismo control manual en planillas y WhatsApp que probablemente vives en tu negocio.`,
  ],
  closingParagraph:
    "Ese criterio — entender el problema real antes de construir — es el que aplico en cada proyecto. ",
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
    {
      title: "Tesorería Club Deportivo Nacional",
      category: "App · Gestión (en desarrollo)",
      description:
        "Mi propio proyecto: soy tesorero de este club amateur y estoy construyendo la app que reemplaza el control manual en planillas y WhatsApp. Saldo en caja, ingresos y gastos por partido, todo en un panel.",
      url: undefined,
      image: imgTesoreria,
      note: "En desarrollo activo, todavía sin control de acceso — por eso no está disponible en vivo.",
    },
  ],
};

export const CONTACT = {
  sectionTitle: "¿Listo para que tu negocio trabaje mejor?",
  subtitle:
    "Agenda una llamada de 30 minutos, gratis. Conversamos sobre tu negocio y vemos honestamente si puedo ayudarte.",
  ctaText: "Agendar llamada por WhatsApp",
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Ale Celis. Todos los derechos reservados.`,
};
