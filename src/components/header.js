import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/styles.css"
import "../styles/headerStyles.css"

import Logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <Link>
      <img src={Logo} className="logo"></img>
    </Link>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/store">Store</Link>
      <Link href="/">About</Link>
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
