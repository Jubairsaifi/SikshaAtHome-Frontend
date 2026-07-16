import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FaRobot,
    FaBrain,
    FaDatabase,
    FaChalkboardTeacher,
    FaChartLine,
    FaNetworkWired,
    FaCogs,
    FaRocket,
} from "react-icons/fa";
import AIImg from "../Images/Coding-Courses-images/AI-Image.jpg"
import { useNavigate } from "react-router-dom";

const AICourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", interest: "" });
    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=artificial-intelligent")
    }

    const faqs = [
        {
            question: "Is AI hard to learn for beginners?",
            answer:
                "Not at all! We start with simple concepts and real-life examples to make learning AI fun and approachable.",
        },
        {
            question: "Do I need coding experience?",
            answer:
                "No! Basic logical thinking is enough — our lessons start from the ground up.",
        },
        {
            question: "Will I get to build real projects?",
            answer:
                "Yes, you’ll create AI chatbots, image recognition systems, and predictive models throughout the course.",
        },
        {
            question: "How long is the course?",
            answer:
                "Typically 10–12 weeks, depending on your pace and depth of exploration.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for showing interest! We'll reach out soon 🚀");
        setFormData({ name: "", email: "", interest: "" });
    };

    return (
        <div className="bg-white text-gray-800  py-16 overflow-hidden py-36">

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-pink-300">
                    Artificial Intelligence Course
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                    Step into the world of intelligent systems — learn how machines can think, analyze, and evolve just like humans.
                    Explore the fundamentals of artificial intelligence, machine learning, and neural networks.
                    Work on real-world projects like chatbots, recommendation systems, and predictive models.
                </p>
            </motion.div>

            {/* What You’ll Learn */}
            <section className="mb-24  md:px-16">
                <h2 className="text-3xl font-bold mb-10 text-center text-black">
                    What You’ll Learn
                </h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.ul
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {[
                            {
                                icon: <FaBrain className="text-blue-600 text-2xl" />,
                                title: "Foundations of AI",
                                desc: "Understand how machines learn, reason, and adapt using data and logic.",
                            },
                            {
                                icon: <FaDatabase className="text-indigo-600 text-2xl" />,
                                title: "Machine Learning Basics",
                                desc: "Dive into regression, classification, and clustering using Python.",
                            },
                            {
                                icon: <FaChartLine className="text-purple-600 text-2xl" />,
                                title: "Data Visualization",
                                desc: "Create meaningful charts and dashboards to make data speak.",
                            },
                            {
                                icon: <FaNetworkWired className="text-pink-600 text-2xl" />,
                                title: "Neural Networks",
                                desc: "Understand deep learning and how it powers modern AI systems.",
                            },
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl hover:bg-pink-50 transition"
                            >
                                {item.icon}
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </motion.ul>

                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        src={AIImg}
                        alt="AI Learning"
                        className="rounded-3xl shadow-lg w-full"
                    />
                </div>
            </section>

            {/* Learning Journey - Vertical Timeline */}
            <section className="mb-24 bg-gradient-to-br from-pink-50 to-pink-50 py-16 px-6 rounded-3xl ">
                <h2 className="text-3xl font-bold text-center text-pink-700 mb-14">
                    Your Learning Journey
                </h2>
                <div className="relative max-w-2xl mx-auto border-l-4 border-pink-700">
                    {[
                        {
                            step: "Step 1",
                            title: "Introduction to AI & Python",
                            desc: "Get started with Python basics and how it’s used in AI.",
                            icon: <FaChalkboardTeacher className="text-blue-600" />,
                        },
                        {
                            step: "Step 2",
                            title: "Machine Learning Concepts",
                            desc: "Learn how computers predict outcomes from data patterns.",
                            icon: <FaCogs className="text-indigo-600" />,
                        },
                        {
                            step: "Step 3",
                            title: "Deep Learning",
                            desc: "Understand neural networks, backpropagation, and TensorFlow.",
                            icon: <FaBrain className="text-purple-600" />,
                        },
                        {
                            step: "Step 4",
                            title: "AI Projects & Deployment",
                            desc: "Build and deploy your own AI model in a real-world scenario.",
                            icon: <FaRocket className="text-pink-600" />,
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="mb-12 ml-6 relative"
                        >
                            <div className="absolute -left-8 bg-white border-4 border-pink-700 w-10 h-10 flex items-center justify-center rounded-full shadow">
                                {item.icon}
                            </div>
                            <div className="bg-white rounded-2xl shadow-md p-6">
                                <h4 className="font-bold text-pink-700">{item.step}</h4>
                                <h5 className="font-semibold text-gray-800 mt-1">{item.title}</h5>
                                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose AI */}
            <section className="mb-24 text-center  md:px-16" >
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose AI?</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Global Demand", stat: "95%", color: "text-blue-600" },
                        { label: "Job Growth", stat: "40%+", color: "text-purple-600" },
                        { label: "Avg. Salary Rise", stat: "60%", color: "text-indigo-600" },
                        { label: "Innovation Impact", stat: "Massive", color: "text-purple-600" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg border-t-4 border-pink-400"
                        >
                            <h3 className={`text-4xl font-bold ${item.color}`}>{item.stat}</h3>
                            <p className="mt-2 text-gray-600 text-sm">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:px-20 bg-gradient-to-b from-gray-50 to-white">
                <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">
                    FAQs ❓
                </h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 py-3">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between font-semibold text-pink"
                            >
                                <span>{faq.question}</span>
                                <span>{activeFAQ === index ? "−" : "+"}</span>
                            </button>
                            {activeFAQ === index && (
                                <p className="mt-2 text-black text-sm">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-16 bg-gradient-to-r from-pink-400 to-pink-100 text-white">
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

export default AICourse;
