import React, { useState, useEffect } from "react";
import HeroImg from "../../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
import ChildrenImg from "../../assets/children-meeting.jpg";
import DemoBookingModal from "../DemoBooking/BookDemo";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const getStarted = true
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const bookAFreeTrial = () => {
    navigate("/book-a-free-trial")
  }
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative pt-[80px]">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-green-500 uppercase font-semibold"
            >
              100% Satisfaction Guarantee
            </motion.p>
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold lg:text-6xl !leading-tight"
            >
              Find Your Online<span className="text-pink-500">Tutor</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
              We help you find perfect tutor for 1-on-1 lessons. It is
              completely free and private
            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
              <button
                className="primary-btn"
                onClick={() => bookAFreeTrial()}
              >Get Started</button>

              {/*<button
                className="flex justify-end items-center gap-2 font-semibold"
                onClick={() => setShowVideo(true)}
              >
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                See how it works
              </button> */}

            </motion.div>
          </div>
        </div>

        {/* Hero image or video */}
        <div className="flex justify-center items-center">
          {showVideo ? (
            <motion.video
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              controls
              autoPlay
              className="w-[350px] md:w-[550px] xl:w-[700px] rounded-xl"
            >
              <source src="/path-to-your-demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          ) : (
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={ChildrenImg}
              alt=""
              className="w-[350px] md:w-[550px] xl:w-[700px] rounded-xl"
            />
          )}
          {isOpen && (
            <DemoBookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} getStarted={getStarted} />
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
