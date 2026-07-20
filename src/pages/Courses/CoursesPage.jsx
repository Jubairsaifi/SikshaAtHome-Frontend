import Container from "../../components/ui/Container";

import CourseHero from "../../components/Courses/CourseHero/CourseHero";
import CourseFilters from "../../components/Courses/CourseFilters/CourseFilters";
import CourseSidebar from "../../components/Courses/CourseSidebar/CourseSidebar";
import CourseGrid from "../../components/Courses/CourseGrid/CourseGrid";

const CoursesPage = () => {
    return (
        <>
            <CourseHero />

            <CourseFilters />

            <section className="py-16 bg-slate-50">
                <Container>

                    <div className="grid gap-10 lg:grid-cols-4">

                        <aside className="lg:col-span-1">
                            <CourseSidebar />
                        </aside>

                        <main className="lg:col-span-3">
                            <CourseGrid />
                        </main>

                    </div>

                </Container>
            </section>
        </>
    );
};

export default CoursesPage;