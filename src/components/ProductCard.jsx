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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access cart and wishlist state from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  // Check if current product is already in cart or wishlist
  const isInCart = cartItems.some((item) => item.id === product.id);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  // Handle add to cart or navigate to cart if already present
  const handleCartClick = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
    }
  };

  // Toggle wishlist state (add/remove)
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Product image and basic info linking to detail page */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-4"
        />
        <h2 className="text-lg font-semibold truncate">{product.title}</h2>
        <p className="text-gray-500 text-sm capitalize">{product.category}</p>
      </Link>

      {/* Price and rating display */}
      <div className="flex items-center gap-2 my-2">
        <span className="text-green-600 font-bold">${product.price}</span>
        <span className="flex items-center text-yellow-500 text-sm">
          <FaStar className="mr-1" /> {product.rating?.rate ?? 4.2}
        </span>
      </div>

      {/* Add to cart and wishlist buttons */}
      <div className="flex justify-between mt-3 items-center">
        <button
          onClick={handleCartClick}
          className={`${
            isInCart
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white px-3 py-1 rounded text-sm`}
        >
          {isInCart ? "Go to Cart" : "Add to Cart"}
        </button>

        <button onClick={handleWishlistToggle} className="text-xl">
          {isInWishlist ? (
            <AiFillHeart className="text-red-500 hover:scale-110 transition-transform" />
          ) : (
            <AiOutlineHeart className="text-gray-500 hover:text-pink-500 hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
