import React from "react";

const Title = ({ text1, text2, align = "center" }) => {
  return (
    <div
      className={`inline-flex items-center gap-3 mb-4 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <h2
        className="text-2xl sm:text-3xl font-semibold tracking-wide text-gray-800"
        style={{ fontFamily: "Prata, serif" }}
      >
        <span className="text-gray-400">{text1}</span>{" "}
        <span className="text-indigo-600">{text2}</span>
      </h2>

      {/* accent line */}
      <span className="w-10 sm:w-12 h-[2.5px] bg-indigo-600 rounded-full"></span>
    </div>
  );
};

export default Title;
