import React, { useContext, useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();
  const {
    backendUrl,
    token,
    products,
    cartItems,
    setCartitems,
    getCartAmount,
    delivery_fee,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const orderItems = [];

      for (const id in cartItems) {
        for (const size in cartItems[id]) {
          if (cartItems[id][size] > 0) {
            const itemInfo = {
              ...products.find((p) => p._id === id),
              size,
              quantity: cartItems[id][size],
            };
            orderItems.push(itemInfo);
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      if (method === "cod") {
        const { data } = await axios.post(
          `${backendUrl}/api/order/place`,
          orderData,
          { headers: { token } }
        );
        if (data.success) {
          setCartitems({});
          navigate("/orders");
        } else {
          console.error(data.message);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="border-t border-gray-200 pt-14 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col lg:flex-row justify-between gap-8"
      >
        {/* Left Section - Delivery Details */}
        <div className="w-full lg:max-w-lg bg-white border border-gray-100 shadow-sm rounded-xl p-8 space-y-5">
          <div className="mb-4">
            <Title text1="DELIVERY" text2="INFORMATION" align="left" />
          </div>

          <div className="flex gap-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={onChangeHandler}
              placeholder="First Name"
              required
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={onChangeHandler}
              placeholder="Last Name"
              required
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <input
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            placeholder="Email Address"
            type="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <input
            name="street"
            value={formData.street}
            onChange={onChangeHandler}
            placeholder="Street Address"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <div className="flex gap-4">
            <input
              name="city"
              value={formData.city}
              onChange={onChangeHandler}
              placeholder="City"
              required
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              name="state"
              value={formData.state}
              onChange={onChangeHandler}
              placeholder="State"
              required
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="flex gap-4">
            <input
              name="zipcode"
              value={formData.zipcode}
              onChange={onChangeHandler}
              placeholder="ZIP Code"
              type="number"
              required
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              name="country"
              value={formData.country}
              onChange={onChangeHandler}
              placeholder="Country"
              required
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <input
            name="phone"
            value={formData.phone}
            onChange={onChangeHandler}
            placeholder="Phone Number"
            type="number"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* Right Section - Summary + Payment */}
        <div className="flex-1 flex flex-col gap-10">
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
            <CartTotal />
          </div>

          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
            <Title text1="PAYMENT" text2="METHOD" align="left" />
            <div className="mt-5 flex flex-col sm:flex-row gap-4">
              <div
                onClick={() => setMethod("stripe")}
                className={`flex items-center gap-3 border rounded-lg px-3 py-2 cursor-pointer transition ${
                  method === "stripe"
                    ? "border-indigo-500 bg-indigo-50"
                    : "hover:border-gray-400"
                }`}
              >
                <span
                  className={`inline-block w-3.5 h-3.5 rounded-full border ${
                    method === "stripe" ? "bg-green-400 border-green-400" : ""
                  }`}
                ></span>
                <img
                  src={assets.stripe_logo}
                  alt="Stripe"
                  className="h-5 ml-2"
                />
              </div>

              <div
                onClick={() => setMethod("razorpay")}
                className={`flex items-center gap-3 border rounded-lg px-3 py-2 cursor-pointer transition ${
                  method === "razorpay"
                    ? "border-indigo-500 bg-indigo-50"
                    : "hover:border-gray-400"
                }`}
              >
                <span
                  className={`inline-block w-3.5 h-3.5 rounded-full border ${
                    method === "razorpay" ? "bg-green-400 border-green-400" : ""
                  }`}
                ></span>
                <img
                  src={assets.razorpay_logo}
                  alt="Razorpay"
                  className="h-5 ml-2"
                />
              </div>

              <div
                onClick={() => setMethod("cod")}
                className={`flex items-center gap-3 border rounded-lg px-3 py-2 cursor-pointer transition ${
                  method === "cod"
                    ? "border-indigo-500 bg-indigo-50"
                    : "hover:border-gray-400"
                }`}
              >
                <span
                  className={`inline-block w-3.5 h-3.5 rounded-full border ${
                    method === "cod" ? "bg-green-400 border-green-400" : ""
                  }`}
                ></span>
                <span className="text-gray-700 text-sm font-medium">
                  Cash on Delivery
                </span>
              </div>
            </div>

            <div className="w-full text-right mt-8">
              <button
                type="submit"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-full px-10 py-3 shadow-sm transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PlaceOrder;
