import CourseHero from "../../components/CourseDetails/CourseHero/CourseHero";
import CourseContent from "../../components/CourseDetails/CourseContent/CourseContent";
import CourseSidebar from "../../components/CourseDetails/CourseSidebar/CourseSidebar";
import RelatedCourses from "../../components/CourseDetails/RelatedCourses/RelatedCourses";

import Container from "../../components/ui/Container";
import { useParams } from "react-router-dom";
import { courses } from "../../components/Courses/courseData";
import { teachers } from "../../components/sections/TalentedTeachers/teacherData";

const CourseDetails = () => {
    const { id } = useParams();
    const course = courses.find(
        (item) => item.id === Number(id)
    );

    const teacher = teachers.find(
        (item) => item.id === course.teacherId
    );
    if (!course) {
        return (
            <div className="py-40 text-center text-2xl font-bold">
                Course Not Found
            </div>
        );
    }
    return (
        <>
            <CourseHero course={course} teacher={teacher} />

            <section className="py-16 bg-slate-50">
                <Container>

                    <div className="grid gap-10 lg:grid-cols-3">

                        <div className="lg:col-span-2">
                            <CourseContent course={course} teacher={teacher} />
                        </div>

                        <div className="lg:col-span-1">
                            <CourseSidebar course={course} teacher={teacher} />
                        </div>

                    </div>
                    <RelatedCourses />
                </Container>
            </section>
        </>
    );
};

export default CourseDetails;