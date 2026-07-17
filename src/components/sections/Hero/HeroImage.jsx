import FloatingCard from "./FloatingCard";
import hero from "../../../assets/hero.png";
import { motion } from "framer-motion";

const HeroImage = () => {
    return (
        <div className="relative flex items-center justify-center min-h-[550px]">
            {/* <div
                className="
                    absolute
                    w-[430px]
                    h-[430px]
                    rounded-full
                    bg-gradient-to-br
                    from-blue-200
                    via-purple-200
                    to-cyan-200
                    blur-3xl
                    opacity-70
                    "
            />
            <div
                className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                border
                border-white/50
                "
            /> */}

            <motion.img
                src={hero}
                alt="Student Learning Online"
                className="relative z-10 w-full max-w-lg drop-shadow-[0_30px_60px_rgba(37,99,235,0.25)]"
                animate={{
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
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
                className="bottom-20 -right-5"
            />

            <FloatingCard
                icon="🎯"
                title="Personal Mentor"
                subtitle="1-on-1 Guidance"
                className="-bottom-2 left-16"
            />

            <motion.div
                className="
absolute
top-6
right-0
bg-white
rounded-full
px-4
py-2
shadow-xl
"
            >
                ⭐⭐⭐⭐⭐ 4.9
            </motion.div>

        </div>
    );
};

export default HeroImage;