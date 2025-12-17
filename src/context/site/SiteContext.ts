import { createContext } from "react";
import type { SiteContextType } from "../interfaces/env-context.interfaces";

export const SiteContext = createContext<SiteContextType | undefined>(undefined);