import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/product/list`, {
        headers: { token },
      });

      if (data.success) {
        setList(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch product list");
    }
  };

  const removeProduct = async (id) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );
      if (data.success) {
        toast.success("Product removed successfully");
        fetchList();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to remove product");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Product List
      </h2>

      <div className="overflow-x-auto bg-white shadow-md border border-gray-100 rounded-lg">
        {/* Header row */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center text-sm font-semibold text-gray-700 bg-gray-100 px-4 py-3 border-b border-gray-200">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Product list */}
        {list.length === 0 ? (
          <p className="py-8 text-center text-sm text-gray-500">
            No products found.
          </p>
        ) : (
          list.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center text-sm text-gray-700 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-md border border-gray-200"
              />
              <p className="truncate">{item.name}</p>
              <p className="capitalize">{item.category}</p>
              <p className="text-indigo-700 font-medium">
                {currency}
                {item.price}
              </p>

              <div className="flex justify-end md:justify-center">
                <button
                  onClick={() => removeProduct(item._id)}
                  className="text-red-500 hover:text-red-600 font-semibold text-sm transition"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default List;
