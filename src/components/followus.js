import React from "react"
import Plx from "react-plx"


import moped from "../images/moped.png"
import followUs from "../images/followUsText.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"

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
    <div className="followUsContainer">
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
        <div className="pic"></div>
        <div className="pic"></div>
        <div className="pic"></div>
      </div>
    </div>
  )
}

export default FollowUs
