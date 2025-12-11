import type { IPACKAGES_INTRO, ISERVICES_WEB_PACKAGES } from "./interfaces/env.interface";

export const PACKAGES_INTRO: IPACKAGES_INTRO = {
  title: "Soluciones web a tu medida",
  description:
    "Nuestros paquetes combinan diseño, funcionalidad y tecnología para ayudarte a dar el siguiente paso digital. Desde páginas web informativas hasta sitios con administración de contenido, todos nuestros planes están diseñados para impulsar tu negocio y ayudarte a ofrecer una presencia digital profesional."
};

export const SERVICES_WEB_PACKAGES: ISERVICES_WEB_PACKAGES[] = [
  {
    id: 1,
    title: "BÁSICA",
    price: 4800,
    key: "basico",
    shortDescription: "Sitio web estático sin funciones",
    description:
      "Perfecta para profesionistas independientes que buscan posicionarse en el mercado laboral con una presencia web clara y profesional.",
    includes: [
      { id: 1, text: "Solo 2 secciones" },
      { id: 2, text: "Hosting y dominio gratis por 1 año" },
      { id: 3, text: "Diseño adaptable a dispositivos móviles o tablets" },
      { id: 4, text: "Formulario de contacto" },
      { id: 5, text: "Correo electrónico gratis" },
      { id: 6, text: "Optimización para buscadores Google" },
      { id: 7, text: "Enlaces a redes sociales o WhatsApp" },
      { id: 8, text: "Carga rápida y certificado SSL" }
    ]
  },
  {
    id: 2,
    title: "BÁSICA PRO",
    price: 5300,
    key: "basico-pro",
    shortDescription: "Sitio web estático sin funciones",
    description:
      "Pensado para pequeños y medianos negocios en crecimiento que buscan mayor visibilidad y atraer más clientes.",
    includes: [
      { id: 1, text: "3 a 5 secciones" },
      { id: 2, text: "Hosting y dominio gratis por 1 año" },
      { id: 3, text: "Diseño adaptable a dispositivos móviles o tablets" },
      { id: 4, text: "Formulario de contacto" },
      { id: 5, text: "Correo electrónico gratis" },
      { id: 6, text: "Optimización para buscadores Google" },
      { id: 7, text: "Enlaces a redes sociales o WhatsApp" },
      { id: 8, text: "Carga rápida y certificado SSL" }
    ]
  },
  {
    id: 3,
    title: "NEGOCIO",
    price: 7500,
    key: "negocio",
    shortDescription: "Sitio web estático sin funciones",
    description:
      "Ideal para emprendedores que necesitan una página web moderna para presentar su menú, catálogo o galería de forma visual y profesional.",
    includes: [
      { id: 1, text: "hasta 5 secciones" },
      { id: 2, text: "Hosting y dominio gratis por 1 año" },
      { id: 3, text: "Diseño adaptable a dispositivos móviles o tablets" },
      { id: 4, text: "Galería fotográfica, blog de noticias o catálogo" },
      { id: 5, text: "Formulario de contacto" },
      { id: 6, text: "Correo electrónico gratis" },
      { id: 7, text: "Optimización para buscadores Google" },
      { id: 8, text: "Enlaces a redes sociales o WhatsApp" },
      { id: 9, text: "Carga rápida y certificado SSL" }
    ]
  },
  {
    id: 4,
    title: "NEGOCIO PRO",
    price: 9800,
    key: "negocio-pro",
    shortDescription: "Sitio web autoadministrable",
    description:
      "Ideal para negocios o empresas que necesitan publicar contenido, ofertas o noticias sin depender de terceros.",
    includes: [
      { id: 1, text: "5 a 8 secciones" },
      { id: 2, text: "Hosting y dominio gratis por 1 año" },
      { id: 3, text: "Diseño adaptable a dispositivos móviles o tablets" },
      { id: 4, text: "Galería fotográfica, blog de noticias o catálogo" },
      {
        id: 5,
        text: "Administrador de contenidos básico (galería, blog o catálogo)"
      },
      { id: 6, text: "Formulario de contacto" },
      { id: 7, text: "Correo electrónico gratis" },
      { id: 8, text: "Optimización para buscadores Google" },
      { id: 9, text: "Enlaces a redes sociales o WhatsApp" },
      { id: 10, text: "Carga rápida y certificado SSL" }
    ]
  },
  {
    id: 5,
    title: "INMOBILIARIA",
    price: 15800,
    key: "inmobiliaria",
    shortDescription: "Sitio web autoadministrable",
    description:
      "Diseñado para negocios inmobiliarios en crecimiento que necesitan mostrar y actualizar propiedades de forma sencilla.",
    includes: [
      { id: 1, text: "Hasta 8 secciones" },
      { id: 2, text: "Hosting y dominio gratis por 1 año" },
      { id: 3, text: "Diseño adaptable a dispositivos móviles o tablets" },
      {
        id: 4,
        text: "Publicación de hasta 13 propiedades con detalles, imágenes y precios"
      },
      {
        id: 5,
        text: "Filtro básico por propiedades, ubicación y precios"
      },
      {
        id: 6,
        text: "Administrador de propiedades: agregar, editar o eliminar"
      },
      { id: 7, text: "Formulario de contacto" },
      { id: 8, text: "Correo electrónico gratis" },
      { id: 9, text: "Optimización para buscadores Google" },
      { id: 10, text: "Enlaces a redes sociales o WhatsApp" },
      { id: 11, text: "Carga rápida y certificado SSL" }
    ]
  },
  {
    id: 6,
    title: "PREMIUM",
    price: 18500,
    key: "premium",
    shortDescription: "Sitio web autoadministrable avanzado",
    description:
      "Pensado para grandes empresas que requieren funciones avanzadas, sistemas internos y mayor control de sus procesos.",
    includes: [
      { id: 1, text: "Hasta 15 secciones" },
      { id: 2, text: "Hosting y dominio gratis por 1 año" },
      { id: 3, text: "Diseño adaptable a dispositivos móviles o tablets" },
      {
        id: 4,
        text: "Sistema de gestión interno personalizado (reportes o herramientas)"
      },
      { id: 5, text: "Administrador de contenidos completo" },
      { id: 6, text: "Formulario de contacto" },
      { id: 7, text: "Correo electrónico gratis" },
      { id: 8, text: "Optimización para buscadores Google" },
      { id: 9, text: "Enlaces a redes sociales o WhatsApp" },
      { id: 10, text: "Carga rápida y certificado SSL" }
    ]
  }
];
