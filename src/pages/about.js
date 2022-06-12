import React from 'react'
import Layout from '../components/layout'
import "../style/about.scss"
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

const About = () => {
  return (
   <Layout>
   <SEO title="About"/>
      <main className="about_container">
        <h1>ABOUT US</h1>
        <div>
            <StaticImage className="profile_img" src="../images/about/profile.jpg" alt="profile img" />
          <div className="about_desc">
            <p>
            As the only Korean repair shop in Tauranga, 
            we provide complete repairs with prompt and accurate inspection based on over 15 years of maintenance experience. 
            </p>
            <p>
            We do our best to meet your satisfaction of car maintenance with the latest equipment and tidy workshop.<br/><br/>
            </p>
            <p>Director , Peter Chung</p>
          </div>
        </div>
      </main>
   </Layout>
  )
}

export default About