import { TechElements } from '../../../env/elements/TechElements';
import style from './Content.module.scss';

export const Tech = () => {

    const { TECH_LOGOS, TECH_TEXT, TECH_ICONS } = TechElements({ style });

    return (
        <section className={style.tech_section}>
            <div className={style.green_background}>
                <div className={style.container}>
                    <div className={style.content}>
                        <div className={style.header_tech}>
                            <h2>Tecnología moderna, Sin plantillas.</h2>
                            <TECH_LOGOS />
                            <TECH_TEXT />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.content}>
                    <TECH_ICONS />
                </div>
            </div>
        </section>
    )
}
