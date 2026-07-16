import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { useAuth } from "../../context/AuthContext";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
  FaGoogle,
} from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        // localStorage.setItem("teacherToken", response.data.token);

        // localStorage.setItem(
        //   "teacher",
        //   JSON.stringify(response.data.teacher)

        login(response.data.teacher, response.data.token);
        localStorage.setItem(
          "teacherToken",
          response.data.token
        );
        console.log("Navigating...");


        navigate("/teacher/dashboard");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-8 lg:p-14 bg-white">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
            <FaGraduationCap className="text-4xl text-pink-600" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Teacher Login
          </h1>

          <p className="text-gray-500 mt-3">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-10 space-y-6">

          {/* Email */}
          <div>
            <label className="font-medium text-gray-700">
              Email Address
            </label>

            <div className="relative mt-2">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-2">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          {/* Login Button */}
          <button type="submit"

            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-pink-700 transition duration-300 text-white font-semibold shadow-lg hover:shadow-xl"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">

            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>

          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full border border-gray-300 py-4 rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-3 font-medium"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          {/* Register */}
          {/* <p className="text-center text-gray-600 mt-6">
            Don't have a teacher account?{" "}
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Register Now
            </span>
          </p> */}

        </form>

      </div>

    </div>
  );
};

export default LoginForm;