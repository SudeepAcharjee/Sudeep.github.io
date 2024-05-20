import React, { useState } from 'react';
import Cimage from './assests/images/c.webp';
import Cppimage from './assests/images/c++.webp';
import Python from './assests/images/python.webp';
import Table from './assests/images/Table.png';
import Portfolio1 from './assests/images/portfolio1.png';
import Monkey from './assests/images/monkey.png';
import Confess from './assests/images/confess.png';
import Portfolio2 from './assests/images/portfoli2.png';
import Pcard from './assests/images/pcard.png';
import Text from './assests/images/text-cov.png';
import Hallo from './assests/images/hallowen.png';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: 1, title: 'C-Projects', category: 'others', img: Cimage, link: 'https://github.com/SudeepAcharjee/C-Projects' },
    { id: 2, title: 'C++-Projects', category: 'others', img: Cppimage, link: 'https://github.com/SudeepAcharjee/CPP-Projects' },
    { id: 3, title: 'Python-Projects', category: 'others', img: Python, link: 'https://github.com/SudeepAcharjee/Python-projects'},
    { id: 4, title: 'User-Input-Table(JS)', category: 'front-end', img: Table, link: 'https://user-input-table.netlify.app/' },
    { id: 5, title: 'Portfolio1(js)', category: 'front-end', img: Portfolio1, link: 'https://sudeep-portfolio.netlify.app/'},
    { id: 6, title: 'Monkey-Login-Page(js)', category: 'front-end', img: Monkey, link: 'https://animated-monkey-login.netlify.app/'},
    { id: 7, title: 'Confess-App(js)', category: 'front-end', img: Confess, link: 'https://confess-out-lcbc.netlify.app/'},
    { id: 8, title: 'Portfolio2(Js-3js)', category: 'front-end', img: Portfolio2, link: 'https://sudeep-acharjee.netlify.app/'},
    { id: 9, title: 'Profile-card(js)', category: 'front-end', img: Pcard, link: 'https://sudeep-profile-card.netlify.app/'},
    { id: 10, title: 'Audio-Text Converter(JS)', category: 'front-end', img: Text, link: 'https://text-ai.netlify.app/'},



  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter(project =>
    activeFilter === 'All' || project.category === activeFilter.toLowerCase()
  );

  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className={activeFilter === 'All' ? 'active' : ''}
              onClick={() => handleFilterClick('All')}
            >
              All
            </button>
          </li>
          <li className="filter-item">
            <button
              className={activeFilter === 'front-end' ? 'active' : ''}
              onClick={() => handleFilterClick('front-end')}
            >
              Front-end
            </button>
          </li>
          <li className="filter-item">
            <button
              className={activeFilter === 'Full-Stack' ? 'active' : ''}
              onClick={() => handleFilterClick('Full-Stack')}
            >
              Full-Stack
            </button>
          </li>
          <li className="filter-item">
            <button
              className={activeFilter === 'others' ? 'active' : ''}
              onClick={() => handleFilterClick('others')}
            >
              others
            </button>
          </li>
          
        </ul>
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline" />
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Portfolio;
