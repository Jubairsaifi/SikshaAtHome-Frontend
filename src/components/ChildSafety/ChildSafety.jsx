import React from "react";
import { FaShieldAlt, FaUserShield, FaLock, FaHandsHelping } from "react-icons/fa";
import SafetyImg from "../../assets/Child-Safety.jpg"; // replace with your own image

const ChildSafety = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Child Safety & Privacy</h1>
        <p className="max-w-2xl mx-auto text-lg">
          At <span className="font-semibold">Siksha At Home</span>, your child’s safety is our top priority.  
          We ensure secure, respectful, and transparent learning environments for every student.
        </p>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={SafetyImg}
            alt="Child Safety at Siksha At Home"
            className="w-3/4 max-w-sm rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition duration-500"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-sky-600 mb-4">Creating Safe Learning Spaces</h2>
          <p className="text-lg leading-relaxed mb-4">
            Every online session at Siksha At Home is designed to maintain the highest standards 
            of <strong>child protection, data privacy, and ethical teaching practices</strong>.
          </p>
          <p className="text-gray-700 text-base">
            We train our tutors not only to educate but also to uphold 
            <strong> trust, empathy, and respect</strong> in every interaction. 
            Parents can stay involved and informed throughout the learning journey.
          </p>
        </div>
      </section>

      {/* Safety Commitments Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-600 mb-10">Our Safety Commitments</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaUserShield className="text-blue-600 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Verified Tutors</h3>
              <p className="text-gray-600 text-sm">
                Every educator undergoes a strict verification and background check before joining.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaLock className="text-pink-600 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Data Privacy</h3>
              <p className="text-gray-600 text-sm">
                Your child’s information and learning data are always kept safe and confidential.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaHandsHelping className="text-green-600 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Parental Access</h3>
              <p className="text-gray-600 text-sm">
                Parents are welcome to observe sessions and track progress anytime.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaShieldAlt className="text-yellow-500 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Safe Interactions</h3>
              <p className="text-gray-600 text-sm">
                Our strict online safety policies ensure all communication is monitored and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Your Child’s Safety, Our Responsibility</h2>
        <p className="max-w-2xl mx-auto mb-6">
          We’re committed to providing a nurturing and safe digital learning space for every student.
          Feel confident knowing your child is in safe hands with Siksha At Home.
        </p>
        <a
          href="/book-a-free-trial"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Book a Free Trial
        </a>
      </section>
    </div>
  );
};

export default ChildSafety;
