import { NavLink } from 'react-router-dom';
import { HEADER_ENV } from '../../../env/header.env';
import style from './Header.module.scss';

export const Header = () => {
    return (
        <div className={style.navbar}>
            <div className={style.nav_container}>
                <div className={style.nav_wrapper}>
                    <NavLink to={"/"} className={style.a_nav_logo}>
                        <img src={HEADER_ENV.HEADER.LOGO} alt="logo" />
                    </NavLink>
                    <nav className={style.nav_menu}>
                        <ul>
                            <li>Inicio</li>
                            <li>Servicios</li>
                            <li>Paquetes</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>
                    {/* <div className={style.button_wrapper}>
                        <button>Contacto</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
