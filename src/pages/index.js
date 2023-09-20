import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import "../style/main.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import sliderData from "../components/dataSlider";
import SEO from "../components/SEO";

const MainPage = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    let timer = setTimeout(() => {
      if (slideIndex === sliderData.length) {
        setSlideIndex(1);
      } else {
        setSlideIndex((prev) => prev + 1);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [slideIndex]);
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <Layout>
      <SEO title="Home" />
      <div className="wof_banner">
        <div className="info">Has your WOF expired? Book it now!</div>
        <div className="booking_btn">
          <Link className="booking" to="/contact">
            BOOK NOW
          </Link>
        </div>
      </div>
      <main className="main_container">
        <h1>CARON AUTOMOTIVE</h1>
        <p>We offer quality repairs with years of experience</p>
        <div className="slider_wrapper">
          {sliderData.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <div className="img">
                  <img
                    src={`../mainslider/slider${index + 1}.webp`}
                    alt="slide-img"
                  />
                </div>
                <div className="slide_title">
                  <h1>{obj.title}</h1>
                  <div className="container-dots">
                    {sliderData.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={
                          slideIndex === index + 1 ? "dot active" : "dot"
                        }
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <section className="main-about_container">
        <h1>ABOUT US</h1>
        <ul className="about-summary_container">
          <li className="about-summary">
            <div className="about-summary_img">
              <StaticImage
                src="../images/main/main-1.jpg"
                alt="main-about img"
              />
            </div>
            <div className="about-summary_desc">
              <h2>Experienced Mechanics</h2>
              <p>
                The mechanics at our shop have years of experience. They are
                dedicated to providing high-quality repairs to keep you safe and
                happy.{" "}
              </p>
            </div>
          </li>
          <li className="about-summary">
            <div className="about-summary_img">
              <StaticImage
                src="../images/main/main-2.jpg"
                alt="main-about img"
              />
            </div>
            <div className="about-summary_desc">
              <h2>We Have You Satisfied</h2>
              <p>
                Whether you’re coming in for a routine inspection or a repair
                service, we promise that you will be completely satified with
                our work.{" "}
              </p>
            </div>
          </li>
          <li className="about-summary">
            <div className="about-summary_img">
              <StaticImage
                src="../images/main/main-3.jpg"
                alt="main-about img"
              />
            </div>
            <div className="about-summary_desc">
              <h2>Our Quality Promise</h2>
              <p>
                {" "}
                We’re committed to providing a stress-free experience to both
                new and returning customers. Our shop only uses parts from
                reputable brands to ensure that your vehicle is always ready to
                drive.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="main-contact_container">
        <h1>Are You Interested in Our Service?</h1>
        <p>
          Whatever your needs may be, get in touch with us today for more
          details about our products and services, including an onsite mechanic.
          We assist with oil changes, and much more. Appointment recommended. We
          look forward to meeting you.
        </p>
        <Link to="/contact">BOOK NOW</Link>
      </section>
      <section className="certificates_container">
        <div className="certificates">
          <StaticImage
            src="../images/main/certificate1.png"
            alt="main-about img"
            objectFit="contain"
          />
          <StaticImage
            src="../images/main/certificate2.png"
            alt="certificate img"
            objectFit="contain"
          />
        </div>
      </section>
    </Layout>
  );
};

export default MainPage;
