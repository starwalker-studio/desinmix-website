import { Routes, Route } from "react-router";
import { DesinmixRoutes } from "../../routes/DesinmixRoutes";
import { Header } from "../layout/Header/Header";
import { Footer } from "../layout/Footer/Footer";

export const DesinmixApp = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <>
                            <Header />
                            <DesinmixRoutes />
                            <Footer />
                        </>
                    } />
            </Routes>
        </>
    )
}
