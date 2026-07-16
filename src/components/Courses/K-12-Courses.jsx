import React, { useState } from "react";
import { FaFlask, FaBookOpen, FaLanguage, FaGlobe, FaCalculator, FaAtom, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import MathImg from "./Images/k-12-Courses-Imges/math-image.jpg"
import PhyImg from "./Images/k-12-Courses-Imges/physics-image.jpg"
import ChemImg from "./Images/k-12-Courses-Imges/chemistry-image.jpg"
import BioImg from "./Images/k-12-Courses-Imges/biology-image.jpg"
import EngImg from "./Images/k-12-Courses-Imges/english-image.jpg"
import EcoImg from "./Images/k-12-Courses-Imges/economy-image.jpg"
import busiImg from "./Images/k-12-Courses-Imges/business-studies-image.jpg"
import accImg from "./Images/k-12-Courses-Imges/accounts-image.jpg"


const K12Courses = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const courses = [
        {
            title: "Mathematics",
            desc: "Build a strong foundation in logical thinking, problem-solving, and analytical skills through interactive and practical math sessions.",
            path: "/explore-k-12-courses/mathematics",
            img: MathImg
        },
        {
            title: "Physics",
            desc: "Discover the science behind motion, energy, and the universe with real-world experiments and engaging explanations.",
            path: "/explore-k-12-courses/physics",
            img: PhyImg
        },
        {
            title: "Chemistry",
            desc: "Uncover the secrets of matter and reactions through visual experiments and concept-based learning that makes Chemistry fun.",
            path: "/explore-k-12-courses/chemistry",
            img: ChemImg
        },
        {
            title: "Biology",
            desc: "Dive deep into the study of life, evolution, and ecosystems with interactive sessions that connect theory to the real world.",
            path: "/explore-k-12-courses/biology",
            img: BioImg
        },
        {
            title: "English",
            desc: "Enhance your communication, grammar, and comprehension skills through personalized lessons designed to boost confidence.",
            path: "/explore-k-12-courses/english",
            img: EngImg
        },
        {
            title: "Economics",
            desc: "Understand how markets work, what drives global trade, and how decisions shape economies through engaging real-life examples.",
            path: "/explore-k-12-courses/economics",
            img: EcoImg
        },
        {
            title: "Business Studies",
            desc: "Learn the fundamentals of business, management, and entrepreneurship through case studies and practical applications.",
            path: "/explore-k-12-courses/business-studies",
            img: busiImg
        },
        {
            title: "Accounts",
            desc: "Master the art of recording, analyzing, and managing financial data with our structured and easy-to-follow accounting lessons.",
            path: "/explore-k-12-courses/accounts",
            img: accImg
        }
        // {
        //   title: "Request a Course",
        //   desc: "Expand your knowledge. Request your desired course and start learning!",
        //   button: "Request a Course",
        // },
    ];

    const faqs = [
        {
            question: "How do I access the free trial for coding courses?",
            answer:
                "You can book a free trial directly from the course card. Our team will reach out to schedule your session at your preferred time.",
        },
        {
            question: "Are these courses suitable for beginners?",
            answer:
                "Yes! All our courses are structured to support learners from beginner to advanced levels with personalized guidance.",
        },
        {
            question: "Is there any technical support available during the trial?",
            answer:
                "Absolutely! Our support team is available 24/7 to assist you with technical or course-related queries.",
        },
        {
            question: "Can I access course materials after the trial ends?",
            answer:
                "Yes, after enrollment, you will have continuous access to your course materials and learning resources.",
        },
        {
            question: "Are there any additional fees apart from the course fee?",
            answer:
                "No, there are no hidden charges. The course fee covers all sessions and materials provided.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 pb-20 py-20">
            {/* Header Section */}
            <section className="py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Empowering Futures:{" "}
                    <span className="text-red-700">Explore Our K–12 School Time Courses</span>
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Learn, explore, and excel with a wide range of subjects designed to help students reach
                    their academic potential through personalized one-on-one learning.
                </p>
            </section>

            {/* Courses Grid */}
            <section className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between 
                                   "
                    >
                        <div className="flex items-start  justify-between mb-4">
                            <h3 className="text-xl font-semibold text-sky-600 mb-2 hover:text-black transition 
                                           cursor-pointer underline underline-offset-4 decoration-2 decoration-black-500">
                                <Link to={course.path}>{course.title}</Link>
                            </h3>
                            <img
                                src={course.img}
                                alt=""
                                className="w-16 h-16 rounded-full"
                            />
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            {course.desc}
                        </p>
                        <Link
                            to={`/book-a-free-trial?subject=${course.path.split("/").pop()}`}
                            className="text-red-700 font-semibold  text-sm"
                        >
                            {course.button ? course.button : "Book a Free Trial →"}
                        </Link>
                    </div>
                ))}
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-6 mt-20">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Frequently <span className="text-red-600">Asked</span> Questions
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Quick Answers to Commonly Asked Questions
                </p>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 py-3">
                            <button
                                className="flex justify-between w-full text-left font-medium text-gray-800"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span>{activeFAQ === index ? "−" : "+"}</span>
                            </button>
                            {activeFAQ === index && (
                                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default K12Courses;
