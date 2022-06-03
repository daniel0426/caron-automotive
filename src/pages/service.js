import React from 'react'
import Layout from '../components/layout'
import "../style/service.scss"
import { StaticImage } from 'gatsby-plugin-image';
import {AiOutlineCheckCircle} from 'react-icons/ai';

const service = () => {
  return (
    <Layout>
      <main className="service_container">
        <h1>SERVICES</h1>
        <div className="check_container">
          <div className="basic">
              <h2>BASIC SERVICE</h2>
              <ul>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Engine Oil / Oil filter change</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Washer liquid top up</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Tyre pressure check</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Visual check underbody</p>
                </li>
              </ul>
          </div>
          <div className="full">
            <h2>FULL SERVICE</h2>
            <ul>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Engine Oil / Oil filter change</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Diagnostic scan</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Washer liquid top up</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Spark plug check</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Suspension / Bushes check</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Brake test / check</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Transmission oil level check</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Air filter cleaning</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Battery status check</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Visual check underbody</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Wiper blades check</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Coolant liquid top up</p>
                </li>
                <li className="service_item">
                  <AiOutlineCheckCircle />
                  <p>Tyre pressure check</p>
                </li>
            </ul>
          </div>
        </div>
        <ul className="service_list_container">
            <li className="service_item">
                <StaticImage className="service_img" src='../images/service/oilChange.png' alt="service img" />
                <h2>OIL CHANGE</h2>
                <ul className="service_details">
                  <li>Vertex 10W 30 Semi Synthetic</li>
                  <li>Vertex 5W 30 Fully Synthetic</li>
                  <li>Ryco / Fram / Superior Oil filter</li>
                </ul>
            </li>
            <li className="service_item">
                <StaticImage className="service_img" src='../images/service/engineRepair.png' alt="service img" />
                <h2>ENGINE REPAIR</h2>
                <ul className="service_details">
                  <li>Engine Rocker cover gasket, Headgasket change</li>
                  <li>Drive belt replacement</li>
                  <li>Any leakage problems, Transmission replacement</li>
                  <li>Clutch replacement, ECU diagnostic scan reset</li>
                </ul>
            </li>
            <li className="service_item">
                <StaticImage className="service_img" src='../images/service/breakSystem.png' alt="service img" />
                <h2>BREAK SYSTEM</h2>
                <ul className="service_details">
                  <li>Brake fluid replacement</li>
                  <li>Brake rotors / Pads change</li>
                  <li>Brake imbalance repair</li>
                  <li>Using SAFETSTOP brake tester machine</li>
                </ul>
            </li>
            <li className="service_item">
                <StaticImage className="service_img" src='../images/service/coolingSystem.png' alt="service img" />
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
                <StaticImage className="service_img" src='../images/service/diagnostic.png' alt="service img" />
                <h2>DIAGNOSTIC</h2>
                <ul className="service_details">
                  <li>Think tool diagnostic scan tool </li>
                  <li>ECU programming</li>
                  <li>Error code clearing</li>
                  <li>Service reset</li>
                </ul>
            </li>
            <li className="service_item">
                <StaticImage className="service_img" src='../images/service/airConditioner.png' alt="service img" />
                <h2>AIR CONDITIONER</h2>
                <ul className="service_details">
                  <li>Aircon gas refill</li>
                  <li>Aircon compressor replacement</li>
                  <li>Aircon belt replacement</li>
                  <li>Aircon pipe leaking repair</li>
                </ul>
            </li>
            <li className="service_item">
                <StaticImage className="service_img" src='../images/service/tyre.png' alt="service img" />
                <h2>TYRE</h2>
                <ul className="service_details">
                  <li>Tyre fitting, balancing</li>
                  <li>Treat Hankook, Laufenn, Triangle, Go pro, Dayton, Bridgestone, Supercat tyres</li>
                </ul>
            </li>
            <li className="service_item">
                <StaticImage className="service_img" src='../images/service/suspension.png' alt="service img" />
                <h2>SUSPENSION</h2>
                <ul className="service_details">
                  <li>Replacing all shocks / bushes / links / bearings</li>
                </ul>
            </li>
            <li className="service_item">
                <StaticImage className="service_img" src='../images/service/battery.png' alt="service img" />
                <h2>BATTERY</h2>
                <ul className="service_details">
                  <li>Replacing with brand new batteries from Century batteries</li>
                </ul>
            </li>
        </ul>
      </main>
    </Layout>
  )
}

export default service