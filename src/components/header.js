import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faInfoCircle,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "../styles/styles.css"
import "../styles/headerStyles.css"

import LogoWhite from "../images/logo-white.png"

function openNav() {
  document.getElementById("nav").style.display = "flex"
  document.getElementById("openNavBtn").style.display = "none"
  document.getElementById("closeNavBtn").style.display = "block"        
}
function closeNav() {
  document.getElementById("nav").style.display = "none"
  document.getElementById("closeNavBtn").style.display = "none"
  document.getElementById("openNavBtn").style.display = "block"
}
const Header = ({ siteTitle }) => (
  
  <header>
    <Link href="/">
      <img src={LogoWhite} className="logo"></img>
    </Link>
    <nav className="desktopNav">
      <Link href="/">
        <FontAwesomeIcon 
          icon={faHome}
          style={{fontSize: `1.8rem`, maxWidth: `1.8rem`, marginRight: `.8rem`, lineHeight: 0}}
        />
        Home
      </Link>
      <Link href="/store">
        <FontAwesomeIcon 
          icon={faShoppingCart}
          style={{fontSize: `1.8rem`, maxWidth: `1.8rem`, marginRight: `.8rem`, lineHeight: 0}}
        />      
        Store
      </Link>
      <Link href="/">
        <FontAwesomeIcon 
          icon={faInfoCircle}
          style={{fontSize: `1.8rem`, maxWidth: `1.8rem`, marginRight: `.8rem`, lineHeight: 0}}
        />
        About
      </Link>
    </nav>
    
    <button id="openNavBtn" onClick={openNav} className="openNavBtn">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <button id="closeNavBtn" onClick={closeNav} className="closeNavBtn" style={{display: `none`}}>
        <div>
          <span></span>
          <span></span>
        </div>
    </button>
    <nav class="mobileNav" id="nav">
      <Link href="/store">
        <FontAwesomeIcon 
          icon={faShoppingCart}
          style={{fontSize: `1.8rem`, maxWidth: `1.8rem`, marginRight: `.8rem`, lineHeight: 0}}
        />      
        Store
      </Link>
      <Link href="/">
        <FontAwesomeIcon 
          icon={faInfoCircle}
          style={{fontSize: `1.8rem`, maxWidth: `1.8rem`, marginRight: `.8rem`, lineHeight: 0}}
        />
        About
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
