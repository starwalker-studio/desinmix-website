import style from './Hero.module.scss';

export const Hero = () => {
    return (
        <section className={style.hero}>
            <div className={style.overlay} />
            <div className={style.content}>
                <h1>Creamos tu presencia profesional en la web.</h1>
                <p>Sitios web modernos, claros y sistemas diseñados para darle confianza a tus clientes.</p>
                <button>Ver paquetes</button>
            </div>
        </section>
    )
}
