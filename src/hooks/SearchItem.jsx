import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function SearchItem() {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`
        );
        setSearch(response.data.meals || []);
      } catch (err) {
        setError("Failed to fetch search results.");
        setSearch([]);
      } finally {
        setLoading(false);
      }
    };

    if (data) {
      fetchData();
    } else {
      setSearch([]);
    }
  }, [data]);

  if (loading) {
    return (
      <main className="pt-24 min-h-screen flex justify-center items-center bg-gradient-to-br from-[#fff0eb] via-[#ffe8e4] to-[#fff4ef]">
        <p className="text-red-600 text-xl font-semibold animate-pulse">Loading...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main
        className="pt-24 min-h-screen flex justify-center items-center bg-gradient-to-br from-[#fff0eb] via-[#ffe8e4] to-[#fff4ef]"
        role="alert"
      >
        <p className="text-red-600 text-xl font-semibold">{error}</p>
      </main>
    );
  }

  if (!search || search.length === 0) {
    return (
      <main className="pt-24 min-h-screen flex justify-center items-center bg-gradient-to-br from-[#fff0eb] via-[#ffe8e4] to-[#fff4ef]">
        <h2 className="text-xl text-red-600 font-semibold">
          No items found for "{data}"
        </h2>
      </main>
    );
  }

  return (
    <main className="pt-24 px-4 pb-12 min-h-screen bg-gradient-to-br from-[#fff0eb] via-[#ffe8e4] to-[#fff4ef]">
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {search.map((meal) => (
          <article
            key={meal.idMeal}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl duration-300"
            aria-label={`Meal: ${meal.strMeal}`}
          >
            <img
              src={meal.strMealThumb}
              alt={`Image of ${meal.strMeal}`}
              loading="lazy"
              className="w-48 h-48 object-cover rounded-xl mb-4 shadow-md"
            />
            <h2 className="text-2xl font-bold text-red-700 mb-1">{meal.strMeal}</h2>
            <h3 className="text-gray-600 font-semibold mb-3">{meal.strCategory}</h3>
            <p className="text-gray-700 text-sm mb-4 line-clamp-4 whitespace-pre-line">
              {meal.strInstructions}
            </p>
            {meal.strTags && (
              <p className="text-indigo-600 font-medium text-sm mb-2">{meal.strTags}</p>
            )}
            {/* Placeholder for future action button */}
            {/* <button className="mt-auto bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2 transition">
              View Details
            </button> */}
          </article>
        ))}
      </section>
    </main>
  );
}

export default SearchItem;
