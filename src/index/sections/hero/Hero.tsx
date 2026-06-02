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
        <div className={style.buttons}>
          <NavLink className={style.hero_button} to={"/paquetes"}>
            <button>Ver paquetes</button>
          </NavLink>
          <NavLink className={style.hero_button} to={"/portafolio"}>
            <button>Ver portafolio</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
