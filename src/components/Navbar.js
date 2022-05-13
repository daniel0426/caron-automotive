import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import "../style/nav.scss";
import MobileBar from './MobileBar';

const Navbar= () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const toggle = ()=> setMobileNavActive(!mobileNavActive)

  return (
    <nav className='nav'>
      <StaticImage className="logo" src="../images/nav/logo.png" alt="logo" />
      <ul className={`links ${mobileNavActive ? "showNav" : ""}`}>
        <li className='link'><Link to="/">Home</Link></li>
        <li className='link'><Link to="/about">About</Link></li>
        <li className='link'><Link to="/service">Service</Link></li>
        <li className='link'><Link to="/contact">Contact</Link></li>
      </ul>
      <MobileBar toggle={toggle} mobileNavActive={mobileNavActive} />
    </nav>
  )
}

export default Navbar