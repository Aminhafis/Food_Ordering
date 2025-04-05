import React from 'react'
import footer from '../styles/Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (<div className="foot">
<hr  />
    <div className='footer'>
      

      <div className="footer_prompt">
      <p> All Rights Reserved. @2024 ;</p>
      </div>

      <div className="footer_icons" >
        <FaGithub style={{padding:'25px',fontSize:'30px'}}/>

        <FaLinkedin style={{padding:'25px',fontSize:'30px'}}/>
      </div>
      
    </div>
    </div>
  )
}

export default Footer