import React, { useState, useEffect } from "react";
import {
    FaPython,
    FaCode,
    FaRobot,
    FaBrain,
    FaDatabase,
    FaChartLine,
    FaCheckCircle,
} from "react-icons/fa";
import pythonImg from "../Images/Coding-Courses-images/python-programming-2.jpg"; // 🖼️ Replace with your image
import { useNavigate } from "react-router-dom";
const PythonProgrammingCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) => setActiveFAQ(activeFAQ === index ? null : index);
    
    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=python");
    }

    const faqs = [
        {
            q: "Is Python suitable for beginners?",
            a: "Yes! Python’s simple syntax makes it one of the best languages for beginners to learn programming.",
        },
        {
            q: "Do I need to install any software?",
            a: "We’ll guide you through setting up Python on your system and also show you how to code online using Replit or Google Colab.",
        },
        {
            q: "What projects will I build?",
            a: "Students create games, mini-apps, and automation tools while learning real-world concepts.",
        },
        {
            q: "Are classes live or recorded?",
            a: "All sessions are live, interactive, and recorded for later access.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen text-gray-800 py-20">
            {/* HERO SECTION */}
            <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
                <div className="md:w-1/2 space-y-5">
                    <h1 className="text-5xl font-extrabold text-blue-700">
                        Learn <span className="text-yellow-500">Python Programming</span> 🐍
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Step into the world of real coding with Python — the language that powers AI, automation, and web development.
                        Learn from scratch through interactive lessons and fun projects.
                        Build real-world applications, automate everyday tasks, and explore data science.
                        Gain the confidence to code, create, and innovate in one of the most versatile languages today.
                    </p>
                    <button className="bg-blue-600 text-white font-semibold px-8 py-3 
                    rounded-full hover:bg-blue-500 transition shadow-lg"
                        onClick={() => handleClick()}>
                        Book Your Free Demo
                    </button>
                </div>

                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <img
                        src={pythonImg}
                        alt="Python Course"
                        className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-blue-100"
                    />
                </div>
            </section>

            {/* COURSE HIGHLIGHTS */}
            <section className="py-16 bg-white px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
                    What You’ll Learn 🔍
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <FaCode />,
                            title: "Python Basics",
                            desc: "Syntax, loops, and conditions made easy for beginners.",
                        },
                        {
                            icon: <FaDatabase />,
                            title: "Data Structures",
                            desc: "Learn about lists, tuples, and dictionaries.",
                        },
                        {
                            icon: <FaBrain />,
                            title: "Problem Solving",
                            desc: "Sharpen your logic and algorithmic thinking.",
                        },
                        {
                            icon: <FaRobot />,
                            title: "Automation",
                            desc: "Create small tools to automate daily tasks.",
                        },
                        {
                            icon: <FaChartLine />,
                            title: "Real Projects",
                            desc: "Work on real-world tasks to apply your learning.",
                        },
                        {
                            icon: <FaPython />,
                            title: "Advanced Topics",
                            desc: "Learn about APIs, file handling, and Python libraries.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
                        >
                            <div className="text-5xl text-blue-600 mb-4 flex justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* LEARNING STEPS - NEW LAYOUT */}
            <section className="py-20 bg-gradient-to-r from-blue-100 to-white">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-16">
                    Your Learning Journey 🚀
                </h2>

                <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 px-10 md:px-16">
                    {[
                        { step: "1", title: "Learn the Basics", desc: "Get started with Python syntax and beginner coding." },
                        { step: "2", title: "Build Logic", desc: "Practice loops, conditions, and creative problem solving." },
                        { step: "3", title: "Create Projects", desc: "Apply your skills to make fun and useful programs." },
                        { step: "4", title: "Master Python", desc: "Explore advanced Python and earn your certificate." },
                    ].map((phase, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center relative group"
                        >
                            <div className="bg-white border-2 border-blue-400 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white transition">
                                {phase.step}
                            </div>
                            <div className="w-1 h-14 bg-blue-300 md:w-14 md:h-1 md:mx-2" />
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 w-56 md:w-64 shadow-sm group-hover:shadow-lg transition">
                                <h4 className="font-semibold text-blue-700">{phase.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{phase.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY PYTHON SECTION */}
            <section className="py-20 px-6 md:px-20 bg-white">
                <h2 className="text-3xl font-bold text-center text-yellow-600 mb-12">
                    Why Choose Python? 💡
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                    {[
                        "Beginner-friendly language for all ages",
                        "Used in AI, web, and app development",
                        "Encourages logical and creative thinking",
                        "High demand in modern careers",
                        "Easy syntax, powerful performance",
                        "Huge community and resources available",
                    ].map((point, i) => (
                        <div
                            key={i}
                            className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 text-gray-700 font-medium shadow hover:shadow-md transition"
                        >
                            <FaCheckCircle className="text-yellow-500 text-2xl mb-3 mx-auto" />
                            {point}
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
                    FAQs ❓
                </h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-blue-200 py-3">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between font-semibold text-gray-800"
                            >
                                <span>{faq.q}</span>
                                <span>{activeFAQ === index ? "−" : "+"}</span>
                            </button>
                            {activeFAQ === index && (
                                <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-yellow-200 text-white">
                <h3 className="text-3xl font-bold mb-3">Start Coding with Python 🐍</h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg">
                    Learn to code in Python and open the door to AI, data science, and app development. No prior experience required!
                </p>
                <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold
                 hover:bg-blue-100 transition"
                    onClick={() => handleClick()}>
                    Book Your Free Trial
                </button>
            </section>
        </div>
    );
};

export default PythonProgrammingCourse;
