import React, { useState } from 'react';
import "./header.css";
import { logo, bars } from "../../assets";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menu, setMenu] = useState(false);
  return (
    <div className="header">
        <img src={logo} alt="logo" className="logo"/>

        {
            (menu===false && mobile===true) ? (
                <div
                className='bars-container'
                onClick={()=>setMenu(true)}
                >
                    <img src={bars} alt="bars" className='bars'/>
                </div>
            ) : 
            <ul className="header-menu">
                <li onClick={()=>setMenu(false)}>
                    <a href="#home">Home</a>
                </li>
                <li onClick={()=>setMenu(false)}>
                    <a href="#programs">Programs</a>
                </li>
                <li onClick={()=>setMenu(false)}>
                    <a href="#reasons">Why choose us</a>
                </li>
                <li onClick={()=>setMenu(false)}>
                    <a href="#plans">Plans</a>
                </li>
                <li onClick={()=>setMenu(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
            </ul>
        }
        
    </div>
  )
}

export default Header