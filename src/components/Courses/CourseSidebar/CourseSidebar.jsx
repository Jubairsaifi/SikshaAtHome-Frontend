const boards = [
    "CBSE",
    "ICSE",
    "IGCSE",
    "IB",
    "GCSE",
];

const levels = [
    "Beginner",
    "Intermediate",
    "Advanced",
];

const CourseSidebar = () => {
    return (
        <div className="sticky top-44 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-bold text-slate-900">
                Filters
            </h2>

            {/* Boards */}

            <div className="border-b border-slate-200 pb-6">

                <h3 className="mb-4 font-semibold text-slate-800">
                    Board
                </h3>

                <div className="space-y-3">

                    {boards.map((board) => (

                        <label
                            key={board}
                            className="flex cursor-pointer items-center gap-3"
                        >
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-purple-600"
                            />

                            <span className="text-slate-600">
                                {board}
                            </span>

                        </label>

                    ))}

                </div>

            </div>

            {/* Level */}

            <div className="mt-6">

                <h3 className="mb-4 font-semibold text-slate-800">
                    Level
                </h3>

                <div className="space-y-3">

                    {levels.map((level) => (

                        <label
                            key={level}
                            className="flex cursor-pointer items-center gap-3"
                        >
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-purple-600"
                            />

                            <span className="text-slate-600">
                                {level}
                            </span>

                        </label>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default CourseSidebar;