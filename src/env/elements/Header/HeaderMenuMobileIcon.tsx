import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                                {
                                    item.dropdown ? (
                                        <span className={style.inactive_item}>
                                            {item.label}
                                            <FontAwesomeIcon icon={item.icon!} />
                                        </span>
                                    ) : (
                                        <NavLink className={({ isActive }) =>
                                            classNames(
                                                isActive && style.item_active
                                            )
                                        } to={item.path!} end>
                                            {item.label}
                                        </NavLink>
                                    )
                                }
                                {
                                    item.dropdown && (
                                        <ul key={item.id} className={style.dropdown}>
                                            {item.dropdown.map((sub) => (
                                                <li key={sub.id}>
                                                    <NavLink className={({ isActive }) =>
                                                        classNames(
                                                            isActive && style.sub_item_active
                                                        )
                                                    } to={sub.path} end>
                                                        {sub.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}
