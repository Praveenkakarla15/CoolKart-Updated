import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartslice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/Wishlist/WishlistSlice";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch(); // Redux dispatch to trigger actions
  const navigate = useNavigate(); // React Router hook to programmatically navigate

  // Access cart and wishlist items from the Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  // Check if the product is already in the cart or wishlist
  const isInCart = cartItems.some((item) => item.id === product.id);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);
  
  // Handlers for cart and wishlist actions
  const handleCartClick = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
    }
  };

  // Toggle wishlist item  (Add/Remove)
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id)); // Remove if already in wishlist
    } else {
      dispatch(addToWishlist(product)); // Add to wishlist
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Product Image & Info */}
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center text-center mb-4"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-3"
        />
        <h2 className="text-base sm:text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>
        <p className="text-gray-500 text-sm capitalize">{product.category}</p>
      </Link>

      {/* Price & Rating */}
      <div className="flex items-center justify-between my-2">
        <span className="text-green-600 font-bold text-base sm:text-lg">
          ${product.price}
        </span>
        <span className="flex items-center text-yellow-500 text-sm">
          <FaStar className="mr-1" />
          {product.rating?.rate ?? 4.2}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-3">
        <button
          onClick={handleCartClick}
          className={`${
            isInCart
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white px-3 py-1 rounded text-xs sm:text-sm transition`}
        >
          {isInCart ? "Go to Cart" : "Add to Cart"}
        </button>

        <button
          onClick={handleWishlistToggle}
          className="text-xl hover:scale-110 transition-transform"
        >
          {isInWishlist ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart className="text-gray-500 hover:text-pink-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
