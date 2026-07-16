import React from "react";
import {
  FaUserGraduate,
  FaHeadset,
  FaBookOpen,
  FaGlobeEurope,
  FaClock,
  FaVideo,
  FaChartLine,
  FaStar,
} from "react-icons/fa";
import franceHero from "../Images/Language-images/paris-france.jpg"; // Replace with a modern French learning image
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const FrenchLanguageCourse = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClick = () => {
    Navigate("/book-a-free-trial?subject=french")
  }
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen text-gray-800 font-sans py-8">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-28 px-6 md:px-20 flex justify-center items-center min-h-screen">
        <div className="text-center z-10 max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Master <span className="text-yellow-300">French</span> with Global Experts 🇫🇷
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Learn to speak confidently and fluently with interactive lessons, AI tutors, and immersive virtual experiences — designed for every learner.
            Practice real-life conversations with native speakers and AI chatbots.
            Improve your pronunciation, grammar, and vocabulary through fun exercises and games.
            Access cultural insights, videos, and activities that make learning French engaging.
            Track your progress with personalized feedback and reach fluency step by step.
          </p>
          <div className="space-x-4">
            {/* <button className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-300 transition">
              Start Learning
            </button> */}
            <button className="border border-white px-8 py-3 rounded-full font-medium 
            hover:bg-white hover:text-blue-700 transition"
            onClick={()=> handleClick()}>
              Book Your Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* COURSE FEATURES */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Learn French the Smart Way ✨
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaBookOpen className="text-blue-600 text-4xl" />,
              title: "Structured Curriculum",
              desc: "Progress from basics to fluency with interactive, CEFR-aligned lessons.",
            },
            {
              icon: <FaHeadset className="text-indigo-600 text-4xl" />,
              title: "Live Expert Sessions",
              desc: "Engage in real-time with certified French tutors and peers worldwide.",
            },
            {
              icon: <FaVideo className="text-purple-600 text-4xl" />,
              title: "AI-Powered Practice",
              desc: "Enhance pronunciation and grammar using AI-driven feedback tools.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-1 border border-blue-100"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING MODES */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Choose Your Learning Style 🎓
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaClock className="text-blue-600 text-3xl" />,
              title: "Self-Paced Learning",
              desc: "Access lessons anytime, anywhere with on-demand videos and quizzes.",
            },
            {
              icon: <FaUserGraduate className="text-indigo-600 text-3xl" />,
              title: "1-on-1 Mentorship",
              desc: "Personalized sessions to focus on speaking, grammar, or professional French.",
            },
            {
              icon: <FaGlobeEurope className="text-purple-600 text-3xl" />,
              title: "Group Learning",
              desc: "Join live batches to collaborate, converse, and grow with global peers.",
            },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{m.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{m.title}</h3>
              <p className="text-gray-600">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Global Learning Impact 🌍</h2>
        <div className="flex flex-wrap justify-center gap-10 text-blue-700 font-semibold">
          <div>
            <p className="text-5xl font-extrabold mb-2">50K+</p>
            <p>Learners Enrolled</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold mb-2">95%</p>
            <p>Course Satisfaction</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold mb-2">100+</p>
            <p>Expert Tutors</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          What Learners Say 💬
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Arjun Mehta",
              review:
                "An exceptional platform! The AI practice tool helped me speak confidently in just 2 months.",
              rating: 5,
            },
            {
              name: "Emma Williams",
              review:
                "The live mentor sessions feel just like a classroom — interactive and inspiring!",
              rating: 4,
            },
            {
              name: "Sofia Dubois",
              review:
                "I love the community aspect. Speaking with native French tutors boosted my confidence!",
              rating: 5,
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md w-80 hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-3">“{t.review}”</p>
              <p className="font-semibold text-gray-900">— {t.name}</p>
              <div className="flex justify-center mt-2">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} className="text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
        <h3 className="text-3xl font-bold mb-3">Ready to Speak French Like a Pro?</h3>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-blue-100">
          Join our immersive online French program — designed for learners who want real
          results, fast.
        </p>
        <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold 
        hover:bg-yellow-300 transition"
        onClick={() => handleClick()}>
          Book Your Free Demo
        </button>
      </section>
    </div>
  );
};

export default FrenchLanguageCourse;
