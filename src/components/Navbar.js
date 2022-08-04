import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect, useCallback } from 'react';
import "../style/nav.scss";
import MobileBar from './MobileBar';

const Navbar= () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window != 'undefined' && window.document && mobileNavActive) {
      document.body.style.overflow = 'hidden';
    } else if (typeof window != 'undefined' && mobileNavActive === false) {
      document.body.style.overflow = 'unset';
    }
  }, [mobileNavActive]);

  useEffect(()=> {
    const handleScroll = ()=> {
      if(window.scrollY >0){
        setIsScrolled(true)
      }else {
        setIsScrolled(false)
      };
    }
    window.addEventListener('scroll', handleScroll);

    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggle = ()=> setMobileNavActive((prev) => !prev)

  const clickMobileMenuLink = useCallback(() => {
    setMobileNavActive(false);
    document.body.style.overflow = 'unset';
  });


  return (
    <nav className={`nav ${isScrolled ? 'isScrolled' : ""}`} >
      <StaticImage className="logo" src="../images/nav/logo.png" alt="logo" />
      <ul className={`links ${mobileNavActive ? "showNav" : ""}`}>
        <li className='link' onClick = {clickMobileMenuLink}><Link to="/">Home</Link></li>
        <li className='link' onClick = {clickMobileMenuLink}><Link to="/about">About</Link></li>
        <li className='link' onClick = {clickMobileMenuLink}><Link to="/service">Service</Link></li>
        <li className='link' onClick = {clickMobileMenuLink}><Link to="/contact">Contact</Link></li>
      </ul>
      <MobileBar toggle={toggle} mobileNavActive={mobileNavActive} />
    </nav>
  )
}

export default Navbar