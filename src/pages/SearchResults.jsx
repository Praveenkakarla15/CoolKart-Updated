import React from "react";
import { useLocation } from "react-router-dom"; // Hook to access URL parameters
import { useSelector } from "react-redux"; // Hook to access Redux store
import ProductCard from "../components/ProductCard";

const SearchResults = () => {
  // Extract search query from URL (e.g., ?q=shoes)
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  // Filter products by title based on search query
  const { items: products } = useSelector((state) => state.products);

  // Filter products by title based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 py-10">
      <div className="container mx-auto px-4">
        {/* Display the search term in the heading */}
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Search Results for: <span className="text-blue-600">"{query}"</span>
        </h1>

        {/* Show message if no products found, else display grid of ProductCards */}
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products match your search.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
