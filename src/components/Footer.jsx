import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline">Cart</Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:underline">Wishlist</Link>
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
