import React, { useState } from "react";
import { Link } from "react-router-dom";
import canadaImg from "./Images/Language-images/flag-canada.jpg"
import franceImg from "./Images/Language-images/flag-france.jpg"
import spainImg from "./Images/Language-images/flag-spain.png"
import germanyImg from "./Images/Language-images/flag-germany.jpg"
import indainImg from "./Images/Language-images/flag-indian.jpg"
import japanImg from "./Images/Language-images/flag-japan.jpg"


const LanguageCourses = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const courses = [
        {
            title: "English (IELTS & TOEFL)",
            desc: "Enhance your fluency, pronunciation, and confidence with our interactive English communication sessions.",
            path: "/explore-language-courses/IELTS-TOEFL",
            img: canadaImg
        },
        {
            title: "French",
            desc: "Master one of the world’s most elegant languages through immersive lessons and cultural insights.",
            path: "/explore-language-courses/french",
            img: franceImg
        },
        {
            title: "Spanish",
            desc: "Learn Spanish with ease through real-life conversations and interactive grammar-based exercises.",
            path: "/explore-language-courses/spanish",
            img: spainImg
        },
        {
            title: "Hindi",
            desc: "Improve your Hindi speaking, reading, and writing skills through engaging lessons designed for all levels.",
            path: "/explore-language-courses/hindi",
            img: indainImg
        },
        {
            title: "German",
            desc: "Explore the power of the German language with grammar-focused sessions and cultural learning.",
            path: "/explore-language-courses/german",
            img: germanyImg
        },
        // {
        //     title: "Sanskrit",
        //     desc: "Dive into the classical beauty of Sanskrit — learn pronunciation, grammar, and the meaning of ancient texts.",
        //     path: "/explore-language-courses/sanskrit",
        //     img: indainImg
        // },
        {
            title: "Japan",
            desc: "Gain global advantage by learning Mandarin through a fun, visual, and conversational approach.",
            path: "/explore-language-courses/japanese",
            img: japanImg
        },
        // {
        //     title: "Arabic",
        //     desc: "Develop your Arabic reading, writing, and conversational skills with native-level instruction.",
        //     path: "/explore-language-courses/arabic"
        // }
    ];

    const faqs = [
        {
            question: "Are language courses suitable for beginners?",
            answer:
                "Absolutely! Each course is designed for learners at all levels — from complete beginners to advanced speakers."
        },
        {
            question: "Do I get a certificate after course completion?",
            answer:
                "Yes, you’ll receive a digital certificate of completion once you successfully finish your course."
        },
        {
            question: "Can I choose my own schedule for the classes?",
            answer:
                "Yes, we offer flexible scheduling so you can learn at your own pace and convenience."
        },
        {
            question: "Are native speakers teaching these courses?",
            answer:
                "Yes, our language experts and native-level speakers guide you with authentic pronunciation and cultural understanding."
        },
        {
            question: "Is there any free demo class available?",
            answer:
                "Yes! You can book a free trial class to experience our teaching style and course structure."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 pb-20 py-20">
            {/* Header Section */}
            <section className="py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Learn New Languages:{" "}
                    <span className="text-sky-600">Explore Our Language Courses</span>
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Unlock global communication opportunities through expert-led language training, designed to help you speak confidently and effectively.
                </p>
            </section>

            {/* Courses Grid */}
            <section className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
                    >
                        <div className="flex items-start  justify-between mb-4">
                            <h3 className="text-xl font-semibold text-sky-600 mb-2 hover:text-black transition cursor-pointer underline underline-offset-4 decoration-2 decoration-black-500">
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
                            className="text-pink-600 font-semibold hover:text-pink-700 text-sm"
                        >
                            {course.button ? course.button : "Book a Free Trial →"}
                        </Link>
                    </div>
                ))}
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-6 mt-20">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Frequently <span className="text-sky-600">Asked</span> Questions
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Get quick answers about our language learning programs
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

export default LanguageCourses;
