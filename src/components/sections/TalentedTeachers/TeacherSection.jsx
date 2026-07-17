import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import TeacherCarousel from "./TeacherCarousel";
import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const TeacherSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50">

            {/* Background Blur */}
            <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

            <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

            <Container>

                <SectionHeading
                    subtitle="Meet Our Expert Teachers"
                    title="Learn From India's Best Educators"
                    description="Experienced mentors dedicated to helping every student achieve academic excellence through engaging live classes."
                />

                {/* Carousel */}

                <div className="mt-16">
                    <TeacherCarousel />
                </div>

                {/* Bottom CTA

                <div className="mt-16 flex flex-col items-center justify-center text-center">

                    <h3 className="text-2xl font-bold text-slate-900">
                        Can't find the perfect teacher?
                    </h3>

                    <p className="mt-3 max-w-xl text-slate-600">
                        Browse our complete faculty and choose the educator
                        who perfectly matches your child's learning goals.
                    </p>

                    <div className="mt-8">
                        <Button
                            onClick={() => navigate("/become-a-teacher")}
                        >
                            Explore All Teachers

                            <ArrowRight
                                className="ml-2"
                                size={18}
                            />
                        </Button>
                    </div>

                </div> */}

            </Container>

        </section>
    );
};

export default TeacherSection;