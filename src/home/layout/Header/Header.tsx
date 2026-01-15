import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HEADER_ENV, MOBILE_MENU } from "../../../env/header.env";
import * as NavElements from "../../../env/elements/Header";
import { useScrollDown } from "../../../hooks/useScrollDown";
import { useMobileScreen } from "../../../hooks/useMobileScreen";
import { motion } from "framer-motion";
import style from "./Header.module.scss";
import { useState } from "react";

export const Header = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { background, navbarTransition, navbarEffects } = useScrollDown();
  const { isMobileScreen, handleClick, nav_transition } = useMobileScreen();

  return (
    <>
      <motion.nav
        className={style.navbar}
        animate={background}
        variants={navbarEffects}
        transition={navbarTransition}
      >
        <div className={style.nav_container}>
          <div className={style.nav_wrapper}>
            <div className={style.icon_menu_group}>
              <div className={style.a_nav_logo}>
                <NavLink to={"/"}>
                  <img src={HEADER_ENV.HEADER.LOGO} alt="logo" />
                </NavLink>
              </div>
              {isMobileScreen() ? (
                <>
                  <div className={style.mobile_icon}>
                    <span onClick={() => handleClick()}>
                      <FontAwesomeIcon icon={faBars} />
                    </span>
                  </div>
                </>
              ) : (
                <NavElements.HeaderMenu style={style} />
              )}
            </div>
            <NavElements.HeaderNavButtons style={style} />
          </div>
        </div>
      </motion.nav>
      {isMobileScreen() && (
        <div className={style.nav_overlay}>
          <nav className={style.nav_mobile} style={nav_transition}>
            <div className={style.nav_mobile_container}>
              <div className={style.display_pages}>
                <h2>Secciones</h2>
                <ul>
                  {MOBILE_MENU.map((item, index) => (
                    <li key={index}>
                      {item.children ? (
                        <>
                          <div
                            className={style.menu_item}
                            onClick={() =>
                              setOpenSubmenu(
                                openSubmenu === item.label ? null : item.label
                              )
                            }
                          >
                            <span>
                              <FontAwesomeIcon icon={item.icon} />
                            </span>
                            <p>{item.label}</p>
                          </div>

                          {openSubmenu === item.label && (
                            <ul className={style.submenu}>
                              {item.children.map((sub, i) => (
                                <li key={i} onClick={handleClick}>
                                  <NavLink to={sub.href}>{sub.label}</NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <li onClick={handleClick}>
                          <NavLink to={item.href}>
                            <span>
                              <FontAwesomeIcon icon={item.icon} />
                            </span>
                            <p>{item.label}</p>
                          </NavLink>
                        </li>
                      )}
                    </li>
                  ))}
                </ul>
                <div className={style.button_wrapper_mobile}>
                  <button onClick={() => handleClick()}>Cerrar Menú</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
