import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/Wishlist/WishlistSlice";
import { addToCart } from "../features/cart/cartslice";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems); // Access wishlist items from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems); // Access cart items from Redux store
  const dispatch = useDispatch();  // Redux dispatch to trigger actions
  const navigate = useNavigate();   // Hook to programmatically navigate
  const [query, setQuery] = useState("");  // State for search query

  // Check if an item is already in the cart
  const isItemInCart = (id) => cartItems.some((item) => item.id === id);
 
  // Handle search functionality
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`); // Navigate to search results with query as URL parameter
      setQuery(""); // Clear search input after search
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-12 bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 text-white overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto bg-white/90 text-gray-800 rounded-xl shadow-xl p-4 sm:p-6">
        
        <h1 className="text-xl sm:text-3xl font-bold mb-6 text-center text-blue-700">
          Your Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 items-center border rounded-lg p-4 shadow bg-white"
              >
                
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                
                <div className="flex flex-col flex-grow text-center sm:text-left">
                  <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                  <p className="text-gray-600 mb-2">${item.price}</p>

                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-2">
                    {isItemInCart(item.id) ? (
                      <button
                        onClick={() => navigate("/cart")}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                      >
                        Go to Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                      >
                        Add to Cart
                      </button>
                    )}
                    <button
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
