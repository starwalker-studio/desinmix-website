import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGears, faCartShopping, faBullseye, faDatabase } from '@fortawesome/free-solid-svg-icons';
import style from './Content.module.scss';

export const SInfo = () => {
  return (
    <section className={style.info_container}>
        <div className={style.info_content}>
            <div className={style.header}>
                <h2>Servicios digitales para impulsar tu negocio</h2>
                <p>Diseños creados a la medida de tus necesidades</p>
            </div>
            <div className={style.info_grid_3}>
                <div className={style.item}>
                    <span><FontAwesomeIcon icon={faGlobe} /></span>
                    <h3>Diseño de páginas web Informativas</h3>
                    <p>Una web informativa bien diseñada que comunica quién eres y qué ofreces desde el primer vistazo.</p>
                </div>
                <div className={style.item}>
                    <span><FontAwesomeIcon icon={faGears} /></span>
                    <h3>Diseño de páginas web Autoadministrables</h3>
                    <p>Control total de tu contenido gracias a un dashboard donde podrás editar tu sitio sin depender de terceros.</p>
                </div>
                <div className={style.item}>
                    <span><FontAwesomeIcon icon={faCartShopping} /></span>
                    <h3>Diseño de páginas web para Reservación o E-commerce</h3>
                    <p>Convierte tu idea en un negocio digital con plataformas de venta o reservación listas para operar.</p>
                </div>
            </div>
            <div className={style.info_grid_2}>
                <div className={style.item}>
                    <span><FontAwesomeIcon icon={faBullseye} /></span>
                    <h3>Diseño de Landing Pages</h3>
                    <p>Páginas diseñadas para convertir visitantes en clientes, perfectas para campañas y anuncios.</p>
                </div>
                <div className={style.item}>
                    <span><FontAwesomeIcon icon={faDatabase} /></span>
                    <h3>Diseño de páginas Empresariales</h3>
                    <p>Desarrollo de plataformas empresariales con panel de control para gestionar clientes, productos y procesos internos.</p>
                </div>
            </div>
            <div className={style.see_more_button}>
                <button>Ver Más</button>
            </div>
        </div>
    </section>
  )
}
