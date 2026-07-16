import React, { useState, useEffect } from "react";
import { FaRocket, FaGamepad, FaPuzzlePiece, FaLightbulb, FaChild, FaLaptopCode } from "react-icons/fa";
import scratchImg from "../Images/Coding-Courses-images/scratch-programming-2.jpg"; // 🖼️ Replace with your image
import { useNavigate } from "react-router-dom";
const ScratchProgrammingCourse = () => {
  const Navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleClick = () => {
    Navigate("/book-a-free-trial?subject=scratch-programming")
  }

  const faqs = [
    {
      question: "What is Scratch programming?",
      answer:
        "Scratch is a visual coding platform developed by MIT where you can create games, animations, and interactive stories using colorful coding blocks.",
    },
    {
      question: "What age group is this course for?",
      answer:
        "Scratch is perfect for kids aged 7–14. It helps them understand logic, creativity, and problem-solving in a fun, visual way.",
    },
    {
      question: "Do I need any coding experience?",
      answer:
        "Not at all! Scratch is designed for complete beginners. You’ll learn step by step through hands-on projects.",
    },
    {
      question: "What projects will I build?",
      answer:
        "Students will create fun games, animations, quizzes, and storytelling projects — all while learning how code works.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-50 min-h-screen text-gray-800 py-20">
      {/* 🎯 Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-extrabold text-orange-600 mb-4 leading-tight">
            Dive into <span className="text-purple-700">Scratch Programming</span> 🚀
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Build games, animations, and stories while learning to think like a coder!
            Perfect for kids and beginners who want to make learning fun and creative.
            Explore drag-and-drop coding with colorful blocks and instant results.
            Boost your logic, creativity, and problem-solving skills through exciting hands-on projects.
          </p>
          <button className="bg-purple-700 text-white px-8 py-3 rounded-full 
          font-semibold shadow-lg hover:bg-purple-800 transition"
            onClick={() => handleClick()}>
            Book Your Free Trial
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={scratchImg}
            alt="Scratch Programming"
            className="rounded-3xl shadow-lg w-full object-cover max-w-md transform transition duration-300"
          />
        </div>
      </section>

      {/* 💡 What You'll Learn */}
      <section className="py-20 px-8 bg-gradient-to-r from-yellow-100 to-orange-100">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          What You’ll Learn 🎓
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { icon: <FaPuzzlePiece />, title: "Coding Blocks", desc: "Learn how to snap together colorful code blocks to create actions and logic." },
            { icon: <FaGamepad />, title: "Game Design", desc: "Create fun, playable games with characters, scoring, and movement." },
            { icon: <FaLightbulb />, title: "Creative Thinking", desc: "Enhance imagination while turning ideas into interactive projects." },
            { icon: <FaLaptopCode />, title: "Logic Building", desc: "Develop problem-solving and sequencing skills essential for coding." },
            { icon: <FaRocket />, title: "Animation & Storytelling", desc: "Bring characters to life through motion, sound, and creativity." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 w-64 text-center rounded-2xl shadow-lg hover:shadow-2xl transition border-t-4 border-orange-500"
            >
              <div className="text-5xl text-purple-700 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-600">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌈 Why Learn Scratch */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-10">
          Why Learn Scratch? 🌟
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Encourages Creativity",
              desc: "Turn imagination into interactive art, stories, and games.",
            },
            {
              title: "Develops Logical Thinking",
              desc: "Scratch teaches loops, conditionals, and algorithms visually.",
            },
            {
              title: "No Typing Required",
              desc: "Kids drag & drop blocks — no syntax errors or confusion!",
            },
            {
              title: "Global Community",
              desc: "Share projects with millions of creators worldwide.",
            },
            {
              title: "Confidence Booster",
              desc: "Every project helps build problem-solving and presentation skills.",
            },
            {
              title: "Foundation for Real Coding",
              desc: "Prepare for Python, Web Development, and AI in future courses.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border-l-4 border-purple-600 shadow-md hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-lg text-orange-600 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🪄 Learning Journey Timeline */}
      <section className="bg-purple-50 py-20 px-8">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          Your Fun Learning Journey 🎯
        </h2>
        <div className="relative max-w-4xl mx-auto ">
          {[
            { phase: "Step 1", title: "Get Started with Scratch", desc: "Introduction to Scratch Interface, Sprites, and Motion Blocks." },
            { phase: "Step 2", title: "Make Your First Animation", desc: "Learn loops, events, and how to make objects move smoothly." },
            { phase: "Step 3", title: "Build Your First Game", desc: "Use conditions, variables, and scoring systems in projects." },
            { phase: "Step 4", title: "Share & Celebrate!", desc: "Upload your project, get feedback, and share your creativity!" },
          ].map((item, index) => (
            <div
              key={index}
              className={`mb-10 ml-auto mr-auto w-5/6 bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 ${index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                }`}
            >
              <h4 className="text-purple-700 font-bold text-lg mb-1">{item.phase}</h4>
              <h5 className="text-orange-600 font-semibold mb-2">{item.title}</h5>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🙋 FAQ Section */}
      <section className="max-w-3xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Frequently Asked Questions 🤔
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-orange-400 py-3">
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

      {/* 🚀 CTA */}
      <section className="text-center mt-20 py-16 bg-gradient-to-r from-orange-500 to-purple-600 text-white">
        <h3 className="text-3xl font-bold mb-4">Start Building Fun Projects Today!</h3>
        <p className="max-w-2xl mx-auto mb-6 text-orange-100">
          Join the Scratch Programming Course and make your own interactive stories, games, and animations — no prior experience needed!
        </p>
        <button className="bg-white text-purple-700 font-semibold 
        px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          onClick={() => handleClick()}>
          Book Your Free Trial
        </button>
      </section>
    </div>
  );
};

export default ScratchProgrammingCourse;
