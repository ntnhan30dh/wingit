import React from "react"
import logo from "../images/WingIt_Logo.png"


const Header = () => {
    return (
          <nav className="nav">
              <div className="img_div">
              <img src={logo} alt="logo"/>
              </div>
        <ul>
          <li>Our Story</li>
          <li>Menu</li>
          <li>Follow Us</li>
          <li>Contact</li>
          <li>Oder Now</li>
        </ul>
      </nav>
    );
};


export default Header;