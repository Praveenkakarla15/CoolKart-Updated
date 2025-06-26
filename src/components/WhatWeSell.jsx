import React from "react";

const WhatWeSell = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 text-center px-4">
        {/* Feature Block */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">🚚 Free Shipping</h3>
          <p className="text-gray-600">On all orders over $50</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">🔁 Free Returns</h3>
          <p className="text-gray-600">30-day money-back guarantee</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">📞 24/7 Support</h3>
          <p className="text-gray-600">We’re always here to help</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeSell;
