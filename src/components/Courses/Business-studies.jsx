import React, { useState, useEffect } from "react";
import { FaBriefcase, FaUsers, FaChartBar, FaHandshake, FaBalanceScale, FaRegLightbulb } from "react-icons/fa";
import businessImg from "./Images/k-12-Courses-Imges/business-studies-image (2).jpg"; // 🏢 Replace with your image path
import { useNavigate } from "react-router-dom";
const BusinessStudiesCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };


    const handleClick = () => {
        Navigate("/book-a-free-trial/subject=business-studies")
    }

    const faqs = [
        {
            question: "Is Business Studies suitable for beginners?",
            answer:
                "Yes! This course is designed for school students who want to understand the fundamentals of management, trade, and entrepreneurship in a simple and engaging way.",
        },
        {
            question: "What are the main topics covered?",
            answer:
                "We cover management principles, marketing, finance, entrepreneurship, business environment, and organizational structure.",
        },
        {
            question: "Do I need prior knowledge of commerce?",
            answer:
                "Not at all! The course begins with the basics of trade and business activities and gradually builds up to advanced topics.",
        },
        {
            question: "Are there case studies and projects?",
            answer:
                "Yes! Students participate in real-world case studies, simulations, and project-based assignments to apply theoretical knowledge.",
        },
        {
            question: "Does this course help for board exams?",
            answer:
                "Absolutely. It’s structured according to CBSE and ICSE syllabi and helps students build conceptual clarity and answer-writing skills.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800 min-h-screen py-20">
            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 overflow-hidden">
                <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
                        Master the World of <span className="text-yellow-500">Business</span> 🏢
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Learn how organizations work, how leaders make decisions, and how businesses grow.
                        Build your business acumen and leadership skills for the future.
                        Explore management strategies, marketing principles, and entrepreneurship essentials.
                        Understand how innovation, teamwork, and ethics drive success in the corporate world.
                    </p>
                    <button className="mt-6 bg-yellow-500 text-blue-900 font-semibold px-8 py-3 
                    rounded-full shadow hover:bg-yellow-400 transition"
                        onClick={() => handleClick()}>
                        Book Your Free Trial
                    </button>
                </div>

                <div className="md:w-1/2 flex justify-center relative">
                    <img
                        src={businessImg}
                        alt="Business Studies"
                        className="rounded-2xl shadow-2xl w-full max-w-md hover:scale-105 transition duration-300"
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-5xl mx-auto px-6 mt-12 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">About the Business Studies Course</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    This course helps students understand how businesses operate in a competitive world. From management principles to marketing strategies,
                    students explore every function that contributes to the success of an organization. Learn to think like a leader and act like an entrepreneur.
                </p>
            </section>

            {/* Key Modules */}
            <section className="mt-20 bg-yellow-50 py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Core Modules You’ll Study</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: <FaBriefcase />, title: "Principles of Management", desc: "Learn about planning, organizing, staffing, directing, and controlling." },
                        { icon: <FaUsers />, title: "Business Organization", desc: "Understand how companies are structured and managed for growth." },
                        { icon: <FaChartBar />, title: "Marketing Management", desc: "Study market research, promotion, and customer relationship building." },
                        { icon: <FaHandshake />, title: "Entrepreneurship", desc: "Develop creative thinking and innovation skills to start your own business." },
                        { icon: <FaBalanceScale />, title: "Financial Management", desc: "Analyze how businesses manage money, investments, and budgets." },
                        { icon: <FaRegLightbulb />, title: "Business Environment", desc: "Learn how economic, legal, and social factors influence businesses." },
                    ].map((topic, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-t-4 border-yellow-500 transition"
                        >
                            <div className="text-4xl text-blue-800 mb-3">{topic.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 text-blue-900">{topic.title}</h3>
                            <p className="text-gray-700 text-sm">{topic.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Learning Stages */}
            <section className="max-w-6xl mx-auto mt-20 px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Your Learning Pathway</h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
                    {[
                        { step: "Stage 1", title: "Concept Building", desc: "Understand business terms and key principles." },
                        { step: "Stage 2", title: "Practical Learning", desc: "Participate in activities and business simulations." },
                        { step: "Stage 3", title: "Case Studies", desc: "Analyze real-life business examples and learn decision-making." },
                        { step: "Stage 4", title: "Assessment & Growth", desc: "Test your knowledge and develop business strategies." },
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="bg-white border-t-4 border-blue-900 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="text-yellow-500 font-bold text-lg mb-2">{step.step}</h4>
                            <h5 className="font-semibold mb-1 text-blue-900">{step.title}</h5>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto mt-20 px-6">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
                    Frequently Asked Questions 💼
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Common queries about our Business Studies Course
                </p>

                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-yellow-400 py-3">
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
            <section className="text-center mt-20 py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                <h3 className="text-3xl font-bold mb-4">
                    Become a Future Business Leader 🚀
                </h3>
                <p className="max-w-2xl mx-auto mb-6 text-blue-100">
                    Join our Business Studies course to understand management, marketing, and entrepreneurship — all in one dynamic program.
                </p>
                <button className="bg-yellow-500 text-blue-900 font-semibold px-8 py-3 
                rounded-full shadow hover:bg-yellow-400 transition"
                    onClick={() => handleClick()}>
                    Book Your Free Trial
                </button>
            </section>
        </div>
    );
};

export default BusinessStudiesCourse;
