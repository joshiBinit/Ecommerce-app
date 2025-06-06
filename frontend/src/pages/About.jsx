import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Forever, your one-stop destination for premium quality
            products delivered with unmatched convenience. We're committed to
            providing a seamless online shopping experience, offering curated
            collections that cater to your lifestyle and needs.
          </p>

          <p>
            Founded with a passion for excellence, we prioritize customer
            satisfaction through reliable service, secure transactions, and
            timely delivery. Whether you're shopping for essentials or exploring
            new trends, we're here to make every purchase simple and satisfying.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower customers by offering high-quality
            products at competitive prices, backed by exceptional service. We
            strive to build lasting relationships through trust, innovation, and
            a commitment to making online shopping simple, secure, and
            satisfying for everyone.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US "} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Forever, quality is our top priority. Every product undergoes a
            thorough selection and inspection process to ensure it meets our
            high standards. We partner with trusted suppliers and continuously
            monitor customer feedback to deliver only the best to your doorstep.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            We prioritize your time and comfort by offering a user-friendly
            shopping experience, fast checkout, multiple payment options, and
            reliable delivery services. From browsing to unboxing, every step is
            designed to make your shopping journey smooth and hassle-free.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our dedicated support team is always ready to assist you with any
            questions, concerns, or feedback. We believe in building trust
            through responsive communication, personalized solutions, and a
            commitment to ensuring every customer feels valued and heard.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
