import { motion } from "framer-motion";

const FloatingCard = ({
    icon,
    title,
    subtitle,
    className = "",
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -6,
            }}
            transition={{ duration: 0.3 }}
            className={`
        absolute
        bg-white
        rounded-2xl
        shadow-xl
        px-4
        py-3
        flex
        items-center
        gap-3
        ${className}
      `}
        >
            <div className="text-3xl">
                {icon}
            </div>

            <div>
                <h3 className="font-semibold text-slate-800">
                    {title}
                </h3>

                <p className="text-sm text-slate-500">
                    {subtitle}
                </p>
            </div>
        </motion.div>
    );
};

export default FloatingCard;