import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useCart } from "../hooks/CartContext";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCart, toggleLogin } = useCart();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 tracking-wide"
          onClick={() => setMobileMenuOpen(false)}
        >
          Quretto Cafe
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center font-body text-white">
          <Link to="/home" className="text-yellow-300 hover:text-yellow-500">Home</Link>
          <Link to="/menu" className="text-yellow-300 hover:text-yellow-500">Menu</Link>
          <Link to="/services" className="text-yellow-300 hover:text-yellow-500">Services</Link>
          <Link to="/about" className="text-yellow-300 hover:text-yellow-500">About Us</Link>
          <Link to="/contact" className="text-yellow-300 hover:text-yellow-500">Contact Us</Link>

          {/* Cart & Login */}
          <button onClick={toggleCart} className="text-yellow-300 hover:text-yellow-500 text-xl" aria-label="Cart">
            <BsFillBagFill />
          </button>
          <button
            onClick={toggleLogin}
            className="text-yellow-400 border border-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            Login / Sign-up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-yellow-400 text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm w-full absolute top-16 left-0 px-6 py-8 flex flex-col space-y-6 text-yellow-300 font-body text-lg">
          <Link to="/home" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-500">Home</Link>
          <Link to="/menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-500">Menu</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-500">Services</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-500">About Us</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-500">Contact Us</Link>

          <button
            onClick={() => {
              toggleCart();
              setMobileMenuOpen(false);
            }}
            className="flex items-center space-x-2 text-xl hover:text-yellow-500"
          >
            <BsFillBagFill />
            <span>Cart</span>
          </button>

          <button
            onClick={() => {
              toggleLogin();
              setMobileMenuOpen(false);
            }}
            className="text-yellow-400 border border-yellow-400 px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            Login / Sign-up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
