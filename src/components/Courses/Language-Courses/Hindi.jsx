import React, { useState, useEffect } from "react";
import {
    FaLanguage,
    FaBookOpen,
    FaChalkboardTeacher,
    FaUserGraduate,
    FaCheckCircle,
    FaQuoteLeft,
} from "react-icons/fa";
// import hindiImg from "../Images/Language-images/hindi.jpg"; // Replace with your image
import { useNavigate } from "react-router-dom";

const HindiCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) => setActiveFAQ(activeFAQ === index ? null : index);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=hindi")
    }
    
    const faqs = [
        {
            q: "Is this course suitable for beginners?",
            a: "Absolutely! The course is designed for learners with no prior knowledge of Hindi.",
        },
        {
            q: "Will I learn reading and writing?",
            a: "Yes, we cover speaking, listening, reading, and writing comprehensively.",
        },
        {
            q: "Do you provide any certificate?",
            a: "Yes, a certificate of completion will be provided after finishing the course.",
        },
        {
            q: "Are the classes live or recorded?",
            a: "We provide a mix of live interactive sessions and recorded lessons for flexible learning.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-white to-yellow-50 min-h-screen text-gray-800 font-sans py-8">
            {/* HERO SECTION */}
            <section className="flex flex-col items-center justify-center px-6 md:px-20 py-28 bg-gradient-to-r from-yellow-100 to-yellow-200 text-center">
                {/* <img
          src={hindiImg}
          alt="Hindi Language"
          className="w-48 h-48 rounded-full mb-6 shadow-lg border-4 border-yellow-300"
        /> */}
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Master <span className="text-red-600">Hindi</span> — Speak with Confidence 🇮🇳
                </h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
                    Unlock the beauty of Hindi language and culture through immersive lessons,
                    interactive exercises, and expert guidance. Learn to communicate fluently,
                    understand local nuances, and read & write with confidence. Perfect for students,
                    travelers, and professionals alike.
                </p>
                <div className="space-x-4">
                    {/* <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-red-500 transition">
            Enroll Now
          </button> */}
                    <button className="border border-red-600 px-8 py-3 rounded-full font-medium
                     hover:bg-red-100 hover:text-red-700 transition"
                     onClick={() => handleClick()}>
                        Book Your Free Demo
                    </button>
                </div>
            </section>

            {/* COURSE HIGHLIGHTS */}
            <section className="py-20 px-6 md:px-20 bg-white">
                <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
                    Why Learn Hindi with Us? 🇮🇳
                </h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <FaLanguage className="text-red-500 text-4xl mb-3" />,
                            title: "Structured Lessons",
                            desc: "Step-by-step lessons from basics to advanced proficiency.",
                        },
                        {
                            icon: <FaBookOpen className="text-yellow-600 text-4xl mb-3" />,
                            title: "Reading & Writing",
                            desc: "Learn to read Hindi script, write sentences, and build vocabulary.",
                        },
                        {
                            icon: <FaChalkboardTeacher className="text-red-700 text-4xl mb-3" />,
                            title: "Expert Trainers",
                            desc: "Experienced instructors with cultural insights and practical guidance.",
                        },
                        {
                            icon: <FaUserGraduate className="text-orange-500 text-4xl mb-3" />,
                            title: "Practical Fluency",
                            desc: "Develop real-life speaking, listening, and comprehension skills.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-t from-yellow-50 to-white border border-red-100 rounded-2xl p-8 shadow hover:shadow-lg transition text-center"
                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* STUDENT TESTIMONIALS */}
            <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
                <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Student Feedback 💬</h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            name: "Anjali Sharma",
                            feedback:
                                "I started with no knowledge of Hindi and now I can converse confidently with locals and read Hindi books!",
                        },
                        {
                            name: "Rohit Verma",
                            feedback:
                                "The interactive exercises and live sessions made learning Hindi engaging and practical.",
                        },
                        {
                            name: "Priya Singh",
                            feedback:
                                "Amazing trainers and structured lessons helped me achieve fluency faster than I expected.",
                        },
                    ].map((student, i) => (
                        <div
                            key={i}
                            className="bg-white w-80 border border-red-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <FaQuoteLeft className="text-red-400 text-2xl mb-3" />
                            <p className="text-gray-700 mb-4 italic">“{student.feedback}”</p>
                            <p className="text-red-600 font-semibold text-right">— {student.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-yellow-50">
                <h2 className="text-3xl font-bold text-center text-red-600 mb-10">FAQs ❓</h2>
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
                            {activeFAQ === index && <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>}
                        </div>
                    ))}
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="text-center py-16 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
                <h3 className="text-3xl font-bold mb-3">Start Your Hindi Journey Today 🇮🇳</h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg">
                    Learn Hindi efficiently and confidently with expert guidance, interactive lessons, and practical exercises. Perfect for students, travelers, and professionals.
                </p>
                <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold 
                hover:bg-yellow-100 transition"
                onClick={() => handleClick()}>
                    Book Your Free Demo
                </button>
            </section>
        </div>
    );
};

export default HindiCourse;
