import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/", { replace: true }); // Navigate to Home
    navigate(0); // Refresh page
  };

  const handleCartClick = () => {
    navigate("/cart");
    window.scrollTo(0, 0);
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-blue-950 text-white px-4 py-8 mt-12">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-center sm:text-left">
        
        {/* Brand Info */}
        <div>
          <h4 className="font-bold text-lg mb-2">CoolKart</h4>
          <p className="text-sm">Your one-stop online shopping solution.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <button onClick={handleHomeClick} className="hover:underline">Home</button>
            </li>
            <li>
              <button onClick={handleCartClick} className="hover:underline">Cart</button>
            </li>
            <li>
              <button onClick={handleWishlistClick} className="hover:underline">Wishlist</button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-2">Contact</h4>
          <p className="text-sm">Email: support@coolkart.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-white/20 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} CoolKart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
