import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SikshaLogo from "../../../assets/siksha-logo.png";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-3 shrink-0">
            <motion.img
                whileHover={{ rotate: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={SikshaLogo}
                alt="Siksha At Home"
                className="w-10 h-10 object-contain"
            />

            <div className="leading-tight">
                <h1 className="text-xl font-bold text-white-900">
                    Siksha
                </h1>

                <p className="text-sm text-purple-600 font-medium -mt-1">
                    At Home
                </p>
            </div>
        </Link>
    );
};

export default Logo;