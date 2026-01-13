import style from "./Contacto.module.scss";
import { ContactForm } from "./layout/ContactForm";
import { ContactDescription } from "./layout/ContactDescription";

export const Contacto = () => {
  return (
    <div className={style.contact_section}>
      <div className={style.contact_container}>
        <div className={style.contact_wrapper}>
          <div className={style.contact_content}>
            <div className={style.contact_header}>
              <h2>Contáctanos</h2>
            </div>
            <div className={style.contact_grid}>
              <div className={style.grid_1}>
                <div className={style.contact_description}>
                  <ContactDescription style={style} />
                </div>
              </div>
              <div className={style.grid_2}>
                <div className={style.contact_form}>
                  <ContactForm style={style} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
