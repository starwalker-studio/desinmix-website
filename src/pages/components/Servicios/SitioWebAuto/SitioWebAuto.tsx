import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SITE_AUTOADMINISTRABLE,
  WEBSITE_ADMIN_PACKAGES,
} from "../../../../env/services.env";
import style from "./SitioWebAuto.module.scss";
import { DisplayColumnData } from "../../../layout/DisplayColumnData";

export const SitioWebAuto = () => {
  return (
    <>
      <section className={style.hero_section}>
        <div className={style.overlay} />
        <div className={style.hero_container}>
          <div className={style.hero_wrapper}>
            <div className={style.hero_content}>
              <div className={style.hero_header}>
                <h2>{SITE_AUTOADMINISTRABLE.title}</h2>
              </div>
              <div className={style.hero_text}>
                <p>{SITE_AUTOADMINISTRABLE.intro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.web_services_section_desc}>
        <div className={style.hero_container}>
          <div className={style.hero_wrapper}>
            <div className={style.web_services_package_header}>
              <h2>Paquetes</h2>
            </div>
            <div className={style.web_services_grid_3}>
              <DisplayColumnData
                data={WEBSITE_ADMIN_PACKAGES}
                style={style}
                isColumnLarge={false}
              />
            </div>
            <div className={style.sub_header}>
              <div className={style.heading}>
                <h2>{SITE_AUTOADMINISTRABLE.section.heading}</h2>
                <p>{SITE_AUTOADMINISTRABLE.section.highlight}</p>
                <div className={style.benefits_list}>
                  <div className={style.ul_list}>
                    {SITE_AUTOADMINISTRABLE.section.benefits.map((item) => (
                      <ul key={item.id}>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={item.icon} />
                          </span>
                          {item.text}
                        </li>
                      </ul>
                    ))}
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
