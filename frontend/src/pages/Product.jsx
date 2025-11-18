import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProductData(selectedProduct);
      setImage(selectedProduct.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <section className="border-t border-gray-200 pt-10 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Image Gallery */}
        <div className="flex flex-col lg:flex-row flex-1 gap-4">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto max-h-[500px]">
            {productData.image.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                onClick={() => setImage(src)}
                className={`w-20 h-20 object-cover rounded-md border cursor-pointer transition-all duration-300 ${
                  image === src
                    ? "border-indigo-500 shadow-sm"
                    : "border-gray-200 hover:border-indigo-300"
                }`}
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              src={image}
              alt={productData.name}
              className="w-full rounded-xl object-cover shadow-sm"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col text-gray-700">
          <h1 className="font-semibold text-2xl sm:text-3xl mb-2 text-gray-900">
            {productData.name}
          </h1>

          <div className="flex items-center gap-1 my-2">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-4" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="w-4" />
            <p className="pl-2 text-sm text-gray-500">(122 reviews)</p>
          </div>

          <p className="mt-4 text-3xl font-semibold text-indigo-700">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed text-sm md:max-w-md">
            {productData.description}
          </p>

          {/* Sizes */}
          <div className="flex flex-col gap-3 my-8">
            <p className="text-sm font-medium text-gray-700 uppercase">
              Select Size
            </p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((el, i) => (
                <button
                  key={i}
                  onClick={() => setSize(el)}
                  className={`px-5 py-2 border rounded-md text-sm font-medium transition-all ${
                    size === el
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-gray-300 hover:border-indigo-300 hover:bg-indigo-50"
                  }`}
                >
                  {el}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => size && addToCart(productData._id, size)}
            disabled={!size}
            className={`px-8 py-3 text-sm font-medium rounded-full transition-colors ${
              size
                ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>

          <div className="mt-8 text-sm text-gray-500 flex flex-col gap-1 border-t pt-5">
            <p>✅ 100% Original product</p>
            <p>💰 Cash on delivery available</p>
            <p>↩️ Easy return and exchange within 7 days</p>
          </div>
        </div>
      </div>

      {/* Tabs: Description / Reviews */}
      <div className="mt-20 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        <div className="flex border-b">
          <button className="px-6 py-3 font-medium text-sm text-indigo-700 border-b-2 border-indigo-600">
            Description
          </button>
          <button className="px-6 py-3 font-medium text-sm text-gray-500 hover:text-indigo-700 transition">
            Reviews
          </button>
        </div>
        <div className="p-6 text-sm text-gray-600 leading-relaxed">
          <p>
            Experience all‑day comfort with this premium fabric, crafted from
            100% breathable cotton. Its clean silhouette makes it a wardrobe
            essential for everyday styling.
          </p>
          <p className="mt-3">
            Designed for durability and timeless style, this piece strikes the
            perfect balance of utility and luxury — perfect for any occasion.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
          excludeId={productData._id}
        />
      </div>
    </section>
  );
};

export default Product;
