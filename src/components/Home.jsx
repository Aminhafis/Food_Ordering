import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState();

  let handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <div className="home">
      <div className="home_prompt">
        <h1>Start your day</h1>
        <h1>the Quretto way</h1>
        <p id="home_p">
          " We serve fresh. " <br />
          <button id="home_btn">
            <Link to={`/Menu/`}> Menu</Link>
          </button>
          <button id="home_btn" style={{ paddingBottom: "100px" }}>
            <Link to={`/Area/`}> Multi Cuisine</Link>
          </button> <br />
          <button id="home_search_btn">
            <Link to={`/search/${data}`}>search</Link>
          </button>
          <input onChange={handleChange} type="text" className="home_input" />

        </p>
      </div>
    </div>
  );
}

export default Home;
