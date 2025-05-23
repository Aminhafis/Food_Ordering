import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import OffcanvasCart from "./OffcanvasCart";

function Category() {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
        );
        setCategories(response.data.meals);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchData();
  }, [id]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToCart = (meal) => {
    if (!cartItems.find((item) => item.idMeal === meal.idMeal)) {
      setCartItems((prev) => [...prev, meal]);
      toast.success(`${meal.strMeal} added to cart!`);
      setShow(true);
    } else {
      toast.info(`${meal.strMeal} is already in the cart.`);
      setShow(true);
    }
  };

  const handleRemoveFromCart = (idMeal) => {
    setCartItems((prev) => prev.filter((item) => item.idMeal !== idMeal));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff4ef] to-[#ffe8e4] p-8 relative">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {/* Meals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 max-w-7xl mx-auto">
        {categories.map((meal) => (
          <div
            key={meal.idMeal}
            data-aos="fade-up"
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-red-700 font-semibold text-lg mb-3">
                {meal.strMeal}
              </h3>
              <div className="mt-auto flex justify-between items-center">
                <Link
                  to={`/SearchById/${meal.idMeal}`}
                  className="text-red-600 hover:underline text-base font-medium"
                >
                  Details
                </Link>
                <button
                  onClick={() => handleAddToCart(meal)}
                  className="text-red-600 hover:text-red-800 text-2xl transition"
                  aria-label={`Add ${meal.strMeal} to cart`}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Offcanvas Cart */}
      <OffcanvasCart
        show={show}
        onClose={handleClose}
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
      />

      {/* Optional: Cart toggle button (fixed) */}
      <button
        onClick={() => setShow(!show)}
        className="fixed top-5 right-5 bg-red-600 text-white rounded-full p-3 shadow-lg z-50"
        aria-label="Toggle Cart"
      >
        <FaCartPlus className="text-xl" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-900 rounded-full px-2 text-xs font-bold">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>
  );
}

export default Category;
