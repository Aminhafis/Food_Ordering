import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/categories.css";
import { FaCartPlus } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Category() {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
      );
      console.log(response.data.meals);
      setCategories(response.data.meals);
    };
    fetchData();
  }, [id]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToCart = (meal) => {
    toast(`${meal.strMeal} added to cart!`);
  };

  return (
    <div className="categories">
      <ToastContainer />
      {categories.map((meal) => (
        <div key={meal.idMeal} className="categories_figures">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              width={180}
              height={180}
              alt="171x180"
              src={meal.strMealThumb}
            />
            <Card.Body>
              <Card.Title>
                <h3 style={{color:'yellowgreen', textAlign:'left'}}>{meal.strMeal}</h3>
              </Card.Title>
              <Card.Text className="category_button" style={{columnGap:'100px'}}>
                <Button id="category_btn" style={{backgroundColor:'transparent', border:'none', textDecoration:'none', fontSize:'20px'}}>
                  <Link to={`/SearchById/${meal.idMeal}`}>Details</Link>
                </Button>
                <Button
                  id="category_btn"
                  style={{backgroundColor:'transparent', border:'none', textDecoration:'none', fontSize:'20px'}}
                  onClick={() => handleAddToCart(meal)}
                >
                  <FaCartPlus />
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}

      {/* Offcanvas Component */}
      <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvasCart">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasCartLabel">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Your cart is empty.</p>
          {/* Add your cart items here */}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Category;
