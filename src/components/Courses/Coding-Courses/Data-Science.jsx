import React, { useState, useEffect } from "react";
import { FaDatabase, FaChartLine, FaPython, FaProjectDiagram, FaLightbulb, FaCheck } from "react-icons/fa";
import dataImg from "../Images/Coding-Courses-images/data-science.jpg"; // Replace with your image
import { useNavigate } from "react-router-dom";
const DataScienceCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) => setActiveFAQ(activeFAQ === index ? null : index);

    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=data-science");
    }

    const faqs = [
        { q: "Do I need prior coding experience?", a: "No, this course starts from scratch with beginner-friendly Python tutorials." },
        { q: "Which tools will I learn?", a: "Python, Pandas, NumPy, Matplotlib, and basic machine learning libraries." },
        { q: "Will I do real projects?", a: "Yes! You will analyze datasets, visualize data, and create predictive models." },
        { q: "Is this course suitable for beginners?", a: "Absolutely! The curriculum is designed for complete beginners." },
    ];

    const whatYouLearn = [
        { icon: <FaPython className="text-blue-500 text-3xl" />, title: "Python Programming", desc: "Learn Python basics and libraries used in data science." },
        { icon: <FaDatabase className="text-green-500 text-3xl" />, title: "Data Handling", desc: "Work with data using Pandas and NumPy." },
        { icon: <FaChartLine className="text-purple-500 text-3xl" />, title: "Data Visualization", desc: "Create charts and plots using Matplotlib & Seaborn." },
        { icon: <FaProjectDiagram className="text-pink-500 text-3xl" />, title: "Projects", desc: "Build real data projects and dashboards." },
    ];

    const learningJourney = [
        { step: "Step 1", title: "Python & Basics", desc: "Learn programming fundamentals and Python essentials." },
        { step: "Step 2", title: "Data Manipulation", desc: "Handle datasets, clean and prepare data for analysis." },
        { step: "Step 3", title: "Visualization & Analysis", desc: "Visualize trends, patterns, and insights from data." },
        { step: "Step 4", title: "Intro to ML", desc: "Basic machine learning concepts and predictive modeling." },
    ];

    const whyChoose = [
        { icon: <FaLightbulb className="text-yellow-500 text-3xl" />, title: "Analytical Thinking", desc: "Enhance problem-solving skills using data." },
        { icon: <FaCheck className="text-green-500 text-3xl" />, title: "Hands-on Projects", desc: "Work on datasets and real-world scenarios." },
        { icon: <FaChartLine className="text-purple-500 text-3xl" />, title: "Career Ready", desc: "Build a foundation for Data Science roles." },
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800  py-20">

            {/* HERO */}
            <section className="flex flex-col md:flex-row items-center justify-between mb-24 px-6 md:px-16 py-20">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-5xl font-extrabold text-gray-900">
                        Dive into <span className="text-cyan-500">Data Science 📊</span>
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Learn how to analyze, visualize, and interpret data. Gain practical skills in Python and machine learning to make data-driven decisions.
                        Work with real datasets to uncover insights, trends, and patterns.
                        Build dashboards, reports, and predictive models that solve real-world problems.
                        Explore statistical analysis, data cleaning, and visualization techniques.
                        Prepare yourself for careers in data science, analytics, and AI-driven industries.
                    </p>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img src={dataImg} alt="Data Science" className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-blue-100" />
                </div>
            </section>

            {/* WHAT YOU’LL LEARN */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold text-center text-cyan-500 mb-12">What You’ll Learn</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {whatYouLearn.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center transition transform hover:-translate-y-2">
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* LEARNING JOURNEY - Vertical Timeline */}
            <section className="mb-24 bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-6 rounded-xl">
                <h2 className="text-3xl font-bold text-center text-cyan-500 mb-14">Your Learning Journey</h2>
                <div className="relative max-w-3xl mx-auto border-l-4 border-cyan-600">
                    {learningJourney.map((item, i) => (
                        <div key={i} className="mb-12 ml-6 relative">
                            <div className="absolute -left-8 bg-white border-4 border-cyan-600 w-10 h-10 flex items-center justify-center rounded-full shadow">
                                {i + 1}
                            </div>
                            <div className="bg-white rounded-2xl shadow-md p-6">
                                <h4 className="font-bold text-cyan-500">{item.step}</h4>
                                <h5 className="font-semibold text-gray-800 mt-1">{item.title}</h5>
                                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE DATA SCIENCE */}
            <section className="mb-24 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Data Science?</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {whyChoose.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-8 md:px-20 bg-gradient-to-b from-gray-50 to-white rounded-3xl">
                <h2 className="text-3xl font-bold text-center text-cyan-500 mb-10">FAQs</h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 py-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between items-center font-medium text-gray-800"
                            >
                                <span>{faq.q}</span>
                                <span className="text-blue-600 text-xl font-bold">{activeFAQ === index ? "−" : "+"}</span>
                            </button>
                            {activeFAQ === index && (
                                <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-16 bg-gradient-to-r from-cyan-600 to-cyan-300 text-white">
                <h3 className="text-3xl font-bold mb-3">Start Your Data Science Journey 📊</h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg">
                    Join our Data Science Course and turn raw data into insights. Gain real-world skills and build projects that matter.
                </p>
                <button className="bg-white text-blue-700 px-8 py-3 rounded-full 
                font-semibold hover:bg-blue-100 transition"
                    onClick={() => handleClick()}>
                    Book Your Free Demo
                </button>
            </section>

        </div>
    );
};

export default DataScienceCourse;
