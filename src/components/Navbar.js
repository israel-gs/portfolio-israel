import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/marca-israel.png'
function Navbar() {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} alt="Logo" />
          </Link>
          {/* <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div> */}

        </div>

        {/* <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/contact" className="button btn-contact">Contáctame</Link>
            </div>
          </div>
        </div> */}

      </div>

    </nav>
  )
}

export default Navbar