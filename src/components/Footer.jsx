import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#ffe8e4] via-[#fff0ec] to-[#ffe8e4] text-gray-800 px-6 py-12 font-body border-t border-pink-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Navigation Links */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-lg font-semibold text-red-600">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link to="/menu" className="hover:text-red-500 transition">Menu</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Subscribe</h3>
          <p className="text-sm mb-4">Get updates & special offers</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-right space-y-3">
          <h3 className="text-lg font-semibold text-red-600">Contact</h3>
          <p className="text-sm">Email: info@qurettocafe.com</p>
          <div className="flex justify-center md:justify-end space-x-4 text-2xl mt-2">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-pink-300" />

      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Quretto Cafe. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
