import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FaRobot,
    FaTools,
    FaCogs,
    FaNetworkWired,
    FaProjectDiagram,
    FaLightbulb,
    FaChalkboardTeacher,
} from "react-icons/fa";
import roboImg from "../Images/Coding-Courses-images/robotics-image.jpg"; // Replace with your image
import { useNavigate } from "react-router-dom";
const RoboticsCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) => setActiveFAQ(activeFAQ === index ? null : index);

    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=robotics");
    }

    const faqs = [
        {
            q: "Do I need prior programming knowledge?",
            a: "No, we start from the basics of coding for robotics, suitable for beginners.",
        },
        {
            q: "What age group can join?",
            a: "Our robotics course is ideal for students aged 8 and above.",
        },
        {
            q: "Will I build real robots?",
            a: "Yes! You’ll assemble, program, and test real robotics kits during the course.",
        },
        {
            q: "Is this course hands-on?",
            a: "Absolutely, we focus on practical projects and interactive learning.",
        },
    ];

    const whatYouLearn = [
        { icon: <FaRobot className="text-blue-600 text-3xl" />, title: "Robotics Basics", desc: "Learn robot components, sensors, and motors." },
        { icon: <FaTools className="text-green-500 text-3xl" />, title: "Hands-on Building", desc: "Assemble robots with practical kits." },
        { icon: <FaCogs className="text-purple-500 text-3xl" />, title: "Programming", desc: "Program robots using block-based & Python coding." },
        { icon: <FaNetworkWired className="text-pink-500 text-3xl" />, title: "Automation & Control", desc: "Make robots move, sense, and react intelligently." },
        { icon: <FaProjectDiagram className="text-indigo-500 text-3xl" />, title: "Projects", desc: "Build mini robotics projects like line-followers & obstacle-avoiders." },
    ];

    const learningJourney = [
        { step: "Step 1", title: "Introduction to Robotics", desc: "Understand what robotics is and its applications.", icon: <FaChalkboardTeacher /> },
        { step: "Step 2", title: "Basic Electronics & Sensors", desc: "Learn sensors, motors, and simple circuits.", icon: <FaLightbulb /> },
        { step: "Step 3", title: "Programming Robots", desc: "Write code to control robot movements and actions.", icon: <FaCogs /> },
        { step: "Step 4", title: "Projects & Challenges", desc: "Apply your skills to real-world mini projects.", icon: <FaProjectDiagram /> },
    ];

    const whyChoose = [
        { stat: "Hands-on Learning", desc: "Practical robotics projects from day one.", color: "text-blue-600" },
        { stat: "STEM Skills", desc: "Develop coding, engineering, and problem-solving skills.", color: "text-purple-600" },
        { stat: "Creativity & Fun", desc: "Innovative projects that make learning enjoyable.", color: "text-green-600" },
        { stat: "Career Prep", desc: "Foundation for robotics competitions and STEM careers.", color: "text-pink-600" },
    ];

    return (
        <div className="bg-white text-gray-800  py-28">

            {/* HERO */}
            <section className="flex flex-col md:flex-row items-center justify-between mb-24 md:px-16">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-5xl font-extrabold text-gray-900">
                        Explore <span className="text-yellow-500">Robotics 🤖</span> from Scratch
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Learn to build, program, and control robots with our hands-on robotics course. Perfect for curious minds!
                        Explore sensors, motors, and simple circuits to bring robots to life.
                        Work on fun projects that teach coding, problem-solving, and engineering skills.
                    </p>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img src={roboImg} alt="Robotics" className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-blue-100" />
                </div>
            </section>

            {/* WHAT YOU’LL LEARN */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold text-center text-black mb-12">What You’ll Learn</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {whatYouLearn.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg text-center"
                        >
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* LEARNING JOURNEY - Vertical Connected Nodes */}
            <section className="mb-24 bg-gradient-to-r from-blue-50 to-blue-50 py-16 rounded-2xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">Your Learning Journey</h2>
                <div className="relative max-w-2xl mx-auto border-l-4 border-blue-400">
                    {learningJourney.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="mb-12 ml-6 relative"
                        >
                            <div className="absolute -left-8 bg-white border-4 border-blue-400 w-10 h-10 flex items-center justify-center rounded-full shadow">
                                {item.icon}
                            </div>
                            <div className="bg-white rounded-2xl shadow-md p-6">
                                <h4 className="font-bold text-blue-700">{item.step}</h4>
                                <h5 className="font-semibold text-gray-800 mt-1">{item.title}</h5>
                                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE ROBOTICS */}
            <section className="mb-24 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Robotics?</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {whyChoose.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg border-t-4 border-blue-400"
                        >
                            <h3 className={`text-2xl font-bold mb-2 ${item.color}`}>{item.stat}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-8 md:px-20 bg-gradient-to-b from-gray-50 to-white rounded-3xl">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">FAQs</h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border-b border-gray-300 py-4"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between items-center font-medium text-gray-800"
                            >
                                <span>{faq.q}</span>
                                <span className="text-blue-600 text-xl font-bold">
                                    {activeFAQ === index ? "−" : "+"}
                                </span>
                            </button>
                            {activeFAQ === index && (
                                <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="text-center py-16 bg-gradient-to-r from-yellow-200 to-yellow-50 text-black">
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

export default RoboticsCourse;
