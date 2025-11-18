import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory, excludeId }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = [...products];
      productsCopy = productsCopy.filter(
        (item) =>
          item.category === category &&
          item.subCategory === subCategory &&
          item._id !== excludeId
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory, excludeId]);

  return (
    <section className="relative mt-24 mb-20 px-6 sm:px-10 lg:px-16">
      {/* decorative blur accent */}
      <div className="absolute -right-20 top-0 w-72 h-72 bg-indigo-200 opacity-20 blur-[130px] rounded-full pointer-events-none"></div>

      {/* header */}
      <div className="text-center mb-10">
        <Title text1="RELATED" text2="PRODUCTS" />
        <p className="text-gray-500 text-sm mt-2">
          More you might love from this collection.
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {related.map((item) => (
          <div
            key={item._id}
            className="opacity-0 animate-fadeInUp animation-delay-75"
          >
            <ProductItem
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
