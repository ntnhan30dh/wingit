import React from "react"
import logo from "../images/WingIt_Logo.png"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className="nav ">
      <div className="img_div">
        <img src={logo} alt="logo" />
      </div>
      <div className="rightDiv row">
        <ul>
          <li>
            <Link to="#story">Our Story</Link>
          </li>
          <li>
            <Link to="#menu">Menu</Link>
          </li>
          <li>
            <Link to="#follow">Follow Us</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>

            {/* <AnchorLink to="#story" title="Our Story" /> */}
          </li>
        </ul>
        <button>Oder Now</button>
      </div>
    </nav>
  )
}

export default Header
