import { motion } from "framer-motion";
import { Star, Users, Briefcase, ArrowRight, BadgeCheck } from "lucide-react";
import Button from "../../ui/Button";
import TeacherBadge from "./components/TeacherBadge";
import TeacherStats from "./components/TeacherStats";

const TeacherCard = ({ teacher }) => {
    return (
        <motion.div
            whileHover={{
                y: -10,
            }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
        >

            {/* Featured Badge */}

            {teacher.featured && (
                <div className="absolute left-5 top-5 z-20">
                    <TeacherBadge color="orange">
                        ⭐ Featured
                    </TeacherBadge>
                </div>
            )}

            {/* Image */}

            <div className="relative overflow-hidden">

                <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Rating */}

                <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 backdrop-blur">

                    <Star
                        size={16}
                        fill="#FBBF24"
                        color="#FBBF24"
                    />

                    <span className="text-sm font-semibold">
                        {teacher.rating}
                    </span>

                </div>

            </div>

            {/* Content */}

            <div className="p-6">

                <div className="flex items-center justify-between">

                    <div>

                        <h3 className="text-2xl font-bold text-slate-900">
                            {teacher.name}
                        </h3>

                        <p className="mt-1 text-slate-500">
                            {teacher.subject}
                        </p>

                    </div>

                    <BadgeCheck
                        className="text-blue-600"
                        size={28}
                    />

                </div>

                {/* Boards */}

                <div className="mt-5 flex flex-wrap gap-2">

                    {teacher.boards.map((board) => (

                        <TeacherBadge
                            key={board}
                        >
                            {board}
                        </TeacherBadge>

                    ))}

                </div>

                {/* Stats */}

                <div className="mt-6 grid grid-cols-2 gap-4">

                    <TeacherStats
                        icon={<Users size={18} />}
                        value={teacher.students}
                    />

                    <TeacherStats
                        icon={<Briefcase size={18} />}
                        value={teacher.experience}
                    />

                </div>

                {/* Availability */}

                <div className="mt-6 flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>

                    <span className="text-sm font-medium text-green-600">
                        Available for Live Classes
                    </span>

                </div>

                {/* Button */}

                <div className="mt-8">

                    <Button className="w-full">

                        Book Free Trial

                        <ArrowRight
                            size={18}
                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        />

                    </Button>

                </div>

            </div>

        </motion.div>
    );
};

export default TeacherCard;