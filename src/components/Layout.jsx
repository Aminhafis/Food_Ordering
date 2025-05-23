import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import OffcanvasCart from '../hooks/OffcanvasCart';
import Login from '../hooks/Login';
import { useCart } from '../hooks/CartContext';

function Layout() {
  const { showCart, toggleCart, cartItems, handleRemoveItem, showLogin, toggleLogin } = useCart();

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/image/Home_bg.jpg')" }}
    >
      <Navbar />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />

      {/* Offcanvas panels always mounted */}
      <OffcanvasCart
        show={showCart}
        onClose={toggleCart}
        cartItems={cartItems}
        onRemove={handleRemoveItem}
      />

      <Login
        show={showLogin}
        onClose={toggleLogin}
      />
    </div>
  );
}

export default Layout;
