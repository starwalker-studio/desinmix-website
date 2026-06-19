import {
  faBullhorn,
  faClock,
  faCode,
  faImages,
  faMobileAlt,
  faPenNib,
  faShieldAlt,
  faSlidersH,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import type {
  IDESARROLLOWEBSEO,
  IECOMMERCE_DATA,
  IECOMMERCE_PACKAGES,
  ISERVICES,
  ISITE_AUTOADMINISTRABLE,
  IWEB_DEVELOP_CONTENT,
  IWEBSITE_ADMIN_PACKAGES,
} from "./interfaces/env.interface";

export const WEB_SERVICES_DESIGN: ISERVICES = {
  title: "Diseño Páginas Web",
  introduction:
    "Ofrecemos estos servicios que están diseñados para adaptarse a las necesidades reales de tu negocio, ya sea que busques una página informativa donde describa lo que tu negocio ofrece, un sitio autoadministrable en donde tú puedas administrar sin necesidad de un intermediario, un e-commerce listo para vender o una plataforma más robusta para manejar procesos internos. Nuestro objetivo es ayudarte a construir un sitio web funcional, atractivo y fácil de gestionar, que realmente trabaje a favor de tus metas.",
  services: [
    {
      id: 1,
      title: "Páginas web informativas",
      description:
        "Creamos sitios web claros, modernos y totalmente personalizados que presentan tu marca de forma profesional. Una web informativa bien estructurada comunica quién eres, qué ofreces y por qué elegirte, todo desde el primer vistazo. Ideal para negocios que buscan presencia sólida y confiable en línea.",
    },
    {
      id: 2,
      title: "Páginas web autoadministrables",
      description:
        "Olvídate de depender de terceros para actualizar tu contenido. Desarrollamos sitios con un dashboard intuitivo donde podrás editar textos, imágenes, servicios, precios, blogs y más. Una herramienta pensada para que mantengas tu página siempre al día sin complicaciones.",
    },
    {
      id: 3,
      title: "Tiendas Virtuales",
      description:
        "Transforma tu proyecto en un negocio digital con plataformas listas para operar. Implementamos sistemas de reservaciones, tiendas en línea, métodos de pago, inventarios y notificaciones automáticas. Todo lo necesario para que vendas o gestiones servicios de manera profesional.",
    },
    {
      id: 4,
      title: "Páginas para inmobiliarias",
      description:
        "Desarrollamos sitios web para agentes, brokers o inmobiliarias completas, con catálogos administrables, filtros avanzados de búsqueda y fichas técnicas para cada propiedad. Una herramienta pensada para mostrar residencias, departamentos y terrenos de forma elegante, clara y fácil de navegar.",
    },
    {
      id: 5,
      title: "Landing pages",
      description:
        "Páginas rápidas, ligeras y totalmente enfocadas a la conversión. Ideales para campañas publicitarias, lanzamientos, servicios específicos o anuncios en redes sociales. El objetivo: captar leads y transformar visitas en clientes reales.",
    },
    {
      id: 6,
      title: "Páginas empresariales",
      description:
        "Creamos plataformas completas para empresas que requieren algo más robusto que una página informativa. Incluimos paneles de control para gestionar clientes, productos, reportes, procesos internos, roles de usuario y más. Sistemas modernos que se adaptan a las necesidades operativas de tu negocio.",
    },
  ],
};

export const WEB_DEVELOP_SEO: IDESARROLLOWEBSEO = {
  title: "Desarrollo Web",
  description:
    "Desarrollo de sistemas web y paneles administrativos en PHP/Laravel, creados a la medida para optimizar procesos y mejorar la gestión de tu negocio. Diseñamos soluciones seguras, rápidas y fáciles de usar, que permiten administrar inventarios, productos, ventas y usuarios desde una interfaz intuitiva y escalable.",
  seoKeywords: [
    "desarrollo web",
    "sistemas administrativos",
    "dashboard personalizado",
    "PHP Laravel",
    "desarrollo a la medida",
    "panel de administración",
    "gestión de inventarios",
    "sistemas web profesionales",
    "sistemas internos empresariales",
  ],
  sub_header:
    "Controla tu contenido, productos, ventas y operaciones sin depender de nadie.",
  sub_description:
    "Un panel de administración diseñado a la medida de tu negocio, pensado para que gestiones tu inventario de forma sencilla, rápida y sin riesgo de pérdidas. Todo desde un entorno claro, ordenado y fácil de usar.",
};

export const WEB_DEVELOP: IWEB_DEVELOP_CONTENT = {
  content: [
    {
      id: 1,
      key: "pro",
      title: "Desarrollo web básico",
      selected_id: 1,
      price: 7500,
      includes: [
        { id: 1, text: "Panel de administración intuitivo" },
        { id: 2, text: "Imagen genérica para cada producto" },
        { id: 3, text: "Listado completo de productos" },
        { id: 4, text: "Agrega, edita o elimina productos de tu inventario" },
        { id: 5, text: "Buscador de productos por nombre" },
        { id: 6, text: "Gestión de usuarios con los mismos privilegios" },
        { id: 7, text: "Sistema de login integrado" },
        { id: 8, text: "Gestión de categorías" },
        { id: 9, text: "Panel responsivo para dispositivos móviles" },
        { id: 10, text: "Reporte general de productos descargable en Excel" },
        {
          id: 11,
          text: "100% administrable por usted mismo (incluye capacitación remota para usar el sistema)",
        },
        { id: 12, text: "Hosting + dominio + SSL gratis por 1 año" },
      ],
    },
    {
      id: 2,
      key: "premium",
      title: "Desarrollo web avanzado",
      selected_id: 2,
      price: 12800,
      includes: [
        { id: 1, text: "Panel de administración intuitivo" },
        { id: 2, text: "Imagen individual para cada producto" },
        { id: 3, text: "Listado completo de productos" },
        { id: 4, text: "Agrega, edita o elimina productos del inventario" },
        {
          id: 5,
          text: "Buscador avanzado por nombre, categoría, código, etc.",
        },
        {
          id: 6,
          text: "Gestión de usuarios con diferentes privilegios y niveles de acceso",
        },
        {
          id: 7,
          text: "Gestión completa de compras, ventas, fabricantes, clientes y productos",
        },
        { id: 8, text: "Historial de productos eliminados" },
        { id: 9, text: "Sistema de login integrado" },
        { id: 10, text: "Gestión de categorías de productos" },
        { id: 11, text: "Administración de notas de venta" },
        { id: 12, text: "Panel responsivo para dispositivos móviles" },
        {
          id: 13,
          text: "Reportes descargables en Excel: inventario, ventas y compras",
        },
        {
          id: 14,
          text: "100% administrable por usted mismo (incluye capacitación remota para usar el sistema)",
        },
        { id: 15, text: "Hosting + dominio + SSL gratis por 1 año" },
      ],
    },
  ],
  last_note: {
    text: "Sistemas pensados para que trabajes mejor, más rápido y con total control.",
    phrases: [
      { id: 1, text: "Diseño responsivo", icon: faMobileAlt },
      { id: 2, text: "Herramientas de uso fácil", icon: faTools },
      { id: 3, text: "Código optimizado", icon: faCode },
      { id: 4, text: "Seguridad", icon: faShieldAlt },
    ],
  },
};

export const SITE_AUTOADMINISTRABLE: ISITE_AUTOADMINISTRABLE = {
  title: "Sitio web autoadministrable",

  intro:
    "Una solución pensada para negocios que necesitan mantener su sitio web siempre actualizado, con control total de su contenido y sin depender de terceros. Integramos un panel de administración claro y funcional que te permite gestionar información, promociones, galerías o publicaciones de forma sencilla y segura.",

  section: {
    heading: "¿Por qué elegir un sitio autoadministrable?",

    highlight:
      "Un dashboard no es solo una herramienta extra: es una ventaja real para tu negocio.",

    benefits: [
      {
        id: 1,
        text: "Publicar promociones o noticias al instante",
        icon: faBullhorn,
      },
      {
        id: 2,
        text: "Actualizar tu catálogo o galería sin depender de nadie",
        icon: faImages,
      },
      {
        id: 3,
        text: "Mantener un blog activo para mejorar tu posicionamiento",
        icon: faPenNib,
      },
      {
        id: 4,
        text: "Organizar información desde un panel intuitivo",
        icon: faSlidersH,
      },
      {
        id: 5,
        text: "Ahorrar tiempo y mantener tu sitio siempre actualizado",
        icon: faClock,
      },
    ],
    conclusion:
      "Esto convierte tu página web en un sistema vivo, capaz de crecer junto contigo.",
  },
};

export const WEBSITE_ADMIN_PACKAGES: IWEBSITE_ADMIN_PACKAGES[] = [
  {
    id: 1,
    key: "corporativo",
    title: "CORPORATIVO",
    selected_id: 3,
    price: 16500,
    subtitle:
      "Pensado para empresas consolidadas que requieren mayor estructura y presencia digital",
    includes: [
      { id: 1, text: "Hasta 11 secciones" },
      {
        id: 2,
        text: "Diseño responsivo adaptable a dispositivos móviles y tablets",
      },
      {
        id: 3,
        text: "Galería fotográfica, blog de noticias o catálogo administrable",
      },
      { id: 4, text: "Administrador de contenidos completo" },
      { id: 5, text: "Formulario de contacto" },
      { id: 6, text: "Correo electrónico profesional" },
      { id: 7, text: "Optimización SEO para Google" },
      { id: 8, text: "Botón de contacto directo a WhatsApp" },
      { id: 9, text: "Carga rápida y certificado de seguridad SSL" },
    ],
  },
  {
    id: 2,
    key: "negocio-pro",
    title: "NEGOCIO PRO",
    selected_id: 4,
    price: 9800,
    subtitle:
      "Ideal para negocios que desean crecer y mantener su contenido actualizado",
    includes: [
      { id: 1, text: "De 5 a 8 secciones" },
      {
        id: 2,
        text: "Diseño responsivo adaptable a dispositivos móviles y tablets",
      },
      {
        id: 3,
        text: "Galería fotográfica, blog de noticias o catálogo digital",
      },
      {
        id: 4,
        text: "Administrador de contenidos básico",
      },
      { id: 5, text: "Formulario de contacto" },
      { id: 6, text: "Correo electrónico profesional" },
      { id: 7, text: "Optimización SEO básica para buscadores (Google)" },
      { id: 8, text: "Botón de contacto directo a WhatsApp" },
      { id: 9, text: "Carga rápida y certificado de seguridad SSL" },
    ],
  },
  {
    id: 3,
    key: "premium",
    title: "PREMIUM",
    selected_id: 5,
    price: 18500,
    subtitle:
      "Para corporativos, instituciones o proyectos en crecimiento que requieren funciones avanzadas",
    includes: [
      { id: 1, text: "Hasta 15 secciones" },
      {
        id: 2,
        text: "Diseño responsivo adaptable a dispositivos móviles y tablets",
      },
      {
        id: 3,
        text: "Sistema de gestión interno personalizado (reportes o herramientas a la medida)",
      },
      {
        id: 4,
        text: "Administrador de contenidos completo con mayor control y opciones avanzadas",
      },
      { id: 5, text: "Formulario de contacto" },
      { id: 6, text: "Correo electrónico profesional" },
      { id: 7, text: "Optimización SEO para Google" },
      { id: 8, text: "Botón de contacto directo a WhatsApp" },
      { id: 9, text: "Carga rápida y certificado de seguridad SSL" },
    ],
  },
];

export const ECOMMERCE_DATA: IECOMMERCE_DATA = {
  title: "TIENDA VIRTUAL",

  introduction:
    "Una tienda en línea diseñada para que tu negocio venda las 24 horas, todos los días. Creamos plataformas de e-commerce modernas, rápidas y fáciles de administrar, donde puedes gestionar productos, precios, inventario y pedidos desde un panel de control intuitivo, sin depender de terceros y con total control de tu operación digital.",

  paymentSystems: {
    title: "SISTEMAS DE PAGO SEGUROS Y CONFIABLES",
    description:
      "Integramos pasarelas de pago reconocidas a nivel nacional e internacional, como Mercado Pago y Stripe, permitiendo a tus clientes pagar de forma segura con tarjetas de crédito, débito y otros métodos electrónicos. Estas plataformas garantizan transacciones confiables, rápidas y adaptadas a dispositivos móviles, mejorando la experiencia de compra y aumentando la confianza del usuario.",
  },

  security: {
    title: "SEGURIDAD EN CADA TRANSACCIÓN",
    description:
      "La seguridad es una prioridad en cada tienda en línea que desarrollamos. Tu sitio opera bajo conexión HTTPS, respaldado por un certificado SSL, lo que protege la información sensible de tus clientes contra accesos no autorizados o fraudes. Además, las pasarelas de pago utilizadas cuentan con estándares internacionales de seguridad, lo que asegura que los datos financieros nunca se almacenen directamente en tu sitio, reduciendo riesgos y garantizando operaciones confiables.",
  },

  last_text: {
    title: "E-Commerce con sistema de carrito y de pago",
    link: "https://music-store.disenmix.com"
  }
};

export const ECOMMERCE_PACKAGES: IECOMMERCE_PACKAGES[] = [
  {
    id: 1,
    key: "pro",
    title: "Tienda Virtual Pro",
    selected_id: 6,
    price: 14800,
    currency: "MXN",
    includes: [
      { id: 1, text: "Hasta 100 productos" },
      { id: 2, text: "Carrito de compras integrado" },
      { id: 3, text: "Gestión de inventario" },
      { id: 4, text: "Panel de pedidos y clientes" },
      { id: 5, text: "Registro e inicio de sesión de usuarios" },
      { id: 6, text: "Panel administrativo con interfaz intuitiva" },
      { id: 7, text: "Diseño web personalizado" },
      { id: 8, text: "Diseño responsivo (móvil, tablet y computadora)" },
      { id: 9, text: "Experiencia de compra clara y rápida" },
      {
        id: 10,
        text: "Integración de pasarela de pagos (Mercado Pago o Stripe)",
      },
      { id: 11, text: "Pagos seguros con tarjetas de crédito y débito" },
      { id: 12, text: "Confirmación de compra automática" },
      { id: 13, text: "Botón de WhatsApp integrado en la tienda" },
      { id: 14, text: "Alta en buscadores (SEO básico)" },
      { id: 15, text: "Optimización para Google" },
      { id: 16, text: "Dominio, hosting y cuenta de correo gratis por 1 año" },
      { id: 17, text: "Certificado SSL (sitio seguro HTTPS)" },
      { id: 18, text: "Plataforma lista para escalar" },
    ],
  },
  {
    id: 2,
    key: "premium",
    title: "Tienda Virtual Premium",
    selected_id: 7,
    price: 18800,
    currency: "MXN",
    includes: [
      { id: 1, text: "Hasta 500 productos" },
      { id: 2, text: "Carrito de compras integrado" },
      { id: 3, text: "Gestión de inventario" },
      { id: 4, text: "Panel de pedidos y clientes" },
      { id: 5, text: "Registro e inicio de sesión de usuarios" },
      { id: 6, text: "Panel administrativo con interfaz intuitiva" },
      { id: 7, text: "Diseño web personalizado" },
      { id: 8, text: "Diseño responsivo (móvil, tablet y computadora)" },
      { id: 9, text: "Experiencia de compra clara y rápida" },
      {
        id: 10,
        text: "Integración de pasarela de pagos (Mercado Pago o Stripe)",
      },
      { id: 11, text: "Pagos seguros con tarjetas de crédito y débito" },
      { id: 12, text: "Confirmación de compra automática" },
      { id: 13, text: "Botón de WhatsApp integrado en la tienda" },
      { id: 14, text: "Alta en buscadores (SEO básico)" },
      { id: 15, text: "Optimización para Google" },
      { id: 16, text: "Dominio, hosting y cuenta de correo gratis por 1 año" },
      { id: 17, text: "Certificado SSL (sitio seguro HTTPS)" },
      { id: 18, text: "Plataforma lista para escalar" },
    ],
  },
];
