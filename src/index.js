import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-toastify/dist/ReactToastify.css";

import { CartProvider } from './hooks/CartContext'; // ✅ Import context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* ✅ Wrap App in CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
