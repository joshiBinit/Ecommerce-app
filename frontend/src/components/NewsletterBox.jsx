import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden px-6 py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-center">
      {/* headline */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
        Subscribe & Enjoy <span className="text-indigo-600">20% Off</span>
      </h2>
      <p className="mt-3 text-gray-600 max-w-md mx-auto text-sm sm:text-base">
        Join our community to receive style inspiration, exclusive rewards, and
        early access to limited drops—directly in your inbox.
      </p>

      {/* form */}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 max-w-xl mx-auto"
      >
        <input
          className="w-full flex-1 px-4 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 text-sm"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="mt-2 sm:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm tracking-wide px-8 py-3 rounded-full shadow-md transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>

      {/* decorative accent */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-pink-200 opacity-30 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-200 opacity-25 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default NewsLetterBox;
