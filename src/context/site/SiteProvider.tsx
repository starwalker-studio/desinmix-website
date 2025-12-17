import { useState } from "react";
import { SiteContext } from "./SiteContext";

export const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPackage, setSelectedPackageState] = useState<string>("");

  const setSelectedPackage = (name: string) => {
    setSelectedPackageState(name);
  };

  return (
    <SiteContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </SiteContext.Provider>
  );
};
