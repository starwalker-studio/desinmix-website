import {
  faBullseye,
  faCartShopping,
  faDatabase,
  faGears,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import style from "./Content.module.scss";

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
            <div className={style.item_header}>
              <span>
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <h3>Páginas web Informativas</h3>
            </div>
            <p>
              Una web informativa bien diseñada que comunica quién eres y qué
              ofreces desde el primer vistazo.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.item_header}>
              <span>
                <FontAwesomeIcon icon={faGears} />
              </span>
              <h3>Páginas web Autoadministrables</h3>
            </div>
            <p>
              Control total de tu contenido gracias a un dashboard donde podrás
              editar tu sitio sin depender de terceros.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.item_header}>
              <span>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <h3>E-commerce</h3>
            </div>
            <p>
              Convierte tu idea en un negocio digital con plataformas de venta o
              reservación listas para operar.
            </p>
          </div>
        </div>
        <div className={style.info_grid_2}>
          <div className={style.item}>
            <div className={style.item_header}>
              <span>
                <FontAwesomeIcon icon={faBullseye} />
              </span>
              <h3>Landing Pages</h3>
            </div>
            <p>
              Páginas diseñadas para convertir visitantes en clientes, perfectas
              para campañas y anuncios.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.item_header}>
              <span>
                <FontAwesomeIcon icon={faDatabase} />
              </span>
              <h3>Páginas Empresariales</h3>
            </div>
            <p>
              Desarrollo de plataformas empresariales con panel de control para
              gestionar clientes, productos y procesos internos.
            </p>
          </div>
        </div>
        <div className={style.see_more_button}>
          <button>
            <NavLink to={"/servicios/diseno-web"}>Ver Más</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};
