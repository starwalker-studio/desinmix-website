import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMobileScreenButton, faLaptop, faShield } from '@fortawesome/free-solid-svg-icons';
import style from './Content.module.scss';

export const Tech = () => {
    return (
        <section className={style.tech_section}>
            <div className={style.green_background}>
                <div className={style.container}>
                    <div className={style.content}>
                        <div className={style.header_tech}>
                            <h2>Tecnología moderna, Sin plantillas.</h2>
                            <div className={style.tech_grid}>
                                <div className={style.icon_display}>
                                    <img src="/index/content/tech-logos/react-logo-512px.png" alt="" />
                                </div>
                                <div className={style.icon_display}>
                                    <img src="/index/content/tech-logos/typescript-logo.png" alt="" />
                                </div>
                                <div className={style.icon_display}>
                                    <img src="/index/content/tech-logos/sass-logo.svg" alt="" />
                                </div>
                                <div className={style.icon_display}>
                                    <img src="/index/content/tech-logos/php-logo.svg" alt="" />
                                </div>
                            </div>
                            <div className={style.tech_wrapper}>
                                <div className={style.header_text}>
                                    <p className={style.sub_header}>Creamos tu proyecto desde cero usando tecnologías modernas</p>
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
                        </div>
                    </div>
                </div>
            </div>
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
