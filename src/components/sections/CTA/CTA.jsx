import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Container from "../../ui/Container";

const CTA = () => {
    const navigate = useNavigate();

    const features = [
        "Free Trial Class",
        "Expert Teachers",
        "Flexible Timings",
        "Personalized Learning",
    ];

    return (
        <section className="py-24">
            <Container>

                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 text-white px-8 md:px-16 py-20">

                    {/* Background Blur */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center">

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Unlock Your Child's Full Potential
                        </motion.h2>

                        <p className="mt-6 text-lg text-blue-100 leading-8">
                            Personalized one-on-one learning with experienced teachers,
                            flexible schedules and continuous progress tracking.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-10">


                            <button
                                onClick={() => navigate("/book-a-free-trial")}
                                className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-full hover:scale-105 duration-300"
                            >
                                Book Free Trial
                            </button>
                            {/* 
                            <button
                                onClick={() => navigate("/become-a-teacher")}
                                className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-700 duration-300"
                            >
                                Become a Teacher
                            </button> */}

                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

                            {features.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-center gap-2 text-sm md:text-base"
                                >
                                    <CheckCircle size={18} />
                                    <span>{item}</span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
};

export default CTA;