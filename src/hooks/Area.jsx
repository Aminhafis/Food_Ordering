import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaCheckCircle } from 'react-icons/fa';

function Area() {
  const [area, setArea] = useState([]);
  const [savedAreas, setSavedAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        setArea(response.data.meals);
      } catch (error) {
        console.error("Error fetching area list:", error);
      }
    };
    fetchData();
  }, []);

  const handleSaveArea = (areaName) => {
    if (!savedAreas.includes(areaName)) {
      setSavedAreas([...savedAreas, areaName]);
    }
  };

  return (
    <div className="pt-28 pb-16 px-6 min-h-screen bg-gradient-to-br from-[#fff0eb] via-[#ffe8e4] to-[#fff4ef]">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-red-600 mb-4">
        ❍ Explore by Region
      </h1>
      <p className="text-center text-gray-600 mb-10 text-sm md:text-base">
        Click a region to discover delicious meals from that part of the world.
      </p>
      <hr className="w-72 h-1 mx-auto mb-12 bg-red-300 border-none rounded" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {area.map((e) => (
          <div
            key={e.strArea}
            className="relative w-40 h-40 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <Link
              to={`/Areas/${e.strArea}`}
              className="w-full h-full flex items-center justify-center text-xl font-semibold text-red-600 group-hover:scale-105 transition-transform duration-200"
            >
              {e.strArea}
            </Link>

            <button
              onClick={() => handleSaveArea(e.strArea)}
              className="absolute top-2 right-2 bg-red-100 text-red-500 p-2 rounded-full hover:bg-red-200 transition"
              title="Save area"
            >
              {savedAreas.includes(e.strArea) ? <FaCheckCircle /> : <FaHeart />}
            </button>
          </div>
        ))}
      </div>

      {savedAreas.length > 0 && (
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-red-500 mb-3">⭐ Saved Regions</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {savedAreas.map((area) => (
              <span key={area} className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Area;
