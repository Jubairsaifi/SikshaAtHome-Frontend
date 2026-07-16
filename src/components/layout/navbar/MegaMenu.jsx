import { courseMenu } from "../../../constants/navigation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MenuSection = ({ title, items }) => (
    <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>

        <div className="space-y-3">
            {items.map((item) => (
                <Link
                    key={item.title}
                    to={item.path}
                    className="block text-slate-600 hover:text-blue-600 transition"
                >
                    {item.title}
                </Link>
            ))}
        </div>
    </div>
);

const MegaMenu = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 w-full bg-white shadow-2xl border-t border-slate-100"
        >
            <div className="max-w-7xl mx-auto px-8 py-10">

                <div className="grid grid-cols-3 gap-12">

                    <MenuSection
                        title="K-12 Courses"
                        items={courseMenu.k12}
                    />

                    <MenuSection
                        title="Coding Courses"
                        items={courseMenu.coding}
                    />

                    <MenuSection
                        title="Languages"
                        items={courseMenu.language}
                    />

                </div>

            </div>
        </motion.div>
    );
};

export default MegaMenu;