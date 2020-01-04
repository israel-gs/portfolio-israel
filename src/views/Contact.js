import React, { Component, Fragment } from 'react'

class Contact extends Component {

  render() {
    return (
      <Fragment>

        <section className="section contact-section-title is-medium has-text-centered is-long">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <h1 className="is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-white">Thanks for taking the time to reach out. How can I help you today?</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section-form is-white">
          <div className="container">
            <form className="form" acceptCharset="UTF-8" action="https://usebasin.com/f/8da4f82a4a96" encType="multipart/form-data" method="POST">

              <div className="field">
                <label className="label has-text-white">Name</label>
                <div className="control">
                  <input type="text" id="name" name="name" required className="input" />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white">Email</label>
                <div className="control">
                  <input type="email" id="email" name="email" required className="input" />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white">Message</label>
                <div className="control">
                  <textarea id="message" name="message" required rows="5" className="textarea" />
                </div>
              </div>

              <input type="hidden" id="gotcha" name="_gotcha" />
              <div className="columns is-centered">
                <div className="column is-one-third">
                  <div className="field">
                    <div className="control">
                      <button className="button is-medium has-text-white has-background-grey-darker is-fullwidth contact-button" type="submit">Send</button>
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