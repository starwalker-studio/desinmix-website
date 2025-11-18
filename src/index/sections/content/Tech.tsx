
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMobileScreenButton, faLaptop, faShield } from '@fortawesome/free-solid-svg-icons';
import style from './Content.module.scss';

export const Tech = () => {
    return (
        <section className={style.tech_section}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.tech_grid}>
                        <div className={style.icon_text}>
                            <span><FontAwesomeIcon icon={faLightbulb} /></span>
                            <h3>Transformamos tus ideas<br />en soluciones reales</h3>
                        </div>
                        <div className={style.icon_text}>
                            <span><FontAwesomeIcon icon={faMobileScreenButton} /></span>
                            <h3>Diseño adaptable<br />a cualquier dispositivo</h3>
                        </div>
                        <div className={style.icon_text}>
                            <span><FontAwesomeIcon icon={faLaptop} /></span>
                            <h3>Panel de control<br />sencillo y eficiente</h3>
                        </div>
                        <div className={style.icon_text}>
                            <span><FontAwesomeIcon icon={faShield} /></span>
                            <h3>Accesos protegidos<br />y sitio seguro</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
