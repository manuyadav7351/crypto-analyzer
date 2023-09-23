import React, { useEffect, useState } from 'react'
import "./navbar.css"
import {FaBars} from "react-icons/fa"

const Navbar = () => {

  const [clicked , setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const handleNavigationClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior : 'smooth'})
    }
    setClicked(!clicked);
  }

  useEffect(()=>{
    
  }, [setClicked]);

  return (
    <div className='nav-container'>
      <div className='nav-element'>
        <div className='nav-logo'>logo</div>
        <ul className={`${clicked ? 'clicked' : "nav-ul"}`}>
          <li onClick={()=> handleNavigationClick('Home')}>Home</li>
          <li onClick={()=> handleNavigationClick('Cryptos')}>Cryptos</li>
          <li onClick={()=> handleNavigationClick('About')}>About</li>
          <li onClick={()=> handleNavigationClick('Contact')}>Contact</li>
        </ul>
        <div className='nav-hamburger'>
          <FaBars onClick={handleClick}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar