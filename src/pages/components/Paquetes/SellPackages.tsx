import { NavLink } from "react-router-dom";
import {
  PACKAGES_INTRO,
  SERVICES_WEB_PACKAGES,
} from "../../../env/packages-services.env";
import { DisplayColumnData } from "../../layout/DisplayColumnData";
import style from "./SellPackages.module.scss";

export const SellPackages = () => {
  return (
    <>
      <section className={style.hero_section}>
        <div className={style.overlay} />
        <div className={style.hero_container}>
          <div className={style.sell_packages_wrapper}>
            <div className={style.hero_content}>
              <div className={style.hero_header}>
                <h2>{PACKAGES_INTRO.title}</h2>
              </div>
              <div className={style.hero_text}>
                <p>{PACKAGES_INTRO.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.web_services_section_desc}>
        <div className={style.hero_container}>
          <div className={style.sell_packages_wrapper}>
            <div className={style.web_services_package_header}>
              <h2>Paquetes</h2>
            </div>
            <div className={style.web_services_grid_3}>
              <DisplayColumnData
                data={SERVICES_WEB_PACKAGES}
                style={style}
                isColumnLarge={false}
              />
            </div>
            <div className={style.see_portfolios_text}>
              <h3>
                ¿Tienes un negocio y quieres que tus clientes te encuentren y te elijan?
              </h3>
              <p>
                Aquí mostramos nuestro portafolios: soluciones digitales para negocios reales.
              </p>
            </div>
            <div className={style.see_examples}>
              <NavLink to={"/portafolio"}>
                <button>Ver Portafolios</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
