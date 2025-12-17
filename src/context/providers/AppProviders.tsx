import React from "react";
import { SiteProvider } from "../site/SiteProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SiteProvider>{children}</SiteProvider>
    </>
  );
};
