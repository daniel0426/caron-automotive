import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import "../style/nav.scss";

const Navbar= () => {
  return (
    <nav className='nav'>
      <StaticImage className="logo" src="../images/nav/logo.png" alt="logo" />
      <ul className="links">
        <li className='link'><Link to="/">Home</Link></li>
        <li className='link'><Link to="/about">About</Link></li>
        <li className='link'><Link to="/service">Service</Link></li>
        <li className='link'><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar