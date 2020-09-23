import React from 'react';
import logo from '../images/PedidosYa-logo.png'
const Contact = () => {
    return (
       <div className="contactContainer">
       <span  id="contact" ></span>
           <div className="text wave wave--top">
           hello@getwingit.com 
           </div>
          
           <div className="logoDiv">
               <img src={logo} alt="logo"/>
           </div>
       </div>
    );
};


export default Contact;