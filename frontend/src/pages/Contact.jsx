import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-16">
      <div className="text-center pt-12 border-t border-gray-200">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="my-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        <img
          src={assets.contact_img}
          alt="Contact"
          className="w-full md:w-1/2 max-w-md rounded-xl object-cover shadow-md"
        />

        <div className="flex flex-col justify-center gap-6 text-gray-600 max-w-md">
          <div>
            <h3 className="font-semibold text-2xl text-gray-800 mb-2">
              Our Store
            </h3>
            <p className="leading-relaxed">
              <span className="text-gray-500">Kathmandu, Nepal</span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-2xl text-gray-800 mb-2">
              Get in Touch
            </h3>
            <p className="leading-relaxed">
              <span className="text-gray-500">
                Phone: <a href="tel:+9779818168488">+977 9818168488</a>
              </span>
              <br />
              <span className="text-gray-500">
                Email:{" "}
                <a
                  href="mailto:joshibinit8488@gmail.com"
                  className="text-indigo-600 hover:underline"
                >
                  binitjoshi4554@gmail.com
                </a>
              </span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-2xl text-gray-800 mb-2">
              Careers at NepBuy
            </h3>
            <p className="text-gray-500 mb-4">
              Ready to make a difference? Join our passionate team shaping the
              future of online shopping.
            </p>
            <button className="px-8 py-3 border border-gray-800 rounded-full text-sm font-medium text-gray-900 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-colors duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-10 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <NewsLetterBox />
      </div>
    </section>
  );
};

export default Contact;
