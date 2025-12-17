import { useContext } from "react";
import { SiteContext } from "../site/SiteContext";

export const useSiteContext = () => {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSiteContext must be used within SiteProvider");
  return {
    packageSelected: ctx?.selectedPackage,
    setPackageSelected: ctx?.setSelectedPackage,
  };
};
