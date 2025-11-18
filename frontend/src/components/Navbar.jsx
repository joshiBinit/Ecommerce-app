import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img
            src={assets.logo}
            alt="Logo"
            className="w-36 hover:opacity-90 transition-opacity"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 text-sm tracking-wide">
          {["/", "/collection", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Collection", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative pb-1 font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full ${
                    isActive ? "text-indigo-600 after:w-full" : ""
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </ul>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setShowSearch(true)}
            className="hover:scale-110 transition-transform"
          >
            <img src={assets.search_icon} alt="Search" className="w-5" />
          </button>

          <div className="relative group">
            <button
              onClick={() => !token && navigate("/login")}
              className="hover:scale-110 transition-transform"
            >
              <img src={assets.profile_icon} alt="Profile" className="w-5" />
            </button>
            {token && (
              <div className="hidden group-hover:flex flex-col absolute right-0 top-8 bg-white rounded-md shadow-md py-2 w-40 text-sm font-medium text-gray-600">
                <button className="py-2 px-4 text-left hover:bg-gray-50 hover:text-gray-900">
                  My Profile
                </button>
                <button
                  onClick={() => navigate("/orders")}
                  className="py-2 px-4 text-left hover:bg-gray-50 hover:text-gray-900"
                >
                  Orders
                </button>
                <button
                  onClick={logout}
                  className="py-2 px-4 text-left hover:bg-gray-50 hover:text-gray-900"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <Link
            to="/cart"
            className="relative hover:scale-110 transition-transform"
          >
            <img src={assets.cart_icon} className="w-5" alt="Cart" />
            <span className="absolute -right-2 -bottom-2 bg-indigo-600 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden hover:scale-110 transition-transform"
          >
            <img src={assets.menu_icon} alt="Menu" className="w-5" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          {["/", "/collection", "/about", "/contact"].map((path, i) => {
            const titles = ["Home", "Collection", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 border-b text-gray-700 hover:bg-gray-50"
              >
                {titles[i]}
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
