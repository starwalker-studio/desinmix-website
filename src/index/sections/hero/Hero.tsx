import { NavLink } from "react-router-dom";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.overlay} />
      <div className={style.content}>
        <h1>Tu presencia digital con diseño único</h1>
        <p>
          Sitios web modernos, claros y sistemas diseñados para darle confianza
          a tus clientes.
        </p>
        <div className={style.hero_button}>
          <button>
            <NavLink to={"/paquetes"}>Ver paquetes</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};
