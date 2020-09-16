import React from 'react';
import logo from '../images/PedidosYa-logo.png'
const Contact = () => {
    return (
       <div className="contactContainer">
           <h2>
           hello@getwingit.com 
           </h2>
           <div className="logoDiv">
               <img src={logo} alt="logo"/>
           </div>
       </div>
    );
};


export default Contact;