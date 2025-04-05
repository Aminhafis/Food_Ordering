import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import axios from "axios";
import "../styles/Menu.css"; // Corrected import path for CSS
import Category from "../hooks/Category"; // Ensure Category hook/component is correctly defined
import Card from "react-bootstrap/Card";


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
      <h1
        style={{
          textAlign: "center",
          margin: "0px",
          paddingTop: "50px",
          color: "red",
        }}
      >
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

            <Card style={{width:'300px',height:'300px'}}>
              <Link to={`/Category/${cat.strCategory}`}>
                <Card.Img
                  variant="top"
                  alt={cat.strCategory}
                  src={cat.strCategoryThumb}
                  style={{ width: "150", height: "190" }}
                />{" "}
              </Link>

              <Card.Body>
                <Link to={`/Category/${cat.strCategory}`}>
                  <Card.Title>
                    {" "}
                    <h2 style={{ textAlign: "center" }}>{cat.strCategory}</h2>
                  </Card.Title>{" "}
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
