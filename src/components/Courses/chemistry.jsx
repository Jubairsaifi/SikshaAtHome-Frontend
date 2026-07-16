import React, { useState, useEffect } from "react";
import { FaFlask, FaVial, FaAtom, FaMicroscope, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import ChemistryImg from "./Images/k-12-Courses-Imges/chemistry-learning.jpg"; // replace with your chemistry image
import { useNavigate } from "react-router-dom";
const ChemistryCourse = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const Navigate = useNavigate()

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleClick = () => {
    Navigate("/book-a-free-trial?subject=chemistry")
  }

  const branches = [
    { icon: <FaFlask />, title: "Organic Chemistry", desc: "Study carbon-based compounds and reactions in living organisms." },
    { icon: <FaVial />, title: "Inorganic Chemistry", desc: "Explore metals, minerals, and non-carbon based substances." },
    { icon: <FaAtom />, title: "Physical Chemistry", desc: "Learn about thermodynamics, kinetics, and chemical equilibria." },
    { icon: <FaMicroscope />, title: "Analytical Chemistry", desc: "Master techniques to identify and measure chemical substances." },
  ];

  const experiments = [
    { title: "Volcano Reaction", desc: "Create a fun chemical reaction simulating a volcano.", color: "bg-yellow-100" },
    { title: "Density Column", desc: "Layer liquids of different densities and observe separation.", color: "bg-pink-100" },
    { title: "Elephant Toothpaste", desc: "Foamy reaction demonstrating catalysis in hydrogen peroxide.", color: "bg-green-100" },
  ];

  const skills = [
    "Scientific Observation",
    "Critical Thinking",
    "Lab Safety & Techniques",
    "Chemical Analysis",
    "Problem Solving",
  ];

  const faqs = [
    {
      q: "Do students need prior chemistry knowledge?",
      a: "No! Our course starts with fundamentals and gradually builds up to advanced concepts with fun experiments.",
    },
    {
      q: "Are all experiments safe for home learning?",
      a: "Yes! We design simple, safe experiments with household materials wherever possible.",
    },
    {
      q: "Which grades can join the chemistry course?",
      a: "We offer Chemistry classes for grades 7–12, tailored for school syllabus and practical learning.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 via-yellow-50 to-green-50 py-20 px-6 md:px-16 text-center py-24">
        <h1 className="text-4xl font-bold mb-4 text-pink-600">
          Explore the Wonders of Chemistry! 🧪
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Learn about atoms, molecules, reactions, and experiments that bring science to life.
          Visualize complex concepts through 3D models, animations, and simulations.
          Experience the wonder of chemistry beyond textbooks — where learning meets innovation.
        </p>
        <button className="bg-pink-600 text-white font-semibold px-6 py-3 
        rounded-full shadow hover:bg-pink-700 transition"
          onClick={() => handleClick()}>
          Book a Free Chemistry Trial
        </button>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-10 py-16 px-6 md:px-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">
            Learn Chemistry Through Experiments 🔬
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Chemistry helps explain the world around us. Our course focuses on interactive learning,
            hands-on experiments, and understanding chemical principles in everyday life.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Fun and safe home-based experiments</li>
            <li>✔ Step-by-step video guides and explanations</li>
            <li>✔ Quizzes and worksheets to reinforce concepts</li>
            <li>✔ Expert mentorship and doubt-solving sessions</li>
          </ul>
        </div>
        <img
          src={ChemistryImg}
          alt="Chemistry Learning"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </section>

      {/* Branches of Chemistry */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-12">
          Branches of Chemistry
        </h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {branches.map((b, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center border-t-4 border-pink-400">
              <div className="text-4xl text-pink-500 mb-3 flex justify-center">{b.icon}</div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">{b.title}</h4>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experiments */}
      <section className="py-20 px-6 md:px-16 bg-yellow-50 text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-12">
          Fun Chemistry Experiments 🧪
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {experiments.map((exp, i) => (
            <div key={i} className={`p-8 rounded-2xl shadow hover:shadow-lg transition ${exp.color}`}>
              <h4 className="font-semibold text-xl mb-2 text-gray-800">{exp.title}</h4>
              <p className="text-gray-700 text-sm">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 md:px-16 text-center bg-white">
        <h3 className="text-3xl font-bold text-pink-600 mb-8">Skills You’ll Develop</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-pink-100 border border-pink-300 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-300 py-3">
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

export default ChemistryCourse;
