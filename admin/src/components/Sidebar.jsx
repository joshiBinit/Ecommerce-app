import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/add", label: "Add Items", icon: assets.add_icon },
    {
      path: "/list",
      label: "List Items",
      icon: assets.list_icon || assets.order_icon,
    },
    { path: "/orders", label: "Orders", icon: assets.order_icon },
  ];

  return (
    <>
      {/* ---- Mobile Top Bar ---- */}
      <div className="sm:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40 flex items-center justify-between px-4 py-3">
        <img src={assets.logo} alt="logo" className="w-20 object-contain" />
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open sidebar"
          className="text-gray-700 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* ---- Sidebar ---- */}
      <div
        className={`sm:fixed sm:top-0 sm:left-0 h-screen min-h-screen bg-white border-r border-gray-200 shadow-md z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"} 
          w-[70%] sm:w-[18%] flex flex-col`}
      >
        {/* Mobile Close Header */}
        <div className="sm:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <img src={assets.logo} alt="logo" className="w-20 object-contain" />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
            className="text-gray-700 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col gap-2 pt-8 pl-[15%] pr-4 text-[15px]">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-medium border-l-4 border-indigo-600"
                    : "text-gray-700"
                }`
              }
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-5 h-5 opacity-80 flex-shrink-0"
              />
              <p className="truncate hidden sm:block">{item.label}</p>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ---- Mobile Overlay ---- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
