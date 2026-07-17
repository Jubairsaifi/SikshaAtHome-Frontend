import { motion } from "framer-motion";

const GlassCard = ({
    children,
    className = "",
    hover = true,
}) => {
    return (
        <motion.div
            whileHover={
                hover
                    ? {
                        y: -6,
                        scale: 1.03,
                    }
                    : {}
            }
            transition={{
                duration: 0.25,
            }}
            className={`
                rounded-2xl
                border
                border-white/40
                bg-white/70
                backdrop-blur-xl
                shadow-xl
                ${className}
            `}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;