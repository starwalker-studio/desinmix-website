import { Routes, Route } from "react-router";
import { Index } from "../index/Index";
import { Header } from "../home/layout/Header/Header";

export const DesinmixRoutes = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<>
                        <Header />
                        <Index />
                    </>} />
            </Routes>
        </>
    )
}
