// import { NavLink } from "react-router-dom";
// import { sidebarItems } from "../data/sidebarData";
// import { FaGraduationCap } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col fixed left-0 top-0">

//       {/* Logo */}
//       <div className="h-20 flex items-center justify-center border-b border-slate-700 p-8">
//         <FaGraduationCap className="text-3xl text-pink-500 mr-2" />
//         <div>
//           <h1 className="text-sm font-bold">Shiksha At Home</h1>
//           <p className="text-xs text-slate-400">Teacher Portal</p>
//         </div>
//       </div>

//       {/* Menu */}
//       <nav className="flex-1 px-4 py-6 space-y-2">
//         {sidebarItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <NavLink
//               key={item.title}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
//                 ${
//                   isActive
//                     ? "bg-pink-600 text-white"
//                     : "text-slate-300 hover:bg-slate-800 hover:text-white"
//                 }`
//               }
//             >
//               <Icon className="text-lg" />
//               <span>{item.title}</span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* Footer */}
//       <div className="p-5 border-t border-slate-700 text-center">
//         <p className="text-xs text-slate-400">
//           © 2026 Shiksha At Home
//         </p>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


import { NavLink, useNavigate } from "react-router-dom";
import { sidebarItems } from "../data/sidebarData";
import { FaGraduationCap } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("teacherToken");
    localStorage.removeItem("teacher");

    navigate("/teacher/login");
  };

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col fixed left-0 top-0">

      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-700 p-8">
        <FaGraduationCap className="text-3xl text-pink-500 mr-2" />

        <div>
          <h1 className="text-sm font-bold">Shiksha At Home</h1>
          <p className="text-xs text-slate-400">Teacher Portal</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          // Logout Button
          if (item.title === "Logout") {
            return (
              <button
                key={item.title}
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-300 hover:bg-pink-600 hover:text-white"
              >
                <Icon className="text-lg" />
                <span>{item.title}</span>
              </button>
            );
          }

          // Normal Navigation
          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-pink-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon className="text-lg" />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-5 border-t border-slate-700 text-center">
        <p className="text-xs text-slate-400">
          © 2026 Shiksha At Home
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;