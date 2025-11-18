import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <section className="w-full max-w-md mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-100">
      {/* Heading */}
      <div className="text-center mb-6">
        <div className="text-3xl">
          <Title text1="CART" text2="TOTALS" />
        </div>
      </div>

      {/* Summary Items */}
      <div className="flex flex-col gap-3 text-sm text-gray-700">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900">
            {currency} {subtotal}.00
          </span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span>Shipping Fee</span>
          <span className="font-medium text-gray-900">
            {currency} {subtotal === 0 ? 0 : delivery_fee}.00
          </span>
        </div>

        <div className="flex justify-between items-center py-3 mt-2 text-base font-semibold">
          <span>Total</span>
          <span className="text-indigo-700">
            {currency} {total}.00
          </span>
        </div>
      </div>

      {/* Action */}
      <div className="mt-8 text-center">
        <button
          disabled={subtotal === 0}
          className={`px-8 py-3 rounded-full font-medium text-sm text-white transition-colors duration-300 ${
            subtotal === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 shadow-sm"
          }`}
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default CartTotal;
