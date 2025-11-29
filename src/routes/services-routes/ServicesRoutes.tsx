import { Routes, Route } from "react-router";
import * as Services from '../../pages/components/Servicios/index';

export const ServicesRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/diseno-web" element={<Services.WebDesign />} />
            </Routes>
        </>
    )
}
