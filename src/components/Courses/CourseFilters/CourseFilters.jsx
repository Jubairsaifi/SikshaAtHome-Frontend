import Container from "../../ui/Container";

const filters = [
    "All Courses",
    "K-12",
    "Coding",
    "Languages",
    "Olympiads",
    "Competitive Exams",
    "1-on-1",
];

const CourseFilters = () => {
    return (
        <section className="sticky top-20 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
            <Container>

                <div className="flex gap-3 overflow-x-auto py-5 scrollbar-hide">

                    {filters.map((filter, index) => (

                        <button
                            key={filter}
                            className={`
                                whitespace-nowrap
                                rounded-full
                                border
                                px-6
                                py-3
                                text-sm
                                font-medium
                                transition-all
                                duration-300
                                ${index === 0
                                    ? "border-purple-600 bg-purple-600 text-white"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-purple-500 hover:text-purple-600"
                                }
                            `}
                        >
                            {filter}
                        </button>

                    ))}

                </div>

            </Container>
        </section>
    );
};

export default CourseFilters;