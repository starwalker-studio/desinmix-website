import { useState, useEffect } from "react";

export const useScrollDown = () => {

    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY <= 50) {
                setScrolled(false);
                setHidden(false);
            } else {
                setScrolled(true);
                if (currentScrollY > lastScrollY) {
                    setHidden(true);
                } else {
                    setHidden(false);
                }
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const background = { 
        backgroundColor: scrolled ? "#04142fe8" : "transparent",
        y: hidden === true ? -100 : 0
    }

    const navbarEffects = {
        initial: { y: 0 },
        visible: { y: 0 },
        hidden: { y: -100 }
    }

    const navbarTransition = {
        transition: {
            duration: 4,
            ease: "easeInOut"
        }
    }

    return {
        navbarEffects,
        background,
        navbarTransition
    }

}