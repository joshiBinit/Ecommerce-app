import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      desc: "We offer a seamless, hassle‑free exchange process for your convenience.",
    },
    {
      icon: assets.quality_icon,
      title: "7‑Day Return Guarantee",
      desc: "Changed your mind? Enjoy free returns within 7 days—no questions asked.",
    },
    {
      icon: assets.support_img,
      title: "24/7 Customer Support",
      desc: "Our friendly support team is available anytime to help you out.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-6 sm:px-10 lg:px-16 text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {policies.map((policy, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                <img src={policy.icon} alt={policy.title} className="w-8" />
              </div>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {policy.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed px-2">
              {policy.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 opacity-20 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-8 left-0 w-72 h-72 bg-pink-200 opacity-20 blur-[130px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default OurPolicy;
