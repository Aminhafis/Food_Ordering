import React, { useState } from "react";
import { Link } from "react-router-dom";
import Homebg from '../image/Home_bg.jpg';

function Home() {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div
      className="flex items-center justify-center px-6 md:px-32 py-16 h-[700px] bg-cover bg-center relative font-body"
      style={{
        backgroundImage: `url(${Homebg})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative max-w-xl text-center text-white space-y-6">
        <h1 className="text-4xl md:text-5xl font-heading tracking-wide drop-shadow-lg hover:text-yellow-300 transition">
          Start your day
        </h1>
        <h2 className="text-3xl md:text-4xl font-accent font-light tracking-wide drop-shadow-lg hover:text-yellow-300 transition">
          the Quretto way
        </h2>

        <p className="text-lg md:text-xl font-mono text-yellow-300 drop-shadow-md">
          "We serve fresh."
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <Link to="/Menu">
            <button className="px-8 py-2 text-lg font-semibold rounded-md border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition">
              Menu
            </button>
          </Link>

          <Link to="/Area">
            <button className="px-8 py-2 text-lg font-semibold rounded-md border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition">
              Multi Cuisine
            </button>
          </Link>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <input
            onChange={handleChange}
            type="text"
            className="px-5 py-3 rounded-full border-2 border-yellow-300 bg-transparent text-white placeholder-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-64 md:w-80"
            placeholder="Search..."
          />
          <Link to={`/search/${data}`}>
            <button className="px-6 py-3 text-yellow-300 font-semibold rounded-full border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black transition">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
