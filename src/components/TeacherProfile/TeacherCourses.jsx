import SectionHeading from "../../components/ui/SectionHeading";
import CourseCard from "../../components/sections/PopularCourses/CourseCard";
import { courses } from "../../components/Courses/courseData";

const TeacherCourses = ({ teacher }) => {

    const teacherCourses = courses.filter(
        (course) => course.teacherId === teacher.id
    );

    return (
        <section className="py-16">

            <div className="mx-auto max-w-7xl px-6">

                <SectionHeading
                    subtitle="Courses"
                    title={`Courses by ${teacher.name}`}
                />

                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {teacherCourses.map((course) => (

                        <CourseCard
                            key={course.id}
                            course={course}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
};

export default TeacherCourses;