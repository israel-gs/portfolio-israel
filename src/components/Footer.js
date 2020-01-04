import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/marca-israel-white.png'

function Footer() {
  return (
    <footer className="footer has-bg-blue has-text-centered">
      <div className="container is-narrow">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="title has-text-light is-size-4-touch">Israel Gutierrez, 2020</h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer