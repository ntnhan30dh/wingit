import React from "react"
import logo from "../images/WingIt_Logo.png"
import OrderNow from './ordernow'
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className="nav">
      <Link to="#" className="img_div">
        <img src={logo} alt="logo" />
      </Link>
      <div className="rightDiv row">
        <ul>
          <li></li>
          <li></li>
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
        <OrderNow/>
      </div>
    </nav>
  )
}

export default Header
