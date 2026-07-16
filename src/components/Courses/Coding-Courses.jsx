import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScratchProgrammingImg from "./Images/Coding-Courses-images/scratch-programming.jpg"
import PythonImg from "./Images/Coding-Courses-images/python-programming.png"
import webImg from "./Images/Coding-Courses-images/web-development.jpg"
import appImg from "./Images/Coding-Courses-images/app-development.jpg"
import AIImg from "./Images/Coding-Courses-images/AI-Image.jpg"
import roboImg from "./Images/Coding-Courses-images/robotics-image.jpg"
import gameImg from "./Images/Coding-Courses-images/game-development.jpg"
import dataImg from "./Images/Coding-Courses-images/data-science.jpg"



const CodingCourses = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const courses = [
        {
            title: "Scratch Programming",
            desc: "Learn the basics of coding through fun, visual blocks and creative game design. Perfect for young beginners!",
            path: "/explore-coding-courses/scratch-programming",
            img: ScratchProgrammingImg
        },
        {
            title: "Python Programming",
            desc: "Start your journey in real-world programming with Python — simple, powerful, and used across industries.",
            path: "/explore-coding-courses/python-programming",
            img: PythonImg
        },
        {
            title: "Web Development",
            desc: "Design and build your own websites using HTML, CSS, and JavaScript in this beginner-friendly course.",
            path: "/explore-coding-courses/web-development",
            img: webImg
        },
        {
            title: "App Development",
            desc: "Create Android and iOS mobile apps using modern tools like React Native and Flutter — no prior experience required.",
            path: "/explore-coding-courses/app-development",
            img: appImg
        },
        {
            title: "Artificial Intelligence (AI)",
            desc: "Explore the world of intelligent machines and algorithms that can think, learn, and make decisions like humans.",
            path: "/explore-coding-courses/artificial-intelligence",
            img: AIImg
        },
        {
            title: "Robotics with Coding",
            desc: "Combine programming and engineering to build robots that can move, sense, and respond to their environment.",
            path: "/explore-coding-courses/robotics",
            img: roboImg
        },
        {
            title: "Game Development",
            desc: "Turn your imagination into reality by learning how to design and develop your own video games from scratch.",
            path: "/explore-coding-courses/game-development",
            img: gameImg
        },
        {
            title: "Data Science for Beginners",
            desc: "Understand how data works, explore visualization, and learn how to use Python for data analysis and insights.",
            path: "/explore-coding-courses/data-science",
            img: dataImg
        },
        // {
        //     title: "Request a Coding Course",
        //     desc: "Looking for a specific coding topic? Request your preferred course and we’ll customize it for your learning goals.",
        //     path: "/explore-coding-courses/request-course",
        // },
    ];

    const faqs = [
        {
            question: "Do I need prior coding experience to join?",
            answer:
                "Not at all! Our coding courses are designed for all levels — from complete beginners to advanced learners.",
        },
        {
            question: "What age group can join these coding classes?",
            answer:
                "Our coding courses are suitable for students aged 7 and above, with customized lessons based on age and skill level.",
        },
        {
            question: "Will I get a certificate after completion?",
            answer:
                "Yes! Every student receives a completion certificate after successfully finishing their course.",
        },
        {
            question: "Are the classes live or recorded?",
            answer:
                "We offer both — live interactive sessions for personal guidance and recorded videos for flexible learning.",
        },
        {
            question: "Can I build real projects during the course?",
            answer:
                "Absolutely! Our project-based approach ensures you apply what you learn to create apps, games, and more.",
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
                    Code the Future:{" "}
                    <span className="text-red-700">Explore Our Coding Courses</span>
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    From beginners to advanced learners — gain hands-on coding experience
                    with live, interactive lessons designed to build real-world skills.
                </p>
            </section>

            {/* Courses Grid */}
            <section className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border"
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
                    Frequently <span className="text-red-700">Asked</span> Questions
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Quick Answers to Common Queries About Our Coding Courses
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

export default CodingCourses;
