import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [query, setQuery] = useState(""); // State for search input value
  const [username, setUsername] = useState(""); // State to store logged-in username

  // Access products from Redux store for live suggestions
  const { items: products } = useSelector((state) => state.products);

  // Fetch username from localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Handle search on Enter key or search icon click
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`); // Navigate to search page with query as URL param
      setQuery(""); // Clear search box after search
    }
  };

  // Filter products for live suggestions based on query matching title or category
  const filteredSuggestions = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
        
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          CoolKart
        </h1>

        {/* Search Bar with Suggestions */}
        <div className="relative w-full sm:w-auto">
          <div className="flex items-center border rounded px-2 w-full sm:w-80">
            <input
              type="text"
              placeholder="Search for clothes, products and more..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="outline-none px-2 py-1 w-full"
            />
            <FaSearch
              className="cursor-pointer text-gray-600"
              onClick={handleSearch}
            />
          </div>

          {/* Suggestions Dropdown */}
          {query.trim() && filteredSuggestions.length > 0 && (
            <div className="absolute bg-white border border-gray-300 mt-1 w-full max-h-60 overflow-y-auto z-50 shadow-lg">
              {filteredSuggestions.map((product) => (
                <div
                  key={product.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    navigate(`/search?q=${encodeURIComponent(product.title)}`); // Navigate to search page with clicked suggestion
                    setQuery(""); // Clear search input
                  }}
                >
                  {product.title}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Icons for Wishlist, Cart, and Login */}
        <div className="flex items-center gap-4 text-gray-700">
          
          {/* Wishlist Icon */}
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/wishlist")}
          >
            <FaHeart />
            <span className="text-sm hidden md:inline">Wishlist</span>
          </div>

          {/* Cart Icon */}
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart />
            <span className="text-sm hidden md:inline">Cart</span>
          </div>

          {/* User/Login Icon */}
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/login")}
          >
            <FaUser />
            <span className="text-sm hidden md:inline">
              {username ? username : "Login"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
