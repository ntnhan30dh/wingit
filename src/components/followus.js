import React from "react"
import Plx from "react-plx"


import moped from "../images/moped.png"
import followUs from "../images/followUsText.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import soMe1 from "../images/WingIt_SoMe_1.png"
import soMe2 from "../images/WingIt_SoMe_2.png"
import soMe3 from "../images/WingIt_SoMe_3.png"

const FollowUs = () => {

  const parallaxMoveRight = [
    {
      start:'self',
      duration: 1000,
      properties: [
        {
        startValue: -100,
        endValue: 0,
        property: "translateX"
        },
      ],
    },
  ];
  
  return (
    <section className="followUsContainer">
      <span id="follow"></span>
      <div className="top">
        <div></div>
        <div>
          <div className="followUSPicDiv">
            <img src={followUs} alt="follow us" />
          </div>
          <div className="icons">
            <div className="">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="">
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
        <Plx parallaxData={parallaxMoveRight} className="mopedDiv">
          <img src={moped} alt="moped" />
        </Plx>
      </div>
      <div className="bottom">
        <div className="pic">
          <img src={soMe1} alt="Wing It_SoMe_1"/>
        </div>
        <div className="pic"><img src={soMe2} alt="Wing It_SoMe_2"/></div>
        <div className="pic"><img src={soMe3} alt="Wing It_SoMe_3"/></div>
      </div>
    </section>
  )
}

export default FollowUs
