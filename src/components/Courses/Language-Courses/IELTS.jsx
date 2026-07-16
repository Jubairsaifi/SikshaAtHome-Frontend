import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaBookOpen,
    FaPenFancy,
    FaHeadphones,
    FaMicrophone,
    FaCheckCircle,
    FaQuestionCircle,
} from "react-icons/fa";

const IELTS_TOEFL_Course = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) =>
        setActiveFAQ(activeFAQ === index ? null : index);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=IELTS")
    }

    const faqs = [
        {
            q: "Do I need prior English experience?",
            a: "No! Our course starts from basic proficiency and gradually advances to exam-level skills.",
        },
        {
            q: "Which skills are covered?",
            a: "Reading, Writing, Listening, and Speaking — complete exam preparation for both IELTS and TOEFL.",
        },
        {
            q: "Are mock tests included?",
            a: "Absolutely! Full-length practice tests simulate real exam conditions to boost your confidence.",
        },
        {
            q: "Will I get a certificate?",
            a: "Yes! After completing the course, you'll receive a course completion certificate.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen text-gray-800 font-sans py-12">
            {/* HERO SECTION */}
            <section className="flex flex-col justify-center items-center text-center py-32 px-6 md:px-20 bg-gradient-to-r from-purple-50 to-purple-100">
                <h1 className="text-5xl font-extrabold text-purple-700 leading-tight mb-6">
                    Master <span className="text-yellow-500">IELTS & TOEFL</span> Exams 📘
                </h1>
                <p className="text-lg text-gray-700 max-w-3xl mb-6">
                    "Prepare effectively for international English exams with guided lessons,
                    interactive exercises, and expert strategies. Boost your scores in Reading,
                    Writing, Listening, and Speaking. Learn at your own pace with live classes,
                    quizzes, and mock exams tailored to your level. Gain personalized feedback
                    from experienced instructors and access practical tips to maximize your exam performance."
                </p>
                <button className="bg-yellow-500 text-purple-700 px-8 py-3 rounded-full 
                font-semibold shadow hover:bg-yellow-400 transition"
                onClick={() => handleClick()}>
                    Book Your Free Demo
                </button>
            </section>

            {/* KEY FEATURES */}
            <section className="py-20 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
                    Key Features of the Course ✨
                </h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <FaBookOpen className="text-purple-500 text-4xl mb-3" />,
                            title: "Structured Lessons",
                            desc: "Step-by-step modules covering all exam sections.",
                        },
                        {
                            icon: <FaPenFancy className="text-yellow-500 text-4xl mb-3" />,
                            title: "Writing Mastery",
                            desc: "Practice essays, letters, and reports with expert feedback.",
                        },
                        {
                            icon: <FaHeadphones className="text-purple-400 text-4xl mb-3" />,
                            title: "Listening Skills",
                            desc: "Enhance comprehension with real-world audio materials.",
                        },
                        {
                            icon: <FaMicrophone className="text-purple-600 text-4xl mb-3" />,
                            title: "Speaking Confidence",
                            desc: "Interactive speaking exercises to build fluency and accuracy.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* LEARNING PATHWAY - DIAGONAL CARDS */}
            <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-purple-100 to-purple-50">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
                    Your Learning Pathway 🛤️
                </h2>
                <div className="flex flex-col gap-10 max-w-5xl mx-auto">
                    {[
                        {
                            step: "Step 1",
                            title: "Diagnostic Test",
                            desc: "Assess your current level to tailor your study plan.",
                        },
                        {
                            step: "Step 2",
                            title: "Skill Development",
                            desc: "Interactive lessons to strengthen reading, writing, listening, and speaking skills.",
                        },
                        {
                            step: "Step 3",
                            title: "Mock Exams",
                            desc: "Simulate real exam conditions to boost confidence and timing.",
                        },
                        {
                            step: "Step 4",
                            title: "Score Maximization",
                            desc: "Get feedback, tips, and strategies to achieve your target score.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            <div className="bg-white rounded-2xl shadow-md p-6 md:w-1/2">
                                <h4 className="text-purple-700 font-bold text-xl mb-2">
                                    {item.step}: {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                            <div className="hidden md:flex w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mx-6 my-4">
                                {i + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 px-8 md:px-20 bg-white">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
                    FAQs ❓
                </h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 py-3">
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
            <section className="text-center py-16 bg-gradient-to-r from-purple-700 to-yellow-500 text-white">
                <h3 className="text-3xl font-bold mb-3">
                    Start Your IELTS & TOEFL Journey Today!
                </h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg">
                    Achieve your desired scores with structured learning, expert guidance, and practical practice.
                </p>
                <button className="bg-white text-purple-700 px-8 py-3 rounded-full 
                font-semibold hover:bg-yellow-100 transition"
                onClick={() => handleClick()}>
                    Book Your Free Trial
                </button>
            </section>
        </div>
    );
};

export default IELTS_TOEFL_Course;
