import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Container from "../../ui/Container";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import NavActions from "./NavActions";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

const NavbarV2 = () => {
    const [showMega, setShowMega] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md"
                    : "bg-white"
                    }`}
            >
                <Container>
                    <div className="h-20 flex items-center justify-between">

                        <Logo />

                        <DesktopMenu onCourseHover={setShowMega} />

                        <NavActions />

                        <MobileMenu />

                    </div>
                </Container>

                <div
                    onMouseEnter={() => setShowMega(true)}
                    onMouseLeave={() => setShowMega(false)}
                >
                    {showMega && <MegaMenu />}
                </div>
            </motion.header>
        </>
    );
};

export default NavbarV2;