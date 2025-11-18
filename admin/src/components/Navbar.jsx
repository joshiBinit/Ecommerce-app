import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="flex items-center justify-between px-[5%] py-3">
        <div className="flex items-center gap-2">
          <img
            src={assets.logo}
            alt="Admin Logo"
            className="w-[max(10%,80px)] object-contain"
          />
          <h1 className="text-lg font-semibold text-gray-800 hidden sm:block">
            Admin Panel
          </h1>
        </div>

        <button
          onClick={() => setToken("")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-full text-sm shadow-sm transition-colors"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
