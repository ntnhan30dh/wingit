import React from "react"
import sticker from "../images/Sticker.png"
import chikenBox from "../images/chicken_box.png"

import Plx from "react-plx"


const Story = () => {
  const parallaxData = [
    {
      start:'self',
      duration: 500,
      properties: [
        {
          startValue: 0.5,
          endValue: 1,
          property: "scale"
        },
      ],
    },
  ];
  return (
    <div className="storyContainer ">
      <div className="bgContainer wave wave--top">
        <span className="before"></span>
        <span className="after"></span>
        <div className="stickerDiv">
          <img src={sticker} alt="sticker" />
        </div>
      </div>
      <div className="storyDiv wave">
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
        <Plx parallaxData={parallaxData} className="chickenBoxDiv">
          <img src={chikenBox} alt="" />
        </Plx>
      </div>
    </div>
  )
}

export default Story
