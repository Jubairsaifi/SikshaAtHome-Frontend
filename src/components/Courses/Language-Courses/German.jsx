import React, { useState, useEffect } from "react";
import {
  FaLanguage,
  FaGlobe,
  FaUniversity,
  FaUserGraduate,
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GermanCourse = () => {
  const Navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (index) =>
    setActiveFAQ(activeFAQ === index ? null : index);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClick = () => {
    Navigate("/book-a-free-trial?subject=german")
  }

  const faqs = [
    {
      q: "Is German difficult to learn?",
      a: "Not at all! With structured lessons and guided practice, you’ll quickly grasp grammar and pronunciation.",
    },
    {
      q: "Will I learn speaking and writing both?",
      a: "Yes, our course includes speaking, listening, writing, and grammar to build complete fluency.",
    },
    {
      q: "Do you provide any certification?",
      a: "Yes, after completing the course, you’ll receive an internationally valid certificate.",
    },
    {
      q: "How many levels are there?",
      a: "We offer beginner (A1–A2), intermediate (B1–B2), and advanced (C1) levels following CEFR standards.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 text-gray-800 min-h-screen py-20">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-between px-10 md:px-20 py-20 bg-gradient-to-r from-blue-50 to-slate-100 min-h-screen">
        <div className="text-center max-w-3xl space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Learn <span className="text-blue-600">German</span> — The Language of Innovation 🇩🇪
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Unlock global opportunities with one of Europe’s most influential languages. From business to academia — master German and open doors to a new world.
            Practice real-world conversations and professional communication skills with interactive lessons.
            Explore German culture, traditions, and media to make learning immersive and fun.
            Build confidence in speaking, reading, and writing for both personal and career growth.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold
           shadow hover:bg-blue-500 transition"
           onClick={() => handleClick()}>
            Book Your Free Demo
          </button>
        </div>
      </section>

      {/* COURSE HIGHLIGHTS */}
      <section className="py-20 px-10 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Why Learn German with Us? 🇩🇪
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaLanguage className="text-blue-500 text-4xl mb-3" />,
              title: "Structured Learning",
              desc: "Step-by-step lessons for every level from A1 to C1.",
            },
            {
              icon: <FaUniversity className="text-slate-500 text-4xl mb-3" />,
              title: "Study Abroad Ready",
              desc: "Prepare for German university admissions and visa interviews.",
            },
            {
              icon: <FaUserGraduate className="text-sky-600 text-4xl mb-3" />,
              title: "Certified Trainers",
              desc: "Native-speaking instructors with years of experience.",
            },
            {
              icon: <FaGlobe className="text-indigo-500 text-4xl mb-3" />,
              title: "Global Recognition",
              desc: "Our courses follow CEFR and Goethe-Institut standards.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-slate-50 to-white border border-blue-100 rounded-2xl p-8 shadow hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING ROADMAP - Horizontal Timeline */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-16">
          Your Learning Roadmap 🧭
        </h2>
        <div className="relative flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto">
          {[
            {
              step: "A1–A2",
              title: "Foundation",
              desc: "Learn greetings, introductions, and basic grammar rules.",
            },
            {
              step: "B1–B2",
              title: "Intermediate",
              desc: "Build confidence with conversations, tenses, and vocabulary.",
            },
            {
              step: "C1",
              title: "Advanced",
              desc: "Achieve fluency and prepare for academic/professional usage.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white border border-blue-100 rounded-2xl p-8 m-3 md:w-72 shadow-md hover:shadow-lg transition text-center"
            >
              <h4 className="text-blue-600 font-bold text-xl mb-2">
                {item.step}: {item.title}
              </h4>
              <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              {i < 2 && (
                <FaArrowRight className="hidden md:block absolute top-1/2 -right-5 text-blue-400 text-2xl" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CAREER ADVANTAGES */}
      <section className="py-20 px-10 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Career Advantages 🌍
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              German is a top global business language used in technology,
              engineering, and academia. Knowing German increases your career
              prospects in <span className="font-semibold text-blue-700">Europe’s largest economy</span>.
            </p>
            <div className="space-y-3">
              {[
                "Boost career opportunities in multinational firms",
                "Qualify for German university scholarships",
                "Collaborate in European tech and science projects",
                "Improve networking with professionals globally",
              ].map((point, i) => (
                <p key={i} className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-blue-500" /> {point}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 border border-blue-100 p-8 rounded-3xl shadow-inner text-center">
            <FaUserGraduate className="text-6xl text-blue-600 mb-4 mx-auto" />
            <p className="text-gray-700 font-medium leading-relaxed">
              Whether you aim for studies, work, or migration — German opens the
              gateway to innovation, research, and high-quality education.
            </p>
          </div>
        </div>
      </section>

      {/* STUDENT FEEDBACK */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Student Feedback 💬
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Neha Verma",
              feedback:
                "I loved the clarity and support. The roadmap helped me stay motivated and see my progress!",
            },
            {
              name: "Arjun Singh",
              feedback:
                "The live sessions and pronunciation drills made me confident to talk with native speakers.",
            },
            {
              name: "Sophia Klein",
              feedback:
                "As a German mentor, I’m impressed by the structure and teaching flow. Truly effective for beginners.",
            },
          ].map((student, i) => (
            <div
              key={i}
              className="bg-white w-80 border border-blue-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-blue-400 text-2xl mb-3" />
              <p className="text-gray-700 mb-4 italic">“{student.feedback}”</p>
              <p className="text-blue-600 font-semibold text-right">
                — {student.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-8 md:px-20 bg-gradient-to-b from-white to-slate-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
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

      {/* CTA SECTION */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-slate-400 text-white">
        <h3 className="text-3xl font-bold mb-3">
          Begin Your German Journey Today 🇩🇪
        </h3>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Join our professional German language course and gain fluency that
          speaks volumes — in your career and beyond.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold 
        hover:bg-blue-100 transition"
        onClick={() => handleClick()}>
          Book Your Free Demo
        </button>
      </section>
    </div>
  );
};

export default GermanCourse;
