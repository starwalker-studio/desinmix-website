import { Routes, Route } from "react-router";
import { Index } from "../index/Index";
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
            </Routes>
        </>
    )
}
