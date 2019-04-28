import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/marca-israel-white.png'

function Footer() {
  return (
    <footer className="footer has-background-primary  has-text-centered">
      <div className="container is-narrow">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="title has-text-light is-size-4-touch">Aprende constantemente en tu día a día.</h1>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-two-quarters is-full-mobile">
            <a className="button is-large is-outlined btn-social" href="https://github.com/israel-gs" target="_blank">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
            </a>

            <a className="button is-large is-outlined btn-social" href="https://www.instagram.com/israelgs.photo/" target="_blank">
              <span className="icon">
                <i className="fab fa-instagram"></i>
              </span>
            </a>

            <a className="button is-large is-outlined btn-social" href="https://dribbble.com/israel-gs" target="_blank">
              <span className="icon">
                <i className="fab fa-dribbble"></i>
              </span>
            </a>

            <a className="button is-large is-outlined btn-social" href="https://www.linkedin.com/in/israel-gs/" target="_blank">
              <span className="icon">
                <i className="fab fa-linkedin-in"></i>
              </span>
            </a>

            <a className="button is-large is-outlined btn-social" href="mailto:israelgs83@gmail.com">
              <span className="icon">
                <i className="far fa-envelope"></i>
              </span>
            </a>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="colum-is-one-third">
            <p className="copyright-text">This website was handcrafted with ❤️ by me</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer