import { CONTENT } from '../../../env/content.env';
import style from './Content.module.scss';

export const Description = () => {
    return (
        <section className={style.tech_background}>
            <div className={style.overlay} />
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.content_grid}>
                        <div className={style.text}>
                            <p>{CONTENT.SERVICE_DETAIL}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
