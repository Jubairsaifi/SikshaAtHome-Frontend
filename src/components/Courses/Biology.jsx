import React, { useState, useEffect } from "react";
import { FaLeaf, FaMicroscope, FaDna, FaHeartbeat, FaBookOpen } from "react-icons/fa";
import bioImg from "./Images/k-12-Courses-Imges/biology-image.jpg"; // 🧬 Add your image
import { useNavigate } from "react-router-dom";

const BiologyCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=biology")
    }

    const faqs = [
        {
            question: "Do I need any prior science knowledge to start this course?",
            answer:
                "Not at all! This Biology course starts from the basics and gradually builds advanced understanding through examples and experiments.",
        },
        {
            question: "Are there practical experiments included?",
            answer:
                "Yes! We include safe, home-friendly biology experiments and interactive visuals to help you learn hands-on.",
        },
        {
            question: "Which grade level is this Biology course suitable for?",
            answer:
                "It is designed for students from Grade 8–10, but anyone curious about the living world can join and benefit.",
        },
        {
            question: "Will I get notes and assignments?",
            answer:
                "Yes, you will receive downloadable notes, diagrams, and assignments after every topic to strengthen your concepts.",
        },
        {
            question: "Are the classes live or recorded?",
            answer:
                "We offer both — live interactive sessions for personal guidance and recorded classes for flexible learning.",
        },
    ];

    return (
        <div className="bg-green-50 min-h-screen text-gray-800 pb-20 py-20">
            {/* Header Section */}
            <section className="relative py-16 px-6 text-center py-24">
                <img
                    src={bioImg}
                    alt="Biology Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-orange-500 mb-3 drop-shadow-md">
                        Discover the Living World 🌱
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Dive deep into the science of life — explore cells, plants, animals, ecosystems, and the human body with interactive learning.
                        Understand how living organisms grow, adapt, and interact with their surroundings.
                        Discover the beauty of biology through experiments, visuals, and real-world connections.
                    </p>
                </div>
            </section>

            {/* Key Topics */}
            <section className="max-w-6xl mx-auto px-6 mt-10">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
                    Key Topics Covered
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <FaMicroscope />, title: "Cell Biology", desc: "Understand the structure and function of cells — the building blocks of life." },
                        { icon: <FaLeaf />, title: "Plant Life", desc: "Learn how plants grow, photosynthesize, and support ecosystems." },
                        { icon: <FaDna />, title: "Genetics", desc: "Discover how DNA and genes determine traits and variations among organisms." },
                        { icon: <FaHeartbeat />, title: "Human Body Systems", desc: "Explore organs, tissues, and systems that keep humans alive and healthy." },
                        { icon: <FaBookOpen />, title: "Ecology", desc: "Understand the relationships between organisms and their environment." },
                        { icon: <FaMicroscope />, title: "Microorganisms", desc: "Study microscopic organisms — bacteria, viruses, and fungi — that impact our lives." },
                    ].map((topic, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-green-200 hover:shadow-lg hover:bg-orange-50 transition duration-300"
                        >
                            <div className="text-4xl text-green-600 mb-3">{topic.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{topic.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Learning Path */}
            <section className="max-w-5xl mx-auto mt-16 px-6">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
                    Your Biology Learning Journey
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { step: "1️", title: "Observation", desc: "Begin by observing living organisms and identifying patterns in nature." },
                        { step: "2️", title: "Experimentation", desc: "Perform hands-on activities to explore life processes and biological reactions." },
                        { step: "3️", title: "Analysis", desc: "Interpret findings and connect concepts using critical scientific reasoning." },
                        { step: "4️", title: "Application", desc: "Apply biology knowledge in everyday health, environment, and innovation." },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="bg-orange-50 border-t-4 border-orange-500 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="text-2xl font-bold text-green-500">{s.step}</div>
                            <h4 className="text-lg font-semibold mt-2 mb-1">{s.title}</h4>
                            <p className="text-sm text-gray-700">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Learn Biology */}
            <section className="mt-20 text-center bg-gradient-to-r from-green-100 to-teal-100 py-16 px-6">
                <h2 className="text-3xl font-bold text-orange-500 mb-4">
                    Why Learn Biology?
                </h2>
                <p className="max-w-3xl mx-auto text-gray-700 mb-8">
                    Biology connects us to the living world. It develops curiosity, responsibility, and appreciation for all forms of life — essential for health, environment, and innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        "Develops Scientific Curiosity",
                        "Improves Environmental Awareness",
                        "Supports Medical and Research Careers",
                        "Builds Critical Thinking Skills",
                    ].map((reason, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-4 rounded-lg shadow border border-green-200 w-64 hover:bg-green-50 transition"
                        >
                            <p className="text-sm text-gray-700 font-medium">{reason}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-6 mt-20">
                <h2 className="text-3xl font-bold text-center mb-4 text-orange-500">
                    Frequently Asked Questions 🌿
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Find answers to common queries about our Biology program
                </p>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-green-300 py-3"
                        >
                            <button
                                className="flex justify-between w-full text-left font-medium text-gray-800"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span>{activeFAQ === index ? "−" : "+"}</span>
                            </button>
                            {activeFAQ === index && (
                                <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center mt-16">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                    🌱 Ready to Begin Your Biology Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                    Join our biology classes to explore fascinating life processes, experiments, and real-world applications.
                </p>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-full 
                font-semibold transition"
                    onClick={() => handleClick()}>
                    Book Your Free Trial
                </button>
            </section>
        </div>
    );
};

export default BiologyCourse;
