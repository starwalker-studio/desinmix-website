import { useSiteContext } from "../../../context/hook/useSiteContext";

export const Contacto = () => {
  const { packageSelected } = useSiteContext();
  console.log(packageSelected);
  return <div>Contacto</div>;
};
