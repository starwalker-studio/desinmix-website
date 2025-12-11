import { faCreditCardAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ECOMMERCE_DATA,
  ECOMMERCE_PACKAGES,
} from "../../../../env/services.env";
import style from "./ECommerce.module.scss";
import { DisplayColumnData } from "../../../layout/DisplayColumnData";

export const ECommerce = () => {
  return (
    <>
      <section className={style.hero_section}>
        <div className={style.overlay} />
        <div className={style.hero_container}>
          <div className={style.hero_wrapper}>
            <div className={style.hero_content}>
              <div className={style.hero_header}>
                <h2>{ECOMMERCE_DATA.title}</h2>
              </div>
              <div className={style.hero_text}>
                <p>{ECOMMERCE_DATA.introduction}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.web_services_section_desc}>
        <div className={style.hero_container}>
          <div className={style.web_services_packages_wrapper_md}>
            <div className={style.web_services_package_header}>
              <h2>Paquetes</h2>
            </div>
            <div className={style.web_services_grid_2}>
              <DisplayColumnData data={ECOMMERCE_PACKAGES} style={style} />
            </div>
            <div className={style.sub_content_grid}>
              <div className={style.sub_content}>
                <div className={style.sub_header}>
                  <div className={style.title_icon}>
                    <span>
                      <FontAwesomeIcon icon={faCreditCardAlt} />
                    </span>
                    <h2>{ECOMMERCE_DATA.paymentSystems.title}</h2>
                  </div>
                  <div className={style.text_content}>
                    <p>{ECOMMERCE_DATA.paymentSystems.description}</p>
                  </div>
                </div>
              </div>
              <div className={style.sub_content}>
                <div className={style.sub_header}>
                  <div className={style.title_icon}>
                    <span>
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <h2>{ECOMMERCE_DATA.security.title}</h2>
                  </div>
                  <div className={style.text_content}>
                    <p>{ECOMMERCE_DATA.security.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
