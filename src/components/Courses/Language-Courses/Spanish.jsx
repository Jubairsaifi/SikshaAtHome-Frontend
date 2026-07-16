import React, { useState, useEffect } from "react";
import {
  FaLanguage,
  FaGlobeEurope,
  FaUsers,
  FaChalkboardTeacher,
  FaCertificate,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";
import spanishImg from "../Images/Language-images/spain.jpg"; // Replace with your image
import { useNavigate } from "react-router-dom";

const SpanishCourse = () => {
  const Navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (index) =>
    setActiveFAQ(activeFAQ === index ? null : index);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClick = () => {
    Navigate("/book-a-free-trial?subject=spanish")
  }

  const faqs = [
    {
      q: "Is this course suitable for beginners?",
      a: "Absolutely! We start from basic greetings and gradually build your fluency through interactive lessons and real-life practice.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, upon completion, you’ll receive a digital certificate to showcase your Spanish proficiency.",
    },
    {
      q: "Do I need to know any other language?",
      a: "No prior language knowledge is required. Our bilingual instructors make learning smooth and intuitive.",
    },
    {
      q: "How long will it take to become conversational?",
      a: "With consistent effort, most learners reach conversational level within 3–4 months of regular practice.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-rose-50 min-h-screen text-gray-800 py-12">
      {/* HERO SECTION */}
      <section className="px-10 md:px-20 py-20 flex justify-center items-center min-h-screen">
        <div className="text-center max-w-3xl space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Speak <span className="text-rose-600">Spanish</span> with Confidence 💬
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Master one of the world’s most spoken languages through immersive, interactive lessons — designed for students, professionals, and global communicators.
            Practice real-life conversations with native speakers and AI tutors.
            Improve your pronunciation, grammar, and vocabulary with fun exercises and challenges.
            Explore Spanish culture, music, and media to make learning lively and enjoyable.
            Track your progress with personalized feedback and achieve fluency step by step.
          </p>
          <div className="space-x-4">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold 
            shadow-md hover:bg-rose-500 transition"
              onClick={() => handleClick()}>
              Book Your Free Demo
            </button>
          </div>
        </div>
      </section>


      {/* COURSE OVERVIEW */}
      <section className="py-20 px-10 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-12">
          Why Learn Spanish with Us? 🇪🇸
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaLanguage className="text-rose-500 text-4xl mb-3" />,
              title: "Interactive Learning",
              desc: "Learn Spanish through games, videos, and live sessions that make every lesson fun and practical.",
            },
            {
              icon: <FaUsers className="text-orange-500 text-4xl mb-3" />,
              title: "Community Support",
              desc: "Join study groups and connect with learners across the world to practice speaking and exchange ideas.",
            },
            {
              icon: <FaChalkboardTeacher className="text-yellow-500 text-4xl mb-3" />,
              title: "Expert Teachers",
              desc: "Learn from certified native instructors who focus on pronunciation, grammar, and real-life communication.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-rose-50 to-white border border-rose-100 rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-center text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLUENCY PATH (PROGRESS CARDS) */}
      <section className="py-20 bg-gradient-to-r from-rose-100 to-orange-50">
        <h2 className="text-3xl font-bold text-center text-rose-700 mb-16">
          Your Fluency Path 🚀
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {[
            {
              level: "Beginner",
              desc: "Start with pronunciation, greetings, and basic grammar.",
              progress: "25%",
            },
            {
              level: "Intermediate",
              desc: "Build vocabulary, form sentences, and express opinions.",
              progress: "60%",
            },
            {
              level: "Advanced",
              desc: "Achieve fluency and understand Spanish media & culture.",
              progress: "90%",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-rose-100 w-72 p-6 text-center hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-rose-700 mb-2">
                {step.level}
              </h4>
              <p className="text-gray-600 mb-4">{step.desc}</p>
              <div className="w-full bg-rose-100 rounded-full h-3">
                <div
                  className="bg-rose-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: step.progress }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{step.progress} Complete</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="py-20 px-10 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
          Career Opportunities 🎯
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl shadow-inner">
            <p className="text-gray-700 text-lg leading-relaxed">
              Learning Spanish opens doors to international business, tourism,
              media, and global networking. It's a valuable skill for careers in
              <span className="font-semibold text-rose-600"> education, translation, diplomacy, and customer engagement</span>.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Work with multinational companies",
              "Teach or translate professionally",
              "Explore global travel opportunities",
              "Stand out in college and scholarship programs",
            ].map((point, i) => (
              <p key={i} className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-rose-500" /> {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT VOICES */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <h2 className="text-3xl font-bold text-center text-rose-700 mb-12">
          Student Voices ❤️
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Ananya Sharma",
              feedback:
                "The interactive sessions and games made learning so easy! I can now hold conversations in Spanish confidently.",
            },
            {
              name: "Rahul Mehta",
              feedback:
                "Best online Spanish course! The teachers are super friendly and the live practice sessions are amazing.",
            },
            {
              name: "Sara Lopez",
              feedback:
                "Being a native speaker assisting as a mentor, I loved how the platform connects global learners in real time.",
            },
          ].map((student, i) => (
            <div
              key={i}
              className="bg-white w-80 border border-rose-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-rose-400 text-2xl mb-3" />
              <p className="text-gray-700 mb-4 italic">“{student.feedback}”</p>
              <p className="text-rose-600 font-semibold text-right">
                — {student.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-8 md:px-20 bg-gradient-to-b from-white to-orange-50">
        <h2 className="text-3xl font-bold text-center text-rose-700 mb-10">
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

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-rose-600 to-orange-400 text-white">
        <h3 className="text-3xl font-bold mb-3">
          Start Speaking Spanish Today 💬
        </h3>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Join thousands of learners mastering Spanish online. Learn at your
          pace, practice daily, and grow globally.
        </p>
        <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold 
        hover:bg-orange-50 transition" 
        onClick={() => handleClick()}>
          Book Your Free Demo
        </button>
      </section>
    </div>
  );
};

export default SpanishCourse;

