import React from "react";

const WhatWeSell = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-xl font-semibold">🚚 Free Shipping</h3>
          <p>On all orders over $50</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">🔁 Free Returns</h3>
          <p>30-day money-back guarantee</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">📞 24/7 Support</h3>
          <p>We’re always here to help</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeSell;
