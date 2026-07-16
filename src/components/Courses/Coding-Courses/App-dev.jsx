import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FaMobileAlt,
    FaCode,
    FaLightbulb,
    FaRocket,
    FaAndroid,
    FaApple,
    FaLaptopCode,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AppDevelopmentCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);

    const fadeIn = (direction = "left") => ({
        hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    });

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=app-dev")
    }

    const faqs = [
        {
            question: "Do I need prior experience to join this course?",
            answer:
                "No! This course is designed for both beginners and those with basic programming knowledge. We start from the fundamentals.",
        },
        {
            question: "Which platforms will I be able to build apps for?",
            answer:
                "You’ll be able to develop for both Android and iOS using frameworks like React Native and Flutter.",
        },
        {
            question: "Are the classes live or recorded?",
            answer:
                "We offer both — live interactive sessions with mentors and recorded lessons for self-paced learning.",
        },
        {
            question: "Will I get a certificate after completion?",
            answer:
                "Yes! A certificate is awarded upon successful completion of the course, validating your app development skills.",
        },
        {
            question: "Can I create my own app project?",
            answer:
                "Absolutely! You’ll work on real projects and can even design your own app as part of the course.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-16  overflow-hidden py-36">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
                    App Development Mastery
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Build powerful Android & iOS apps from scratch! Learn design, coding, and deployment with hands-on projects and expert mentorship.
                    Create interactive, user-friendly applications using modern tools like React Native and Flutter.
                    Bring your ideas to life with real-world app development projects.
                    Gain skills that open doors to mobile development careers and entrepreneurial ventures.
                </p>
            </div>

            {/* What You’ll Learn Section */}
            <section className="mb-20 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    What You’ll Learn
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaMobileAlt className="text-4xl text-pink-600" />,
                            title: "Mobile UI/UX Design",
                            desc: "Design clean and user-friendly app interfaces that attract and retain users.",
                        },
                        {
                            icon: <FaCode className="text-4xl text-blue-600" />,
                            title: "Frontend & Backend Coding",
                            desc: "Master app development using React Native, Flutter, or Kotlin with backend integration.",
                        },
                        {
                            icon: <FaRocket className="text-4xl text-green-600" />,
                            title: "App Launch & Deployment",
                            desc: "Learn to test, debug, and publish your apps to Google Play and the Apple App Store.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 text-center border-t-4 border-purple-500"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Learning Journey Section */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Your Learning Journey
                </h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-purple-300"></div>

                    {[
                        {
                            step: "1",
                            title: "Basics of Programming",
                            desc: "Understand the foundations of coding with logic building and algorithms.",
                        },
                        {
                            step: "2",
                            title: "UI & Navigation Design",
                            desc: "Learn to build visually appealing and responsive layouts.",
                        },
                        {
                            step: "3",
                            title: "App Functionality",
                            desc: "Implement real-world features like authentication and data storage.",
                        },
                        {
                            step: "4",
                            title: "Testing & Launch",
                            desc: "Debug, test, and deploy your app with confidence.",
                        },
                    ].map((journey, i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn(i % 2 === 0 ? "left" : "right")}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className={`relative flex ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                } items-center mb-10`}
                        >
                            <div className="w-1/2 p-6">
                                <div className="bg-purple-50 p-6 rounded-xl shadow-md">
                                    <h4 className="text-xl font-semibold text-purple-700 mb-2">
                                        {journey.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">{journey.desc}</p>
                                </div>
                            </div>
                            <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full font-bold shadow-lg z-10">
                                {journey.step}
                            </div>
                            <div className="w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose App Development */}
            <section className="text-center mb-20 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Why Choose App Development?
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaAndroid className="text-green-600 text-3xl" />,
                            title: "Android & iOS Ready",
                            desc: "Build apps for both platforms with modern frameworks.",
                        },
                        {
                            icon: <FaApple className="text-gray-700 text-3xl" />,
                            title: "High Demand Skills",
                            desc: "App developers are in massive global demand across industries.",
                        },
                        {
                            icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
                            title: "Hands-On Projects",
                            desc: "Build real apps and showcase them in your professional portfolio.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-purple-50 py-12 rounded-3xl ">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="border-b border-gray-300 py-4"
                        >
                            <button
                                className="flex justify-between w-full text-left font-medium text-gray-800"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="text-purple-600 font-bold">
                                    {activeFAQ === index ? "−" : "+"}
                                </span>
                            </button>
                            {activeFAQ === index && (
                                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="text-center py-16 bg-gradient-to-r from-purple-600 to-pink-200 text-white">
                <h3 className="text-3xl font-bold mb-3">Start Building Your Mobile Apps Today 🌍</h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg">
                    Turn your creativity into real web projects. Join our App Development
                    Course and code your first live App.
                </p>
                <button className="bg-white text-blue-700 px-8 py-3 rounded-full 
                font-semibold hover:bg-blue-100 transition"
                    onClick={() => handleClick()}>
                    Book Your Free Trial
                </button>
            </section>
        </div>
    );
};

export default AppDevelopmentCourse;
