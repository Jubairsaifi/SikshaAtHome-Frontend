import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate("/register");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white py-2 rounded hover:bg-pink-600 transition-colors"
          >
            Log In
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-gray-500">
          Don’t have an account?
          <button className="text-pink-500"
            onClick={() => handleItemClick()}>
            Register
          </button>
          {/* <a href="/register" className="text-pink-500">Register</a> */}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
