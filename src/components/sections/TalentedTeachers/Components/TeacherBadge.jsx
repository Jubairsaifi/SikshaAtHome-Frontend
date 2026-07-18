import { Star, Briefcase } from "lucide-react";

const TeacherBadge = ({ rating, experience }) => {
    return (
        <>
            {/* Rating Badge */}

            <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 shadow-md backdrop-blur-sm">
                <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                />

                <span className="text-sm font-semibold text-slate-800">
                    {rating}
                </span>
            </div>

            {/* Experience Badge */}

            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-purple-600 px-3 py-1 text-white shadow-lg">
                <Briefcase size={14} />

                <span className="text-sm font-medium">
                    {experience}
                </span>
            </div>
        </>
    );
};

export default TeacherBadge;