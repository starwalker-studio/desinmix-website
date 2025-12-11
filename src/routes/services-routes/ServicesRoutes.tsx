import { Routes, Route } from "react-router";
import * as Services from '../../pages/components/Servicios/index';

export const ServicesRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/diseno-web" element={<Services.WebDesign />} />
                <Route path="/desarrollo-web" element={<Services.WebDevelop />} />
                <Route path="/sitio-autoadministrable" element={<Services.SitioWebAuto />} />
                <Route path="/tienda-virtual" element={<Services.ECommerce />} />
            </Routes>
        </>
    )
}
