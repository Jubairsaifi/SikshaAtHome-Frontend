import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Stats from "./Stats";

const HeroContent = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-2xl">

            {/* Badge */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-md px-5 py-2 text-sm font-semibold text-blue-700 shadow-lg"
            >
                <Star size={15} fill="currentColor" />
                Rated 4.9/5 by 5,000+ Students
            </motion.div>

            {/* Heading */}

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-8 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900"
            >
                Unlock Your

                <span className="block bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 bg-clip-text text-transparent">
                    Child's Potential
                </span>

                Through Live Learning
            </motion.h1>
            <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

            {/* Description */}

            <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 mt-6 leading-8"
            >
                One-on-one live classes for K–12, Coding, Languages and Olympiad preparation,
                designed to help every child learn with confidence, curiosity and consistency.
            </motion.p>

            {/* Buttons */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mt-8"
            >
                <Button
                    onClick={() => navigate("/book-a-free-trial")}
                >

                    🚀 Book Free Trial

                </Button>

                <Button
                    variant="secondary"
                    onClick={() => {
                        const element = document.getElementById("PopularCourses");

                        if (element) {
                            element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }
                    }}
                >

                    📚 Explore Courses

                </Button>
            </motion.div>
            <div className="flex flex-wrap gap-8 mt-10">

                <div>

                    <p className="font-bold text-2xl">
                        5000+
                    </p>

                    <p className="text-slate-500">
                        Students
                    </p>

                </div>

                <div>

                    <p className="font-bold text-2xl">
                        300+
                    </p>

                    <p className="text-slate-500">
                        Teachers
                    </p>

                </div>

                <div>

                    <p className="font-bold text-2xl">
                        15+
                    </p>

                    <p className="text-slate-500">
                        Countries
                    </p>

                </div>

            </div>

            {/* <Stats /> */}

        </div>
    );
};

export default HeroContent;