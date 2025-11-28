import { useState, useEffect } from "react";
import type { isMobileScreenType, handleClick, navTransitionType } from "./types/useMobileScreen.type";
import { HEADER_ENV } from "../env/header.env";


export const useMobileScreen = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const [isNavButtonOn, setIsNavButtonOn] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => { setWidth(window.innerWidth) });
        window.removeEventListener("resize", () => { setWidth(window.innerWidth) });
    }, [width]);

    const isMobileScreen: isMobileScreenType = () => {
        return width <= HEADER_ENV.HEADER.MAX_MOBILE_WIDTH;
    }

    const handleClick: handleClick = () => {
        setIsNavButtonOn(prevState => !prevState);
    }

    const nav_transition: navTransitionType = {
        transition: "all, transform 400ms",
        transform: isNavButtonOn ? "translateX(0px) translateY(0px)" : "translateX(-430px) translateY(0px)"
    }

    return {
        isMobileScreen,
        handleClick,
        nav_transition
    }
}