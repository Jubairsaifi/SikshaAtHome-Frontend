// import React from "react";

// const DashboardCard = ({
//   title,
//   value,
//   icon,
//   bgColor = "bg-pink-600",
// }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl 
//     transition-all duration-300 p-6 flex items-center justify-between 
//     border border-gray-100 ">

//       <div>
//         <p className="text-gray-500 text-sm font-medium">
//           {title}
//         </p>

//         <h2 className="text-3xl font-bold text-gray-800 mt-2">
//           {value}
//         </h2>
//       </div>

//       <div
//         className={`w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center text-white text-3xl shadow-lg`}
//       >
//         {icon}
//       </div>

//     </div>
//   );
// };

// export default DashboardCard;


import React from "react";
import { FaArrowUp } from "react-icons/fa";

const DashboardCard = ({
  title,
  value,
  icon,
  bgColor = "from-pink-500 to-pink-600",
}) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        border border-gray-100
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        p-6
      "
    >
      {/* Top Gradient Line */}
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${bgColor}`}
      />

      <div className="flex justify-between items-start">

        <div>

          <p className="text-gray-500 text-sm font-medium tracking-wide">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mt-3">
            {value}
          </h2>

          {/* <div className="flex items-center mt-4 text-green-600 text-sm font-medium">
            <FaArrowUp className="mr-2 text-xs" />
            +12% this month
          </div> */}

        </div>

        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bgColor}
          flex items-center justify-center
          text-white text-3xl
          shadow-lg`}
        >
          {icon}
        </div>

      </div>

      {/* Background Decoration */}
      <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-pink-50 rounded-full opacity-70"></div>
    </div>
  );
};

export default DashboardCard;