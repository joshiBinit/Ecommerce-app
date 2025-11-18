import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );

      if (data.success) {
        setOrders(data.orders);
      } else toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const updateStatus = async (e, orderId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: e.target.value },
        { headers: { token } }
      );

      if (data.success) {
        fetchAllOrders();
        toast.success("Order status updated");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Orders Overview
      </h2>

      <div className="flex flex-col gap-5">
        {orders.length === 0 ? (
          <p className="text-center py-10 text-gray-500 text-sm">
            No orders found.
          </p>
        ) : (
          orders.map((order, idx) => (
            <div
              key={idx}
              className="border border-gray-200 bg-white shadow-sm rounded-xl p-5 md:p-6 text-gray-700 text-sm flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4 border-b border-gray-100 pb-4">
                <div className="flex gap-4">
                  <img
                    src={assets.parcel_icon}
                    alt="Order"
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <p className="text-gray-600 leading-snug">
                      {order.address.street}, {order.address.city},{" "}
                      {order.address.state}, {order.address.country},{" "}
                      {order.address.zipcode}
                    </p>
                    <p className="text-gray-500 mt-1 text-xs">
                      📞 {order.address.phone}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-right sm:text-left sm:items-end">
                  <p>
                    <span className="font-medium text-gray-900">Items:</span>{" "}
                    {order.items.length}
                  </p>
                  <p>
                    <span className="font-medium">Payment:</span>{" "}
                    {order.payment ? (
                      <span className="text-green-600 font-semibold">
                        Completed
                      </span>
                    ) : (
                      <span className="text-red-500 font-semibold">
                        Pending
                      </span>
                    )}
                  </p>
                  <p>
                    <span className="font-medium">Method:</span>{" "}
                    {order.paymentMethod}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mt-1">
                <p className="font-medium mb-1 text-gray-800">Items:</p>
                <div className="space-y-0.5">
                  {order.items.map((it, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {it.name} × {it.quantity}{" "}
                      <span className="text-gray-400">({it.size})</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                <p className="font-semibold text-gray-900">
                  Total:{" "}
                  <span className="text-indigo-600">
                    {currency}
                    {order.amount}
                  </span>
                </p>

                <div className="flex items-center gap-3">
                  <label
                    htmlFor={`status-${order._id}`}
                    className="text-sm font-medium text-gray-700"
                  >
                    Status:
                  </label>
                  <select
                    id={`status-${order._id}`}
                    onChange={(e) => updateStatus(e, order._id)}
                    value={order.status}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm bg-white text-gray-700"
                  >
                    <option value="OrderPlaced">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Orders;
