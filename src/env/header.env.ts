import { faHome, faGlobe, faSuitcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import type { IHEADER_ENV, IMOBILE_MENU } from "./interfaces/env.interface";

export const HEADER_ENV: IHEADER_ENV = {
    HEADER: {
        MAX_MOBILE_WIDTH: 736,
        LOGO: "/logo/logo-darkblue-letters.png"
    },
    NAV_LINK: [
        { id: 1, label: "Inicio", path: "/" },
        { id: 2, label: "Servicios", path: "/servicios" },
        { id: 3, label: "Paquetes", path: "/paquetes" },
    ]
}

export const MOBILE_MENU: IMOBILE_MENU[] = [
    { icon: faHome, label: "Inicio", href: "/" },
    { icon: faGlobe, label: "Servicios", href: "/servicios" },
    { icon: faSuitcase, label: "Paquetes", href: "/paquetes" },
    { icon: faEnvelope, label: "Contacto", href: "/contacto" },
    { icon: faWhatsapp, label: "WhatsApp", href: "https://wa.me/..." },
];