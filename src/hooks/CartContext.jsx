import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItems] = useState([
    { idMeal: '1', strMeal: 'Pizza' },
    { idMeal: '2', strMeal: 'Pasta' },
  ]);

  const toggleCart = () => setShowCart((prev) => !prev);
  const toggleLogin = () => setShowLogin((prev) => !prev);

  const handleRemoveItem = (idMeal) => {
    setCartItems((prev) => prev.filter((item) => item.idMeal !== idMeal));
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        toggleCart,
        cartItems,
        handleRemoveItem,
        showLogin,
        toggleLogin,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
