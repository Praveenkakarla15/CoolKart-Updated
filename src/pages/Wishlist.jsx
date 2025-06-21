import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // ✅ this must include both
import { removeFromWishlist } from "../features/Wishlist/WishlistSlice";
import { addToCart } from "../features/cart/cartslice";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  // Access wishlist and cart items from Redux store
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Track which items have been added to cart (based on cart content)
  const isItemInCart = (id) => cartItems.some((item) => item.id === id);

  // Handle search input navigation
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-12 bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 text-white overflow-hidden">
      {/* Wishlist Content */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/90 text-gray-800 rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Your Wishlist
        </h1>

        {/* Show empty state or product grid */}
        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border rounded-lg p-4 shadow bg-white"
              >
                {/* Product image and details */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>

                  {/* Action buttons: Add to Cart / Go to Cart & Remove */}
                  <div className="mt-2 flex gap-2">
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
