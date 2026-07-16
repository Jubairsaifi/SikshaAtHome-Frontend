import React from "react";
import Slider from "react-slick";
import RiyaImg from "../../assets/riya-sharma-grade-8th.png";
import KritenImg from "../../assets/kristen-grade-8th.jpg";
import ArjunImg from "../../assets/arjun-karanwal-grade-6th.png";
import ArianaImg from "../../assets/ariana-grade-6th.jpg";

const TestimonialsData = [
  {
    id: 1,
    name: "Riya Sharma, Grade 8",
    text: "Siksha At Home has completely transformed the way I learn. The lessons are so well-structured and easy to understand, even for topics I used to find really hard. I love that I can revisit any class whenever I need, and the interactive exercises make learning enjoyable. I feel more confident in my studies than ever before!",
    img: RiyaImg,
    delay: 0.2,
  },
  {
    id: 2,
    name: "Arjun Karanwal, Grade 5",
    text: "Learning from home has never been this exciting! The teachers at Siksha At Home are patient, supportive, and explain things in a way that makes sense to me. The platform’s quizzes and practice worksheets help me improve every day, and I no longer feel stressed about difficult subjects. It really feels like having a personal tutor at home.",
    img: ArjunImg,
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen, Grade 7",
    text: "I used to struggle with math and science, but Siksha At Home has changed that completely. The lessons are interactive and include examples that I can relate to. The teachers encourage questions and make sure we understand each concept fully. My grades and confidence have improved so much since I joined!",
    img: KritenImg,
    delay: 0.8,
  },
  {
    id: 5,
    name: "Ariana, Grade 6 ",
    text: "What I love about Siksha At Home is that learning doesn’t feel boring at all. The lessons are colorful, engaging, and easy to follow. I can learn at my own pace without feeling rushed. The platform also provides helpful tips and extra exercises that make practice fun. I actually look forward to my classes now!",
    img: ArianaImg,
    delay: 1.1,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl ">
            What Our Students Say About Us
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                <div key={item.id}>
                  <div
                    className="
      flex flex-col gap-5 p-8 mx-4 rounded-2xl
      bg-gradient-to-br from-orange-50 via-white to-purple-50
      border border-orange-100
      shadow-md hover:translate-y-1

      transition-all duration-300
    "
                  >
                    {/* Upper Section */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded-full border-2 border-orange-400"
                      />
                      <div>
                        <p className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-xs text-orange-500 font-medium">
                          Verified Student
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] bg-gradient-to-r from-orange-300 to-purple-300" />

                    {/* Testimonial Text */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.text.split("Siksha At Home").map((part, index, arr) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < arr.length - 1 && (
                            <span className="font-semibold text-orange-600">
                              Siksha At Home
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-yellow-400 text-lg">
                      ★★★★★
                    </div>
                  </div>
                </div>


              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
