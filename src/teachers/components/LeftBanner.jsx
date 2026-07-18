import {
  FaChalkboardTeacher,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

import teacherImage from "../assets/teacher.jpg";

const LeftBanner = () => {
  return (
    <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-purple-900 via-pink-purple to-purple-500 text-white p-10 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl"></div>

      {/* Logo */}
      <div className="z-10">
        <h2 className="text-3xl font-bold">
          Shiksha <span className="text-pink-200">At Home</span>
        </h2>

        <p className="text-pink-100 mt-2">
          Teacher Login
        </p>
      </div>

      {/* Heading */}
      <div className="z-10 mt-10">
        <h1 className="text-4xl leading-tight">
          Welcome Back,
          <br />
          <span className="text-cyan-300">
            Teacher!
          </span>
        </h1>

        <p className="mt-6 text-pink-100 text-lg leading-8">
          Log in to your dashboard and continue inspiring
          students with engaging online learning.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-6 mt-12 z-10">

        <div className="flex items-start gap-4">
          <div className="bg-blue-500 p-4 rounded-xl">
            <FaChalkboardTeacher size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Manage Your Classes
            </h3>

            <p className="text-blue-100 text-sm mt-1">
              Easily organize schedules, lessons and assignments.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-green-500 p-4 rounded-xl">
            <FaUserGraduate size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Track Student Progress
            </h3>

            <p className="text-blue-100 text-sm mt-1">
              Monitor attendance, performance and growth.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-purple-500 p-4 rounded-xl">
            <FaChartLine size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Grow Your Teaching
            </h3>

            <p className="text-blue-100 text-sm mt-1">
              Access tools that help you become a better educator.
            </p>
          </div>
        </div>

      </div>

      {/* Teacher Image */}
      <div className="relative flex justify-center mt-10 z-10">

        <img
          src={teacherImage}
          alt="Teacher"
          className="w-[380px] object-contain drop-shadow-2xl"
        />

      </div>

    </div>
  );
};

export default LeftBanner;