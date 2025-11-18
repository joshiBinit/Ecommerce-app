import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-8 px-6 sm:px-10 lg:px-20">
      {/* top content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
        {/* company info */}
        <div>
          <img
            src={assets.logo}
            alt="Logo"
            className="w-36 mb-5 brightness-200"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Elevate your everyday style with timeless pieces designed for
            versatility and confidence.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors"
              title="Facebook"
            >
              <i className="fa-brands fa-facebook-f text-white text-xs"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram text-white text-xs"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors"
              title="Twitter"
            >
              <i className="fa-brands fa-x-twitter text-white text-xs"></i>
            </a>
          </div>
        </div>

        {/* company links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* contact info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-400">Phone:</span>{" "}
              <a href="tel:+9779818168488" className="hover:text-white">
                +977 9818168488
              </a>
            </li>
            <li>
              <span className="text-gray-400">Email:</span>{" "}
              <a
                href="mailto:joshibinit8488@gmail.com"
                className="hover:text-white truncate"
              >
                joshibinit8488@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        <p>© NepBuy</p>
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 opacity-10 blur-[150px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 opacity-10 blur-[150px] pointer-events-none rounded-full"></div>
    </footer>
  );
};

export default Footer;
