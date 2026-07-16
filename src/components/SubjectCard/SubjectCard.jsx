import React from "react";
import { motion } from "framer-motion";
import { FaComputer, FaBook, FaGamepad, FaWebflow, FaCodeMerge } from "react-icons/fa6";
import { FaCalculator, FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const subjectList = [
  {
    id: 1,
    name: "Mathematics",
    icon: <FaCalculator />,
    color: "#0063ff",
    delay: 0.1,
    link: "/mathematics"
  },
  {
    id: 2,
    name: "English",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.2,
    link: "/english"
  },
  {
    id: 3,
    name: "Science",
    icon: <FaComputer />,
    color: "#922aee",
    delay: 0.3,
    link: "/explore-k-12-courses"
  },
  {
    id: 4,
    name: "English Spoken",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.4,
    link: "/english-speaking"
  },
  {
    id: 5,
    name: "Web design",
    icon: <FaCodeMerge />,
    color: "#383989",
    delay: 0.5,
    link: "/web-development"
  },
  {
    id: 6,
    name: "scratch programming",
    icon: <FaCode />,
    color: "#388988",
    delay: 0.6,
    link: "/scratch-programming"
  },
  {
    id: 7,
    name: "Game development",
    icon: <FaGamepad />,
    color: "#893862",
    delay: 0.7,
    link: "/game-development"
  },
];

const SubjectCard = () => {
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link)
  }
  return (
    <>
      <div className="container py-14 md:py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-500">
            Our tutor subjects
          </h1>
          <p className="font-semibold text-3xl">
            Our Trending Courses
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {subjectList.map((subject) => {
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: subject.delay,
                }}
                className="border rounded-lg border-secondary/20 p-2 flex justify-start items-center 
                           gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
                onClick={() => handleClick(subject.link)}
              >
                <div
                  style={{
                    color: subject.color,
                    backgroundColor: subject.color + "20",
                  }}
                  className="w-10 h-10 rounded-md flex justify-center items-center"
                >
                  {subject.icon}
                </div>
                <p className="border-b-2 border-black text-center mt-1">{subject.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubjectCard;
