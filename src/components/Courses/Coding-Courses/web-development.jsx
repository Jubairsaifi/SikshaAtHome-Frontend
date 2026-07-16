import React, { useState, useEffect } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaLaptopCode,
    FaGlobe,
    FaRocket,
    FaCheck,
} from "react-icons/fa";
import webImg from "../Images/Coding-Courses-images/web-development-2.jpg"; // Replace with your image
import { useNavigate } from "react-router-dom";
const WebDevelopmentCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) => setActiveFAQ(activeFAQ === index ? null : index);

    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=web-development")
    }

    const faqs = [
        {
            q: "Do I need coding experience?",
            a: "No, this course starts from scratch — perfect for beginners eager to build their first website.",
        },
        {
            q: "Will I learn both frontend and backend?",
            a: "Yes! We cover frontend basics (HTML, CSS, JS) and an intro to backend using Node.js.",
        },
        {
            q: "Do I need to install any software?",
            a: "No heavy setup needed! We’ll show you how to code using browser-based tools like CodePen or VS Code.",
        },
        {
            q: "Are projects part of the course?",
            a: "Absolutely. You’ll build a personal portfolio website, landing page, and a mini e-commerce app.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen text-gray-800 py-20">
            {/* HERO SECTION */}
            <section className="px-10 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Build the <span className="text-violet-600">Web of Tomorrow</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Learn how to design, code, and deploy beautiful and responsive websites from scratch using the latest tools and technologies.
                        Build interactive layouts, dynamic features, and visually stunning web pages.
                        Gain hands-on experience with HTML, CSS, JavaScript, and React.js.
                        Publish your creations online and showcase your skills to the world.
                    </p>
                    <button className="bg-violet-700 text-white px-8 py-3 rounded-full 
                    font-semibold shadow-md hover:bg-blue-500 transition"
                        onClick={() => handleClick()}>
                        Book Your Free Demo
                    </button>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src={webImg}
                        alt="Web Development"
                        className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-violet-100"
                    />
                </div>
            </section>

            {/* WHAT YOU’LL LEARN */}
            <section className="py-20 px-8 md:px-20 bg-white">
                <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">
                    What You’ll Learn 💡
                </h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <FaHtml5 className="text-orange-500" />,
                            title: "HTML5",
                            desc: "Learn to structure web pages with semantic HTML.",
                        },
                        {
                            icon: <FaCss3Alt className="text-blue-500" />,
                            title: "CSS3",
                            desc: "Style and design websites with layouts, animations, and effects.",
                        },
                        {
                            icon: <FaJsSquare className="text-yellow-500" />,
                            title: "JavaScript",
                            desc: "Add interactivity and make your sites dynamic.",
                        },
                        {
                            icon: <FaReact className="text-sky-500" />,
                            title: "React.js",
                            desc: "Build reusable components and interactive user interfaces.",
                        },
                        {
                            icon: <FaGlobe className="text-green-500" />,
                            title: "Hosting & Deployment",
                            desc: "Publish your website live using GitHub Pages or Netlify.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="w-60 bg-gradient-to-t from-gray-50 to-white border border-gray-200 rounded-xl shadow hover:shadow-lg p-6 text-center transition transform hover:-translate-y-1"
                        >
                            <div className="text-5xl mb-3 flex justify-center">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* LEARNING JOURNEY (ZIG-ZAG DESIGN) */}
            <section className="py-20 bg-gradient-to-r from-violet-100 to-violet-150">
                <h2 className="text-3xl font-bold text-center text-violet-700 mb-16">
                    Your Learning Journey 🚀
                </h2>
                <div className="max-w-5xl mx-auto space-y-10">
                    {[
                        {
                            step: "Step 1",
                            title: "Introduction & Setup",
                            desc: "Get familiar with tools, browsers, and coding environment.",
                        },
                        {
                            step: "Step 2",
                            title: "Frontend Foundations",
                            desc: "Learn HTML, CSS, and JavaScript basics to build web pages.",
                        },
                        {
                            step: "Step 3",
                            title: "Interactive Design",
                            desc: "Use JavaScript and React to make sites dynamic.",
                        },
                        {
                            step: "Step 4",
                            title: "Publish Your Site",
                            desc: "Host your website live and share your creation with the world!",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            <div className="bg-white border-2 border-violet-300 rounded-xl p-6 md:w-1/2 shadow-md">
                                <h4 className="text-violet-700 font-bold text-xl mb-2">
                                    {item.step}: {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-violet-800 text-white flex items-center justify-center font-bold text-lg shadow-md mx-6 my-4">
                                {i + 1}
                            </div>
                            <div className="hidden md:block w-1/2 h-[2px] bg-violet-500" />
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE WEB DEVELOPMENT (SPLIT LAYOUT) */}
            <section className="py-20 bg-white px-10 md:px-20">
                <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">
                    Why Choose Web Development? 💻
                </h2>
                <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                    <div className="space-y-5 text-gray-700">
                        <p className="flex items-start gap-3">
                            <FaCheck className="text-green-500 mt-1" />
                            Build creative, interactive websites and share your ideas online.
                        </p>
                        <p className="flex items-start gap-3">
                            <FaCheck className="text-green-500 mt-1" />
                            High demand for skilled developers across all industries.
                        </p>
                        <p className="flex items-start gap-3">
                            <FaCheck className="text-green-500 mt-1" />
                            Learn visual design, coding, and real project deployment.
                        </p>
                        <p className="flex items-start gap-3">
                            <FaCheck className="text-green-500 mt-1" />
                            Great for students who love creativity and technology.
                        </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl shadow-inner">
                        <FaLaptopCode className="text-6xl text-blue-600 mb-4 mx-auto" />
                        <p className="text-center text-gray-700 font-medium leading-relaxed">
                            Web development is the backbone of the internet — learn to create
                            experiences that connect the world, one website at a time.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-8 md:px-20 bg-gradient-to-b from-gray-50 to-white">
                <h2 className="text-3xl font-bold text-center text-violet-700 mb-10">
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
            <section className="text-center py-16 bg-gradient-to-r from-violet-600 to-violet-100 text-white">
                <h3 className="text-3xl font-bold mb-3">Start Building Websites Today 🌍</h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg">
                    Turn your creativity into real web projects. Join our Web Development
                    Course and code your first live website.
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

export default WebDevelopmentCourse;
