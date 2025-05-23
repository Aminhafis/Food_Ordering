import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchById() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (response.data.meals && response.data.meals.length > 0) {
          setMeal(response.data.meals[0]);
        } else {
          setMeal(null);
          setError("Meal not found.");
        }
      } catch (err) {
        setError("Failed to fetch meal details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <main
        className="pt-28 px-4 pb-10 min-h-screen flex justify-center items-center bg-gradient-to-br from-[#fff0eb] via-[#ffe8e4] to-[#fff4ef]"
        aria-busy="true"
      >
        <p className="text-red-600 text-xl font-semibold">Loading...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main
        className="pt-28 px-4 pb-10 min-h-screen flex justify-center items-center bg-gradient-to-br from-[#fff0eb] via-[#ffe8e4] to-[#fff4ef]"
        role="alert"
      >
        <p className="text-red-600 text-xl font-semibold">{error}</p>
      </main>
    );
  }

  if (!meal) {
    return null; // or a fallback UI
  }

  return (
    <main
      className="pt-28 px-4 pb-10 min-h-screen bg-gradient-to-br from-[#fff0eb] via-[#ffe8e4] to-[#fff4ef]"
      aria-label={`Details for ${meal.strMeal}`}
    >
      <article
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-6 md:p-10 mb-10 flex flex-col md:flex-row gap-8 animate-fadeIn"
      >
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full md:w-80 h-60 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
          loading="lazy"
        />

        <section className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold text-red-600">{meal.strMeal}</h1>

          <p className="text-gray-600 text-sm">
            Category: <span className="font-semibold">{meal.strCategory}</span>
          </p>
          <p className="text-gray-600 text-sm">
            Area: <span className="font-semibold">{meal.strArea}</span>
          </p>

          <section
            className="text-gray-700 mt-4 text-justify text-base leading-relaxed"
            aria-label="Instructions"
          >
            {meal.strInstructions}
          </section>

          {meal.strTags && (
            <p className="mt-3 text-sm text-red-500 font-medium" aria-label="Tags">
              Tags: {meal.strTags}
            </p>
          )}
        </section>
      </article>
    </main>
  );
}

export default SearchById;
