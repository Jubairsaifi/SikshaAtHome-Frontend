import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, MessageSquare, Landmark, Globe2, Award } from "lucide-react";
import japaneseImg from "../Images/Language-images/flag-japan.jpg";
import { useNavigate } from "react-router-dom";

const JapaneseLanguageCourse = () => {
  const Navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (index) => setActiveFAQ(activeFAQ === index ? null : index);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClick = () => {
    Navigate("/book-a-free-trial?subject=japanese")
  }

  const faqs = [
    {
      q: "Is Japanese hard to learn for beginners?",
      a: "Not at all! With our structured approach and visual lessons, you'll start reading, speaking, and writing basic Japanese from the first week.",
    },
    {
      q: "Will I learn Hiragana, Katakana, and Kanji?",
      a: "Yes! We teach all three scripts progressively, with practice sheets and memory techniques.",
    },
    {
      q: "Do I get to speak with native tutors?",
      a: "Absolutely. You’ll interact with native Japanese instructors and practice real-life dialogues.",
    },
    {
      q: "How long does it take to complete the course?",
      a: "You can achieve conversational fluency in 6–8 months depending on your learning pace.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-red-50 to-indigo-50 text-gray-800 min-h-screen py-8">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-screen px-6 bg-gradient-to-b from-white to-blue-50 text-center">
        <motion.div
          className="space-y-6 max-w-3xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 className="text-4xl md:text-4xl font-bold text-red-600 leading-light">
            Learn Japanese — Speak with the Heart of Japan
          </motion.h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Dive into Japan’s beautiful language and culture through our immersive, tech-powered online learning program.
            Practice speaking, reading, and writing with interactive exercises and real-life scenarios.
            Explore Japanese traditions, media, and pop culture to make learning fun and engaging.
            Receive personalized feedback from native speakers and AI tutors to improve fluency.
            Gain confidence in communication for travel, work, or cultural exploration.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full 
          font-semibold shadow hover:bg-blue-500 transition"
          onClick={() => handleClick()}>
            Book Your Free Demo
          </button>
        </motion.div>
      </section>


      {/* Learning Experience Section */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            A Modern Way to Learn an Ancient Language
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Japanese may seem complex, but we’ve simplified it through visual
            learning, gamified lessons, and real-world communication practice.
            From anime dialogues to business Japanese — you’ll gain skills that
            connect you with one of the most innovative cultures on Earth.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>🎌 Master Hiragana, Katakana, and Kanji at your own pace</li>
            <li>🗣️ Learn with interactive speaking and listening sessions</li>
            <li>💡 Culturally rich lessons — traditions, food, and etiquette</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-red-400"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Course Highlights
          </h3>
          <div className="space-y-4">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-red-500" />,
                title: "Structured Learning Path",
                desc: "Step-by-step modules from basic phonetics to advanced grammar.",
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-indigo-500" />,
                title: "Speaking Practice",
                desc: "Weekly live conversations with native speakers and peers.",
              },
              {
                icon: <Landmark className="w-6 h-6 text-red-500" />,
                title: "Cultural Immersion",
                desc: "Explore Japan’s art, traditions, and communication style.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Cultural Connection Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-red-50 py-20 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Connect Beyond Words
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Learning Japanese is more than just language — it’s understanding a way
          of life rooted in respect, mindfulness, and creativity. Our program
          bridges culture and communication through modern teaching techniques.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-md p-8 rounded-2xl w-72 hover:shadow-lg transition">
            <Globe2 className="mx-auto text-indigo-600 w-10 h-10 mb-3" />
            <h4 className="font-semibold text-lg">Global Relevance</h4>
            <p className="text-gray-600 text-sm">
              Japan is a leader in innovation — learning Japanese opens global
              career doors.
            </p>
          </div>
          <div className="bg-white shadow-md p-8 rounded-2xl w-72 hover:shadow-lg transition">
            <Award className="mx-auto text-red-500 w-10 h-10 mb-3" />
            <h4 className="font-semibold text-lg">Certified Achievement</h4>
            <p className="text-gray-600 text-sm">
              Earn recognized certificates at every level of fluency.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-300 py-4">
              <button
                className="w-full flex justify-between text-left text-gray-800 font-medium"
                onClick={() => toggleFAQ(i)}
              >
                <span>{item.q}</span>
                <span>{activeFAQ === i ? "−" : "+"}</span>
              </button>
              {activeFAQ === i && (
                <p className="mt-2 text-gray-600 text-sm">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Begin Your Japanese Journey Today
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-white/90">
          Whether you’re preparing for travel, business, or pure curiosity —
          start learning Japanese the right way, with expert guidance and cultural depth.
        </p>
        <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full 
        shadow-md hover:bg-red-100 transition"
        onClick={() => handleClick()}>
          Book Your Free Demo
        </button>
      </section>
    </div>
  );
};

export default JapaneseLanguageCourse;
