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

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

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