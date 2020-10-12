import React from "react"
import sticker from "../images/Sticker.png"
// import chikenBox from "../images/chicken_box.png"

import smell from '../images/Wingit_kos_smell.svg'
import chicken from '../images/Wingit_kos_chicken.svg'
import box from '../images/Wingit_kos.svg'


import Plx from "react-plx"


const Story = (props) => {
  let nudge = props.menuState ? 'nudge' : '';
  const parallaxData = [
    {
      start:'self',
      duration: 800,
      properties: [
        {
        startValue: 0,
        endValue: 1,
        property: "opacity"
        },
      ],
    },
  ];

  const parallaxMoveUp = [
    {
      start:'self',
      duration: 500,
      properties: [
        {
        startValue: 50,
        endValue: 0,
        property: "translateY"
        },
        {
          startValue: 0.5,
          endValue: 1,
          property: "scale"
        },
        
        
      ],
    },
  ];
  return (
    <section className={`storyContainer ${nudge}`}>
      {/* <div className="bgContainer wave wave--top"> */}
      <div className="bgContainer">
        <span className="before"></span>
        <span className="after"></span>
        <div className="stickerDiv">
          <img src={sticker} alt="sticker" />
        </div>
      </div>
      {/* <div className="storyDiv wave"> */}
      <div className="storyDiv ">
        <span id="story" name="story"></span>
        <div className="textDiv">
          <p className="text1">
            Nothing fits a night in with friends better than some succulent
            fried chicken. And no one makes it better than Wing it!
          </p>
          <p className="text2">
            Crispy chicken wings, juicy strips, paired with delicious dips and
            original sides like criss cut fries. The perfect comfort food,
            delivered right to your movie night.
          </p>
        </div>
        {/* <Plx parallaxData={parallaxMoveUp} className="chickenBoxDiv">
          <img src={chikenBox} alt="" />
        </Plx> */}
        <div  className="chickenBox">
        <Plx parallaxData={parallaxData}>
          <img src={smell} alt="" />
          </Plx>
          <Plx parallaxData={parallaxMoveUp}>
          <img src={chicken} alt="" />
          </Plx>
          <div>
          <img src={box} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
