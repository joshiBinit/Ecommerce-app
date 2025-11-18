import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes("collection"));
  }, [location]);

  if (!(showSearch && visible)) return null;

  return (
    <section className="relative w-full bg-gradient-to-r from-white via-indigo-50/50 to-white py-6 border-y border-gray-200">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* search input container */}
        <div className="flex items-center w-11/12 sm:w-1/2 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-500 transition-all duration-200">
          <img
            src={assets.search_icon}
            alt="search"
            className="w-4 opacity-70"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="flex-1 px-3 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />

          <button
            type="button"
            onClick={() => setSearch("")}
            title="Clear search"
            className={`transition-opacity duration-200 ${
              search ? "opacity-70 hover:opacity-100" : "opacity-0"
            }`}
          >
            <img src={assets.cross_icon} alt="Clear" className="w-3.5" />
          </button>
        </div>

        {/* close bar button */}
        <button
          onClick={() => setShowSearch(false)}
          className="text-xs uppercase tracking-wide text-gray-500 hover:text-gray-700 transition"
        >
          Close Search
        </button>
      </div>

      {/* soft background accent */}
      <div className="absolute -left-10 top-0 w-64 h-64 bg-indigo-200 opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute -right-10 bottom-0 w-64 h-64 bg-pink-200 opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default SearchBar;
