import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="relative px-6 sm:px-10 lg:px-16 py-14 bg-gradient-to-b from-white via-indigo-50/30 to-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Explore our newest arrivals — crafted with attention to detail and a
          modern aesthetic. Handpicked so you can effortlessly refine your
          wardrobe with versatile pieces and contemporary flair.
        </p>
      </div>

      {/* Grid of Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {latestProducts.map((item) => (
          <div
            key={item._id}
            className="group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white rounded-lg overflow-hidden"
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Decorative background blur */}
      <div className="absolute -top-10 -left-16 w-72 h-72 bg-indigo-200 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default LatestCollection;
