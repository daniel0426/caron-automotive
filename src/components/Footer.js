import React from 'react'
import {MdOutlineAccessTime} from 'react-icons/md';
import {MdLocationPin} from 'react-icons/md';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {BiPhoneCall} from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';


import Map from './GoogleMap';
import "../style/footer.scss";



const Footer = () => {
  return (
    <footer>
        <div className="company_info">
            <div className='opening_hours'>
                <div className='opening_hours_title title'>
                    <MdOutlineAccessTime />
                    <h2>Opening Hours</h2>
                </div>
                <p>Mon - Fri : 8:30am - 5pm</p>
                <p>Closed Saturday & Sunday and Public holidays</p>
            </div>
            <div className='location'>
                <div className='location_title title'>
                    <MdLocationPin />
                    <h2>Location</h2>
                </div>
                <p> 7 Christopher Street, Tauranga (behind Korean mart)</p>
            </div>
            <div className='contact'>
                 <div>
                    <div className='location_title title'>
                        <BiPhoneCall />
                        <h2>Phone</h2>
                    </div>
                    <a href="tel:075712577">
                        07 571 2577  
                    </a>                            
                </div>
                <div>
                    <div className='location_title title'>
                        <HiOutlineMail />
                        <h2>Email</h2>
                    </div>
                    <a href="mailto:carontga@gmail.com">
                        carontga@gmail.com
                    </a>                            
                </div>                              
            </div>
            <div className="platforms">
                <a href="https://www.facebook.com/CARON-Automotive-107172715282855" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF/>
                </a>
                <a href="https://www.instagram.com/caron_automotive/?hl=en" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                
                <a href="https://www.google.com/search?q=caron+automotive" target="_blank" rel="noopener noreferrer">
                    <FaGoogle/>
                </a>
                <p className="copyright">
                 Copyright © 2022 caron-automotive. All rights reserved
                </p>
            </div>
           
        </div>
        <Map />
    </footer>
  )
}

export default Footer