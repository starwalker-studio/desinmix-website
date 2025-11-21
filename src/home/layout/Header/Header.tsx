import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { HEADER_ENV } from '../../../env/header.env';
import { useScrollDown } from '../../../hooks/useScrollDown';
import { motion } from 'framer-motion';
import style from './Header.module.scss';

export const Header = () => {

    const { background, navbarTransition, navbarEffects } = useScrollDown();

    type ClassValue = string | false | null | undefined;

    function classNames(...classes: ClassValue[]): string {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <motion.nav
            className={style.navbar}
            animate={background}
            variants={navbarEffects}
            transition={navbarTransition}>
            <div className={style.nav_container}>
                <div className={style.nav_wrapper}>
                    <div className={style.icon_menu_group}>
                        <div className={style.a_nav_logo}>
                            <NavLink to={"/"}>
                                <img src={HEADER_ENV.HEADER.LOGO} alt="logo" />
                            </NavLink>
                        </div>
                        <nav className={style.nav_menu}>
                            <ul>
                                {
                                    HEADER_ENV.NAV_LINK.map((item) => (
                                        <li key={item.id}>
                                            <NavLink className={({ isActive }) =>
                                                classNames(
                                                    isActive && style.item_active,
                                                    style.item
                                                )
                                            } to={item.path} end>
                                                {item.label}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className={style.nav_buttons}>
                        <div className={style.contact_button}>
                            <button>
                                Contacto
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            </button>
                        </div>
                        <div className={style.whats_button}>
                            <button>
                                WhatsApp
                                <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
