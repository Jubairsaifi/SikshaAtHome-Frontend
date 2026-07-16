import React from "react";
import CountUp from "react-countup";
import TeacherAvtar from "../../assets/tutor_avtar.jpeg"
import StudentAvtar from "../../assets/student_avtar_logo.jpeg"
import SubjectAvtar from "../../assets/Subject_logo.jpeg"
import HoureAvtar from "../../assets/hours_content.jpeg"
import city from "../../assets/city_avtar.jpeg"
import { GrAchievement } from "react-icons/gr";
const NumberCounter = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-300 text-white py-12">
      <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
        {/* <h1 className="uppercase font-semibold text-orange-600">
                        Why Choose Us
                    </h1> */}
        <p className="font-semibold text-3xl text-black">
          Our Achievement
        </p>
      </div>
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-6">
        <div className="flex flex-col items-center justify-center">
          <img
            src={TeacherAvtar}
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={200}
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Expert Tutors & Teachers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={HoureAvtar}
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <p className="text-3xl font-semibold">
            <CountUp
              end={20000}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Hours content</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={SubjectAvtar}
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <p className="text-3xl font-semibold">
            <CountUp
              end={50}
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Subject and courses</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={StudentAvtar}
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <p className="text-3xl font-semibold">
            <CountUp
              end={7000}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Active students</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={city}
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={20}
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Cities</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
