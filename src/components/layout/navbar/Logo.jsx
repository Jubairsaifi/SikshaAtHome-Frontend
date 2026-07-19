import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LeadMath from "../../../assets/Logo(2).png";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="flex items-center">
                <motion.img
                    // whileHover={{ rotate: 8, scale: 1.05 }}
                    // transition={{ duration: 0.3 }}
                    src={LeadMath}
                    alt="LeadMath"
                    className="h-28 w-auto object-contain"
                />
            </div>

            {/* <div className="leading-tight">
                <h1 className="text-xl font-bold text-white-900">
                    LeadMath
                </h1>

                <p className="text-sm text-purple-600 font-medium -mt-1">
                    At Home
                </p>
            </div> */}
        </Link>
    );
};

export default Logo;