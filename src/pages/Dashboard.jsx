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
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
      <Header />
      <Banner />

      <main className="flex-grow">
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              All Products
            </h1>

            {loading && <p className="text-center text-gray-600">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {items?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <div className="mt-16">
          <WhatWeSell />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
