import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50"></div>

      <div className="relative flex flex-col-reverse md:flex-row items-center gap-10 md:gap-0 max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <p className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-indigo-600 font-semibold mb-4">
            <span className="block w-10 h-[2px] bg-indigo-600"></span>
            Trending
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
            Discover This Season’s
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              Fresh Arrivals
            </span>
          </h1>

          <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-8 text-base sm:text-lg">
            Hand‑picked pieces designed with timeless craftsmanship and
            effortless elegance. Step into comfort and confidence today.
          </p>

          <a
            href="#shop"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md font-medium shadow-sm hover:bg-indigo-700 transition-colors duration-200"
          >
            Shop Now
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={assets.hero_img}
            alt="New Arrival"
            className="w-80 sm:w-96 md:w-full max-w-[500px] rounded-lg shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
