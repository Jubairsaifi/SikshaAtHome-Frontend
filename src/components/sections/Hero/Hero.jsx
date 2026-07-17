import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-36 pb-24">
            <FloatingShapes />
            <Container>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <HeroContent />

                    <HeroImage />

                </div>

            </Container>

        </section>
    );
};

export default Hero;