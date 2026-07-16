import React, { useEffect, useState } from "react";
import { FaAtom, FaBolt, FaWaveSquare, FaGlobe, FaMicroscope, FaRegLightbulb, FaRocket } from "react-icons/fa";
import PhysicsImg from "./Images/k-12-Courses-Imges/physics-learning.jpg"; // Replace with your physics image
import { useNavigate } from "react-router-dom";
const PhysicsCourse = () => {
  const Navigate = useNavigate()
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const branches = [
    { icon: <FaAtom />, title: "Modern Physics", desc: "Dive into atomic structures, quantum mechanics, and nuclear energy." },
    { icon: <FaBolt />, title: "Electricity & Magnetism", desc: "Understand how electric charges, fields, and circuits power the world." },
    { icon: <FaWaveSquare />, title: "Waves & Sound", desc: "Learn about vibrations, frequencies, and how sound travels." },
    { icon: <FaGlobe />, title: "Mechanics", desc: "Explore motion, gravity, and forces that govern everyday life." },
  ];

  const skills = [
    "Analytical Thinking",
    "Problem Solving",
    "Experimental Design",
    "Scientific Observation",
    "Quantitative Reasoning",
    "Technological Awareness",
  ];

  const faqs = [
    {
      q: "Is this course suitable for beginners?",
      a: "Yes! We start with the basics of physics and gradually move toward advanced topics with live demonstrations.",
    },
    {
      q: "Do students perform virtual experiments?",
      a: "Absolutely! Students engage in virtual labs and simulations to test physical concepts safely and interactively.",
    },
    {
      q: "Which grades can enroll?",
      a: "We offer Physics programs for grades 6–12, customized to match CBSE, ICSE, and international curricula.",
    },
  ];

  const handleClick = () => {
    Navigate("/book-a-free-trial?subject=physics")
  }

  return (
    <div className="bg-white text-white min-h-screen py-24">
      {/* Hero Section */}
      <section className="relative text-center bg-yellow-600 py-24">
        <h1 className="text-5xl font-extrabold mb-4 text-black">
          Explore. Experiment. Understand.
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
          Step into the fascinating world of Physics — from atoms to galaxies, explore the laws that define our universe.
          Understand how motion, energy, and forces shape everything we see around us.
          Turn your curiosity into discovery through experiments, simulations, and real-life examples.
        </p>
        <button className="bg-white text-black font-semibold 
        px-6 py-3 rounded-full shadow-md transition"
          onClick={() => handleClick()}>
          Book a Free Physics Trial
        </button>
        {/* <div className="absolute inset-x-0 bottom-0 h-1 bg-black"></div> */}
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center bg-white">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-black">
            Discover the Science Behind Everything 🌌
          </h2>
          <p className="text-black mb-4 leading-relaxed">
            Our Physics course is designed to inspire curiosity and logical thinking.
            Students not only learn theories but also perform engaging experiments,
            visualizing concepts in real-time through interactive demos.
          </p>
          <ul className="space-y-2 text-black">
            <li>⚙️ Live demonstrations with simulations</li>
            <li>🔭 Visual lessons connecting theory and real-world use</li>
            <li>🧪 Project-based learning for creative understanding</li>
            <li>📈 Concept reinforcement through mini-experiments</li>
          </ul>
        </div>
        <img
          src={PhysicsImg}
          alt="Physics Learning"
          className="rounded-2xl shadow-2xl w-full object-cover"
        />
      </section>

      {/* Branches of Physics */}
      <section className="bg-yellow-600 py-20 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-bold text-black mb-12">
          Branches of Physics You’ll Explore
        </h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {branches.map((b, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl transition"
            >
              <div className="text-4xl text-black mb-3 flex justify-center">{b.icon}</div>
              <h4 className="font-semibold text-lg text-black mb-2">{b.title}</h4>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real World Projects */}
      <section className="py-20 px-6 md:px-20 text-center bg-white">
        <h3 className="text-3xl font-bold text-black mb-8">
          Experiment. Build. Innovate.
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          Apply physics concepts to exciting hands-on projects that develop practical skills and creativity.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-700 transition">
            <FaRocket className="text-5xl text-pink-400 mx-auto mb-3" />
            <h4 className="font-semibold text-lg mb-2">Balloon Rocket Challenge</h4>
            <p className="text-gray-400 text-sm">Understand Newton’s Laws by launching your own mini-rocket.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-700 transition">
            <FaMicroscope className="text-5xl text-yellow-400 mx-auto mb-3" />
            <h4 className="font-semibold text-lg mb-2">Light Reflection Lab</h4>
            <p className="text-gray-400 text-sm">Explore how mirrors and angles affect light paths with simple setups.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-700 transition">
            <FaRegLightbulb className="text-5xl text-green-400 mx-auto mb-3" />
            <h4 className="font-semibold text-lg mb-2">Electric Circuit Builder</h4>
            <p className="text-gray-400 text-sm">Create working circuits to learn voltage, current, and resistance.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-300 text-center">
        <h3 className="text-3xl font-bold text-black mb-10">Skills You’ll Develop ⚡</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-cyan-500/20 border border-cyan-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-500/30 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-700 py-3">
              <button
                className="w-full flex justify-between text-left font-medium text-black"
                onClick={() => toggleFAQ(i)}
              >
                <span>{faq.q}</span>
                <span>{activeFAQ === i ? "−" : "+"}</span>
              </button>
              {activeFAQ === i && (
                <p className="mt-2 text-black text-sm">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PhysicsCourse;
