import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import CourseCard from "./CourseCard";
import { courses } from "./courseData";

const PopularCourses = () => {
    return (
        <section className="py-24 bg-white">
            <Container>

                <SectionHeading
                    subtitle="Popular Courses"
                    title="Explore Our Most Loved Courses"
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))}

                </div>

            </Container>
        </section>
    );
};

export default PopularCourses;