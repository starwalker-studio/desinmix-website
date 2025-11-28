import { NavLink } from "react-router-dom";
import { HEADER_ENV } from "../../header.env";
import type { ClassValue, HeaderElementsProps } from "../../types/header.types";

export const HeaderMenu = ({ style }: HeaderElementsProps) => {

    function classNames(...classes: ClassValue[]): string {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <>
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
        </>
    )
}
