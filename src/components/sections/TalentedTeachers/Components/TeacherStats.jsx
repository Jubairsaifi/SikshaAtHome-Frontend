import { Users, BookOpen, Globe } from "lucide-react";

const TeacherStats = ({ teacher }) => {
    console.log("TeacherStats:", teacher);
    return (
        <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3 text-slate-600">
                <Users size={18} className="text-purple-600" />

                <span className="text-sm">
                    <strong className="text-slate-800">
                        {teacher.students}
                    </strong>{" "}
                    Students Taught
                </span>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
                <BookOpen size={18} className="text-purple-600" />

                <span className="text-sm">
                    <strong className="text-slate-800">
                        {teacher.classes}
                    </strong>{" "}
                    Classes Delivered
                </span>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
                <Globe size={18} className="text-purple-600" />

                <span className="text-sm">
                    {teacher.country}
                </span>
            </div>

        </div>
    );
};

export default TeacherStats;