import { useMobileScreen } from "../../../hooks/useMobileScreen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import type { HeaderElementsProps } from "../../types/header.types";

export const HeaderNavButtons = ({ style }: HeaderElementsProps) => {

    const { isMobileScreen } = useMobileScreen();

    return (
        <>
            {
                !isMobileScreen() &&
                <div className={style.nav_buttons}>
                    <div className={style.contact_button}>
                        <button>
                            Contacto
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        </button>
                    </div>
                    <div className={style.whats_button}>
                        <button>
                            WhatsApp
                            <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
