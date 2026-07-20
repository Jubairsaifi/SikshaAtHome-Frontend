import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import TeacherCarousel from "./TeacherCarousel";

const TeacherSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-purple-50 py-24">
            {/* Background Blur */}

            <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl"></div>

            <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>
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