import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/marca-israel-white.png'
function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
          <div className="navbar-item">
              <Link to="#about">About</Link>
            </div>
          <div className="navbar-item">
              <Link to="/contact">Skills</Link>
            </div>
            <div className="navbar-item">
              <Link to="/contact">My Work</Link>
            </div>
            <div className="navbar-item">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar