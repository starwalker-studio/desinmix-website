import type { IFOOTER } from "./interfaces/env.interface";

export const FOOTER_ENV: IFOOTER = {
    FOOTER: {
        LOGO: "/logo/logo-desinmix-586x524-darkblue.png"
    },
    CONTENT: {
        TITLE_1: "Soluciones Digitales",
        SERVICES_LIST: [
            { id: 1, text: "Páginas web informativas con diseño profesional" },
            { id: 2, text: "Sitios empresariales funcionales y escalables" },
            { id: 3, text: "Landing pages optimizadas para captar clientes" },
            { id: 4, text: "Integración de panel o gestor de contenido" },
            { id: 5, text: "Seguridad web con certificado SSL" },
            { id: 6, text: "Tiendas virtuales listas para vender" },
            { id: 7, text: "Optimización SEO para mejorar tu posicionamiento" },
            { id: 8, text: "Sitios totalmente responsivos y adaptados a móviles" }
        ],
        TITLE_2: "Lo que ofrecemos",
        CONTENT_2: "Desarrollamos páginas únicas sin usar plantillas, enfocadas en destacar tu marca. Sitios rápidos, seguros, adaptables a móviles y construidos con tecnología moderna, al mejor precio del mercado.",
        TITLE_3: "Contacto",
        CONTACT_DETAILS: [
            {id:1, text: "Atención personalizada", link: false},
            {id:2, text: "WhatsApp: +52 55 29 71 73 74", link: false},
            {id:3, text: "Correo: ventas@desinmix.com", link: true}
        ],
        FOOTER_END: "Copyright 2025 © Desinmix"
    }
}