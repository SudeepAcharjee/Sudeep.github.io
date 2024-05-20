import React, { useState } from 'react';
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
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: 1, title: 'Finance', category: 'web development', img: Project1Image },
    { id: 2, title: 'Orizon', category: 'web development', img: Project2Image },
    { id: 3, title: 'Fundo', category: 'web design', img: Project3Image },
    { id: 4, title: 'Brawlhalla', category: 'applications', img: Project4Image },
    { id: 5, title: 'DSM.', category: 'web design', img: Project5Image },
    { id: 6, title: 'MetaSpark', category: 'web design', img: Project6Image },
    { id: 7, title: 'Summary', category: 'web development', img: Project7Image },
    { id: 8, title: 'Task Manager', category: 'applications', img: Project8Image },
    { id: 9, title: 'Arrival', category: 'web development', img: Project9Image },
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
              className={activeFilter === 'Web design' ? 'active' : ''}
              onClick={() => handleFilterClick('Web design')}
            >
              Web design
            </button>
          </li>
          <li className="filter-item">
            <button
              className={activeFilter === 'Applications' ? 'active' : ''}
              onClick={() => handleFilterClick('Applications')}
            >
              Applications
            </button>
          </li>
          <li className="filter-item">
            <button
              className={activeFilter === 'Web development' ? 'active' : ''}
              onClick={() => handleFilterClick('Web development')}
            >
              Web development
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
              <a href="#">
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
