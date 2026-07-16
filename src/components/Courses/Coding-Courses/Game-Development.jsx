import React, { useState, useEffect } from "react";
import { FaGamepad, FaCode, FaRocket, FaPuzzlePiece, FaTrophy, FaCheck } from "react-icons/fa";
import gameImg from "../Images/Coding-Courses-images/game-development.jpg";
import { useNavigate } from "react-router-dom";

const GameDevelopmentCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) => setActiveFAQ(activeFAQ === index ? null : index);
    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=game-development");
    }

    const faqs = [
        { q: "Do I need coding experience?", a: "No, we start from scratch with beginner-friendly tutorials." },
        { q: "Which game engines will I learn?", a: "We cover Unity and Unreal basics to create 2D and 3D games." },
        { q: "Will I create real games?", a: "Yes! You’ll make mini-games, platformers, and interactive projects." },
        { q: "How long is the course?", a: "The course spans 10–12 weeks depending on your pace and practice." },
    ];

    const skills = [
        { icon: <FaCode className="text-yellow-500 text-4xl" />, title: "Coding Fundamentals", desc: "Learn C#, logic, and scripting for games." },
        { icon: <FaPuzzlePiece className="text-blue-500 text-4xl" />, title: "Game Mechanics", desc: "Understand physics, collisions, and animations." },
        { icon: <FaRocket className="text-purple-500 text-4xl" />, title: "Level Design", desc: "Design immersive game worlds and challenges." },
        { icon: <FaGamepad className="text-green-500 text-4xl" />, title: "Controls & UI", desc: "Make user-friendly interfaces and interactive controls." },
    ];

    const learningJourney = [
        { step: "Step 1", title: "Game Design Basics", desc: "Understand storytelling, gameplay, and game flow." },
        { step: "Step 2", title: "Programming & Scripting", desc: "Code game logic using Unity C# scripts." },
        { step: "Step 3", title: "Graphics & Animation", desc: "Import assets, create animations, and particle effects." },
        { step: "Step 4", title: "Publish & Playtest", desc: "Build and test your games, share them online." },
    ];

    const whyChoose = [
        { icon: <FaTrophy className="text-yellow-500 text-3xl" />, title: "Creativity Boost", desc: "Express your imagination through interactive games." },
        { icon: <FaCheck className="text-green-500 text-3xl" />, title: "Hands-on Learning", desc: "Learn by building projects from day one." },
        { icon: <FaRocket className="text-purple-500 text-3xl" />, title: "Career Ready", desc: "Gain skills for game dev internships and competitions." },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-50 text-gray-800  py-32">

            {/* HERO */}
            <section className="flex flex-col md:flex-row items-center justify-between mb-24 px-6 md:px-16 py-12">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Enter the <span className="text-purple-600">World of Games 🎮</span>
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Learn to design, code, and deploy your own games — from 2D adventures to 3D experiences.
                        Bring your ideas to life with interactive game mechanics, animations, and storytelling.
                        Explore popular game engines and programming tools used by professionals.
                        Develop problem-solving, logic, and creative thinking skills while making fun projects.
                        Publish your games and share them with friends or the world online.
                    </p>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img src={gameImg} alt="Game Development" className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-purple-100" />
                </div>
            </section>

            {/* SKILLS CARDS */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">What You’ll Learn</h2>
                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {skills.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center transition transform hover:-translate-y-2">
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* LEARNING JOURNEY CAROUSEL */}
            {/* LEARNING JOURNEY - Staggered Diagonal Cards */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
                    Your Learning Journey 🚀
                </h2>
                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative">
                    {learningJourney.map((item, i) => (
                        <div
                            key={i}
                            className={`relative bg-white rounded-2xl shadow p-6 transform ${i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-12"
                                } hover:shadow-lg transition`}
                        >
                            {/* Step Number Badge */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                {i + 1}
                            </div>
                            <h4 className="font-bold text-purple-600 mt-4">{item.step}</h4>
                            <h5 className="font-semibold text-gray-800 mt-2">{item.title}</h5>
                            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                            {/* Connecting line (only for first column items) */}
                            {i < learningJourney.length - 1 && (
                                <div
                                    className={`absolute w-1 h-full bg-purple-200 top-12 left-1/2 transform -translate-x-1/2 md:hidden`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </section>


            {/* WHY CHOOSE */}
            <section className="mb-24 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Game Development?</h2>
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
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">FAQs ❓</h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 py-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between items-center font-medium text-gray-800"
                            >
                                <span>{faq.q}</span>
                                <span className="text-purple-600 text-xl font-bold">
                                    {activeFAQ === index ? "−" : "+"}
                                </span>
                            </button>
                            {activeFAQ === index && (
                                <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-16 bg-gradient-to-r from-purple-500 to-pink-300 text-white">
                <h3 className="text-3xl font-bold mb-3">Start Creating Games Today 🎮</h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg">
                    Join our Game Development Course and bring your game ideas to life with hands-on projects.
                </p>
                <button className="bg-white text-purple-700 px-8 py-3 rounded-full 
                font-semibold hover:bg-purple-100 transition"
                    onClick={() => handleClick()}>
                    Book Your Free Demo
                </button>
            </section>

        </div>
    );
};

export default GameDevelopmentCourse;
