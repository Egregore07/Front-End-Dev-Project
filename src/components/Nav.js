
import React, { useState } from "react";
import logo from "../images/logo.jpg"

const Nav = () => {
  const [menuOpen,setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <nav className={'navbar'}>
     <a href="/" className='logo'>
      <img src={logo} alt="logo"/>
     </a>

     <div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
     </div>

     <ul classname={'nav-links'}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Services</a>
      </li>
      <li>
        <a href="/">Menu</a>
      </li>
      <li>
        <a href="/">Bookings</a>
      </li>
      <li>
        <a href="/">Order Online</a>
      </li>
      <li>
        <a href="/">Login</a>
      </li>
     </ul>
    </nav>
  );
}

export default Nav;