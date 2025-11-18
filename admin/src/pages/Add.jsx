import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setSizes([]);
        setBestseller(false);
      } else toast.error(response.data.message);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  };

  return (
    <section className="w-full min-h-screen bg-gray-50 p-6 sm:p-10">
      <form
        onSubmit={onSubmitHandler}
        className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col gap-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Add New Product
        </h2>

        <div>
          <p className="mb-2 font-medium text-gray-700">Upload Images</p>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4].map((i) => {
              const currentSetter = [
                setImage1,
                setImage2,
                setImage3,
                setImage4,
              ][i - 1];
              const currentImage = [image1, image2, image3, image4][i - 1];
              return (
                <label key={i} htmlFor={`image${i}`} className="cursor-pointer">
                  <div className="relative w-24 h-24 border border-gray-300 rounded-md flex items-center justify-center overflow-hidden bg-gray-50 hover:bg-gray-100 transition">
                    <img
                      src={
                        !currentImage
                          ? assets.upload_area
                          : URL.createObjectURL(currentImage)
                      }
                      alt={`Image ${i}`}
                      className="object-cover w-full h-full"
                    />
                    {!currentImage && (
                      <span className="absolute text-xs text-gray-400">
                        Upload
                      </span>
                    )}
                  </div>
                  <input
                    id={`image${i}`}
                    type="file"
                    hidden
                    onChange={(e) => currentSetter(e.target.files[0])}
                    accept="image/*"
                  />
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium text-gray-700">Product Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            type="text"
            placeholder="Enter product name"
            required
          />
        </div>

        <div>
          <p className="mb-2 font-medium text-gray-700">Description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Product details..."
            rows="4"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <p className="mb-2 font-medium text-gray-700">Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="mb-2 font-medium text-gray-700">Subcategory</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              value={subCategory}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="mb-2 font-medium text-gray-700">Price</p>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              type="number"
              placeholder="25"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium text-gray-700">Available Sizes</p>
          <div className="flex flex-wrap gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size} onClick={() => toggleSize(size)}>
                <p
                  className={`px-4 py-1 rounded-md cursor-pointer border ${
                    sizes.includes(size)
                      ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                      : "bg-gray-100 border-gray-300 text-gray-600"
                  }`}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="bestseller"
            type="checkbox"
            checked={bestseller}
            onChange={() => setBestseller((prev) => !prev)}
            className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="bestseller" className="text-sm text-gray-700">
            Mark as bestseller
          </label>
        </div>

        <button
          type="submit"
          className="self-start bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md text-sm font-medium transition"
        >
          Add Product
        </button>
      </form>
    </section>
  );
};

export default Add;
