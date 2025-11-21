import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import style from './ContactUs.module.scss';

export const ContactUs = () => {
    return (
        <section className={style.dark_blue_background}>
            <div className={style.contact_container}>
                <div className={style.contact_content}>
                    <div className={style.contact_wrapper}>
                        <div className={style.contact_grid}>
                            <div className={style.form_text}>
                                <div>
                                    <h2>Hablemos de tu proyecto</h2>
                                    <p>Cuéntanos qué quieres lograr y te ayudamos a convertirlo en una solución profesional.</p>
                                    <p>Envíanos tu plan por correo y solicita tu cotización.</p>
                                </div>
                            </div>
                            <div className={style.quote_button}>
                                <button>
                                    Cotiza Ahora
                                    <span><FontAwesomeIcon icon={faCommentDollar} /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
