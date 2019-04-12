import React, { Component, Fragment } from 'react'

class Contact extends Component {

  render() {
    return (
      <Fragment>

        <section className="section contact-section-title is-medium is-white has-text-centered is-long  ">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Gracias por tomarte el tiempo de escribirme ¿Cómo te puedo ayudar?</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section-form is-white">
          <div className="container">
            <form className="form" acceptCharset="UTF-8" action="https://usebasin.com/f/8da4f82a4a96" encType="multipart/form-data" method="POST">

              <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                  <input type="text" id="name" name="name" required className="input" />
                </div>
              </div>

              <div className="field">
                <label className="label">Correo</label>
                <div className="control">
                  <input type="email" id="email" name="email" required className="input" />
                </div>
              </div>

              <div className="field">
                <label className="label">Mensaje</label>
                <div className="control">
                  <textarea id="message" name="message" required rows="5" className="textarea" />
                </div>
              </div>

              <input type="hidden" id="gotcha" name="_gotcha" />
              <div className="columns is-centered">
                <div className="column is-one-third">
                  <div className="field">
                    <div className="control">
                      <button className="button has-text-white has-background-grey-darker is-fullwidth" type="submit">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

      </Fragment>
    )
  }

}

export default Contact