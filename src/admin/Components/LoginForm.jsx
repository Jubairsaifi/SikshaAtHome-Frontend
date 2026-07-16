import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { useAdmin } from "../../context/AdminContext";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserShield,
} from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const { fetchAdmin } = useAdmin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await API.post(
        "/admin/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        await fetchAdmin();

        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
          <FaUserShield className="text-4xl text-pink-600" />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mt-6">
        Admin Login
      </h1>

      <p className="text-center text-gray-500 mt-3">
        Login to your admin dashboard
      </p>

      {error && (
        <p className="text-red-500 text-center mt-4">
          {error}
        </p>
      )}

      <form onSubmit={handleLogin} className="mt-10 space-y-6">

        <div>

          <label>Email</label>

          <div className="relative mt-2">

            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full pl-12 py-4 rounded-xl border outline-none focus:ring-2 focus:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

        </div>

        <div>

          <label>Password</label>

          <div className="relative mt-2">

            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-4 rounded-xl border outline-none focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  );
};

export default LoginForm;