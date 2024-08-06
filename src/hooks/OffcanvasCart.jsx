import React from 'react';
import '../styles/OffcanvasCart.css'

const OffcanvasCart = () => {
  return (
    <div className="offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
      <div className="offcanvas-header">
        <h2 className="offcanvas-title" id="offcanvasCartLabel">Cart</h2>
      </div>
      <div className="offcanvas-body" style={{color:'black'}}>
        <p>Your cart is empty.</p>
        {/* Add your cart items here */}
      </div>
    </div>
  );
};

export default OffcanvasCart;
