import { motion } from "framer-motion";
import TeacherBadge from "./components/TeacherBadge";
import TeacherStats from "./components/TeacherStats";

const TeacherCard = ({ teacher }) => {
    return (
        <motion.div
            whileHover={{
                y: -10,
                transition: { duration: 0.25 },
            }}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-300"
        >
            {/* Image */}

            <div className="relative overflow-hidden">

                <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <TeacherBadge
                    rating={teacher.rating}
                    experience={teacher.experience}
                />

            </div>

            {/* Content */}

            <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                    {teacher.name}
                </h3>

                <p className="mt-2 text-slate-600">
                    {teacher.subject}
                </p>

                <span className="mt-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                    {teacher.curriculum}
                </span>

                <TeacherStats teacher={teacher} />

                <button
                    className="mt-6 w-full rounded-xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-900"
                >
                    View Profile
                </button>

            </div>

        </motion.div>
    );
};

export default TeacherCard;