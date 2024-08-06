import React from 'react'
import footer from '../styles/Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function Footer() {
  return (<div className="foot">
<hr  />
    <div className='footer'>
      

      <div className="footer_prompt">
      <p> All Rights Reserved. @2024 ;</p>
      </div>

      <div className="footer_icons">
        <FaGithub/>
        <FaLinkedin/>
      </div>
      
    </div>
    </div>
  )
}

export default Footer