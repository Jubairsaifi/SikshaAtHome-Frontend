import { GraduationCap, Briefcase, BookMarked } from "lucide-react";

const TeacherAbout = ({ teacher }) => {
    return (
        <section className="py-16">

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-10 lg:grid-cols-3">

                    {/* Left */}

                    <div className="lg:col-span-2">

                        <h2 className="text-3xl font-bold text-slate-900">
                            About {teacher.name}
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            {teacher.bio}
                        </p>

                    </div>

                    {/* Right */}

                    <div className="space-y-5">

                        <div className="rounded-2xl border p-5">

                            <div className="flex items-center gap-3">

                                <Briefcase
                                    className="text-purple-600"
                                    size={22}
                                />

                                <div>

                                    <h4 className="font-semibold">
                                        Experience
                                    </h4>

                                    <p className="text-slate-500">
                                        {teacher.experience}
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="rounded-2xl border p-5">

                            <div className="flex items-center gap-3">

                                <GraduationCap
                                    className="text-purple-600"
                                    size={22}
                                />

                                <div>

                                    <h4 className="font-semibold">
                                        Qualification
                                    </h4>

                                    <p className="text-slate-500">
                                        {teacher.qualification}
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="rounded-2xl border p-5">

                            <div className="flex items-center gap-3">

                                <BookMarked
                                    className="text-purple-600"
                                    size={22}
                                />

                                <div>

                                    <h4 className="font-semibold">
                                        Boards
                                    </h4>

                                    <p className="text-slate-500">
                                        {teacher.boards.join(", ")}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default TeacherAbout;