import React from "react";

const Register = () => {
  return (
    <main className="overflow-x-hidden pt-[90px]">
      <div className="flex items-center justify-center min-h-[calc(100vh-128px)] bg-gray-100 ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button
              type="submit"
              className="bg-pink-600 text-white py-2 rounded hover:bg-pink-600 transition-colors"
            >
              Register
            </button>
          </form>

          <p className="text-sm mt-4 text-center text-gray-500">
            Already have an account?{" "}
            <a href="/signin" className="text-pink-500">
              Log In
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
