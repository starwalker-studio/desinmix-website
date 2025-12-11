import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { DesinmixApp } from "./home/app/DesinmixApp";
import "./scss/main.scss";
import ScrollToTop from "./env/elements/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <DesinmixApp />
    </BrowserRouter>
  </StrictMode>
);
