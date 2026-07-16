import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";

import JourneyCard from "./JourneyCard";
import { journeySteps } from "./journeyData";

const LearningJourney = () => {
    return (
        <section className="py-24 bg-slate-50">

            <Container>

                <SectionHeading
                    subtitle="Learning Journey"
                    title="Start Learning in Just Four Simple Steps"
                />

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 mt-20">

                    {journeySteps.map((item, index) => (
                        <JourneyCard
                            key={item.id}
                            step={item.id}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            isLast={index === journeySteps.length - 1}
                        />
                    ))}

                </div>

            </Container>

        </section>
    );
};

export default LearningJourney;