import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Stats from "./Stats";

const HeroContent = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-xl">

            {/* Badge */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
                <Star size={16} fill="currentColor" />
                Trusted by thousands of students
            </motion.div>

            {/* Heading */}

            <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900"
            >
                Learn Without

                <span className="block text-blue-600">
                    Limits.
                </span>
            </motion.h1>

            {/* Description */}

            <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 mt-6 leading-8"
            >
                Personalized online learning for Grades 1–12,
                Coding, Languages and Competitive Exams,
                taught by India's best educators.
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
                    Book Free Trial
                </Button>

                <Button
                    variant="secondary"
                    onClick={() => navigate("/explore-k-12-courses")}
                >
                    Explore Courses

                    <ArrowRight
                        size={18}
                        className="ml-2"
                    />
                </Button>
            </motion.div>

            <Stats />

        </div>
    );
};

export default HeroContent;