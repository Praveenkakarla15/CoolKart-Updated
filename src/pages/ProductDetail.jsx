import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartslice";
import { addToWishlist } from "../features/Wishlist/WishlistSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const navigate = useNavigate(); // Hook to navigate programmatically
  const dispatch = useDispatch(); // Redux dispatch to trigger actions

  const [product, setProduct] = useState(null); // State to hold product details
  const [loading, setLoading] = useState(true); // Loading state for API call
  const [isAdded, setIsAdded] = useState(false); // State to track if product is added to cart
  const [wishlistAdded, setWishlistAdded] = useState(false); // State to track if product is added to wishlist

  // Fetch product details from API based on ID
  const fetchProductDetail = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Failed to fetch product:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch product details on component mount or when ID changes
  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  // Show loading state while fetching product
  if (loading) return <div className="p-6 text-center">Loading...</div>;

  // Show error if product is not found
  if (!product)
    return (
      <div className="p-6 text-center text-red-500">Product not found</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        
        {/* Back Button */}
        <button
          className="mb-4 text-blue-600 underline"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white bg-opacity-70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-md">
          
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-48 sm:w-64 md:w-full h-64 sm:h-80 object-contain rounded"
            />
          </div>

          {/* Product Information */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-2 capitalize">{product.category}</p>

            {/* Product Rating */}
            <div className="flex items-center text-yellow-500 text-sm mb-3">
              {[...Array(Math.round(product.rating?.rate || 4))].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-gray-600">
                ({product.rating?.count} reviews)
              </span>
            </div>

            {/* Price & Description */}
            <p className="text-xl font-semibold text-green-600 mb-2">
              ${product.price}
            </p>
            <p className="mb-4 text-gray-700">{product.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              
              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                  setIsAdded(true);
                  setTimeout(() => setIsAdded(false), 2000);
                }}
                disabled={isAdded}
                className={`${
                  isAdded ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
                } text-white px-4 py-2 rounded flex items-center justify-center gap-2 transition-all duration-500 w-full sm:w-auto`}
              >
                {isAdded ? "✔ Added" : "Add to Cart"}
              </button>

              {/* Add to Wishlist Button */}
              <button
                onClick={() => {
                  dispatch(addToWishlist(product));
                  setWishlistAdded(true);
                  setTimeout(() => setWishlistAdded(false), 2000);
                }}
                disabled={wishlistAdded}
                className={`${
                  wishlistAdded
                    ? "bg-green-600"
                    : "bg-pink-500 hover:bg-pink-600"
                } text-white px-4 py-2 rounded flex items-center justify-center gap-2 transition-all duration-500 w-full sm:w-auto`}
              >
                {wishlistAdded ? (
                  "✔ Added"
                ) : (
                  <>
                    <AiOutlineHeart size={18} />
                    Wishlist
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
