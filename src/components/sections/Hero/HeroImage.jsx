import FloatingCard from "./FloatingCard";
import hero from "../../../assets/hero.png";

const HeroImage = () => {
    return (
        <div className="relative flex justify-center">

            <img
                src={hero}
                alt=""
                className="w-full max-w-md"
            />

            <FloatingCard
                icon="📚"
                title="Live Classes"
                subtitle="Interactive Learning"
                className="top-10 -left-10"
            />

            <FloatingCard
                icon="💻"
                title="Coding"
                subtitle="Future Skills"
                className="bottom-12 -right-10"
            />

            <FloatingCard
                icon="🎯"
                title="Personal Mentor"
                subtitle="1-on-1 Guidance"
                className="-bottom-6 left-16"
            />

        </div>
    );
};

export default HeroImage;