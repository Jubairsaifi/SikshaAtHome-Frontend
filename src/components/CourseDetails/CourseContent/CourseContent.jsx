import { CheckCircle2 } from "lucide-react";
import Curriculum from "../Curriculum/Curriculum";
import Reviews from "../Reviews/Reviews";
import FAQ from "../FAQ/FAQ";
import Instructor from "../Instructor/Instructor";

const learningPoints = [
    "Master concepts from basics to advanced level.",
    "Solve real-world mathematical problems confidently.",
    "Develop analytical and logical thinking.",
    "Practice with worksheets and assignments.",
    "Prepare for school exams and Olympiads.",
    "Get personalized guidance from expert teachers.",
];

const CourseContent = ({ course, teacher }) => {
    return (
        <div className="space-y-10">

            {/* About Course */}

            <section className="rounded-3xl bg-white p-8 shadow-sm">

                <h2 className="text-3xl font-bold text-slate-900">
                    About This Course
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                    {course.description}
                </p>

            </section>

            {/* What You'll Learn */}

            <section className="rounded-3xl bg-white p-8 shadow-sm">

                <h2 className="text-3xl font-bold text-slate-900">
                    What You'll Learn
                </h2>
                <Curriculum course={course} />
                <Reviews />
                <FAQ course={course} />
                <Instructor teacher={teacher} />

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                    {course.learningPoints.map((point) => (

                        <div
                            key={point}
                            className="flex items-start gap-3"
                        >
                            <CheckCircle2
                                className="mt-1 text-green-500"
                                size={20}
                            />

                            <span className="text-slate-600">
                                {point}
                            </span>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    );
};

export default CourseContent;