import React, { useState, useEffect } from "react";
import { FaChartLine, FaUniversity, FaCoins, FaGlobe, FaLightbulb, FaChalkboardTeacher } from "react-icons/fa";
import economicsImg from "./Images/k-12-Courses-Imges/economics-image.jpg"; // 📊 Replace with your image path
import { useNavigate } from "react-router-dom";
const EconomicsCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=economics")
    }

    const faqs = [
        {
            question: "Is this course suitable for school students?",
            answer:
                "Yes! The Economics course is tailored for grade 8–12 students who want to understand economic concepts in simple and practical ways.",
        },
        {
            question: "Will I learn about real-world economic situations?",
            answer:
                "Definitely! The course connects classroom topics with real-life economic trends, markets, and current affairs.",
        },
        {
            question: "Do I need prior knowledge of Economics?",
            answer:
                "No prior experience is required. We start from the basics — from needs and wants to complex economic systems.",
        },
        {
            question: "Are there project-based activities?",
            answer:
                "Yes! Students complete case studies and mini-projects like analyzing demand-supply or creating budget plans.",
        },
        {
            question: "Is this course helpful for board exam preparation?",
            answer:
                "Absolutely. The lessons align with CBSE and ICSE syllabi, covering all key concepts with easy-to-understand examples.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-emerald-50 to-white text-gray-800 min-h-screen py-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 px-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-5xl font-extrabold text-emerald-700 mb-4">
                        Understand the World of Economics 💹
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Learn how money, trade, and decision-making shape our world.
                        From micro to macro — master every concept with clarity and confidence.
                        Explore how governments, businesses, and consumers interact in global markets.
                        Develop analytical thinking to understand real-world economic challenges and policies.
                    </p>
                    <button className="mt-6 bg-emerald-600 text-white font-semibold 
                    px-8 py-3 rounded-full shadow hover:bg-emerald-700 transition"
                        onClick={() => handleClick()}>
                        Book Your Free Trial
                    </button>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={economicsImg}
                        alt="Economics Course"
                        className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition"
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-5xl mx-auto px-6 mt-16 text-center">
                <h2 className="text-3xl font-bold text-emerald-700 mb-6">About the Economics Course</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    This course introduces students to the fascinating study of how people, companies, and countries make choices about resources.
                    We simplify complex topics like production, demand, supply, inflation, and markets through visuals, games, and discussions.
                    Economics is not just about numbers — it's about understanding how the world works.
                </p>
            </section>

            {/* Core Topics */}
            <section className="mt-20 bg-emerald-100 py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-emerald-800 mb-10">Core Topics You’ll Master</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: <FaCoins />, title: "Money & Banking", desc: "Understand how banks operate, create credit, and manage money supply." },
                        { icon: <FaChartLine />, title: "Demand & Supply", desc: "Learn how prices are determined by the interaction of buyers and sellers." },
                        { icon: <FaUniversity />, title: "National Income", desc: "Explore GDP, per capita income, and how a country’s wealth is measured." },
                        { icon: <FaLightbulb />, title: "Inflation & Deflation", desc: "Discover how price changes affect people, companies, and the economy." },
                        { icon: <FaGlobe />, title: "Global Trade", desc: "Understand how countries trade goods and services and why globalization matters." },
                        { icon: <FaChalkboardTeacher />, title: "Economic Policies", desc: "Learn how governments use taxes and budgets to control the economy." },
                    ].map((topic, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-md border-t-4 border-emerald-500 transition"
                        >
                            <div className="text-4xl text-emerald-600 mb-3">{topic.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                            <p className="text-gray-700 text-sm">{topic.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Learning Journey */}
            <section className="max-w-6xl mx-auto mt-20 px-6 text-center">
                <h2 className="text-3xl font-bold text-emerald-700 mb-8">Your Learning Journey</h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
                    {[
                        { step: "Step 1", title: "Understand Concepts", desc: "Learn through visuals and real-world examples." },
                        { step: "Step 2", title: "Apply Knowledge", desc: "Analyze economic problems through activities." },
                        { step: "Step 3", title: "Project Work", desc: "Create mini research projects on market trends." },
                        { step: "Step 4", title: "Excel in Exams", desc: "Revise key formulas and terms with our quick guides." },
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="bg-white border-t-4 border-emerald-600 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="text-emerald-700 font-bold text-lg mb-2">{step.step}</h4>
                            <h5 className="font-semibold mb-1">{step.title}</h5>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto mt-20 px-6">
                <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
                    Frequently Asked Questions 💰
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Quick answers about our Economics course
                </p>

                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-emerald-300 py-3">
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
            </section>

            {/* CTA Section */}
            <section className="text-center mt-20 py-16 bg-emerald-500 text-white">
                <h3 className="text-3xl font-bold mb-4">
                    Ready to Explore the World of Economics?
                </h3>
                <p className="max-w-2xl mx-auto mb-6 text-emerald-100">
                    Enroll today and understand the principles that drive businesses, governments, and everyday life.
                </p>
                <button className="bg-white text-emerald-700 font-semibold 
                px-8 py-3 rounded-full shadow hover:bg-emerald-100 transition"
                    onClick={() => handleClick()}>
                    Book Your Free Trial
                </button>
            </section>
        </div>
    );
};

export default EconomicsCourse;
