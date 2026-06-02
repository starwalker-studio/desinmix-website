import type { IPORTFOLIO } from "./types/portfolio.types";

export const PORTFOLIO: IPORTFOLIO = {
  title: "Portafolio",
  text_1: "Negocios de todos los giros con identidad propia.",
  text_2:
    "Explora los ejemplos que hemos construido con base en tus intereses.",
  portfolios: [
    {
      id: 1,
      data_color: "orange",
      title: "Restaurantes",
      description:
        "Presencia digital para negocios de comida: menús en línea, pedidos por WhatsApp y diseño que abre el apetito.",
      buttons: [
        {
          id: 1,
          label: "Pizza Menu",
          link: "https://pizza-menu.disenmix.com/",
        },
        {
          id: 2,
          label: "Cafetería",
          link: "https://coffeeshop.disenmix.com/",
        },
      ],
    },
    {
      id: 2,
      data_color: "green",
      title: "Bienes Raíces",
      description:
        "Catálogos de propiedades que transmiten confianza, exclusividad y hacen que cada inmueble destaque.",
      buttons: [
        {
          id: 1,
          label: "Bienes Raíces",
          link: "https://realestate.disenmix.com/",
        },
        {
          id: 2,
          label: "Catálogo Propiedades",
          link: "https://realty-catalog.disenmix.com/",
        },
      ],
    },
    {
      id: 3,
      data_color: "blue",
      title: "Dashboard",
      description:
        "Herramientas internas para visualizar datos, gestionar operaciones y tomar mejores decisiones día a día.",
      buttons: [
        {
          id: 1,
          label: "Clinica",
          link: "https://example.disenmix.com/",
        },
      ],
    },
  ],
};
