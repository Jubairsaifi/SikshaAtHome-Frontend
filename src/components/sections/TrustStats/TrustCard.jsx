import CountUp from "react-countup";
import { motion } from "framer-motion";

const TrustCard = ({ stat }) => {
    const Icon = stat.icon;

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl border border-slate-200 text-center"
        >
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6">
                <motion.div
                    whileHover={{
                        rotate: 8,
                        scale: 1.1,
                    }}
                ><Icon size={32} className="text-purple-600" /></motion.div>

            </div>

            <h3 className="text-4xl font-bold text-purple-600">
                <CountUp
                    end={stat.number}
                    duration={2}
                />
                {stat.suffix}
            </h3>

            <p className="mt-3 text-slate-600 font-medium">
                {stat.title}
            </p>
        </motion.div>
    );
};

export default TrustCard;