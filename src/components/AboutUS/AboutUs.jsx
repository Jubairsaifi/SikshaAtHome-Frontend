import React from "react";
import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaClock,
    FaStar,
    FaBookOpen,
    FaLightbulb,
    FaLaptopCode,
} from "react-icons/fa";
import AboutImg from "../../assets/About-US.jpg";
import AboutImg2 from "../../assets/About-Us-2.jpg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    const BookDemo = () => {
        navigate("/book-a-free-trial");
    };

    return (
        <div className="py-10 bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-10">
                {/* Text */}
                <div className="flex-1">
                    <p className="text-2xl lg:text-2xl font-bold text-sky-600 mb-4">
                        Redefining Education — The Siksha At Home Way
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        At <strong>Siksha At Home</strong>, we believe that quality education should
                        be accessible, personalized, and engaging for every child.Whether it’s school subjects,
                        language learning, coding, or creative skills,
                        Siksha At Home ensures that every learner gets one-to-one attention and
                        a supportive environment that nurtures curiosity and growth.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                        We don’t just teach lessons — we inspire curiosity, build confidence, and
                        prepare learners to face the future with strong academic and life skills.
                        Our teaching approach combines modern technology, interactive sessions,
                        and continuous progress tracking to ensure measurable improvement in every child’s performance.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base mb-4">With a team of qualified tutors,
                        structured lesson plans, and customized learning paths,
                        we make education both effective and enjoyable. Parents stay informed through regular updates
                        and assessments, ensuring transparency and trust in the learning process.</p>

                    <p className="text-gray-700 leading-relaxed text-base">
                        At Siksha At Home, we aim to create a holistic learning experience that develops not only
                        academic knowledge but also essential skills such as critical thinking, communication,
                        and problem-solving — preparing every student for success in school and beyond.
                    </p>
                </div>
                <div className="flex-1 flex flex-col items-center space-y-8">
                    {/* Top Image */}
                    <img
                        src={AboutImg}
                        alt="About Siksha At Home"
                        className="w-3/4 max-w-sm rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition duration-500"
                    />

                    {/* Bottom Image */}
                    <img
                        src={AboutImg2} // you can replace this with a different image
                        alt="Students Learning"
                        className="w-3/4 max-w-sm rounded-2xl shadow-lg transform rotate-6 hover:rotate-0 transition duration-500"
                    />
                </div>

            </section>

            {/* Vision Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-sky-600 mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
                        " To create a world where every student — regardless of background or location —
                        can access personalized learning that inspires creativity, critical thinking,
                        and lifelong curiosity. "
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-sky-600 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
                        " To redefine the learning experience by offering high-quality, interactive,
                        and personalized education that fits every student’s pace, style, and goals and
                        to bring expert educators and tailored learning right to your home — empowering students to achieve academic excellence and confidence. "
                    </p>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-sky-600 text-center mb-10">
                    How <span className="text-sky-500">Siksha At Home</span> Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                        <FaBookOpen className="text-sky-500 text-4xl mb-3 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Step 1: Assessment</h3>
                        <p className="text-gray-600 text-sm">
                            We begin with an academic assessment to understand the student’s learning style,
                            strengths, and focus areas.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                        <FaLightbulb className="text-yellow-500 text-4xl mb-3 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Step 2: Personalized Plan</h3>
                        <p className="text-gray-600 text-sm">
                            Our academic mentors design a customized learning plan that aligns with
                            the student’s school syllabus and goals.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                        <FaLaptopCode className="text-green-500 text-4xl mb-3 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Step 3: Interactive Classes</h3>
                        <p className="text-gray-600 text-sm">
                            Students learn one-on-one with expert tutors using live sessions, real-life examples,
                            and digital tools.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-sky-600 text-center mb-10">
                    Why Choose <span className="text-sky-500">Siksha At Home</span>?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaUserGraduate className="text-pink-600 text-4xl mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
                        <p className="text-gray-600 text-sm">
                            Learn from qualified and passionate educators with years of experience.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaChalkboardTeacher className="text-sky-600 text-4xl mb-3" />
                        <h3 className="text-xl font-semibold mb-2">1-on-1 Sessions</h3>
                        <p className="text-gray-600 text-sm">
                            Personalized attention that helps students learn effectively at their own pace.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaClock className="text-gray-600 text-4xl mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Flexible Timings</h3>
                        <p className="text-gray-600 text-sm">
                            Schedule sessions anytime — morning, evening, or weekends as per convenience.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaStar className="text-red-400 text-4xl mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                        <p className="text-gray-600 text-sm">
                            Thousands of students have improved grades and gained confidence with us.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-sky-600 mb-10">What Parents Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                “My daughter’s confidence in math has skyrocketed after joining Siksha At Home.
                                The one-on-one format really makes a difference!”
                            </p>
                            <h4 className="font-semibold text-sky-600">– Mrs. Sharma, Parent of Grade 7 Student</h4>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                “Flexible timings and caring teachers — perfect for working parents like us.
                                Highly recommend Siksha At Home!”
                            </p>
                            <h4 className="font-semibold text-sky-600">– Mr. Verma, Parent of Grade 5 Student</h4>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                “The teachers are extremely patient and knowledgeable. My son enjoys every class!”
                            </p>
                            <h4 className="font-semibold text-sky-600">– Mrs. Khan, Parent of Grade 8 Student</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 text-white py-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">
                    Ready to Begin Your Learning Journey?
                </h2>
                <p className="mb-6">
                    Book your free trial session today and experience the difference of
                    learning with Siksha At Home.
                </p>
                <button
                    className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
                    onClick={BookDemo}
                >
                    Book a Free Trial
                </button>
            </section>
        </div>
    );
};

export default AboutUs;

