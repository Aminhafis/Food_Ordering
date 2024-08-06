import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import Figure from "react-bootstrap/Figure";
import axios from "axios";
import "../styles/Menu.css"; // Corrected import path for CSS
import Category from "../hooks/Category"; // Ensure Category hook/component is correctly defined

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
    <div className="Menus">
      <h1 style={{ textAlign: "center", margin: "0px", paddingTop: "50px", color:"red"}}>
        Our Hot Dishes
      </h1>
      <hr
        style={{
          width: "20rem",
          height: "3px",
          background: "black",
          border: "none",
        }}
      />
      <div className="menu">
        {category.map((cat) => (
          <div key={cat.idCategory} className="menu_cards">
            <Figure>
              {" "}
              <Link to={`/Category/${cat.strCategory}`}>
                <Figure.Image
                  width={180}
                  height={190}
                  alt={cat.strCategory}
                  src={cat.strCategoryThumb}
                />{" "}
              </Link>
              <Figure.Caption>
                <Link to={`/Category/${cat.strCategory}`}>
                  <h2 style={{textAlign:'center'}}>{cat.strCategory}</h2>
                </Link>
              </Figure.Caption>
            </Figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
