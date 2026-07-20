import {
    Star,
    Users,
    Clock3,
    Heart,
    BadgeCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";

const CourseCard = ({ course }) => {
    const navigate = useNavigate();
    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* Image */}

            <div className="relative overflow-hidden">

                <img
                    src={course.image}
                    alt={course.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Bestseller */}

                {course.bestSeller && (
                    <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-slate-900">
                        ⭐ Bestseller
                    </div>
                )}

                {/* Wishlist */}

                <button
                    className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur transition hover:bg-red-500 hover:text-white"
                >
                    <Heart size={18} />
                </button>

            </div>

            {/* Content */}

            <div className="p-6">

                {/* Category */}

                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                    {course.category}
                </span>

                {/* Title */}

                <h3 className="mt-4 line-clamp-2 text-xl font-bold text-slate-900">
                    {course.title}
                </h3>

                {/* Teacher */}

                <div className="mt-4 flex items-center gap-3">

                    <img
                        src={course.teacherImage}
                        alt={course.teacher}
                        className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>

                        <p className="font-medium text-slate-800">
                            {course.teacher}
                        </p>

                        <div className="flex items-center gap-1 text-xs text-slate-500">

                            <BadgeCheck
                                size={14}
                                className="text-blue-600"
                            />

                            Verified Educator

                        </div>

                    </div>

                </div>

                {/* Stats */}

                <div className="mt-5 flex items-center justify-between text-sm text-slate-500">

                    <div className="flex items-center gap-1">

                        <Star
                            size={16}
                            fill="#FBBF24"
                            color="#FBBF24"
                        />

                        {course.rating}

                    </div>

                    <div className="flex items-center gap-1">

                        <Users size={16} />

                        {course.students}

                    </div>

                    <div className="flex items-center gap-1">

                        <Clock3 size={16} />

                        {course.duration}

                    </div>

                </div>

                {/* Price */}

                <div className="mt-6 flex items-center gap-3">

                    <span className="text-2xl font-bold text-slate-900">
                        ₹{course.price}
                    </span>

                    <span className="text-slate-400 line-through">
                        ₹{course.originalPrice}
                    </span>

                </div>

                {/* Button */}

                <div className="mt-6">

                    <Button
                        onClick={() => navigate(`/courses/${course.id}`)}
                        className="w-full">
                        View Course
                    </Button>

                </div>

            </div>

        </div>
    );
};

export default CourseCard;