import { motion } from "framer-motion";
import { Star, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-56">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {course.popular && (
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        Most Popular
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                    {course.title}
                </h3>

                <p className="mt-2 text-slate-500">
                    {course.level}
                </p>

                <div className="flex justify-between mt-6">

                    <div className="flex items-center gap-2">
                        <Star
                            className="text-yellow-400 fill-yellow-400"
                            size={18}
                        />
                        <span>{course.rating}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Users size={18} />
                        <span>{course.students}</span>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-between">

                    <div>
                        <p className="text-sm text-slate-500">
                            Starting From
                        </p>

                        <h4 className="text-xl font-bold text-blue-600">
                            {course.price}
                        </h4>
                    </div>

                    <Link
                        to={course.link}
                        className="flex items-center gap-2 font-semibold text-blue-600 hover:gap-3 transition-all"
                    >
                        Explore

                        <ArrowRight size={18} />
                    </Link>

                </div>

            </div>
        </motion.div>
    );
};

export default CourseCard;