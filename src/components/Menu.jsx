import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Menu() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategory(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-24 px-6 md:px-20 min-h-screen bg-[#fff8f7]">
      <h1 className="text-center text-4xl md:text-5xl font-heading font-bold text-[#b23a48] tracking-wide mb-4">
        Our Hot Dishes
      </h1>
      <hr className="w-24 md:w-32 h-1 mx-auto mb-12 bg-[#f7d4b9] border-none rounded-full" />

      <div className="flex flex-wrap justify-center gap-10 pb-4">
        {category.map((cat) => (
          <div
            key={cat.idCategory}
            className="w-72 bg-white shadow-md rounded-2xl p-5 cursor-pointer hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out"
          >
            <Link to={`/Category/${cat.strCategory}`}>
              <img
                src={cat.strCategoryThumb}
                alt={cat.strCategory}
                className="w-full h-48 object-cover rounded-xl mb-5"
              />
            </Link>
            <div className="text-center">
              <Link
                to={`/Category/${cat.strCategory}`}
                className="text-2xl font-accent text-[#b23a48] hover:text-[#e07a5f] transition-colors duration-300"
              >
                {cat.strCategory}
              </Link>
              <p className="mt-2 text-sm md:text-base text-gray-600 font-body">
                {cat.strCategoryDescription?.slice(0, 90)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
