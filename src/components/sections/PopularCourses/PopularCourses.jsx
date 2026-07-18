import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import CourseCard from "./CourseCard";
import { courses } from "./courseData";
import Carousel from "../../ui/Carousel";


const PopularCourses = () => {
    return (
        <section id="PopularCourses" className="py-24 bg-white">
            <Container>

                <SectionHeading
                    subtitle="Popular Courses"
                    title="Explore Our Most Loved Courses"
                />

                <div className="mt-12">
                    <Carousel>
                        {courses.map((course) => (

                            <CourseCard
                                key={course.id}
                                course={course}
                            />
                        ))}
                    </Carousel>

                </div>

            </Container>
        </section>
    );
};

export default PopularCourses;