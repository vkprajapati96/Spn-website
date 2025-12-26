import React from "react";

import logo2 from "../../images/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between gap-8 mb-8">
        {/* Logo and Description Section */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
  
  <Link to="/">
    <img
      src={logo2}
      className="w-40 mb-2"
      alt="logo"
    />
  </Link>

  <p className="max-w-full md:max-w-sm text-sm leading-relaxed">
    ecomerceservies4u helps businesses grow online with complete
    eCommerce solutions from store setup and product listing to
    marketing, optimization, and sales growth across leading
    marketplaces and websites.
  </p>

</div>

        {/* Company Links Section */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-white">
                Service
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
                        <li>
              <Link to="/privacy-policy" className="text-white hover:underline hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>

          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold mb-4">Contact Us</h4>

          <p className="text-sm text-gray-300 mb-2">
            Phone:
            <a
              href="tel:+918860567964"
              className="ml-1 hover:text-white transition"
            >
              +91 8860567964
            </a>
          </p>

          <p className="text-sm text-gray-300">
            Email:
            <a
              href="mailto:support@ecommerceservices4u.com"
              className="ml-1 hover:text-white transition"
            >
              gagandigitalmarketing@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; 2025 ECommerceServices4u. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
