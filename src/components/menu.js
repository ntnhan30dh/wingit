import React from "react"
import mainPic from "../images/mains-pic.png"
import sidesPic from "../images/sides-pic.png"
import dipPic from "../images/dip-pic.png"
import chickenWing from "../images/chicken-wing.png"
import chickenLeg from "../images/chicken-leg.png"
import chickenDish from "../images/chicken-dish.png"
import fries from "../images/fries.png"
import chickenBoxIcon from "../images/chicken-box_icon.png"
import mains from "../images/mainsText.png"
import sides from "../images/sidesText.png"
import dips from "../images/dipsText.png"
import dip from "../images/dip.png"

const Menu = () => {
  return (
    <div className="menuContainer">
    <span id="menu"  name="menu"></span>
      <div className="textTopDiv row ">
        <div className="chickenWingDiv">
          <div className="chickenWingImgDiv">
            <img src={chickenWing} alt="chicken wing" />
          </div>
        </div>
        <div className="text">
          <h1>MENU</h1>
          <h2>Hungry for wings? We've got just the thing.</h2>
          <p>
            Check out our yummy fried chicken served with tongue-tingling
            sauces.
          </p>
          <button>ORDER NOW</button>
        </div>
        <div className="chickenLegDiv">
          <div className="chickenLegImgDiv">
            <img src={chickenLeg} alt="chicken leg" />
          </div>
        </div>
      </div>
      <div className="mainDiv row">
        <div className="">
          <img src={mainPic} alt="main menu" />
        </div>
        <div className="mainTextDiv"></div>
        <div className="mainText">
          <div className="chickenDishDiv">
            <img src={chickenDish} alt="chicken Dish" />
          </div>
          <div className="">
            <img src={mains} alt="mains" />
          </div>
          <p>
            Chicken wings <br />
            Tenders <br />
            Popcorn chicken <br />
            Drumsticks <br />
          </p>
        </div>
      </div>
      <div className="mainDiv row">
        <div className="mainText">
          <div className="friesDiv">
            <img src={fries} alt=" fries" />
          </div>
          <div className="mainsPicDiv">
            <img src={sides} alt="sides" />
          </div>
          <p>
            Criss cross potato <br />
            Onion rings <br />
            Cheese nuggets <br />
            Mozzarella sticks <br />
            French fries <br />
            Sweet potato fries <br />
            Coleslaw <br />
          </p>
        </div>
        <div className="">
          <img src={sidesPic} alt="sides menu" />
        </div>
      </div>
      <div className="mainDiv row">
        <div className="">
          <img src={dipPic} alt="dips menu" />
        </div>
        <div className="mainText">
          <div className="dipDiv">
            <img src={dip} alt="dip" />
          </div>
          <div className="mainsPicDiv">
            <img src={dips} alt="dips" />
          </div>
          <p>
            Black Pepper <br />
            Garlic <br />
            Paprika <br />
            Bernaise <br />
            Mango & Jalapeno <br />
            Cheddar
            <br />
          </p>
        </div>
      </div>
      <div className="textBottomDiv">
        <p>
          Make your fried chicken dreams come true. Pick your favourite dish and
          enjoy!
        </p>
        <button>ORDER NOW</button>
      </div>
      <div className="bgSmallDiv">
        <div className="chickenBoxIconDiv">
          <img src={chickenBoxIcon} alt="chicken box icon" />
        </div>
\      </div>
    </div>
  )
}

export default Menu
