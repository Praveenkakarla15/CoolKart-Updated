import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import WhatWeSell from "../components/WhatWeSell";

// Dashboard component to display all products
const Dashboard = () => {
  const dispatch = useDispatch(); // Redux dispatch to trigger actions
  const { items, loading, error } = useSelector((state) => state.products); // Access products state from Redux store
  
  // Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
      <Banner />

      <main className="flex-grow">
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
              All Products
            </h1>

            {loading && <p className="text-center text-gray-600">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {items?.map((product) => (
                <ProductCard key={product.id} product={product} />  
              ))}
            </div>
          </div>
        </section>

        <div className="mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <WhatWeSell />
          </div>
        </div>
      </main>
    </div>
  );
};


export default Dashboard;
