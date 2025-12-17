import { Routes, Route } from "react-router";
import { Index } from "../index/Index";
import { ServicesRoutes } from "./services-routes/ServicesRoutes";
import { SellPackages } from "../pages/components/Paquetes/SellPackages";
import { Contacto } from "../pages/components/Contacto/Contacto";

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
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};
