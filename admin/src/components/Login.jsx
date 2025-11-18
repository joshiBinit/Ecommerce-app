import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });
      if (data.success) {
        setToken(data.token);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-indigo-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">
          Admin Panel
        </h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Please sign in with your admin credentials.
        </p>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@mail.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
            <button
              type="button"
              title={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-8 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.317 4.5 12 4.5c4.683 0 8.578 3.01 9.964 7.183.07.207.07.431 0 .639C20.578 16.49 16.683 19.5 12 19.5c-4.683 0-8.578-3.01-9.964-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12c1.28 2.97 4.403 6.5 10.066 6.5 1.763 0 3.366-.324 4.778-.897M6.228 6.228l11.544 11.544M9.878 9.878a3 3 0 104.243 4.243"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 font-medium text-sm transition"
          >
            Log In
          </button>
        </form>

        <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-gray-700 text-sm">
          <p className="font-semibold text-indigo-700 mb-1">
            Admin Credentials
          </p>
          <p>
            <span className="font-medium">Email:</span> admin@example.com
          </p>
          <p>
            <span className="font-medium">Password:</span> example
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Use these details for demo access to the admin panel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
