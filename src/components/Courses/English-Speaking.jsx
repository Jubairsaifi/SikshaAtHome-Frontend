import React, { useState } from "react";
import {
    FaMicrophoneAlt,
    FaComments,
    FaUserGraduate,
    FaGlobeAmericas,
    FaChalkboardTeacher,
    FaChevronDown,
    FaChevronUp,
    FaStar,
    FaLaptop,
    FaUserFriends,
    FaCertificate,
    FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SpeakingImg from "../../assets/English-speaking.jpg"; // replace with your own image
import { useNavigate } from "react-router-dom";

const EnglishSpeaking = () => {
    const navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const faqs = [
        {
            question: "Who can join the English Speaking Course?",
            answer:
                "Our course is open to students, professionals, homemakers, and anyone who wants to improve their communication skills and fluency.",
        },
        {
            question: "Do you offer online live classes?",
            answer:
                "Yes! We conduct 100% live interactive classes with personalized feedback and doubt-clearing sessions.",
        },
        {
            question: "How long is the course duration?",
            answer:
                "We offer flexible durations — from 1 month crash courses to 6-month advanced programs — depending on your goals.",
        },
        {
            question: "Will I receive a certificate after completion?",
            answer:
                "Yes! You’ll receive a verified certificate from Siksha at Home upon successful completion.",
        },
        {
            question: "What if I miss a class?",
            answer:
                "No worries! You can watch the recording or attend a replacement session at no extra cost.",
        },
    ];

    const testimonials = [
        {
            name: "Aditi Sharma",
            feedback:
                "Before joining, I was shy and nervous while speaking English. Now I confidently give presentations in my college! The trainers are amazing.",
            rating: 5,
        },
        {
            name: "Rahul Mehta",
            feedback:
                "I joined Siksha at Home for professional English. My communication at work improved drastically. Highly recommend to working professionals!",
            rating: 5,
        },
        {
            name: "Sneha Kapoor",
            feedback:
                "The one-on-one sessions are so effective! My pronunciation and vocabulary improved a lot in just 2 months.",
            rating: 4,
        },
    ];
    const handleClick = () => {
        navigate("/book-a-free-trial?subject=english-speaking")
    }
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-36 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold text-sky-600 mb-3">
                        English Speaking Classes
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Learn to speak fluent, confident English through live sessions,
                        practical speaking activities, and expert guidance — designed for
                        learners of all levels.
                    </p>
                </motion.div>

                {/* WHY JOIN SECTION */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-5">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Why Join Our English Speaking Program?
                        </h3>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            <li>✅ 1-on-1 personalized sessions with certified language experts.</li>
                            <li>✅ Role-plays, pronunciation drills & public speaking practice.</li>
                            <li>✅ Vocabulary, grammar & accent improvement modules.</li>
                            <li>✅ Flexible timings and individual progress tracking.</li>
                            <li>✅ Perfect for students, homemakers & professionals alike.</li>
                        </ul>

                        <h4 className="text-xl font-semibold text-sky-600 mt-6">
                            Our Key Modules:
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                                <FaMicrophoneAlt className="text-sky-600" /> Pronunciation
                            </div>
                            <div className="flex items-center gap-2">
                                <FaComments className="text-sky-600" /> Conversation Skills
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUserGraduate className="text-sky-600" /> Grammar Basics
                            </div>
                            <div className="flex items-center gap-2">
                                <FaChalkboardTeacher className="text-sky-600" /> Public Speaking
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGlobeAmericas className="text-sky-600" /> Global Communication
                            </div>
                        </div>

                        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                                       bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500
                                     bg-[length:200%_200%] animate-gradient
                                     transition-all duration-200 ease-in-out"
                            onClick={() => handleClick()}>
                            Book a Free Trial Class
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={SpeakingImg}
                            alt="English Speaking Class"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* LEARNING JOURNEY */}
                <div className="mt-20 text-center">
                    <h3 className="text-3xl font-bold text-sky-600 mb-8">
                        Your Learning Journey
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            "Step 1: Assess your current level",
                            "Step 2: Learn with live classes & activities",
                            "Step 3: Practice through real conversations",
                            "Step 4: Get certified & speak confidently",
                        ].map((step, index) => {
                            const colors = [
                                "border-pink-600 bg-pink-50",
                                "border-blue-600 bg-blue-50",
                                "border-green-600 bg-green-50",
                                "border-yellow-500 bg-yellow-50",
                            ];
                            return (
                                <div
                                    key={index}
                                    className={`p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 ${colors[index]} text-center`}
                                >
                                    <h4 className="font-semibold text-lg text-gray-800 mb-2">
                                        {step.split(":")[0]}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {step.split(":")[1]}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* COURSE FEATURES */}
                <div className="mt-20 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">
                        Key Features of the Course
                    </h3>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
                        <FeatureCard icon={<FaLaptop />} title="Live Online Classes" />
                        <FeatureCard icon={<FaUserFriends />} title="Small Batch Size" />
                        <FeatureCard icon={<FaCertificate />} title="Certified Trainers" />
                        <FeatureCard icon={<FaClock />} title="Flexible Schedule" />
                    </div>
                </div>

                {/* TESTIMONIALS */}
                <div className="mt-20 text-center">
                    <h3 className="text-3xl font-bold text-sky-700 mb-8">
                        What Our Students Say
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
                            >
                                <p className="text-gray-700 text-sm italic mb-3">
                                    “{item.feedback}”
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-sky-600">
                                        {item.name}
                                    </span>
                                    <div className="flex text-yellow-400">
                                        {Array(item.rating)
                                            .fill()
                                            .map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-sky-800 mb-8">
                        Frequently Asked Questions
                    </h3>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg shadow-sm"
                            >
                                <button
                                    onClick={() =>
                                        setActiveFAQ(activeFAQ === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center p-4 text-left"
                                >
                                    <span className="font-medium text-gray-800">
                                        {faq.question}
                                    </span>
                                    {activeFAQ === index ? (
                                        <FaChevronUp className="text-sky-600" />
                                    ) : (
                                        <FaChevronDown className="text-sky-600" />
                                    )}
                                </button>
                                {activeFAQ === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        transition={{ duration: 0.3 }}
                                        className="p-4 pt-0 text-gray-600 text-sm"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FINAL CTA */}
                <div className="mt-20 text-center bg-blue-700 text-white py-12 rounded-2xl shadow-lg">
                    <h3 className="text-3xl font-bold mb-4">
                        Start Your English Speaking Journey Today!
                    </h3>
                    <p className="max-w-2xl mx-auto text-lg mb-6 text-blue-100">
                        Take the first step toward fluency and confidence. Book your free
                        trial now and see the difference within a week!
                    </p>
                    <button className="px-8 py-3 bg-white text-blue-700 font-semibold 
                    rounded-lg shadow-md hover:bg-blue-100 transition"
                        onClick={() => handleClick()}>
                        Book a Free Demo Class
                    </button>
                </div>
            </div>
        </section>
    );
};

// Small helper component for features
const FeatureCard = ({ icon, title }) => (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="text-blue-600 text-3xl mb-3 flex justify-center">{icon}</div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </div>
);

export default EnglishSpeaking;


