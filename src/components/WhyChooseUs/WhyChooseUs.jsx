import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaPersonChalkboard } from "react-icons/fa6";
import { GrAlarm } from "react-icons/gr";
import { GrMoney } from "react-icons/gr";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { FaHeadset } from "react-icons/fa6";

const WhyChooseData = [
  {
    id: 1,
    title: "One-on-one Teaching",
    desc: "All of our special education experts have a degree in special education.",
    icon: <FaHeadset />,
    bgColor: "#0063ff",
    delay: 0.1,
    textColor: "#e62393"
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: "Our tutors are always available to respond as quick as possible for you",
    link: "/",
    icon: <GrAlarm />,
    bgColor: "#73bc00",
    textColor: "#4169e1 ",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard equipped with audio and video chat fetures.",
    link: "/",
    icon: <FaPersonChalkboard />,
    bgColor: "#fa6400",
    textColor: "#8b008b",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Choose an expert tutor based on your budget and per hour.",
    link: "/",
    icon: <GrMoney />,
    bgColor: "#fe6baa",
    textColor: "#008000 ",
    delay: 0.4,
  },
];
const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of online tutoring services with us
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] bg-gray-300"
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p style={{ color: item.textColor }}
                  className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-800">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
