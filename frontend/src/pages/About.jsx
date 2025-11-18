import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-16">
      {/* Intro */}
      <div className="text-center pt-12 border-t border-gray-200">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Content */}
      <div className="my-12 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <img
          className="w-full md:w-1/2 rounded-xl object-cover shadow-md"
          src={assets.about_img}
          alt="About NepBuy"
        />

        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-1/2">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-gray-800">NepBuy</span>, your
            trusted destination for premium products and an effortless shopping
            experience. We curate collections that blend style, comfort, and
            reliability—bringing the best of modern living straight to your
            door.
          </p>

          <p>
            Founded from a passion for excellence, our focus is your
            satisfaction. From seamless checkout to timely delivery, every step
            is designed to make your journey intuitive, secure, and delightful.
          </p>

          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-1">
              Our Mission
            </h3>
            <p>
              We aim to empower customers through superior products, honest
              value, and exceptional service. By building lasting relationships
              grounded in trust and innovation, we make online shopping secure
              and refreshingly human.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-8">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "Quality Assurance",
            desc: "We inspect every item to meet the highest standards. Partnering only with trusted suppliers ensures every product delivers quality you can feel.",
          },
          {
            title: "Convenience",
            desc: "We design every interaction—from browsing to delivery—to be effortless. Multiple payment options and fast, reliable logistics keep it simple.",
          },
          {
            title: "Exceptional Service",
            desc: "Our support team is ready around the clock to help you. We believe in quick responses, thoughtful communication, and genuine care.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h4 className="text-gray-800 font-semibold text-lg mb-3">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <NewsLetterBox />
    </section>
  );
};

export default About;
