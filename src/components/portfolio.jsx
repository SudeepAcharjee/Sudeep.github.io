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
import Invite from './assests/images/invite.png';
import Dictionary from './assests/images/dictionary.png';
import Linktree from './assests/images/linktree.png';
import Nevermore from './assests/images/nevermore.png';
import Falani from './assests/images/falani.png';
import Port from './assests/images/port.png';
import Chat from './assests/images/chatroom.png';
import School from './assests/images/school.png';
import Attendance from './assests/images/Attendance.png';
import A1 from './assests/images/50-1.png';
import A2 from './assests/images/50-2.png';
import A3 from './assests/images/50-3.png';
import A4 from './assests/images/50-4.png';
import A5 from './assests/images/50-5.png';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: 1, title: 'C-Projects', subCategory: 'C', category: 'others',  img: Cimage, link: 'https://github.com/SudeepAcharjee/C-Projects' },
    { id: 2, title: 'C++-Projects', category: 'others', subCategory: 'C++', img: Cppimage, link: 'https://github.com/SudeepAcharjee/CPP-Projects' },
    { id: 3, title: 'Python-Projects', category: 'others', subCategory: 'Python', img: Python, link: 'https://github.com/SudeepAcharjee/Python-projects' },
    { id: 4, title: 'User-Input-Table', category: 'front-end', subCategory: 'html-css-js', img: Table, link: 'https://user-input-table.netlify.app/' },
    { id: 5, title: 'Portfolio1', category: 'front-end', subCategory: 'html-css-js', img: Portfolio1, link: 'https://sudeep-portfolio.netlify.app/'},
    { id: 6, title: 'Monkey-Login-Page', category: 'front-end', subCategory: 'html-css-js', img: Monkey, link: 'https://animated-monkey-login.netlify.app/'},
    { id: 7, title: 'Confess-App', category: 'front-end', subCategory: 'html-css-js', img: Confess, link: 'https://confess-out-lcbc.netlify.app/'},
    { id: 8, title: 'Portfolio2', category: 'front-end', subCategory: 'html-css-js', img: Portfolio2, link: 'https://sudeep-acharjee.netlify.app/'},
    { id: 9, title: 'Profile-card', category: 'front-end', subCategory: 'html-css-js', img: Pcard, link: 'https://sudeep-profile-card.netlify.app/'},
    { id: 10, title: 'Audio-Text Converter', category: 'front-end', subCategory: 'html-css-js', img: Text, link: 'https://text-ai.netlify.app/'},
    { id: 11, title: 'Halloween', category: 'front-end', subCategory: 'html-css-js', img: Hallo, link: 'https://web3-rose.vercel.app/'},
    { id: 12, title: 'Invite-Card', category: 'front-end', subCategory: 'html-css-js', img: Invite, link: 'https://invitation-by-sudeep.netlify.app/'},
    { id: 13, title: 'Dictionary-App', category: 'front-end', subCategory: 'html-css-js', img: Dictionary, link: 'https://dictionary-s-develops.netlify.app/'},
    { id: 14, title: 'Linktree', category: 'front-end', subCategory: 'html-css-js', img: Linktree, link: 'https://linktree-sudeep.netlify.app/'},
    { id: 15, title: 'Nevermore', category: 'front-end', subCategory: 'html-css-js', img: Nevermore, link: 'https://never-more.netlify.app/'},
    { id: 16, title: 'Falani', category: 'front-end', subCategory: 'html-css-js', img: Falani, link: 'https://falani.vercel.app/'},
    { id: 17, title: 'Portfolio', category: 'react', subCategory: 'React-js', img: Port, link: 'https://sudeep-acharjee-live.netlify.app/'},
    {id: 18, title: 'Chat-Room', category: 'full-stack', subCategory: 'Firebase-React-js', img: Chat, link: 'https://web-chat-firebase.netlify.app/'},
    {id: 19, title: 'School-Management', category: 'full-stack', subCategory: 'Js-Firebase', img: School, link: 'https://check-school.netlify.app/'},
    {id: 20, title: 'Attendance-Management', category: 'full-stack', subCategory: 'Js-Firebase', img: Attendance, link: 'https://lcbc-it-dept.netlify.app/'},
    {id: 21, title: 'Company-Website', category: 'front-end', subCategory: 'html-css-js', img: A1, link: 'https://company-portfolio-1.netlify.app/'},
    {id: 22, title: 'Blogs-Website', category: 'front-end', subCategory: 'html-css-js', img: A2, link: 'https://blogger-sudeep.netlify.app/'},
    {id: 23, title: 'Restaurant-Website', category: 'front-end', subCategory: 'html-css-js', img: A3, link: 'https://resutrantcode.netlify.app/'},
    {id: 24, title: 'Thrift-Store', category: 'front-end', subCategory: 'html-css-js', img: A4, link: 'https://thrift-flip-store.netlify.app/'},
    {id: 25, title: 'Book-Store', category: 'front-end', subCategory: 'html-css-js', img: A5, link: 'https://book-store-sudeep.netlify.app/'},
    



  ];

  // Sort projects in descending rder by id
  const sortedProjects = projects.sort((a, b) => b.id - a.id);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = sortedProjects.filter(project =>
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
              className={activeFilter === 'react' ? 'active' : ''}
              onClick={() => handleFilterClick('react')}
            >
              React
            </button>
          </li>
          <li className="filter-item">
            <button
              className={activeFilter === 'full-stack' ? 'active' : ''}
              onClick={() => handleFilterClick('full-stack')}
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
                <p1 className="project-sub-category">{project.subCategory}</p1>
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

