import React, { Fragment } from 'react'

import heroImage from '../images/undraw_code_review_l1q9.svg'
import frontendLogo from '../images/undraw_frontend.svg'
import backendLogo from '../images/undraw_backend.svg'

function Home() {
  return (
    <Fragment>
      <section className="hero has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
              Java & Javascript Developer
              </h1>
            <p className="subtitle">
              Analizo y creo una <strong>solución</strong> para tu problema!
              </p>
            <img src={heroImage} className="hero-image" alt="Logo"/>
          </div>
        </div>
      </section>

      <section className="section is-medium is-primary has-text-centered is-long  ">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1 className="title has-text-white is-spaced is-size-3-desktop is-size-4-mobile">Hola, soy Israel Gutierrez. Encantado de conocerte.</h1>
              <p>
              Llevo aproximadamente 2 años en el desarrollo web y 5 años interesado en la informática, principalmente he trabajado con Java. Soy autodidacta, actualmente estudiante activo de Pratzi.com. Otras de mis pasiones son la fotografía y el dibujo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills has-text-centered">
        <div className="container is-narrow">
          <div className="box has-background-white-bis">
            <div className="content">
              <div className="columns is-centered">
                <div className="column">
                  <img src={frontendLogo} className="skills-column-image" alt="" />
                  <h1 className="title is-size-4 is-spaced">Front-end</h1>
                  <p className="list-title has-text-primary has-text-weight-normal">Lenguajes</p>
                  <p>HTML, Pug, CSS, Vue Js, React Js</p>
                  <p className="list-title has-text-primary has-text-weight-normal">Herramientas</p>
                  <ul className="skills-tools">
                    <li>Bulma</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>Buefy</li>
                  </ul>
                </div>
                <div className="column">
                  <img src={backendLogo} className="skills-column-image" alt="" />
                  <h1 className="title is-size-4 is-spaced">Back-end</h1>
                  <p className="list-title has-text-primary has-text-weight-normal">Lenguajes</p>
                  <p>Java, Node JS</p>
                  <p className="list-title has-text-primary has-text-weight-normal">Herramientas</p>
                  <ul className="skills-tools">
                    <li>VSCode</li>
                    <li>NetBeans</li>
                    <li>Eclipse</li>
                    <li>STS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium has-text-centered">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1 className="title is-size-4 is-spaced">He colaborado con las siguientes empresas:</h1>
            </div>
          </div>
          <div className="colums is-multiline is-mobile">
            <div className="column">
              <a href="http://sacooliveros.edu.pe/" target="_blannk">
                <img className="collab-image" src="http://sacooliveros.edu.pe/images/sacooliveros/Home/logos/logo-saco-apeiron.png" alt="" />
              </a>
            </div>

            <div className="column">
              <a href="https://www.avansys.edu.pe/" target="_blank">
                <img className="collab-image" src="https://www.avansys.edu.pe/sites/default/files/logix.png" alt="" />
              </a>
            </div>

            <div className="column  ">
              <a href="https://www.cibertec.edu.pe/" target="_blank">
                <img className="collab-image" src="https://www.cibertec.edu.pe/images/logo-cibertec.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home