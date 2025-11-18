import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const id in cartItems) {
        for (const size in cartItems[id]) {
          if (cartItems[id][size] > 0) {
            tempData.push({
              _id: id,
              size,
              quantity: cartItems[id][size],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <section className="border-t border-gray-200 pt-14 px-6 sm:px-10 lg:px-16">
      {/* Section title */}
      <div className="text-center mb-10">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Cart items */}
      <div className="space-y-6">
        {cartData.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            Your cart is currently empty.
          </p>
        ) : (
          cartData.map((item) => {
            const product = products.find((p) => p._id === item._id);
            return (
              <div
                key={`${item._id}-${item.size}`}
                className="flex flex-col sm:flex-row items-center justify-between gap-6 p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image + details */}
                <div className="flex items-start gap-5 w-full sm:w-auto">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-20 sm:w-24 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-800">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-3 text-sm">
                      <span className="text-gray-700">
                        {currency}
                        {product.price}
                      </span>
                      <span className="px-2 py-0.5 border border-gray-300 bg-gray-50 text-gray-600 rounded">
                        {item.size}
                      </span>
                    </div>
                  </div>
                </div>

                {/* quantity + remove */}
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="w-14 sm:w-20 border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                  <button
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    title="Remove item"
                    className="text-gray-500 hover:text-red-500 transition"
                  >
                    <img
                      src={assets.bin_icon}
                      alt="Remove"
                      className="w-4 sm:w-5"
                    />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Totals */}
      {cartData.length > 0 && (
        <div className="flex justify-end mt-16">
          <div className="w-full sm:w-[420px] bg-white border border-gray-100 shadow-md rounded-xl p-6">
            <CartTotal />
            <div className="text-right mt-8">
              <button
                onClick={() => navigate("/place-order")}
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-full px-8 py-3 shadow-sm transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
