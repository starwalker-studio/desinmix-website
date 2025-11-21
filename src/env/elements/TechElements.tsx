import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMobileScreenButton, faLaptop, faShield } from '@fortawesome/free-solid-svg-icons';
import { CONTENT } from "../content.env";
import type { TechElementsProps } from "../index.types";

export const TechElements = ({ style }: TechElementsProps) => {

    const TECH_LOGOS = () => {
        return (
            <div className={style.tech_grid}>
                <div className={style.icon_display}>
                    <img src={CONTENT.TECH_REACT_LOGO} alt="react-logo" />
                </div>
                <div className={style.icon_display}>
                    <img src={CONTENT.TECH_TS_LOGO} alt="typescript-logo" />
                </div>
                <div className={style.icon_display}>
                    <img src={CONTENT.TECH_SASS_LOGO} alt="sass-logo" />
                </div>
                <div className={style.icon_display}>
                    <img src={CONTENT.TECH_PHP_LOGO} alt="php-logo" />
                </div>
            </div>
        )
    }

    const TECH_TEXT = () => {
        return (
            <div className={style.tech_wrapper}>
                <div className={style.header_text}>
                    <p className={style.sub_header}>Creamos tu proyecto desde cero usando tecnologías modernas.</p>
                    <p>Sin plugins pesados ni plantillas con código extra: tu página carga más rápido y funciona mejor.</p>
                    <p>Obtienes:</p>
                    <ul>
                        <li>Un sitio rápido y optimizado desde cero</li>
                        <li>Diseño totalmente personalizado</li>
                        <li>Mayor seguridad sin vulnerabilidades de terceros</li>
                        <li>Diseño personalizado con excelente rendimiento en móviles</li>
                        <li>Panel privado para que actualices tu sitio cuando quieras</li>
                    </ul>
                </div>
            </div>
        )
    }

    const TECH_ICONS = () => {
        return (
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
        )
    }
    return {
        TECH_LOGOS,
        TECH_TEXT,
        TECH_ICONS
    }
}
