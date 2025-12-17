import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { DesinmixApp } from "./home/app/DesinmixApp";
import "./scss/main.scss";
import ScrollToTop from "./env/elements/ScrollToTop";
import { AppProviders } from "./context/providers/AppProviders";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppProviders>
        <DesinmixApp />
      </AppProviders>
    </BrowserRouter>
  </StrictMode>
);
