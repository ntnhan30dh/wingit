import React from 'react';
import moped from '../images/moped.png'
import followUs from '../images/followUsText.png'
const FollowUs = () => {
    return (
       <div className="followUsContainer">
       <div className="followUSPicDiv">
          <img src={followUs} alt="follow us"/>
        </div>
           <div className="mopedDiv">
               <img src={moped} alt="moped"/>
           </div>
       </div>
    );
};


export default FollowUs;