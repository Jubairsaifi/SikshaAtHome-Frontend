import { FaUserShield } from "react-icons/fa";
import LoginForm from "../components/LoginForm";

const AdminLogin = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <div className="hidden lg:flex bg-gradient-to-br from-slate-900 via-slate-800 to-pink-700 text-white flex-col justify-center items-center p-16">

        <div className="max-w-md">

          <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-8">
            <FaUserShield className="text-5xl" />
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Shiksha At Home
          </h1>

          <p className="mt-8 text-xl text-slate-200 leading-9">
            Manage teachers, students, classes and your complete learning
            platform from one powerful dashboard.
          </p>

          <div className="mt-12 flex gap-5">

            <div className="bg-white/10 rounded-xl p-5 w-40">
              <h2 className="text-3xl font-bold">250+</h2>
              <p className="text-sm mt-2">Teachers</p>
            </div>

            <div className="bg-white/10 rounded-xl p-5 w-40">
              <h2 className="text-3xl font-bold">5000+</h2>
              <p className="text-sm mt-2">Students</p>
            </div>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center bg-gray-100 p-10">

        <LoginForm />

      </div>

    </div>
  );
};

export default AdminLogin;