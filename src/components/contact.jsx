import React from 'react'

function Contact() {
  return (
    <>
  <header>
    <h2 className="h2 article-title">Contact</h2>
  </header>
  {/* <section className="mapbox" data-mapbox> */}
    <figure>
      <iframe
        src="https://forms.visme.co/formsPlayer/76nkg667-contact-us"
        width={1000}
        height={800}
        loading="lazy"
      />
    </figure>
  {/* </section> */}
  {/* <section className="contact-form">
    <h3 className="h3 form-title">Contact Form</h3>
    <form action="#" className="form" data-form="">
      <div className="input-wrapper">
        <input
          type="text"
          name="fullname"
          className="form-input"
          placeholder="Full name"
          required=""
          data-form-input=""
        />
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Email address"
          required=""
          data-form-input=""
        />
      </div>
      <textarea
        name="message"
        className="form-input"
        placeholder="Your Message"
        required=""
        data-form-input=""
        defaultValue={""}
      />
      <button className="form-btn" type="submit" disabled="" data-form-btn="">
        <ion-icon name="paper-plane" />
        <span>Send Message</span>
      </button>
    </form>
  </section> */}


    </>
  )
}

export default Contact