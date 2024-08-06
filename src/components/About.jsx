import React from 'react'
import salad from '../image/salad.jpeg'
import '../styles/about.css'

function About() {
  return (
    <div className='about'>
      <div className="about_prompt">
        <h2>An Unforgettable foodie experience</h2>
        <p>At Quretto we are passionate about providing  <br />an unforgettable and unique  foodie experience. <br />
           As a charcuterie board artist, our</p>
           <button>ABOUT US</button>
      </div>
      <div className="about_img">
        <img src={salad} alt="aboutimg"  style={{width:'400px',height:'400px'}}/>
      </div>
    </div>
  )
}

export default About