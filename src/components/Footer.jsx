import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Brand Info */}
        <div>
          <h4 className="font-bold">CoolKart</h4>
          <p>Your one-stop online shopping solution.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <ul className="space-y-1">
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
          <h4 className="font-bold">Contact</h4>
          <p>Email: support@coolkart.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
