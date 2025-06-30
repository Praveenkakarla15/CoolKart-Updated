import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

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

        {/* Search Bar */}
        <div className="flex items-center border rounded px-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search for clothes, products and more..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="outline-none px-2 py-1 w-full sm:w-80"
          />
          <FaSearch
            className="cursor-pointer text-gray-600"
            onClick={handleSearch}
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/wishlist")}
          >
            <FaHeart />
            <span className="text-sm hidden md:inline">Wishlist</span>
          </div>

          <div
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart />
            <span className="text-sm hidden md:inline">Cart</span>
          </div>

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
