import { FaBell } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="h-20 bg-white shadow flex items-center justify-between px-8">

      <div>

        <h1 className="text-2xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500">
          {/* Welcome Back 👋 */}
        </p>

      </div>

      <button className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200">

        <FaBell className="mx-auto mt-3" />

        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

      </button>

    </header>
  );
};

export default Topbar;