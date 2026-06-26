// Archivo central de configuración — edita aquí todos los textos del sitio

export const SITE = {
  name: "Ale Celis",
  tagline: "Tecnología que trabaja para tu negocio. Tú te dedicas a lo que importa.",
  // TODO: reemplazar con número de WhatsApp real (formato: código de país + número sin +)
  whatsapp: "56912345678",
  whatsappMessage: "Hola, me interesa saber más sobre tus servicios",
  // TODO: reemplazar con email real
  email: "hola [at] alecelis [punto] com",
  // TODO: reemplazar con URLs reales
  linkedin: "https://linkedin.com/in/alecelis",
  github: "https://github.com/alecelis",
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
  headline1: "Tecnología que genera resultados.",
  headline2: "No código. No herramientas. Resultados.",
  subheadline:
    "Desarrollo webs, automatizaciones e inteligencia artificial para negocios que necesitan crecer sin contratar más gente.",
  ctaPrimary: "Quiero resultados",
  ctaSecondary: "Ver proyectos",
};

export const SOCIAL_PROOF = {
  label: "Negocios que ya confían en este trabajo",
  // TODO: reemplazar con nombres/logos reales
  logos: [
    { name: "Empresa A" },
    { name: "Empresa B" },
    { name: "Empresa C" },
    { name: "Empresa D" },
    { name: "Empresa E" },
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
        "Diseño y desarrollo sitios web y ecommerce que posicionan en Google y convierten visitas en clientes. No solo una página bonita — una herramienta que trabaja 24/7.",
      tags: ["Landing pages", "Portfolios", "Tiendas online", "Páginas corporativas"],
    },
    {
      id: "automatizacion",
      icon: "bot",
      title: "Menos tareas manuales. Más tiempo para lo que importa.",
      description:
        "Automatizo los procesos que te quitan horas: respuestas de WhatsApp con IA, flujos de trabajo, integraciones entre sistemas. Tu equipo deja de hacer trabajo repetitivo.",
      tags: ["Agente de WhatsApp con IA", "Automatización de procesos", "Creación de anuncios con IA"],
    },
    {
      id: "datos",
      icon: "chart",
      title: "Entiende tu negocio. Decide con información.",
      description:
        "Construyo dashboards y sistemas de visualización para que veas en tiempo real qué está pasando en tu negocio. Sin Excel. Sin adivinar.",
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
        "No me expliques qué herramienta quieres. Cuéntame qué te está costando dinero o tiempo. Una llamada de 30 minutos, sin costo, sin compromiso.",
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
  sectionTitle: "Casos reales. Resultados reales.",
  ctaText: "¿Tu proyecto podría ser el próximo?",
  // TODO: reemplazar con proyectos e imágenes reales
  items: [
    {
      title: "Proyecto Ecommerce",
      category: "Web · E-commerce",
      result: "Lanzado y vendiendo desde el día 7",
      image: null,
    },
    {
      title: "Dashboard Operativo",
      category: "Automatización · Datos",
      result: "Eliminó 15 horas semanales de trabajo manual",
      image: null,
    },
    {
      title: "Agente WhatsApp IA",
      category: "IA · Automatización",
      result: "Responde 200+ consultas al mes sin intervención humana",
      image: null,
    },
  ],
};

export const CONTACT = {
  sectionTitle: "¿Listo para que tu negocio trabaje mejor?",
  subtitle:
    "Agenda una llamada de 30 minutos. Sin costo. Sin presión. Solo conversamos sobre tu negocio y vemos si puedo ayudarte.",
  ctaText: "Agendar llamada por WhatsApp",
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Ale Celis. Todos los derechos reservados.`,
};
