import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router'

function SearchItem() {

    const [search , updateSearch] = useState([])
    const {data} = useParams()

    useEffect(() => {

    let fetchData= async () =>{
        let response = await axios.post(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
        console.log(response.data.meals)
        updateSearch(response.data.meals)
    }; 
    fetchData()
}, []);

  return (
    <div className='searchItem'>
        <h2>No items found for the input</h2>
        {search?.map((a) =>(
           

                <div className="searchItem_data" key={a.idMeal}>
                <h2>{a.strMeal}</h2>
                <h3>{a.strCategory}</h3>
                <img src={a.strMealThumb} alt="" style={{width:'200px',height:'200px'}} />
                <h5>{a.strInstructions}</h5>
                <h5>{a.strTags}</h5>
            </div>
        
        ))}

    </div>
  )
}

export default SearchItem