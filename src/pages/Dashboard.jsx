import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import WhatWeSell from "../components/WhatWeSell";

const Dashboard = () => {
  const dispatch = useDispatch();

  // Access product data, loading, and error states from Redux store
  const { items, loading, error } = useSelector((state) => state.products);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    // Main dashboard layout with gradient background
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
      {/* Top navigation/header */}
      <Header />
      {/* Promotional banner section */}
      <Banner />

      <main className="flex-grow">
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              All Products
            </h1>

            {/* Conditional rendering for loading and error states */}
            {loading && <p className="text-center text-gray-600">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* Grid of product cards */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {items?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional information or category highlights */}
        <div className="mt-16">
          <WhatWeSell />
        </div>
      </main>
      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Dashboard;
