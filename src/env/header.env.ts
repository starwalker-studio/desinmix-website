import type { IHEADER_ENV } from "./interfaces/env.interface";

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