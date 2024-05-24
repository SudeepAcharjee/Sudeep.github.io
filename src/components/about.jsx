import React from 'react'
import Icondesign from './assests/images/icon-design.svg'
import Icondev from './assests/images/icon-dev.svg'
import Iconapp from './assests/images/icon-app.svg'

import Github from './github'
function About() {
  return (
    <>
    <article className="about active" >

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>
    <section className="about-text">
      <p>
        I'm Creative Full-stack Developer and UI/UX Designer from Assam, India. . I
        have been working in Full-Stack Development and Cyber Security. 
        I enjoy turning complex problems into simple, beautiful and intuitive designs.
        When I'm not coding or pushing pixels, you'll find me in the chess.com playing chess.
        I have been practising full time coding for the past 2 years and have been working on it
      </p>
      <p>
       My job is to build your website so that it is functional and user-friendly 
        but at the same time attractive. I have a strong passion for the creativity and
        discipline that goes into front-end development. Keeping in mind scalability and
        clean code that is maintainable and readable. Backend development is also a strong
        suit of mine. I am proficient in PHP, Node.js, and Python. 
      </p>
    </section>
    {/*
  - service
*/}
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>
      <ul className="service-list">
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src={Icondesign}
              alt="design icon"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web design</h4>
            <p className="service-item-text">
              The most modern and high-quality design made at a professional. I create a unique design that will help you stand out from the competition.
              level.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src={Icondev}
              alt="Web development icon"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Front-end development</h4>
            <p className="service-item-text">
              High-quality development of sites at the professional level. Including adaptive layout and animation with new technologies
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src={Iconapp}
              alt="mobile app icon"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Cyber Security</h4>
            <p className="service-item-text">
             Cyber Security is the practice of defending servers, data from malicious attacks. I have experience in Cyber Security and can help you secure your website.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src={Icondev}
              alt="camera icon"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Backend Development</h4>
            <p className="service-item-text">
            Backend development is the server-side of the website. It is responsible for managing data within the database and serving that data to the front-end to be displayed.
            </p>
          </div>
        </li>
      </ul>
    </section>
    {/*
  - testimonials
*/}
    {/* <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item="">
            <figure className="testimonials-avatar-box">
              <img
                src="./assets/images/avatar-1.png"
                alt="Daniel lewis"
                width={60}
                data-testimonials-avatar=""
              />
            </figure>
            <h4
              className="h4 testimonials-item-title"
              data-testimonials-title=""
            >
              Daniel lewis
            </h4>
            <div className="testimonials-text" data-testimonials-text="">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor
                sit amet, ullamcous cididt consectetur adipiscing elit, seds
                do et eiusmod tempor incididunt ut laborels dolore magnarels
                alia.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item="">
            <figure className="testimonials-avatar-box">
              <img
                src="./assets/images/avatar-2.png"
                alt="Jessica miller"
                width={60}
                data-testimonials-avatar=""
              />
            </figure>
            <h4
              className="h4 testimonials-item-title"
              data-testimonials-title=""
            >
              Jessica miller
            </h4>
            <div className="testimonials-text" data-testimonials-text="">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor
                sit amet, ullamcous cididt consectetur adipiscing elit, seds
                do et eiusmod tempor incididunt ut laborels dolore magnarels
                alia.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item="">
            <figure className="testimonials-avatar-box">
              <img
                src="./assets/images/avatar-3.png"
                alt="Emily evans"
                width={60}
                data-testimonials-avatar=""
              />
            </figure>
            <h4
              className="h4 testimonials-item-title"
              data-testimonials-title=""
            >
              Emily evans
            </h4>
            <div className="testimonials-text" data-testimonials-text="">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor
                sit amet, ullamcous cididt consectetur adipiscing elit, seds
                do et eiusmod tempor incididunt ut laborels dolore magnarels
                alia.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item="">
            <figure className="testimonials-avatar-box">
              <img
                src="./assets/images/avatar-4.png"
                alt="Henry william"
                width={60}
                data-testimonials-avatar=""
              />
            </figure>
            <h4
              className="h4 testimonials-item-title"
              data-testimonials-title=""
            >
              Henry william
            </h4>
            <div className="testimonials-text" data-testimonials-text="">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor
                sit amet, ullamcous cididt consectetur adipiscing elit, seds
                do et eiusmod tempor incididunt ut laborels dolore magnarels
                alia.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section> */}
    {/*
  - testimonials modal
*/}
    {/* <div className="modal-container" data-modal-container="">
      <div className="overlay" data-overlay="" />
      <section className="testimonials-modal">
        <button className="modal-close-btn" data-modal-close-btn="">
          <ion-icon name="close-outline" />
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img
              src="./assets/images/avatar-1.png"
              alt="Daniel lewis"
              width={80}
              data-modal-img=""
            />
          </figure>
          <img src="./assets/images/icon-quote.svg" alt="quote icon" />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title="">
            Daniel lewis
          </h4>
          <time dateTime="2021-06-14">14 June, 2021</time>
          <div data-modal-text="">
            <p>
              Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
        </div>
      </section>
    </div> */}
    {/*
  - clients
*/}
    {/* <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        <li className="clients-item">
          <a href="#">
            <img src={Logo1} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo2} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo3} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo4} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo5} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo6} alt="client logo" />
          </a>
        </li>
      </ul>
    </section> */}
    <Github />
  </article>
  </>
  )
}

export default About