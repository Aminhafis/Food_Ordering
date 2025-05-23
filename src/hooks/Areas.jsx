import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 6;

function Areas() {
  const [areas, setAreas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`
        );
        setAreas(response.data.meals);
        setCurrentPage(1); // reset to first page when id changes
      } catch (error) {
        console.error("Error fetching meals by area:", error);
      }
    };
    fetchData();
  }, [id]);

  // Pagination logic
  const totalPages = Math.ceil(areas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = areas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="pt-28 pb-10 px-4 min-h-screen bg-gradient-to-br from-[#fff0eb] via-[#ffe8e4] to-[#fff4ef]">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
      >
        &larr; Back to Areas
      </button>

      <h1 className="text-center text-3xl md:text-4xl font-bold text-red-600 mb-8">
        Meals from {id}
      </h1>
      <hr className="w-72 h-1 mx-auto mb-10 bg-red-300 border-none rounded" />

      <div className="flex flex-wrap justify-center gap-8">
        {currentItems.map((meal) => (
          <motion.div
            key={meal.idMeal}
            className="max-w-xs bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={`/SearchById/${meal.idMeal}`}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-72 object-cover rounded-t-2xl"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-center text-red-700">
                  {meal.strMeal}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700 text-white"
          } transition`}
        >
          Prev
        </button>
        <span className="font-semibold text-red-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700 text-white"
          } transition`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Areas;
