import React from "react"
import moped from "../images/moped.png"
import followUs from "../images/followUsText.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
const FollowUs = () => {
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
        <div className="mopedDiv">
          <img src={moped} alt="moped" />
        </div>
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
