import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router";
import axios from "axios";
import '../styles/areas.css'

function Areas() {
  const [areas, setAreas] = useState([]);
  const{id} = useParams()

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`);
      console.log(response.data.meals);
      setAreas(response.data.meals);
    };
    fetchData();
  }, []);

  return (
    <div className="areas">
      {areas.map((i) => (
        <div  key={i.idMeal}>
<Card className="areas_data" >
      <Card.Img variant="top" src={i.strMealThumb}  style={{width: '300px',height: '300px'}}/>
      <Card.Body>
        <Card.Title>{i.strMeal}</Card.Title>
      </Card.Body>
    </Card>

        </div>
      ))}
    </div>
  );
}

export default Areas;
