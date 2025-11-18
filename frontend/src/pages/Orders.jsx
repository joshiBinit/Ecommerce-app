import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]); // eslint-disable-line

  return (
    <section className="border-t border-gray-200 pt-16 px-6 sm:px-10 lg:px-16">
      <div className="text-center mb-10">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div className="space-y-6">
        {orderData.length === 0 ? (
          <p className="text-center text-gray-500 py-10 text-sm">
            You haven’t placed any orders yet.
          </p>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border border-gray-100 rounded-xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              {/* Product info */}
              <div className="flex items-start gap-5 text-sm sm:text-base text-gray-700 w-full md:w-auto">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-20 sm:w-24 rounded-md object-cover border border-gray-100"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <div className="flex flex-wrap items-center gap-3 text-gray-700 text-sm">
                    <span>
                      {currency}
                      {item.price}
                    </span>
                    <span className="px-2 py-0.5 rounded border border-gray-200 bg-gray-50">
                      Qty {item.quantity}
                    </span>
                    <span className="px-2 py-0.5 rounded border border-gray-200 bg-gray-50">
                      Size {item.size}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    Ordered on{" "}
                    <span className="text-gray-600">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                  <p className="text-gray-500 text-xs">
                    Payment:{" "}
                    <span className="text-gray-600">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              {/* Status & Action */}
              <div className="flex justify-between md:justify-end items-center w-full md:w-[200px] text-sm">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      item.status === "Delivered"
                        ? "bg-green-500"
                        : item.status === "Shipped"
                        ? "bg-blue-500"
                        : item.status === "Processing"
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                    }`}
                  ></span>
                  <span className="capitalize text-gray-800 font-medium">
                    {item.status || "Processing"}
                  </span>
                </div>
                <button
                  onClick={loadOrderData}
                  className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 text-gray-700 px-4 py-2 rounded-full font-medium transition-colors duration-200 ml-4"
                >
                  Track
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Orders;
