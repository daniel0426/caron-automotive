import React from 'react'
import Layout from '../components/layout'
import "../style/about.scss"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const About = () => {
  return (
   <Layout>
      <main className="about_container">
        <h1>ABOUT US</h1>
        <StaticImage className="profile_img" src="../images/about/profile.jpg" alt="profile img" />
        <p>
          As the only Korean repair shop in Tauranga, 
          we provide complete repairs with prompt and accurate inspection based on over 15 years of maintenance experience. 
          We do our best to meet your satisfaction of car maintenance with the latest equipment and tidy workshop.<br/><br/>
        </p>
        <p>Director , Peter Chung</p>
      </main>
   </Layout>
  )
}

export default About