import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  const navigate = useNavigate();

  const bookAFreeTrial = () => {
    navigate("/book-a-free-trial");
  };

  return (
    <div className="bg-[#f9f9f9] pb-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Banner Image Section */}
          <div
            className={`flex items-center ${reverse ? "md:order-last md:justify-end" : "justify-start"
              }`}
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-[400px] h-full object-cover rounded-xl"
            />
          </div>

          {/* Banner Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">

            {/* Title */}
            <p className="text-xl lg:text-2xl text-orange-600 font-semibold capitalize">
              {title}
            </p>

            {/* Subtitle */}
            <p className="text-sm text-slate-500">
              {subtitle}
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <button
                className="primary-btn mt-5"
                onClick={bookAFreeTrial}
              >
                Get Started
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

