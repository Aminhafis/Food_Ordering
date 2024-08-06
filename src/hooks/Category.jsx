import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/categories.css";
import { FaCartPlus } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Category() {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
      );
      console.log(response.data.meals);
      setCategories(response.data.meals);
    };
    fetchdata();
  }, []);

  return (
    <div className="categories">
      {categories.map((e) => (
        <div key={e.idMeal} className="categories_figures">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              width={180}
              height={180}
              alt="171x180"
              src={e.strMealThumb}
            />
            <Card.Body >
              <Card.Title >
                <h3 style={{color:'yellowgreen',textAlign:'left'}}>{e.strMeal}</h3>
              </Card.Title>
              <Card.Text className="category_button" style={{columnGapGap:'100px'}}>
                <Button id="category_btn" style={{backgroundColor:'transparent',border:'none',textDecoration:'none',fontSize:'20px'}}>
                  {" "}
                  <Link to={`/SearchById/${e.idMeal}`}>Details</Link>
                </Button>
                
                <Button id="category_btn" style={{backgroundColor:'transparent',border:'none',textDecoration:'none',fontSize:'20px'}}>
                  <Link>
                    <FaCartPlus />
                  </Link>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Category;
