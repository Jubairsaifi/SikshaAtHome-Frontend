import React, { useState, useEffect } from "react";
import { FaBook, FaCalculator, FaBalanceScale, FaFileInvoiceDollar, FaChartLine, FaClipboardCheck } from "react-icons/fa";
import accountsImg from "./Images/k-12-Courses-Imges/accountacy.jpg"; // 📷 Replace with your image path
import { useNavigate } from "react-router-dom";
const AccountancyCourse = () => {
    const Navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };
    const handleClick = () => {
        Navigate("/book-a-free-trial?subject=accounts")
    }

    const faqs = [
        {
            question: "Is Accountancy suitable for beginners?",
            answer:
                "Absolutely! This course starts from the very basics — introducing you to accounting principles, ledgers, and financial statements step-by-step.",
        },
        {
            question: "What are the main topics covered?",
            answer:
                "You’ll learn Journal Entries, Ledger Posting, Trial Balance, Financial Statements, Depreciation, and Adjustments — all aligned with school curricula.",
        },
        {
            question: "Do I need prior commerce knowledge?",
            answer:
                "No prior knowledge is required. We’ll begin with fundamentals like assets, liabilities, and double-entry systems.",
        },
        {
            question: "Is this course exam-oriented?",
            answer:
                "Yes, it’s structured according to CBSE and ICSE syllabi with emphasis on practical questions and exam-style exercises.",
        },
        {
            question: "Will I learn computerized accounting?",
            answer:
                "Yes, an introduction to Tally and digital accounting tools is included to help you understand modern bookkeeping systems.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-teal-50 to-white min-h-screen text-gray-800 py-20">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <h1 className="text-5xl font-extrabold text-teal-800 mb-4">
                        Learn the Language of <span className="text-gray-700">Business</span> 📚
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Accountancy is the foundation of every successful business.
                        Master the art of recording, summarizing, and analyzing financial transactions with clarity and confidence.
                        Learn the principles of balance sheets, profit & loss, and cash flow management.
                        Build the skills to interpret financial data and make informed business decisions.
                    </p>
                    <button className="mt-6 bg-teal-600 text-white font-semibold 
                    px-8 py-3 rounded-full shadow hover:bg-teal-500 transition"
                        onClick={() => handleClick()}>
                        Book Your Free Trial
                    </button>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={accountsImg}
                        alt="Accountancy Course"
                        className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition duration-300"
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-5xl mx-auto px-6 mt-10 text-center">
                <h2 className="text-3xl font-bold text-teal-800 mb-6">About the Accountancy Course</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    This course simplifies the world of accounting. You’ll learn how to record financial transactions, prepare financial statements,
                    and analyze results like a professional accountant. Build accuracy, consistency, and logical thinking through guided lessons and exercises.
                </p>
            </section>

            {/* Key Modules */}
            <section className="mt-20 bg-teal-50 py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
                    Core Modules You’ll Explore
                </h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: <FaBook />, title: "Journal Entries", desc: "Understand the double-entry system and record daily transactions." },
                        { icon: <FaCalculator />, title: "Ledger & Trial Balance", desc: "Learn how to post, balance, and verify financial data." },
                        { icon: <FaFileInvoiceDollar />, title: "Final Accounts", desc: "Prepare Trading, Profit & Loss, and Balance Sheet statements." },
                        { icon: <FaBalanceScale />, title: "Adjustments & Depreciation", desc: "Handle adjustments and calculate depreciation accurately." },
                        { icon: <FaChartLine />, title: "Ratio Analysis", desc: "Interpret financial performance using key accounting ratios." },
                        { icon: <FaClipboardCheck />, title: "Tally & Computerized Accounting", desc: "Introduction to digital tools and automation in accounts." },
                    ].map((module, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-l-4 border-teal-600 transition"
                        >
                            <div className="text-4xl text-teal-700 mb-3">{module.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">{module.title}</h3>
                            <p className="text-gray-600 text-sm">{module.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Learning Process */}
            <section className="max-w-6xl mx-auto mt-20 px-6 text-center">
                <h2 className="text-3xl font-bold text-teal-800 mb-8">
                    Step-by-Step Learning Journey
                </h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
                    {[
                        { step: "Phase 1", title: "Concept Clarity", desc: "Grasp the fundamentals of accounting principles and rules." },
                        { step: "Phase 2", title: "Practice & Examples", desc: "Solve guided problems to master accuracy and speed." },
                        { step: "Phase 3", title: "Real-World Scenarios", desc: "Understand business accounting through case studies." },
                        { step: "Phase 4", title: "Assessment", desc: "Test your skills with quizzes and balance sheet challenges." },
                    ].map((phase, index) => (
                        <div
                            key={index}
                            className="bg-white border-l-4 border-teal-600 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="text-teal-700 font-bold text-lg mb-2">{phase.step}</h4>
                            <h5 className="font-semibold mb-1 text-gray-800">{phase.title}</h5>
                            <p className="text-gray-600 text-sm">{phase.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto mt-20 px-6">
                <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">
                    Frequently Asked Questions 💬
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Common queries about our Accountancy Course
                </p>

                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-teal-400 py-3">
                        <button
                            className="flex justify-between w-full text-left font-medium text-gray-800"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <span>{activeFAQ === index ? "−" : "+"}</span>
                        </button>
                        {activeFAQ === index && (
                            <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="text-center mt-20 py-16 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
                <h3 className="text-3xl font-bold mb-4">
                    Build a Solid Foundation in Accounting 📊
                </h3>
                <p className="max-w-2xl mx-auto mb-6 text-teal-100">
                    Join our Accountancy Course and master the principles that drive financial success. Learn systematically and confidently with expert mentors.
                </p>
                <button className="bg-white text-teal-700 font-semibold px-8 py-3 
                rounded-full shadow hover:bg-gray-100 transition"
                    onClick={() => handleClick()}>
                    Book Your Free Trial
                </button>
            </section>
        </div>
    );
};

export default AccountancyCourse;
