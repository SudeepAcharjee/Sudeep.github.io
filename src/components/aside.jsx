import React from 'react'
import myAvatar from './assests/images/my-avatar.png';
function Aside() {
  return (
    <>

    <aside className="sidebar" data-sidebar>
    <div className="sidebar-info">
      <figure className="avatar-box">
        <img
          src={myAvatar}
          alt="Richard hanrick"
          width={80}
        />
      </figure>
      <div className="info-content">
        <h1 className="name" title="Richard hanrick">
          Sudeep Acharjee
        </h1>
        <p className="title">Full-Stack Developer</p>
      </div>
      <button className="info_more-btn" data-sidebar-btn >
        <span>Show Contacts</span>
       
      </button>
       <ul className="social-list">
        <li className="social-item">
          <a href="htps://github.com/SudeepAcharjee" className="social-link">
            <ion-icon name="logo-github" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://linkedin.com/in/Sudeep%20Acharjee" className="social-link">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
      </ul>
    </div>
    <div className="sidebar-info_more">
      <div className="separator" />
      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="mail-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a href="mailto:richard@example.com" className="contact-link">
              sudeepacharjeegp@gmail.com
            </a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="phone-portrait-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <a href="tel:+12133522795" className="contact-link">
              +91 8011307741
            </a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="calendar-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Birthday</p>
            <time dateTime="1982-06-23">January 4, 2004</time>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="location-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Guwahati, Assam, India</address>
          </div>
        </li>
      </ul>
      <div className="separator" />
     
    </div>
  </aside>
  </>
  )
}

export default Aside