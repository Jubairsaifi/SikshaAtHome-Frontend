import React, { useState, useEffect } from "react";
import { FaBookOpen, FaFeatherAlt, FaComments, FaGlobeAmericas, FaPenNib, FaUserGraduate } from "react-icons/fa";
import englishImg from "./Images/k-12-Courses-Imges/english-image.jpg"; // 📘 Add your own image path
import { useNavigate } from "react-router-dom";
const EnglishCourse = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const Navigate = useNavigate();
    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=english")
    }

    const faqs = [
        {
            question: "Is this course suitable for beginners?",
            answer:
                "Absolutely! This English course is designed for all levels — from beginners learning grammar to advanced learners improving fluency.",
        },
        {
            question: "Will this course help in improving my communication skills?",
            answer:
                "Yes! The course focuses on speaking, pronunciation, vocabulary, and real-life conversation practice.",
        },
        {
            question: "Do I get assignments and reading materials?",
            answer:
                "Yes, after each lesson you’ll receive interactive exercises, reading tasks, and writing practice assignments.",
        },
        {
            question: "Are live speaking sessions included?",
            answer:
                "Of course! Our trained instructors conduct live sessions and personalized speaking practice every week.",
        },
        {
            question: "Will I get a certificate?",
            answer:
                "Yes, upon successful completion of the course, you’ll receive an official English Proficiency Certificate.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800 min-h-screen py-20">
            {/* Hero Section */}
            <section className="relative text-center py-28 px-6">
                <img
                    src={englishImg}
                    alt="English Learning"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-pink-900 drop-shadow-sm mb-4">
                        Master the Language of the World 🌍
                    </h1>
                    <p className="text-lg text-black">
                        Unlock your communication potential through engaging lessons in grammar, writing, and fluent speaking.
                        Master the art of expressing ideas clearly and confidently in any situation.
                        Build vocabulary, refine pronunciation, and enhance your overall language fluency.
                    </p>
                </div>
            </section>

            {/* About the Course */}
            <section className="max-w-5xl mx-auto mt-12 px-6 text-center">
                <h2 className="text-3xl font-bold text-pink-900 mb-6">
                    About the English Course
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Our English course is designed to help students speak confidently, write clearly, and think critically.
                    Whether you're preparing for exams, interviews, or just want to improve everyday communication —
                    this course is your gateway to success. With live sessions, creative writing, vocabulary games, and storytelling,
                    learning becomes fun and effective.
                </p>
            </section>

            {/* Key Features */}
            <section className="max-w-6xl mx-auto mt-16 px-6">
                <h2 className="text-3xl font-bold text-center text-pink-900 mb-8">
                    Key Features of the Course
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { icon: <FaBookOpen />, title: "Grammar Foundation", desc: "Learn tenses, sentence structures, and syntax with easy explanations." },
                        { icon: <FaComments />, title: "Spoken English", desc: "Participate in live speaking sessions and improve your fluency." },
                        { icon: <FaFeatherAlt />, title: "Creative Writing", desc: "Enhance your imagination through essays, stories, and letters." },
                        { icon: <FaGlobeAmericas />, title: "Global Communication", desc: "Understand accents, idioms, and global English expressions." },
                        { icon: <FaPenNib />, title: "Vocabulary Builder", desc: "Learn new words, phrases, and their usage in everyday situations." },
                        { icon: <FaUserGraduate />, title: "Exam Preparation", desc: "Prepare for IELTS, TOEFL, and school grammar tests confidently." },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-blue-200 p-6 shadow-sm hover:shadow-md hover:bg-blue-50 transition"
                        >
                            <div className="text-4xl text-pink-300 mb-3">{feature.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Learning Stages */}
            <section className="mt-20 bg-blue-50 py-16 px-6 text-center">
                <h2 className="text-3xl font-bold text-pink-900 mb-6">
                    Your Learning Path
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {[
                        { step: "1️⃣", title: "Grammar Basics", desc: "Understand grammar rules and sentence patterns." },
                        { step: "2️⃣", title: "Vocabulary Growth", desc: "Learn powerful words and expressions to sound fluent." },
                        { step: "3️⃣", title: "Writing Practice", desc: "Write essays, emails, and creative stories with clarity." },
                        { step: "4️⃣", title: "Speaking Fluency", desc: "Engage in conversations and build natural pronunciation." },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="bg-pink-50 border-t-4 border-pink-900 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="text-2xl font-bold text-blue-700">{s.step}</div>
                            <h4 className="text-lg font-semibold mt-2 mb-1">{s.title}</h4>
                            <p className="text-sm text-gray-700">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto mt-20 px-6">
                <h2 className="text-3xl font-bold text-center text-pink-900 mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Here are some common questions about our English Course
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-blue-300 pb-3"
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
            <section className="text-center mt-20 py-20  bg-pink-50 text-white">
                <h3 className="text-3xl font-bold mb-4 text-pink-900">
                    Ready to Master English Communication?
                </h3>
                <p className="max-w-2xl mx-auto mb-6 text-black">
                    Join our interactive English classes to improve speaking, writing, and confidence — guided by expert instructors.
                </p>
                <button className="bg-white text-blue-700 font-semibold px-8 py-3 
                rounded-full shadow transition"
                    onClick={() => handleClick()}>
                    Book Your Free Trial
                </button>
            </section>
        </div>
    );
};

export default EnglishCourse;
