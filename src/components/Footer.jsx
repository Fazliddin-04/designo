import React from 'react'
import logo from '../assets/img/logo-dark.png'
import {
  FaFacebookSquare,
  FaYoutube,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <a href="#!" className="footer-logo">
            <img src={logo} alt="logo" />
          </a>
          <hr />
          <div className={`footer-list`}>
            <a href="#!" className="footer-list__link">
              OUR COMPANY
            </a>
            <a href="#!" className="footer-list__link">
              LOCATIONS
            </a>
            <a href="#!" className="footer-list__link">
              CONTACT
            </a>
          </div>
        </div>
        <hr />
        <div className="footer-nav">
          <p className="text">
            <a
              href="https://goo.gl/maps/C914LUzukMM6fkt46"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Designo Central Office</strong> <br /> 3886 Wellington
              Street <br /> Toronto, Ontario M9C 3J5
            </a>
          </p>
          <p className="text">
            <strong>Contact Us (Central Office)</strong>
            <br />
            <a href="tel:+12538638967">P : +1 253-863-8967</a>
            <br />
            <a href="mailto:contact@designo.co">M : contact@designo.co</a>
          </p>
          <div className="footer-icons">
            <a href="#!">
              <FaFacebookSquare size={24} fill="#e7816b" />
            </a>
            <a href="#!">
              <FaYoutube size={24} fill="#e7816b" />
            </a>
            <a href="#!">
              <FaTwitter size={24} fill="#e7816b" />
            </a>
            <a href="#!">
              <FaPinterest size={24} fill="#e7816b" />
            </a>
            <a href="#!">
              <FaInstagram size={24} fill="#e7816b" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
