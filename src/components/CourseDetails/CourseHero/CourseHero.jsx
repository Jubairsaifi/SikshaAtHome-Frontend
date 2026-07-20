import {
    Star,
    Users,
    Clock3,
    Globe,
    BadgeCheck,
} from "lucide-react";

import Container from "../../ui/Container";
import teacher1 from "../../../assets/teachers/teacher1.jpg";

const CourseHero = ({ course, teacher }) => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-20 mt-10">

            {/* Background Blur */}

            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>

            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

            <Container>

                <div className="relative z-10 max-w-4xl">

                    {/* Breadcrumb */}

                    <p className="text-sm text-purple-200">

                        Home

                        <span className="mx-2">/</span>

                        Courses

                        <span className="mx-2">/</span>

                        Mathematics

                    </p>

                    {/* Bestseller */}

                    <div className="mt-6 inline-flex items-center rounded-full bg-yellow-400 px-4 py-2 font-semibold text-slate-900">

                        ⭐ Bestseller

                    </div>

                    {/* Title */}

                    <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white">

                        {course.title}

                    </h1>

                    {/* Subtitle */}

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-purple-100">

                        {course.subtitle}

                    </p>

                    {/* Stats */}

                    <div className="mt-8 flex flex-wrap gap-6 text-white">

                        <div className="flex items-center gap-2">

                            <Star
                                size={18}
                                fill="#FBBF24"
                                color="#FBBF24"
                            />

                            <span>{course.rating}</span>

                        </div>

                        <div className="flex items-center gap-2">

                            <Users size={18} />

                            <span>{course.students}</span>

                        </div>

                        <div className="flex items-center gap-2">

                            <Clock3 size={18} />

                            <span>{course.duration}</span>

                        </div>

                        <div className="flex items-center gap-2">

                            <Globe size={18} />

                            <span>English</span>

                        </div>

                    </div>

                    {/* Teacher */}

                    <div className="mt-10 flex items-center gap-4">

                        <img
                            src={course.teacherImage}
                            alt=""
                            className="h-14 w-14 rounded-full object-cover border-2 border-white"
                        />

                        <div>

                            <h3 className="flex items-center gap-2 text-white font-semibold">

                                {course.teacher}

                                <BadgeCheck
                                    className="text-blue-400"
                                    size={18}
                                />

                            </h3>

                            <p className="text-purple-200">

                                {course.expert}

                            </p>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default CourseHero;