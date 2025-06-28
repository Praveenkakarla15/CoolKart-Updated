import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/banner.png";
import logo from "../assets/logo.png";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8 px-4 sm:px-8 md:px-16 rounded-lg shadow-lg my-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="mb-4 flex justify-center md:justify-start">
            <img
              src={logo}
              alt="CoolKart Logo"
              className="h-16 sm:h-20 rounded-full"
            />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Discover the Latest Trends at CoolKart
          </h2>

          <p className="text-base sm:text-lg mb-6">
            Shop your favorite fashion, gadgets, and more at unbeatable prices.
          </p>

          <button
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
            className="bg-white text-blue-600 font-semibold px-6 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition"
          >
            Start Shopping
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <img
            src={bannerImage}
            alt="CoolKart Banner"
            className="rounded-lg shadow-lg w-full object-cover max-h-80 sm:max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
