import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
    return (
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
                repeat: Infinity,
                duration: 2,
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center text-slate-500"
        >
            <span className="text-sm mb-2 tracking-wide">
                Scroll to Explore
            </span>

            <ChevronDown />
        </motion.div>
    );
};

export default ScrollIndicator;