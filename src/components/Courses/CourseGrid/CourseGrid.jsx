import CourseCard from "../CourseCard/CourseCard";
import { courses } from "../courseData";

const CourseGrid = () => {
    return (
        <>
            {/* Top Bar */}

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>
                    <h2 className="text-3xl font-bold text-slate-900">
                        All Courses
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Showing {courses.length} courses
                    </p>
                </div>

                <select
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-purple-500"
                >
                    <option>Newest</option>
                    <option>Highest Rated</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>

            </div>

            {/* Grid */}

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                {courses.map((course) => (

                    <CourseCard
                        key={course.id}
                        course={course}
                    />

                ))}

            </div>

        </>
    );
};

export default CourseGrid;