import { SERVICES_WEB_DESIGN } from '../../../../env/types/services.env';
import style from './WebDesign.module.scss';

export const WebDesign = () => {
    return (
        <>
            <section className={style.web_design_section}>
                <div className={style.overlay} />
                <div className={style.web_design_container}>
                    <div className={style.web_design_wrapper}>
                        <div className={style.web_design_content}>
                            <div className={style.web_design_header}>
                                <h2>{SERVICES_WEB_DESIGN.title}</h2>
                            </div>
                            <div className={style.web_design_text}>
                                <p>{SERVICES_WEB_DESIGN.introduction}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.web_design_background_desc}>
                <div className={style.web_design_container}>
                    <div className={style.web_design_wrapper}>
                        <div className={style.web_design_description_content}>
                            {
                                SERVICES_WEB_DESIGN.services
                                    .filter(item => item.id <= 3)
                                    .map((item) => (
                                        <ul key={item.id}>
                                            <li>
                                                <h2>{item.title}</h2>
                                                <p>{item.description}</p>
                                            </li>
                                        </ul>
                                    ))
                            }
                        </div>
                        <div className={style.web_design_description_content}>
                            {
                                SERVICES_WEB_DESIGN.services
                                    .filter(item => item.id >= 4 && item.id <= 6)
                                    .map((item) => (
                                        <ul key={item.id}>
                                            <li>
                                                <h2>{item.title}</h2>
                                                <p>{item.description}</p>
                                            </li>
                                        </ul>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
