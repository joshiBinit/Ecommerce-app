import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const endpoint =
        currentState === "Sign Up"
          ? `${backendUrl}/api/user/register`
          : `${backendUrl}/api/user/login`;

      const payload =
        currentState === "Sign Up"
          ? { name, email, password }
          : { email, password };

      const { data } = await axios.post(endpoint, payload);

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  return (
    <section className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col gap-5 text-gray-700"
      >
        {/* --- Header --- */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            {currentState}
          </h2>
          <p className="text-sm text-gray-500">
            {currentState === "Login"
              ? "Welcome back. Sign in to continue."
              : "Join us and start shopping effortlessly."}
          </p>
        </div>

        {/* --- Name field for Sign Up --- */}
        {currentState === "Sign Up" && (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        )}

        {/* --- Email --- */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />

        {/* --- Password + eye icon --- */}
        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition pr-10"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none"
            title={showPassword ? "Hide password" : "Show password"}
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

        {/* --- Actions --- */}
        <div className="flex justify-between text-xs text-gray-500">
          <span className="cursor-pointer hover:text-gray-700">
            Forgot password?
          </span>
          {currentState === "Login" ? (
            <span
              className="cursor-pointer text-indigo-600 hover:underline"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create Account
            </span>
          ) : (
            <span
              className="cursor-pointer text-indigo-600 hover:underline"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </span>
          )}
        </div>

        {/* --- Submit --- */}
        <button
          type="submit"
          className="w-full mt-2 px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>

        {/* --- Admin Access link --- */}
        <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-gray-700 text-sm text-center">
          <p className="font-medium text-gray-800 mb-1">Admin Access</p>
          <p>
            Go to{" "}
            <a
              href="https://ecommerce-admin-five-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 font-semibold underline underline-offset-2"
            >
              Admin Page
            </a>{" "}
            to manage products and orders.
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
