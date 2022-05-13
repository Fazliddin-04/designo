import React, { useState } from 'react'
import logo from '../assets/img/logo-light.png'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#!" className="navbar-logo">
          <img src={logo} alt="logo" />
        </a>
        <div
          className={`hamburger ${openMenu ? 'active' : ''}`}
          onClick={() => setOpenMenu((prevState) => !prevState)}
        >
          <span></span>
        </div>
        <div className={`navbar-list ${openMenu ? 'active' : ''}`}>
          <a href="#!" className="navbar-list__link">
            OUR COMPANY
          </a>
          <a href="#!" className="navbar-list__link">
            LOCATIONS
          </a>
          <a href="#!" className="navbar-list__link">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
