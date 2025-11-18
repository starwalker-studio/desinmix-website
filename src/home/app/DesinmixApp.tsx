import { Routes, Route } from "react-router";
import { DesinmixRoutes } from "../../routes/DesinmixRoutes";

export const DesinmixApp = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<DesinmixRoutes />} />
            </Routes>
        </>
    )
}
