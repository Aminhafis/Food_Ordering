import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/areas.css'
import { Link } from "react-router-dom";
import '../styles/area.css'

function Area() {

    const [area , setArea] = useState ([])

    useEffect(()=> {
        let fetchData = async() => {
        let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        console.log(response.data.meals)
        setArea(response.data.meals)
        }
        fetchData()
    }, [])

  return (
    <div className='area'>

        {area?.map((e) => (
            <div className="area_data" key={e.strArea}>
              <ul>
              <li> <Link to={`/Areas/${e.strArea}`}><h1>{e.strArea}</h1></Link></li>
               </ul>
            </div>
        )) }

    </div>
  )
}

export default Area