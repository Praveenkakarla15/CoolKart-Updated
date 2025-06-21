import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/banner.png";
import logo from "../assets/logo.png";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-4 md:px-16 rounded-lg shadow-lg my-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <div className="mb-4">
            <img src={logo} alt="CoolKart Logo" className="h-50 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Discover the Latest Trends at CoolKart
          </h2>
          <p className="text-lg mb-6">
            Shop your favorite fashion, gadgets, and more at unbeatable prices.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Start Shopping
          </button>
        </div>

        <div className="md:w-1/2">
          <img
            src={bannerImage}
            alt="CoolKart Banner"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
