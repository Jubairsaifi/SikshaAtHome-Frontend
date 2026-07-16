import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../utility/animation";
import K12CourseImg from "../../assets/K12-Courses.jpg"
import AjayShehrani from "../../assets/Ajay-Shehrani.jpg"
import Parul from "../../assets/Parul.jpg"
import HarshPriyam from "../../assets/Harsh-Priyam.jpg"
import RaviDubey from "../../assets/Ravi-Dubey.jpg"
import ShivaniShukla from "../../assets/Shivani-Shukla.jpg"
import SahibAli from "../../assets/Sahib-Ali.jpg"
import AradhyaShivani from "../../assets/Aradhya-Shivani.jpg"
import Coding from "../../assets/Coding.jpg"
import Languagues from "../../assets/Languages.jpg"
import ArtAndCraft from "../../assets/Art-and-Craft.jpg"
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Teachers = [
    {
        id: 1,
        title: "Ajay Shehrani",
        subject: "Math Master Teacher",
        exp: "2+ years exp",
        college: "Delhi University",
        qualification: "B.Sc, M.Sc (Mathematics)",
        delay: 0.3,
        image: AjayShehrani,
    },
    {
        id: 2,
        title: "Pahul",
        subject: "Chemistry Master Teacher",
        exp: "3+ years exp",
        college: "Delhi Technological University",
        qualification: "B.Tech (Biotechnology)",
        delay: 0.6,
        image: Parul,
    },
    {
        id: 3,
        title: "Harsh Priyam",
        subject: "Math Master Teacher",
        exp: "1.5+ years exp",
        college: "BIT Durg",
        qualification: "M.Sc (Mathematics)",
        delay: 0.9,
        image: HarshPriyam,
    },
    {
        id: 4,
        title: "Ravi Dubey",
        subject: "Computer Science",
        exp: "3+ years exp",
        college: "Niet Noida",
        qualification: "B.Tech (CS & IT)",
        delay: 0.3,
        image: RaviDubey,
    },
    {
        id: 5,
        title: "Shivani Shukla",
        subject: "Economics Master Teacher",
        exp: "2+ years exp",
        college: "Jamia Millia Islamia",
        qualification: "M.A (Hons)",
        delay: 0.3,
        image: ShivaniShukla,
    },
    {
        id: 6,
        title: "Sahib Ali",
        subject: "Physics Master Teacher",
        exp: "2+ years exp",
        college: "Deshbandhu College , DU",
        qualification: "B.Sc (Physics Hons)",
        delay: 0.3,
        image: SahibAli,
    },
    {
        id: 7,
        title: "Aryan Vivek",
        subject: "Accounts Master Teacher",
        exp: "4+ years exp",
        college: "Galgotia University",
        qualification: "B.Com, M.Com",
        delay: 0.3,
        image: K12CourseImg,
    },
    {
        id: 8,
        title: "Shubham Shukla",
        subject: "English Master Teacher",
        exp: "2+ years exp",
        college: "CCS University",
        qualification: "B.A, M.A(English)",
        delay: 0.3,
        image: K12CourseImg,
    },
    {
        id: 9,
        title: "Aradhya Shivani",
        subject: "Math Master Teacher",
        exp: "3+ years exp",
        college: "CCS University",
        qualification: "M.Sc(Mathematics)",
        delay: 0.3,
        image: AradhyaShivani,
    },
];

const OurTeachers = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 3;

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < Teachers.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };


    return (

        <div className="bg-[#c1bbec]">
            <div className="container py-18 pb-16">
                <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
                    <p className="font-semibold text-3xl">
                        Meet Our Talented Tutors
                    </p>
                </div>
                <div className="relative w-full max-w-6xl mx-auto">
                    {/* Left Button */}
                    <button
                        onClick={handlePrev}
                        className={`absolute left-[-40px] top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg z-10 ${currentIndex === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-pink-500 text-white"
                            }`}
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Slider Window */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                            transition={{ type: "tween", duration: 0.5 }}
                            style={{ width: `${Teachers.length * (100 / itemsPerView)}%` }}
                        >
                            {Teachers.map((t) => (
                                <div
                                    key={t.id}
                                    className="flex-shrink-0 px-4"
                                    style={{ width: `${100 / Teachers.length}%` }}
                                >
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="w-40 h-60 rounded-lg object-cover shadow-lg z-10 relative -mb-12"
                                        />
                                        <div className="bg-gray-100 rounded-xl px-4 pt-16 pb-8 w-80 text-center shadow-md">
                                            <h2 className="text-lg font-bold text-gray-800">{t.title}</h2>
                                            <p className="text-sm font-medium text-gray-600">{t.exp}</p>
                                            <p className="text-sm text-gray-700">{t.subject}</p>
                                            <p className="text-sm text-gray-700">{t.qualification}</p>
                                            <p className="text-sm font-semibold text-gray-900">{t.college}</p>
                                            {/* Book Free Demo Button */}
                                            <Link
                                                to={`/free-trial?subject=${t.subject
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "-")}`}
                                                className="inline-block mt-4"
                                            >
                                                <button
                                                    className="px-6 py-2 text-sm font-semibold text-white 
                       bg-pink-500 rounded-full
                       hover:bg-pink-600 transition-all duration-200 shadow-md"
                                                >
                                                    Book a Free Demo
                                                </button>
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={handleNext}
                        // className="absolute right-[-60px] top-1/2  -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full shadow-lg z-10"
                        disabled={currentIndex >= 2}
                        className={`absolute right-[-40px] top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg z-10 ${currentIndex >= 2
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-pink-500 text-white"
                            }`}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

        </div>


    )
}

export default OurTeachers;