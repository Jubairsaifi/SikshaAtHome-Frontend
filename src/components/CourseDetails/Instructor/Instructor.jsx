import { BadgeCheck, Users, BookOpen, Globe } from "lucide-react";
import Button from "../../ui/Button";
import teacher1 from "../../../assets/teachers/teacher1.jpg";
import { useNavigate } from "react-router-dom";


const Instructor = ({ teacher }) => {
    const navigate = useNavigate();
    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
                Meet Your Instructor
            </h2>

            <div className="mt-8 flex flex-col gap-8 md:flex-row">

                {/* Teacher Image */}

                <img
                    src={teacher.image}
                    alt="Teacher"
                    className="h-52 w-52 rounded-3xl object-cover"
                />

                {/* Details */}

                <div className="flex-1">

                    <div className="flex items-center gap-2">

                        <h3 className="text-2xl font-bold">
                            {teacher.name}
                        </h3>

                        <BadgeCheck
                            className="text-blue-600"
                            size={22}
                        />

                    </div>

                    <p className="mt-2 text-purple-600 font-semibold">
                        {teacher.subject}
                    </p>

                    {/* Stats */}

                    <div className="mt-8 grid gap-5 md:grid-cols-3">

                        <div className="rounded-2xl bg-slate-50 p-5">

                            <Users
                                className="text-purple-600"
                                size={24}
                            />

                            <h4 className="mt-3 text-2xl font-bold">
                                {teacher.students}
                            </h4>

                            <p className="text-sm text-slate-500">
                                Students
                            </p>

                        </div>

                        <div className="rounded-2xl bg-slate-50 p-5">

                            <BookOpen
                                className="text-purple-600"
                                size={24}
                            />

                            <h4 className="mt-3 text-2xl font-bold">
                                {teacher.classes}
                            </h4>

                            <p className="text-sm text-slate-500">
                                Classes
                            </p>

                        </div>

                        <div className="rounded-2xl bg-slate-50 p-5">

                            <Globe
                                className="text-purple-600"
                                size={24}
                            />

                            <h4 className="mt-3 text-2xl font-bold">
                                {teacher.country}
                            </h4>

                            <p className="text-sm text-slate-500">
                                Country
                            </p>

                        </div>

                    </div>

                    {/* About */}

                    <p className="mt-8 leading-8 text-slate-600">

                        Ajay has over 8 years of experience teaching
                        Mathematics to CBSE, ICSE and IGCSE students.
                        His teaching methodology focuses on conceptual
                        clarity, problem solving and practical
                        application.

                    </p>

                    <div className="mt-8">

                        <Button onClick={() => navigate(`/teachers/${teacher.id}`)}>
                            View Full Profile
                        </Button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Instructor;