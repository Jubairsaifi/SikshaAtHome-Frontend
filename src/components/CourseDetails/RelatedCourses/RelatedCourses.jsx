import SectionHeading from "../../ui/SectionHeading";
import PopularCourses from "../../sections/PopularCourses/PopularCourses";

const RelatedCourses = () => {
    return (
        <section className="mt-16">

            <SectionHeading
                subtitle="Related Courses"
                title="You May Also Like"
            />

            <div className="mt-10">
                <PopularCourses />
            </div>

        </section>
    );
};

export default RelatedCourses;