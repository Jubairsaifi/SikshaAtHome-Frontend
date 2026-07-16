import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import FeatureCard from "./FeatureCard";
import { features } from "./featureData";

const Features = () => {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <SectionHeading
                    subtitle="Why Choose Us"
                    title="Why Students Love Siksha At Home"
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {features.map((item) => (
                        <FeatureCard key={item.title} {...item} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;