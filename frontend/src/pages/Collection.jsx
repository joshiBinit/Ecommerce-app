import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const applyFilter = () => {
    let copy = [...products];

    if (showSearch && search) {
      copy = copy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0)
      copy = copy.filter((i) => category.includes(i.category));
    if (subCategory.length > 0)
      copy = copy.filter((i) => subCategory.includes(i.subCategory));

    setFilterProducts(copy);
  };

  const sortProduct = () => {
    const sorted = [...filterProducts];
    if (sortType === "low-high") sorted.sort((a, b) => a.price - b.price);
    else if (sortType === "high-low") sorted.sort((a, b) => b.price - a.price);
    else applyFilter();
    setFilterProducts(sorted);
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]); // eslint-disable-line

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]); // eslint-disable-line

  return (
    <section className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 border-t border-gray-200 px-6 sm:px-10 lg:px-16">
      {/* Sidebar Filter */}
      <aside className="sm:min-w-[220px]">
        <button
          onClick={() => setShowFilter((p) => !p)}
          className="sm:hidden text-sm flex items-center gap-2 mb-5 font-medium text-gray-700"
        >
          Filters
          <img
            src={assets.dropdown_icon}
            alt="toggle"
            className={`w-3 transition-transform ${
              showFilter ? "rotate-90" : ""
            }`}
          />
        </button>

        <div
          className={`bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 p-5 space-y-6 ${
            showFilter ? "block" : "hidden sm:block"
          }`}
        >
          {/* Category */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-3 uppercase tracking-wide">
              Category
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {["Men", "Women", "Kids"].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={cat}
                    onChange={toggleCategory}
                    checked={category.includes(cat)}
                    className="accent-indigo-600"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-3 uppercase tracking-wide">
              Type
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
                <label
                  key={sub}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={sub}
                    onChange={toggleSubCategory}
                    checked={subCategory.includes(sub)}
                    className="accent-indigo-600"
                  />
                  <span>{sub}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Title & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <Title text1="ALL" text2="COLLECTIONS" align="left" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
            className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:ring-1 focus:ring-indigo-500 outline-none"
          >
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">Sort by: Price (Low → High)</option>
            <option value="high-low">Sort by: Price (High → Low)</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10 text-sm">
              No products found.
            </p>
          )}
        </div>
      </main>
    </section>
  );
};

export default Collection;
