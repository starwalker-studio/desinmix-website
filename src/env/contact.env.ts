import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import type {
  ICONTACT_SECTION_CONTENT,
  IPACKAGE_OPTIONS,
} from "./interfaces/env.interface";

export const CONTACT_SECTION_CONTENT: ICONTACT_SECTION_CONTENT = {
  title: "Tu negocio merece una presencia digital que funcione.",
  description:
    "Si estás listo para mejorar tu sitio web o comenzar desde cero, escríbenos. Comparte tu proyecto y te ayudaré a convertirlo en una solución web profesional, segura y lista para crecer.",
  data: [
    { id: 1, info: "ventas@desinmix.com", icon: faEnvelope },
    { id: 2, info: "(+52) 55 29 71 73 74", icon: faWhatsapp },
  ],
};

export const PACKAGE_OPTIONS: IPACKAGE_OPTIONS[] = [
  {
    id: 1,
    label: "Desarrollo web básico",
    value: "desarrollo_web_basico",
  },
  {
    id: 2,
    label: "Desarrollo web avanzado",
    value: "desarrollo_web_avanzado",
  },
  {
    id: 3,
    label: "Corporativo",
    value: "corporativo",
  },
  {
    id: 4,
    label: "Negocio Pro",
    value: "negocio_pro",
  },
  {
    id: 5,
    label: "Premium",
    value: "premium",
  },
  {
    id: 6,
    label: "Tienda Virtual Pro",
    value: "tienda_virtual_pro",
  },
  {
    id: 7,
    label: "Tienda Virtual Premium",
    value: "tienda_virtual_premium",
  },
  {
    id: 8,
    label: "Básica",
    value: "basica",
  },
  {
    id: 9,
    label: "Básica Pro",
    value: "basica_pro",
  },
  {
    id: 10,
    label: "Negocio",
    value: "negocio",
  },
  {
    id: 11,
    label: "Inmobiliaria",
    value: "inmobiliaria",
  },
];
