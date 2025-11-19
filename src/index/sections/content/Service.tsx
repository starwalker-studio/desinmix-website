import { CONTENT } from '../../../env/content.env';
import style from './Content.module.scss';

export const Service = () => {
    return (
        <section className={style.tech_background}>
            <div className={style.overlay} />
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.content_grid}>
                        <div className={style.text}>
                            <p>{CONTENT.SERVICE_DETAIL}</p>
                        </div>
                        <div className={style.code_img}>
                            <img src={CONTENT.SERVICE_IMG} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
