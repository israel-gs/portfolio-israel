import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import heroImage from '../images/undraw_code_review_l1q9.svg'
import frontendLogo from '../images/undraw_frontend.svg'
import backendLogo from '../images/undraw_backend.svg'
import avansysLogo from '../images/avansys-logo.png'
import teslaLogo from '../images/testa-logo.png'
import cibertecLogo from '../images/cibertec-logo.png'
import sacoLogo from '../images/saco-logo.png'

function Home() {
  return (
    <Fragment>
      <section className="hero is-fullheight-with-navbar me">
        <div className="container">
          <div className="left-side">
            <div>
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                Hi, <br></br>
                I'm Israel <br></br>
                A Frontend Developer
              </h1>
              <Link to="/contact" className="button is-medium is-black has-bg-primary contact-button">Contact me</Link>
            </div>
          </div>
          <div className="right-side">

          </div>
        </div>
      </section>

      <section className="section is-long has-text-white whoami" id="about">
        <div className="container">
          <div className="left-side">
              <h2 className="history is-size-3">
                About me
              </h2>
          </div>
          <div className="right-side">
              <p className="history is-size-5">
                Llevo aproximadamente 2 años en el desarrollo web y 5 años interesado en la informática, principalmente he trabajado con Java. Soy autodidacta, actualmente estudiante activo de Pratzi.com. Otras de mis pasiones son la fotografía y el dibujo.
              </p>
          </div>
        </div>
      </section>

      <section className="section is-long has-text-white is-fullheight skills">
        <div className="container">
          <div className="left-side">
              <h2 className="history is-size-3">
                Front-End
              </h2>
              <div className="list-container">
                <h3 className="history is-size-4">Languages</h3>
                <ul>
                  <li>HTML</li>
                  <li>Css, Less, Sass</li>
                  <li>Javascript</li>
                </ul>
              </div>
              <div className="list-container">
                <h3 className="history is-size-4">Frameworks</h3>
                <ul>
                  <li>React JS</li>
                  <li>Vue JS</li>
                  <li>Sencga Ext</li>
                  <li>Ant Design</li>
                  <li>Bulma</li>
                </ul>
              </div>
          </div>
          <div className="right-side">
              <h2 className="history is-size-3">
                Back-End
              </h2>
              <div className="list-container">
                <h3 className="history is-size-4">Languages</h3>
                <ul>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>Node JS</li>
                </ul>
              </div>
              <div className="list-container">
                <h3 className="history is-size-4">Frameworks</h3>
                <ul>
                  <li>Express</li>
                  <li>Spring</li>
                </ul>
              </div>
          </div>
        </div>
      </section>

      <section className="section is-long has-text-centered has-text-white is-fullheight collabs">
        <div className="container">
          <div className="content">
            <h2 className="history is-size-4">
              I have collaborated with some companies:
            </h2>
            <div className="images-container">
              <div className="image-container">
                <img src={teslaLogo}></img>
              </div>
              <div className="image-container">
                <img src={cibertecLogo}></img>
              </div>
            </div>
            <div className="images-container">
              <div className="image-container">
                <img src={avansysLogo}></img>
              </div>
              <div className="image-container">
                <img src={sacoLogo}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home