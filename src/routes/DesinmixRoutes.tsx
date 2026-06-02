import { Route, Routes } from "react-router";
import { Index } from "../index/Index";
import { Contacto } from "../pages/components/Contacto/Contacto";
import { SellPackages } from "../pages/components/Paquetes/SellPackages";
import { Portafolios } from "../pages/components/Portafolios/Portafolios";
import { ServicesRoutes } from "./services-routes/ServicesRoutes";

export const DesinmixRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/servicios*"
          element={
            <>
              <ServicesRoutes />
            </>
          }
        />
        <Route path="/paquetes" element={<SellPackages />} />
        <Route path="/portafolio" element={<Portafolios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};
