import { NavLink, useNavigate } from "react-router-dom";
import { sidebarItems } from "../data/sidebarData";
import { FaGraduationCap } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 flex flex-col">

      {/* Logo */}

      <div className="h-20 border-b border-slate-700 flex items-center justify-center">

        <FaGraduationCap className="text-3xl text-pink-500 mr-3 mt-3" />

        <div>

          <h1 className="font-bold mt-8 mb-4">
            Shiksha At Home
          </h1>

          {/* <p className="text-xs text-slate-400 mt-2">
            Admin Portal
          </p> */}

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 p-4 space-y-2">

        {sidebarItems.map((item) => {
          const Icon = item.icon;

          if (item.title === "Logout") {
            return (
              <button
                key={item.title}
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-red-600 hover:text-white transition"
              >
                <Icon />
                {item.title}
              </button>
            );
          }

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${
                  isActive
                    ? "bg-pink-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon />
              {item.title}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-700 p-4 text-center text-xs text-slate-400">
        © 2026 Shiksha At Home
      </div>
    </aside>
  );
};

export default Sidebar;