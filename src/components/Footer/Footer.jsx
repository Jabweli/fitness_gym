import React from 'react'
import { logo, instagram, linkedin, github } from '../../assets';
import "./footer.css";

const Footer = () => {
  return (
    <footer>
        <div className='social-links'>
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
            <img src={github} alt="github" />
        </div>

        <img src={logo} alt="logo" className='logo-f'/>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </footer>
  )
}

export default Footer