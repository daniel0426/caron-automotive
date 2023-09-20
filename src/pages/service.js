import React from "react";
import Layout from "../components/layout";
import "../style/service.scss";
import { StaticImage } from "gatsby-plugin-image";
import { AiOutlineCheckCircle } from "react-icons/ai";
import SEO from "../components/SEO";
import { Link } from "gatsby";

const service = () => {
  return (
    <Layout>
      <SEO title="Service" />
      <main className="service_container">
        <h1>SERVICES</h1>
        <div className="wof_container">
          <div className="wof">
            <h3>WOF - Warrent of fitness</h3>
            <li className="desc">Vehicle safety insepction</li>
            <p className="price">$65 Inc gst</p>
          </div>
          <div className="wof_combo">
            <h3>WOF + OIL & FILTER CHANGE COMBO DEAL</h3>
            <p>Warrant of fitness - Vehicle safety inspection</p>
            <p>
              Oil and Filter change - Replace (semi synthetic / fully synthetic)
              engine oil up to 4.5L / Replace engine oil filter up to $25 retail
            </p>
            <p>Service sticker update / service reminder set up</p>
            <p>
              Additional oil over 4.5L and special oil filter required will
              charge additional cost
            </p>
            <p className="price">
              $160 Inc gst (semi synthetic oil) / $210 Inc gst (fully synthetic
              oil)
            </p>
          </div>
          <div className="booking_btn">
            <Link className="booking" to="/contact">
              BOOK NOW
            </Link>
          </div>
        </div>
        <div className="oilservice_container">
          <div className="oilservice">
            <h3>Engine oil change service</h3>
            <ul>
              <li className="desc">
                Oil and Filter change - Replace (Semi synthetic / Fully
                synthetic) engine oil up to 4.5L
              </li>
              <li className="desc">Top up washer liquid</li>
              <li className="desc">Tyre pressure check / set</li>
              <li className="desc">Service sticker update / reminder set up</li>
            </ul>

            <p className="price">
              $120 Inc gst (semi synthetic oil) / $170 Inc gst (Fully synthetic
              oil)
            </p>
            <p className="price_sub">
              (Additional oil over 4.5L and special oil filter required will
              charge additional cost)
            </p>
          </div>

          <div className="booking_btn">
            <Link className="booking" to="/contact">
              BOOK NOW
            </Link>
          </div>
        </div>
        <div className="check_container">
          <div className="check_main_container">
            <div className="basic">
              <h2>BASIC SERVICE</h2>
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
                  <p className="price">
                    $200 Inc gst (semi synthetic oil) / $250 Inc gst (fully
                    synthetic oil)
                  </p>
                  <p className="price_sub">
                    ( WOF combo deal total price $25 discount )
                  </p>
                </li>
              </ul>
            </div>
            <div className="full">
              <h2>FULL SERVICE</h2>
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
                  <p className="price">
                    $250 Inc gst (semi synthetic oil) / $250 Inc gst (fully
                    synthetic oil)
                  </p>
                  <p className="price_sub">
                    ( WOF combo deal total price $25 discount )
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="booking_btn">
            <Link className="booking" to="/contact">
              BOOK NOW
            </Link>
          </div>
        </div>
        <div className="check_container">
          <div className="check_main_container">
            <div className="basic">
              <h2>Diesel Service</h2>
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
                  <p className="price">From $299 Inc gst</p>
                  <p className="price_sub">
                    ( WOF combo deal total price $25 discount )
                  </p>
                </li>
              </ul>
            </div>
            <div className="full">
              <h2>European Service</h2>
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
                  <p className="price">From $299 Inc gst</p>
                  <p className="price_sub">
                    ( WOF combo deal total price $25 discount )
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="booking_btn">
            <Link className="booking" to="/contact">
              BOOK NOW
            </Link>
          </div>
        </div>
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
      </main>
    </Layout>
  );
};

export default service;
