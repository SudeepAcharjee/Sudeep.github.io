import React from 'react';
import Project2Image from './assests/images/project-2.png';
import Project1Image from './assests/images/project-1.jpg';
import Project3Image from './assests/images/project-3.jpg';
import Project4Image from './assests/images/project-4.png';
import Project5Image from './assests/images/project-5.png';
import Project6Image from './assests/images/project-6.png';
import Project7Image from './assests/images/project-7.png';
import Project8Image from './assests/images/project-8.jpg';
import Project9Image from './assests/images/project-9.png';

function Portfolio() {



  

  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>
        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>
          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>
            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>
        <ul className="project-list">
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={Project1Image}
                  alt="finance"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Finance</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li
        className="project-item  active"
        data-filter-item
        data-category="web development"
      >
        <a href="#">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>
            <img
              src={Project2Image}
              alt="orizon"
              loading="lazy"
            />
          </figure>
          <h3 className="project-title">Orizon</h3>
          <p className="project-category">Web development</p>
        </a>
      </li>
      <li
        className="project-item  active"
        data-filter-item
        data-category="web design"
      >
        <a href="#">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>
            <img
              src={Project3Image}
              alt="fundo"
              loading="lazy"
            />
          </figure>
          <h3 className="project-title">Fundo</h3>
          <p className="project-category">Web design</p>
        </a>
      </li>
      <li
        className="project-item  active"
        data-filter-item
        data-category="applications"
      >
        <a href="#">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>
            <img
              src={Project4Image}
              alt="brawlhalla"
              loading="lazy"
            />
          </figure>
          <h3 className="project-title">Brawlhalla</h3>
          <p className="project-category">Applications</p>
        </a>
      </li>
      <li
        className="project-item  active"
        data-filter-item
        data-category="web design"
      >
        <a href="#">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>
            <img
              src={Project5Image}
              alt="dsm."
              loading="lazy"
            />
          </figure>
          <h3 className="project-title">DSM.</h3>
          <p className="project-category">Web design</p>
        </a>
      </li>
      <li
        className="project-item  active"
        data-filter-item
        data-category="web design"
      >
        <a href="#">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>
            <img
              src={Project6Image}
              alt="metaspark"
              loading="lazy"
            />
          </figure>
          <h3 className="project-title">MetaSpark</h3>
          <p className="project-category">Web design</p>
        </a>
      </li>
      <li
        className="project-item  active"
        data-filter-item
        data-category="web development"
      >
        <a href="#">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>
            <img
              src={Project7Image}
              alt="summary"
              loading="lazy"
            />
          </figure>
          <h3 className="project-title">Summary</h3>
          <p className="project-category">Web development</p>
        </a>
      </li>
      <li
        className="project-item  active"
        data-filter-item
        data-category="applications"
      >
        <a href="#">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>
            <img
              src={Project8Image}
              alt="task manager"
              loading="lazy"
            />
          </figure>
          <h3 className="project-title">Task Manager</h3>
          <p className="project-category">Applications</p>
        </a>
      </li>
      <li
        className="project-item  active"
        data-filter-item
        data-category="web development"
      >
        <a href="#">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>
            <img
              src={Project9Image}
              alt="arrival"
              loading="lazy"
            />
          </figure>
          <h3 className="project-title">Arrival</h3>
          <p className="project-category">Web development</p>
        </a>
      </li>
    </ul>
  </section>
</>

  )
}

export default Portfolio 