import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { FOOTER_ENV } from '../../../env/footer.env';
import style from './Footer.module.scss';

export const Footer = () => {
    return (
        <>
            <footer className={style.footer_background}>
                <div className={style.footer_container}>
                    <div className={style.footer_wrapper}>
                        <div className={style.footer_content_grid}>
                            <div className={style.footer_icon}>
                                <img src={FOOTER_ENV.FOOTER.LOGO} alt="logo" />
                            </div>
                            <div className={style.what_we_do_text}>
                                <h2>{FOOTER_ENV.CONTENT.TITLE_2}</h2>
                                <p>{FOOTER_ENV.CONTENT.CONTENT_2}</p>
                            </div>
                            <div className={style.contact}>
                                <h2>{FOOTER_ENV.CONTENT.TITLE_3}</h2>
                                {
                                    FOOTER_ENV.CONTENT.CONTACT_DETAILS.map((item, id) =>
                                        <ul key={id}>
                                            <li>{item.link ? (<NavLink className={style.link} to={"/"}>{item.text}</NavLink>) : (item.text)}</li>
                                        </ul>
                                    )
                                }
                                <div className={style.contact_button}>
                                    <button>
                                        Enviar WhatsApp
                                        <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                                    </button>
                                </div>
                            </div>
                            <div className={style.services_text}>
                                <h2>{FOOTER_ENV.CONTENT.TITLE_1}</h2>
                                {
                                    FOOTER_ENV.CONTENT.SERVICES_LIST.map((item, id) =>
                                        <ul key={id}>
                                            <li>{item.text}</li>
                                        </ul>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className={style.footer_background_dark}>
                <div className={style.copyright}>
                    <p>{FOOTER_ENV.CONTENT.FOOTER_END}</p>
                </div>
            </footer>
        </>
    )
}
