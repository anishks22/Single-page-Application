import React from "react";
import "./Combined.css";
import award from "./Image/1.png";
import awardreceiving from "./Image/2.png";
import parts from "./Image/3.png";

function Mainbody() {
  return (
    <>
      <div className="container full-width">
        <div>
          <div className="rightAlign">
            <h6>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h6>
          </div>
          <div className="main-body">
            <div className="award">
              <img className="trophy" src={award} alt="award" />
            </div>
            <div className="right-award">
              <div className="marginLeft">
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </div>
              <div className="left">
                <img
                  src={awardreceiving}
                  className="award-receiving"
                  alt="awardreceiving"
                />
              </div>
              <div className="leftside">
                <p>
                  Government of India has awarded the "National Energy
                  Conservation Award 2018". Mr. G. Selvaraj, Joint Managing
                  Director of C.R.I. Group received the award from Smt. Sumitra
                  Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
                  Honorable Minister of State.
                </p>
              </div>
            </div>
          </div>

          <p>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.{" "}
          </p>
        </div>
      </div>

      <div className="left">
        <img src={parts} className="parts" alt="parts" />
      </div>
      <div className="ls-test">
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </div>
      <div className="hr-color">
        <hr/>
      </div>
      <div className="ls-test">
        <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      </div>
      <div className="lt-text">
        <p>
          CHEMICALS & PROCESS <span className="or-color">|</span> POWER <span className="or-color">|</span> WATER & WASTE
          WATER <span className="or-color">|</span>  OILS & GAS <span className="or-color">|</span>  PHARMA  <span className="or-color">|</span>  SUGARS & DISTILLERIES <span className="or-color">|</span>  PAPER &
          PULP <span className="or-color">|</span> MARINE & DEFENCE <span className="or-color">|</span> METAL & MINING <span className="or-color">|</span> FOOD & BEVERAGE <span className="or-color">|</span> PETROCHEMICAL &
          REFINERIES <span className="or-color">|</span> SOLAR <span className="or-color">|</span> BUILDING <span className="or-color">|</span> HVAC <span className="or-color">|</span> FIRE FIGHTING <span className="or-color">|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
    </>
  );
}

export default Mainbody;
