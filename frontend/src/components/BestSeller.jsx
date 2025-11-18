import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <section className="relative px-6 sm:px-10 lg:px-16 py-16 bg-gradient-to-b from-white via-orange-50/40 to-white">
      {/* Title & Description */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Title text1="BEST" text2="SELLERS" />
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          Our community’s favorites—celebrated pieces acclaimed for their
          quality, versatility, and timeless appeal. Join thousands of happy
          customers who already made them theirs.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {bestSeller.map((item) => (
          <div
            key={item._id}
            className="relative group bg-white rounded-lg overflow-hidden 
                       shadow-sm hover:shadow-lg transition-all duration-300 
                       hover:-translate-y-1"
          >
            {/* Optional subtle highlight ribbon */}
            <span className="absolute z-10 top-3 left-3 text-[10px] font-semibold bg-orange-500 text-white px-2 py-[2px] rounded-full shadow-sm">
              Hot Pick
            </span>

            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />

            {/* subtle overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Soft glowing backdrop accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200 opacity-30 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-100 opacity-40 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default BestSeller;
