import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-xl transition"
        >
            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <Icon className="text-purple-600" size={28} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
                {title}
            </h3>

            <p className="text-slate-600 leading-7">
                {description}
            </p>
        </motion.div>
    );
};

export default FeatureCard;