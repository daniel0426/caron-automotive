import * as React from "react"
import Layout from '../components/layout'
import "../style/main.scss"
import "../style/global.scss";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';


const MainPage = () => {
  
  return (
    <Layout className="main">
      <main className="main_container">
        <h1>CARON AUTOMOTIVE</h1>
        <p>We offer quality repais with years of experience</p>
        <div className='slider'>

        </div>
      </main>
      <section className="main-about_container">
        <h1>ABOUT US</h1>
        <ul className="about-summary_container">
          <li className="about-summary">
            <div className="about-summary_img">
              <StaticImage src="../images/main/main-1.jpg" alt="main-about img" />
            </div>
            <div className="about-summary_desc">
              <h2>Experienced Mechanics</h2>
              <p>The mechanics at our shop have years of experience.<br/>
                 They are dedicated to providing high-quality repairs to keep you safe and happy </p>
            </div>
          </li>
          <li className="about-summary">
            <div className="about-summary_img">
              <StaticImage src="../images/main/main-2.jpg" alt="main-about img" />
            </div>
            <div className="about-summary_desc">
              <h2>We Have You Satisfied</h2>
              <p>Whether you’re coming in for a routine inspection or a repair service, <br/> we promise that you will be completely satified with our work. </p>
            </div>
          </li>
          <li className="about-summary">
            <div className="about-summary_img">
              <StaticImage src="../images/main/main-3.jpg" alt="main-about img" />
            </div>
            <div className="about-summary_desc">
              <h2>Our Quality Promise</h2>
              <p> We’re committed to providing a stress-free experience to both new and returning customers.<br/> Our shop only uses parts from reputable brands to ensure that your vehicle is always ready to drive.</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="main-contact_container">
        <h1>Are You Interested in Our Service?</h1>
        <p>Whatever your needs may be, get in touch with us today for more details about our products and services, 
           including an onsite mechanic. We assist with oil changes, and much more.  
            Appointment recommended. We look forward to meeting you.
        </p>
        <Link to="/contact">CONTACT US</Link>
      </section>
    </Layout>
  )
}

export default MainPage
