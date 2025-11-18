import style from './Content.module.scss';

export const Service = () => {
    return (
        <section className={style.tech_background}>
            <div className={style.overlay} />
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.content_grid}>
                        <div className={style.text}>
                            <p>
                                Creamos páginas web que transmiten confianza y profesionalismo,
                                diseñadas para atraer nuevos clientes y fortalecer la presencia digital
                                de tu negocio. Ofrecemos diseños modernos y totalmente adaptables a
                                cualquier dispositivo, optimizados para buscadores y protegidos con
                                certificados SSL. Además, desarrollamos sistemas a medida para que
                                puedas gestionar tus productos, clientes o servicios de forma sencilla
                                y eficiente.
                            </p>
                        </div>

                        <div className={style.code_img}>
                            <img src="/index/content/code-tech.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
