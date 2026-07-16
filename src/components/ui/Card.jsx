import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className={`
        bg-white
        rounded-3xl
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        border
        border-slate-100
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
};

export default Card;