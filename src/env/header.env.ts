import {
  faHome,
  faGlobe,
  faSuitcase,
  faEnvelope,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { IHEADER_ENV, IMOBILE_MENU } from "./interfaces/env.interface";

export const HEADER_ENV: IHEADER_ENV = {
  HEADER: {
    MAX_MOBILE_WIDTH: 736,
    LOGO: "/logo/logo-darkblue-letters.png",
  },
  NAV_LINK: [
    { id: 1, label: "Inicio", path: "/" },
    {
      id: 2,
      label: "Servicios",
      dropdown: [
        { id: 1, label: "Diseño páginas web", path: "/servicios/diseno-web" },
        { id: 2, label: "Desarrollo Web", path: "/servicios/desarrollo-web" },
        {
          id: 3,
          label: "Sitio web autoadministrable",
          path: "/servicios/sitio-autoadministrable",
        },
        { id: 4, label: "Tienda Virtual", path: "/servicios/tienda-virtual" },
      ],
      icon: faCaretDown,
    },
    { id: 3, label: "Paquetes", path: "/paquetes" },
  ],
};

export const MOBILE_MENU: IMOBILE_MENU[] = [
  { icon: faHome, label: "Inicio", href: "/" },

  {
    icon: faGlobe,
    label: "Servicios",
    children: [
      { label: "Diseño páginas web", href: "/servicios/diseno-web" },
      { label: "Desarrollo web", href: "/servicios/desarrollo-web" },
      {
        label: "Sitio autoadministrable",
        href: "/servicios/sitio-autoadministrable",
      },
      { label: "Tienda virtual", href: "/servicios/tienda-virtual" },
    ],
  },

  { icon: faSuitcase, label: "Paquetes", href: "/paquetes" },
  { icon: faEnvelope, label: "Contacto", href: "/contacto" },
  { icon: faWhatsapp, label: "WhatsApp", href: "https://wa.me/..." },
];
