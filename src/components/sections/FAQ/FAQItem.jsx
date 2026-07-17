import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ faq, openId, setOpenId }) => {
    const isOpen = openId === faq.id;

    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
                <h3 className="font-semibold text-lg text-slate-800">
                    {faq.question}
                </h3>

                {isOpen ? (
                    <Minus className="text-blue-600" />
                ) : (
                    <Plus className="text-slate-500" />
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: .3 }}
                    >
                        <p className="px-6 pb-6 text-slate-600 leading-8">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQItem;