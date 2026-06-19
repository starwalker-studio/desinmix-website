import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WEB_DEVELOP, WEB_DEVELOP_SEO } from "../../../../env/services.env";
import { DisplayColumnData } from "../../../layout/DisplayColumnData";
import style from "./WebDevelop.module.scss";

export const WebDevelop = () => {
  return (
    <>
      <section className={style.hero_section}>
        <div className={style.overlay} />
        <div className={style.hero_container}>
          <div className={style.hero_wrapper}>
            <div className={style.hero_content}>
              <div className={style.hero_header}>
                <h2>{WEB_DEVELOP_SEO.title}</h2>
              </div>
              <div className={style.hero_text}>
                <p>{WEB_DEVELOP_SEO.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.web_services_section_desc}>
        <div className={style.hero_container}>
          <div className={style.web_services_packages_wrapper_md}>
            <div className={style.sub_header}>
              <h2>{WEB_DEVELOP_SEO.sub_header}</h2>
              <p>{WEB_DEVELOP_SEO.sub_description}</p>
            </div>
            <div className={style.web_services_grid_2}>
              <DisplayColumnData data={WEB_DEVELOP.content} style={style} />
            </div>
            <div className={style.web_develop_phrase_container}>
              <div className={style.web_develop_note}>
                <div className={style.note_title}>
                  <h3>{WEB_DEVELOP.last_note.text}</h3>
                </div>
                <div className={style.phrases_list_grid}>
                  {WEB_DEVELOP.last_note.phrases.map((item) => (
                    <ul key={item.id}>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={item.icon} />
                        </span>
                        <p>{item.text}</p>
                      </li>
                    </ul>
                  ))}
                </div>
                <div className={style.see_example}>
                  <div className={style.example_link}>
                    <a
                      href="https://example.disenmix.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Ver ejemplo</button>
                    </a>
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
