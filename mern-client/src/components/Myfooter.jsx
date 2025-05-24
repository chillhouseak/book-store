import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

const Myfooter = () => {
  return (
    <footer className="bg-blue-700 text-white py-10 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Brand/Logo */}
        <div className="space-y-4 md:w-1/3">
          <h2 className="text-2xl font-bold">📚 Epic-Book</h2>
          <p className="text-sm text-gray-200">
            Your one-stop destination for academic and creative reads.
            Discover, explore, and grow with us.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-gray-200">
          <h4 className="font-semibold text-lg">Contact</h4>
          <p>Email: support@bookstore.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Indore, Madhya Pradesh</p>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-sm text-gray-300 border-t border-blue-600 pt-4">
        &copy; {new Date().getFullYear()} Bookstore. All rights reserved.
      </div>
    </footer>
  );
};

export default Myfooter;
