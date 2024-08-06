import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import '../styles/searchById.css'

function SearchById() {

    const [search, searchData] = useState([])
    const {id} = useParams()


    let fetchData= async () =>{
        let response= await axios.post(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log(response.data.meals)
        searchData(response.data.meals)
    }


    useEffect(() => {
      fetchData()
    }, [])

  return (
    <div className='searchById'>
        {search.map((e) => (
            <>
            <div  key={e.idMeal} className="search_data">
                <Figure key={e.idMeal}>
                <Figure.Image width={188} height={180} alt="171x180" src={e.strMealThumb}/>
                <Figure.Caption> <h2>{e.strCategory}</h2> </Figure.Caption>
                <Figure.Caption> <h3>{e.strArea}</h3> </Figure.Caption>
                <Figure.Caption> <h3>{e.strMeal}</h3> </Figure.Caption>
                <Figure.Caption> {e.strInstructions} </Figure.Caption>
                <Figure.Caption> <h3>{e.strTags}</h3> </Figure.Caption>
                </Figure>

            </div>
            </>
          
        )
)}
    </div>
  )
} 

export default SearchById