import { BadgeCheck, Star, Users, BookOpen, Globe } from "lucide-react";

const TeacherHero = ({ teacher }) => {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white">

            <div className="mx-auto max-w-7xl px-6">

                <div className="flex flex-col items-center gap-10 md:flex-row">

                    {/* Image */}

                    <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="h-56 w-56 rounded-3xl border-4 border-white object-cover shadow-2xl"
                    />

                    {/* Content */}

                    <div className="flex-1">

                        <div className="flex items-center gap-2">

                            <h1 className="text-4xl font-bold">
                                {teacher.name}
                            </h1>

                            <BadgeCheck
                                className="text-blue-300"
                                size={28}
                            />

                        </div>

                        <p className="mt-3 text-xl text-purple-100">
                            {teacher.subject}
                        </p>

                        {/* Rating */}

                        <div className="mt-5 flex items-center gap-2">

                            <Star
                                size={18}
                                fill="#FBBF24"
                                color="#FBBF24"
                            />

                            <span className="font-medium">
                                {teacher.rating}
                            </span>

                        </div>

                        {/* Stats */}

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">

                            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

                                <Users size={22} />

                                <h3 className="mt-2 text-2xl font-bold">
                                    {teacher.students}
                                </h3>

                                <p className="text-sm text-purple-100">
                                    Students
                                </p>

                            </div>

                            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

                                <BookOpen size={22} />

                                <h3 className="mt-2 text-2xl font-bold">
                                    {teacher.classes}
                                </h3>

                                <p className="text-sm text-purple-100">
                                    Classes
                                </p>

                            </div>

                            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

                                <Globe size={22} />

                                <h3 className="mt-2 text-2xl font-bold">
                                    {teacher.country}
                                </h3>

                                <p className="text-sm text-purple-100">
                                    Country
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default TeacherHero;