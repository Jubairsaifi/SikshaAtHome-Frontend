import { motion } from "framer-motion";

const JourneyCard = ({
    step,
    icon: Icon,
    title,
    description,
    isLast,
}) => {
    return (
        <div className="relative flex flex-col items-center text-center">

            {/* Connector Line */}

            {!isLast && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-slate-200 z-0" />
            )}

            {/* Circle */}

            <motion.div
                whileHover={{
                    scale: 1.08,
                }}
                className="relative z-10 w-20 h-20 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg"
            >
                <Icon size={34} />
            </motion.div>

            {/* Step */}

            <span className="mt-5 text-sm font-semibold text-purple-600">
                STEP {step}
            </span>

            {/* Title */}

            <h3 className="mt-2 text-xl font-bold text-slate-900">
                {title}
            </h3>

            {/* Description */}

            <p className="mt-3 text-slate-600 leading-7">
                {description}
            </p>

        </div>
    );
};

export default JourneyCard;