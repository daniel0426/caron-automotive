import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Contact_Form from "../components/Contact_Form";
import "../style/main.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import sliderData from "../components/dataSlider";
import { AiOutlineCheckCircle } from "react-icons/ai";
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
      <div className="wof_banner" id="main">
        <div className="info">Has your WOF expired? Book it now!</div>
        <div className="booking_btn">
          <a className="booking" href="#book">
            BOOK NOW
          </a>
        </div>
      </div>
      <main className="main_container">
        <div className="title_container">
          <StaticImage
            className="logo"
            src="../images/nav/logo.png"
            alt="logo"
          />
          <h1>AUTOMOTIVE</h1>
        </div>
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
      <section className="main-about_container" id="about">
        <h2>ABOUT US</h2>
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
                As the only Korean repair shop in Tauranga, we provide complete
                repairs with prompt and accurate inspection based on over 15
                years of maintenance experience. We do our best to meet your
                satisfaction of car maintenance with the latest equipment and
                tidy workshop.
                <br />
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
      <section className="main-service_container" id="service">
        <h2>SERVICE</h2>
        <ul className="service_list_container">
          <li className="service_item">
            <StaticImage
              className="service_img"
              src="../images/service/oilChange.png"
              alt="service img"
            />
            <h2>OIL CHANGE</h2>
            <ul className="service_details">
              <li>Vertex 10W 30 Semi Synthetic</li>
              <li>Vertex 5W 30 Fully Synthetic</li>
              <li>Ryco / Fram / Superior Oil filter</li>
            </ul>
          </li>
          <li className="service_item">
            <StaticImage
              className="service_img"
              src="../images/service/engineRepair.png"
              alt="service img"
            />
            <h2>ENGINE REPAIR</h2>
            <ul className="service_details">
              <li>Engine Rocker cover gasket, Headgasket change</li>
              <li>Drive belt replacement</li>
              <li>Any leakage problems, Transmission replacement</li>
              <li>Clutch replacement, ECU diagnostic scan reset</li>
            </ul>
          </li>
          <li className="service_item">
            <StaticImage
              className="service_img"
              src="../images/service/breakSystem.png"
              alt="service img"
            />
            <h2>BREAK SYSTEM</h2>
            <ul className="service_details">
              <li>Brake fluid replacement</li>
              <li>Brake rotors / Pads change</li>
              <li>Brake imbalance repair</li>
              <li>Using SAFETSTOP brake tester machine</li>
            </ul>
          </li>
          <li className="service_item">
            <StaticImage
              className="service_img"
              src="../images/service/coolingSystem.png"
              alt="service img"
            />
            <h2>COOLING SYSTEM</h2>
            <ul className="service_details">
              <li>Thermostat replacement</li>
              <li>Head gasket replacement</li>
              <li>Hose / Pipe leaking repair</li>
              <li>Waterpump replacement</li>
              <li>Coolant top up / replacement</li>
              <li>Radiator replacement</li>
            </ul>
          </li>
          <li className="service_item">
            <StaticImage
              className="service_img"
              src="../images/service/diagnostic.png"
              alt="service img"
            />
            <h2>DIAGNOSTIC</h2>
            <ul className="service_details">
              <li>Think tool diagnostic scan tool </li>
              <li>ECU programming</li>
              <li>Error code clearing</li>
              <li>Service reset</li>
            </ul>
          </li>
          <li className="service_item">
            <StaticImage
              className="service_img"
              src="../images/service/airConditioner.png"
              alt="service img"
            />
            <h2>AIR CONDITIONER</h2>
            <ul className="service_details">
              <li>Aircon gas refill</li>
              <li>Aircon compressor replacement</li>
              <li>Aircon belt replacement</li>
              <li>Aircon pipe leaking repair</li>
            </ul>
          </li>
          <li className="service_item">
            <StaticImage
              className="service_img"
              src="../images/service/tyre.png"
              alt="service img"
            />
            <h2>TYRE</h2>
            <ul className="service_details">
              <li>Tyre fitting, balancing</li>
              <li>
                Treat Hankook, Laufenn, Triangle, Go pro, Dayton, Bridgestone,
                Supercat tyres
              </li>
            </ul>
          </li>
          <li className="service_item">
            <StaticImage
              className="service_img"
              src="../images/service/suspension.png"
              alt="service img"
            />
            <h2>SUSPENSION</h2>
            <ul className="service_details">
              <li>Replacing all shocks / bushes / links / bearings</li>
            </ul>
          </li>
          <li className="service_item">
            <StaticImage
              className="service_img"
              src="../images/service/battery.png"
              alt="service img"
            />
            <h2>BATTERY</h2>
            <ul className="service_details">
              <li>Replacing with brand new batteries from Century batteries</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="main-pricing_container" id="pricing">
        <h2>PRICE</h2>
        <div className="wof_container">
          <div className="wof">
            <p className="price">$70 Inc gst</p>
            <h3>WOF - Warrent of fitness</h3>
            <li className="desc">Vehicle safety insepction</li>
          </div>
          <div className="wof_combo">
            <p className="price">
              $160 Inc gst (<strong>semi synthetic oil</strong>) / <br></br>$210
              Inc gst (<strong>fully synthetic oil</strong>)
            </p>
            <h3>WOF + OIL & FILTER CHANGE COMBO DEAL</h3>
            <p>Warrant of fitness - Vehicle safety inspection</p>
            <p>
              Oil and Filter change - Replace (semi synthetic / fully synthetic)
              engine oil up to 4.5L / Replace engine oil filter up to $25 retail
            </p>
            <p>Service sticker update / service reminder set up</p>
            <p className="additional_desc">
              ( Additional oil over 4.5L and special oil filter required will
              charge additional cost )
            </p>
          </div>
          <div className="booking_btn">
            <a className="booking" href="#book">
              BOOK NOW
            </a>
          </div>
        </div>
        <div className="oilservice_container">
          <div className="oilservice">
            <p className="price">
              $120 Inc gst (<strong>semi synthetic oil</strong>) /<br></br> $170
              Inc gst (<strong>Fully synthetic oil</strong>)
            </p>
            <h3>Engine oil change</h3>
            <ul>
              <li className="desc">
                Oil and Filter change - Replace (Semi synthetic / Fully
                synthetic) engine oil up to 4.5L
              </li>
              <li className="desc">Top up washer liquid</li>
              <li className="desc">Tyre pressure check / set</li>
              <li className="desc">Service sticker update / reminder set up</li>
            </ul>

            <p className="additional_desc">
              ( Additional oil over 4.5L and special oil filter required will
              charge additional cost )
            </p>
          </div>

          <div className="booking_btn">
            <Link className="booking" href="#book">
              BOOK NOW
            </Link>
          </div>
        </div>
        <div className="check_container">
          <div className="check_main_container">
            <div className="basic">
              <p className="price">
                $200 Inc gst (<strong>semi synthetic oil</strong>) /<br></br>{" "}
                $250 Inc gst (<strong>fully synthetic oil</strong>)
              </p>
              <h3>BASIC SERVICE</h3>
              <ul>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>
                    Oil and Filter change - Replace (semi synthetic / Fully
                    synthetic) engine oil up to 4.5L
                  </p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Replace engine oil filter up to $25 retail</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Tyre pressure check / set</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>10 points visual inspection</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Service sticker update / reminder set up</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>
                    (Additional oil over 4.5L and special oil filter required
                    will charge additional cost)
                  </p>
                </li>
                <li className="pricing">
                  <p className="price_sub">
                    ( WOF combo deal total price $25 discount )
                  </p>
                </li>
              </ul>
            </div>
            <div className="full">
              <p className="price">
                $250 Inc gst (<strong>semi synthetic oil</strong>) /<br></br>{" "}
                $300 Inc gst (<strong>fully synthetic oil</strong>)
              </p>
              <h3>FULL SERVICE</h3>
              <ul>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>
                    Oil and Filter change - Replace (semi synthetic / fully
                    synthetic) engine oil up to 4.5L
                  </p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Replace engine oil filter up to $25 retai</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>20 points visual inspection</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Brake efficiency test</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Top up all liquid if necesssary</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>
                    Diagnostic scan tool check / Error code clear / maintenance
                    reset
                  </p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Tyre pressure check / set</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Service sticker update / reminder set up</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>
                    (Additional oil over 4.5L and special oil filter required
                    will charge additional cost)
                  </p>
                </li>
                <li className="pricing">
                  <p className="price_sub">
                    ( WOF combo deal total price $25 discount )
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="booking_btn">
            <a className="booking" href="#book">
              BOOK NOW
            </a>
          </div>
        </div>
        <div className="check_container">
          <div className="check_main_container">
            <div className="basic">
              <p className="price">From $299 Inc gst</p>

              <h3>Diesel Service</h3>
              <ul>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>
                    Oil and Filter change - Replace (Fully synthetic) engine oil
                    up to 4.5L / Replace oil filter up to $40 retail
                  </p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Multi points visual check</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Top up all fluid if neccessary</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Tyre pressure check / set</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Service sticker update / reminder set up</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Maintenance light reset</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>
                    (Additional oil over 4.5L and special oil filter required
                    will charge additional cost)
                  </p>
                </li>
                <li className="pricing">
                  <p className="price_sub">
                    ( WOF combo deal total price $25 discount )
                  </p>
                </li>
              </ul>
            </div>
            <div className="full">
              <p className="price">From $299 Inc gst</p>
              <h3>European Service</h3>
              <ul>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>
                    Oil and Filter change - Replace (Fully synthetic) engine oil
                    up to 4.5L / Replace oil filter up to $40 retail
                  </p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Multi points visual check</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Top up all fluid if neccessary</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Tyre pressure check / set</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Diagnostic scan tool check / clear error code</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Service sticker update / reminder set up</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Maintenance light reset</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>
                    (Additional oil over 4.5L and special oil filter required
                    will charge additional cost)
                  </p>
                </li>
                <li className="pricing">
                  <p className="price_sub">
                    ( WOF combo deal total price $25 discount )
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="booking_btn">
            <a className="booking" href="#book">
              BOOK NOW
            </a>
          </div>
        </div>
      </section>
      <section className="main-book_container" id="book">
        <h2>BOOK NOW</h2>
        <Contact_Form />
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
