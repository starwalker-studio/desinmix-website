import { Routes, Route } from "react-router";
import { Index } from "../index/Index";
import { Header } from "../home/layout/Header/Header";
import { Footer } from "../home/layout/Footer/Footer";

export const DesinmixRoutes = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<>
                        <Header />
                        <Index />
                        {/* <Footer /> */}
                    </>} />
            </Routes>
        </>
    )
}
