import { useState } from "react";
import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react";

const curriculum = [
    {
        title: "Module 1 - Number System",
        duration: "8 Lessons • 5 Hours",
        lessons: [
            "Introduction",
            "Natural Numbers",
            "Whole Numbers",
            "Integers",
            "Fractions",
            "Practice Quiz",
        ],
    },
    {
        title: "Module 2 - Algebra",
        duration: "10 Lessons • 8 Hours",
        lessons: [
            "Variables",
            "Expressions",
            "Equations",
            "Word Problems",
            "Practice Worksheet",
        ],
    },
    {
        title: "Module 3 - Geometry",
        duration: "12 Lessons • 10 Hours",
        lessons: [
            "Basic Shapes",
            "Angles",
            "Triangles",
            "Quadrilaterals",
            "Circles",
            "Assignment",
        ],
    },
];

const Curriculum = ({ course }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
                Course Curriculum
            </h2>

            <p className="mt-3 text-slate-500">
                Explore everything you'll learn throughout this course.
            </p>

            <div className="mt-8 space-y-4">

                {course.curriculum.map((module, index) => (

                    <div
                        key={module.title}
                        className="overflow-hidden rounded-2xl border border-slate-200"
                    >

                        <button
                            onClick={() =>
                                setOpenIndex(
                                    openIndex === index ? -1 : index
                                )
                            }
                            className="flex w-full items-center justify-between bg-slate-50 px-6 py-5"
                        >

                            <div>

                                <h3 className="text-left text-lg font-semibold text-slate-900">
                                    {module.title}
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    {module.duration}
                                </p>

                            </div>

                            {openIndex === index ? (
                                <ChevronUp />
                            ) : (
                                <ChevronDown />
                            )}

                        </button>

                        {openIndex === index && (

                            <div className="space-y-4 bg-white p-6">

                                {module.lessons.map((lesson) => (

                                    <div
                                        key={lesson}
                                        className="flex items-center gap-3 text-slate-600"
                                    >

                                        <PlayCircle
                                            size={18}
                                            className="text-purple-600"
                                        />

                                        {lesson}

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Curriculum;