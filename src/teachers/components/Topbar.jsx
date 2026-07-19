import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  FaBell,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

const Topbar = () => {
  // const [teacher, setTeacher] = useState(null);
  const { teacher } = useAuth();
  // useEffect(() => {
  //   const teacherData = JSON.parse(localStorage.getItem("teacher"));

  //   if (teacherData) {
  //     setTeacher(teacherData);
  //   }
  // }, []);
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome Back 👋
        </h1>
        <p className="text-sm text-gray-500">
          Have a productive teaching day.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        {/* <div className="relative hidden md:block">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-11 pr-4 py-2 w-72 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        {/* Notification */}
        <button className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">
          <FaBell className="text-gray-600" />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 hover:bg-gray-100 rounded-xl px-3 py-2 transition">

          {/* <img
            src="https://i.pravatar.cc/100"
            alt="Teacher"
            className="w-11 h-11 rounded-full object-cover"
          /> */}

          <div className="hidden md:block text-left">
            <h3 className="font-semibold text-gray-800">
              {teacher?.name || "Teacher"}
            </h3>

            <p className="text-xs text-gray-500">
              Mathematics Teacher
            </p>
          </div>

          {/* <FaChevronDown className="text-gray-500" /> */}
        </button>

      </div>
    </header>
  );
};

export default Topbar;