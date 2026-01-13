import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTACT_SECTION_CONTENT } from "../../../../env/contact.env";
import type { ContactFormProps } from "../../../../env/types/contact.types";

export const ContactDescription = ({ style }: ContactFormProps) => {
  return (
    <>
      <div className={style.contact_subheader}>
        <h3>{CONTACT_SECTION_CONTENT.title}</h3>
      </div>
      <div className={style.contact_desc}>
        <p>{CONTACT_SECTION_CONTENT.description}</p>
      </div>
      <div className={style.contact_info}>
        {CONTACT_SECTION_CONTENT.data.map((item, id) => (
          <ul key={id}>
            <li>
              <p>
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                {item.info}
              </p>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};
