import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import TeacherCarousel from "./TeacherCarousel";

const TeacherSection = () => {
    return (
        <section className="py-24 bg-slate-50">

            <Container>

                <SectionHeading
                    subtitle="Meet Our Expert Teachers"
                    title="Learn From Passionate Educators Around the World"
                />

                <TeacherCarousel />

            </Container>

        </section>
    );
};

export default TeacherSection;