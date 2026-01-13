import { useState } from "react";
import { SiteContext } from "./SiteContext";

export const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPackage, setSelectedPackageState] = useState<number>(0);

  const setSelectedPackage = (id: number) => {
    setSelectedPackageState(id);
  };

  return (
    <SiteContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </SiteContext.Provider>
  );
};
