import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* image */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <img
          src={image[0]}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* quick effect overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* info */}
      <div className="p-4">
        <p className="truncate text-gray-800 font-medium text-sm sm:text-base mb-1">
          {name}
        </p>
        <p className="text-indigo-600 font-semibold text-sm sm:text-base">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
