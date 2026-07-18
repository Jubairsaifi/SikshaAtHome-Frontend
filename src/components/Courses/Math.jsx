import React, { useState, useEffect } from "react";
import { FaLightbulb, FaCalculator, FaShapes, FaChartPie, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import MathImg from "./Images/k-12-Courses-Imges/math-learning.jpg"; // replace with your image
import { useNavigate } from "react-router-dom";

const MathCourse = () => {

  const [activeFAQ, setActiveFAQ] = useState(null);
  const Navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleClick = () => {
    Navigate("/book-a-free-trial?subject=mathematics")
  }

  const faqs = [
    {
      q: "How are online Math classes conducted?",
      a: "Our Math classes are conducted live on Zoom/Google Meet with interactive activities, screen sharing, and real-time feedback.",
    },
    {
      q: "What grades are covered in this course?",
      a: "We offer Mathematics programs for Grades 1 to 12 — fully aligned with CBSE, ICSE, and State Boards.",
    },
    {
      q: "Do you provide regular homework and progress reports?",
      a: "Yes, weekly homework, tests, and personalized progress reports help track the student’s learning curve.",
    },
  ];

  const topics = [
    { icon: <FaCalculator />, title: "Arithmetic", desc: "Master operations, ratios, percentages, and word problems." },
    { icon: <FaLightbulb />, title: "Algebra", desc: "Understand expressions, equations, and logical reasoning." },
    { icon: <FaShapes />, title: "Geometry", desc: "Explore shapes, angles, theorems, and spatial understanding." },
    { icon: <FaChartPie />, title: "Data Handling", desc: "Learn to represent and interpret data using charts & graphs." },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-24">
      {/* Hero Section */}
      <section className="bg-purple-500 text-white py-20 px-6 md:px-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Mathematics That Makes Sense!</h1>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Discover the power of numbers with interactive lessons, live practice, and real-world problem solving.
          Strengthen your analytical thinking, explore exciting math challenges, and learn to solve problems like a pro.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 
        rounded-full shadow hover:bg-gray-200 transition"
          onClick={() => handleClick()}>
          Book a Free Demo Class
        </button>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-10 py-16 px-6 md:px-16 items-center">
        <img src={MathImg} alt="Math Class" className="rounded-2xl shadow-lg w-full object-cover" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Learn Mathematics the Smart Way 🧠
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Mathematics is more than just numbers — it's the language of logic and creativity.
            Our course focuses on understanding rather than memorization, ensuring students
            develop confidence and critical thinking skills.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Activity-based learning for each concept</li>
            <li>✔ Regular quizzes and performance tracking</li>
            <li>✔ Concept revision with real-life applications</li>
            <li>✔ One-on-one mentorship from expert teachers</li>
          </ul>
        </div>
      </section>

      {/* Topic Highlights */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">
          Key Areas We Focus On
        </h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {topics.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 border-purple-800 bg-indigo-50 text-center"
            >
              <div className="text-4xl text-purple-800 mb-3 flex justify-center">{t.icon}</div>
              <h4 className="font-semibold text-lg text-bold text-gray-800 mb-2">{t.title}</h4>
              <p className="text-gray-600 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real-world Applications */}
      <section className="py-20 px-6 md:px-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6">Mathematics in Everyday Life 🌍</h3>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">
          From calculating discounts while shopping to planning trips and managing time,
          math plays a vital role everywhere. Our course connects classroom concepts to
          real-world applications, making learning meaningful and enjoyable.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h4 className="font-semibold text-lg mb-2 text-blue-700">Money & Budgeting</h4>
            <p className="text-gray-600 text-sm">Understand financial literacy with math-based simulations.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Science & Measurements</h4>
            <p className="text-gray-600 text-sm">Learn how math supports experiments, data analysis, and scaling.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h4 className="font-semibold text-lg mb-2 text-pink-700">Technology & Coding</h4>
            <p className="text-gray-600 text-sm">Discover how math is used in algorithms, AI, and computer logic.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-indigo-50 to-blue-100 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Math Course?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaChalkboardTeacher />, title: "Expert Educators", desc: "Certified math tutors with years of teaching experience." },
            { icon: <FaUserGraduate />, title: "Personalized Path", desc: "Custom learning journeys designed for each student’s level." },
            { icon: <FaLightbulb />, title: "Concept Reinforcement", desc: "Interactive exercises ensure deep understanding of every topic." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-3 text-purple-800 flex justify-center">{item.icon}</div>
              <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently <span className="text-purple-500">Asked</span> Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b py-3">
              <button
                className="w-full flex justify-between text-left font-medium text-gray-800"
                onClick={() => toggleFAQ(i)}
              >
                <span>{faq.q}</span>
                <span>{activeFAQ === i ? "−" : "+"}</span>
              </button>
              {activeFAQ === i && (
                <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MathCourse;
