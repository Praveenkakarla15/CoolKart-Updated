import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartslice";
import { addToWishlist } from "../features/Wishlist/WishlistSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [query, setQuery] = useState("");

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

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!product)
    return (
      <div className="p-6 text-center text-red-500">Product not found</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-4 py-4 bg-white/90 text-gray-800 shadow-md rounded-b-lg gap-4">
        
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          CoolKart
        </h1>

        <div className="flex items-center border rounded px-2 bg-white w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="outline-none px-2 py-1 w-full sm:w-40"
          />
          <FaSearch
            className="cursor-pointer text-gray-600"
            onClick={handleSearch}
          />
        </div>

        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FaHeart
            className="cursor-pointer"
            onClick={() => navigate("/wishlist")}
          />
          <FaShoppingCart
            className="cursor-pointer"
            onClick={() => navigate("/cart")}
          />
          <FaUser
            className="cursor-pointer"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <button
          className="mb-4 text-blue-600 underline"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white bg-opacity-70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-md">
          
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-48 sm:w-64 md:w-full h-64 sm:h-80 object-contain rounded"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-2 capitalize">{product.category}</p>

            <div className="flex items-center text-yellow-500 text-sm mb-3">
              {[...Array(Math.round(product.rating?.rate || 4))].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-gray-600">
                ({product.rating?.count} reviews)
              </span>
            </div>

            <p className="text-xl font-semibold text-green-600 mb-2">
              ${product.price}
            </p>
            <p className="mb-4 text-gray-700">{product.description}</p>

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

              {/* Wishlist Button */}
              <button
                onClick={() => {
                  dispatch(addToWishlist(product));
                  setWishlistAdded(true);
                  setTimeout(() => setWishlistAdded(false), 2000);
                }}
                disabled={wishlistAdded}
                className={`${
                  wishlistAdded ? "bg-green-600" : "bg-pink-500 hover:bg-pink-600"
                } text-white px-4 py-2 rounded flex items-center justify-center gap-2 transition-all duration-500 w-full sm:w-auto`}
              >
                {wishlistAdded ? "✔ Added" : (
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
