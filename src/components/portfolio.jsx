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
import A6 from './assests/images/50-6.png';
import A7 from './assests/images/50-7.png';
import A8 from './assests/images/50-8.png';
import A9 from './assests/images/50-9.png';
import A10 from './assests/images/50-10.png';
import A11 from './assests/images/50-11.png';
import A12 from './assests/images/50-12.png';
import A13 from './assests/images/50-13.png';
import A14 from './assests/images/50-14.png';
import A15 from './assests/images/50-15.png';
import A16 from './assests/images/50-16.png';
import A17 from './assests/images/50-17.png';
import A18 from './assests/images/50-18.png';
import A19 from './assests/images/50-19.png';
import A20 from './assests/images/50-20.png';
import A21 from './assests/images/50-21.png';
import A22 from './assests/images/50-22.png';
import A23 from './assests/images/50-23.png';
import A24 from './assests/images/50-24.png';
import A25 from './assests/images/50-25.png';
import A26 from './assests/images/50-26.png';
import A27 from './assests/images/50-27.png';
import A28 from './assests/images/50-28.png';
import A29 from './assests/images/50-29.png';
import A30 from './assests/images/50-30.png';
import A31 from './assests/images/50-31.png';
import A32 from './assests/images/50-32.png';
import A33 from './assests/images/50-33.png';
import A34 from './assests/images/50-34.png';
import A35 from './assests/images/50-35.png';
import A36 from './assests/images/50-36.png';
import A37 from './assests/images/50-37.png';
import A38 from './assests/images/50-38.png';
import A39 from './assests/images/50-39.png';
import A40 from './assests/images/50-40.png';
import A41 from './assests/images/50-41.png';
import A42 from './assests/images/50-42.png';
import A43 from './assests/images/50-43.png';

import A45 from './assests/images/50-45.png';
import A46 from './assests/images/50-46.png';



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
    {id: 25, title: 'Book-Store', category: 'front-end', subCategory: 'html-css-js', img: A5, link: 'https://e-book-03.netlify.app/'},
    {id: 26, title: 'Hotel-Website', category: 'front-end', subCategory: 'html-css-js', img: A6, link: 'https://hotel-landing-06.netlify.app/'},
    {id: 27, title: 'Photo-Agency', category: 'front-end', subCategory: 'html-css-js', img: A7, link: 'https://photography-portfolio07.netlify.app/'},
    {id: 28, title: 'Gym-Website', category: 'front-end', subCategory: 'html-css-js', img: A8, link: 'https://fitness-portfolio8.netlify.app/'},
    {id: 29, title: 'Password-Generator', category: 'front-end', subCategory: 'html-css-js', img: A9, link: 'https://generate-pass5.netlify.app/'},
    {id: 30, title: 'QR-Code-Generator', category: 'front-end', subCategory: 'html-css-js', img: A10, link: 'https://qr-code-generator10.netlify.app/'},
    {id: 31, title: 'Weather-App', category: 'front-end', subCategory: 'html-css-js', img: A11, link: 'https://weather-app-11-sd.netlify.app/'},
    {id: 32, title: 'Tic-tac-toe', category: 'front-end', subCategory: 'html-css-js', img: A12, link: 'https://tic-tac-toe-sdev.netlify.app/'},
    {id: 33, title: 'Link-Shortner', category: 'front-end', subCategory: 'html-css-js', img: A13, link: 'https://link-shorten-13.netlify.app/'},
    {id: 34, title: 'Drawing-App', category: 'front-end', subCategory: 'html-css-js', img: A14, link: 'https://drawing-app-14.netlify.app/'},
    {id: 35, title: 'Alarm-Clock', category: 'front-end', subCategory: 'html-css-js', img: A15, link: 'https://alarm-clock-15.netlify.app/'},
    {id: 36, title: 'Meme-Generator', category: 'front-end', subCategory: 'html-css-js', img: A16, link: 'https://meme-generator-16.netlify.app/'},
    {id: 37, title: 'Chatting App', category: 'front-end', subCategory: 'html-css-js', img: A17, link: 'https://chatting-webapp-17.netlify.app/'},
    {id: 38, title: 'Online-From', category: 'front-end', subCategory: 'html-css-js', img: A18, link: 'https://onlinnne-form.netlify.app/'},
    {id: 39, title: 'Language-Translator', category: 'front-end', subCategory: 'html-css-js', img: A19, link: 'https://translator-19.netlify.app/'},
    {id: 40, title: 'Piano-App', category: 'front-end', subCategory: 'html-css-js', img: A20, link: 'https://playable-piano20.netlify.app/'},
    {id: 41, title: 'Image-Resizer', category: 'front-end', subCategory: 'html-css-js', img: A21, link: 'https://image-resizer-21.netlify.app/'},
    {id: 42, title: 'Calender-App', category: 'front-end', subCategory: 'html-css-js', img: A22, link: 'https://dynamic-calander-22.netlify.app/'},
    {id: 43, title: 'File-downloader', category: 'front-end', subCategory: 'html-css-js', img: A23, link: 'https://file-downoader-23.netlify.app/'},
    {id: 44, title: 'Chess-Game', category: 'front-end', subCategory: 'html-css-js', img: A24, link: 'https://chess-game-24.netlify.app/'},
    {id: 45, title: 'Car-Racing', category: 'front-end', subCategory: 'html-css-js', img: A25, link: 'https://car-racing-25.netlify.app/'},
    {id: 46, title: 'Connect-4', category: 'front-end', subCategory: 'html-css-js', img: A26, link: 'https://connect-game-26.netlify.app/'},
    {id: 47, title: 'Snake-Game', category: 'front-end', subCategory: 'html-css-js', img: A27, link: 'https://snake-lader-game-27.netlify.app/'},
    {id: 48, title: 'Word-Guessing', category: 'front-end', subCategory: 'html-css-js', img: A28, link: 'https://word-guessing-game-28.netlify.app/'},
    {id: 49, title: 'Analog-Clock', category: 'front-end', subCategory: 'html-css-js', img: A29, link: 'https://analog-watch-29.netlify.app/'},
    {id: 50, title: 'Image-Editor', category: 'front-end', subCategory: 'html-css-js', img: A30, link: 'https://photo-editor-30.netlify.app/'},
    {id: 51, title: 'Music-Player', category: 'front-end', subCategory: 'html-css-js', img: A31, link: 'https://music-player-31.netlify.app/'},
    {id: 52, title: 'Calculator', category: 'front-end', subCategory: 'html-css-js', img: A32, link: 'https://calculator-32.netlify.app/'},
    {id: 53, title: 'Rock-paper-scissor', category: 'front-end', subCategory: 'html-css-js', img: A33, link: 'https://rock-paper-scissors-game-33.netlify.app/'},
    {id: 54, title: 'Notes-App', category: 'front-end', subCategory: 'html-css-js', img: A34, link: 'https://note-app-34.netlify.app/'},
    {id: 55, title: 'Save-Text-File', category: 'front-end', subCategory: 'html-css-js', img: A35, link: 'https://text-file-saver.netlify.app/'},
    {id: 56, title: 'Trading-App', category: 'front-end', subCategory: 'html-css-js', img: A36, link: 'https://trading-app-38.netlify.app/'},
    {id: 57, title: 'Stop-watch', category: 'front-end', subCategory: 'html-css-js', img: A37, link: 'https://stop-watch-39.netlify.app/'},
    {id: 58, title: 'To-do-list', category: 'front-end', subCategory: 'html-css-js', img: A38, link: 'https://todo-list-41.netlify.app'},
    {id: 59, title: 'Twitter-Clone', category: 'front-end', subCategory: 'html-css-js', img: A39, link: 'https://twitter-clone-42.netlify.app/'},
    {id: 60, title: 'Typing-Game', category: 'front-end', subCategory: 'html-css-js', img: A40, link: 'https://typing-speed-testbysudeep.netlify.app/'},
    {id: 61, title: 'Admin-Panel', category: 'front-end', subCategory: 'html-css-js', img: A41, link: 'https://admin-panel-dashboard-44.netlify.app/'},
    {id: 62, title: 'Qoute-Generator', category: 'front-end', subCategory: 'html-css-js', img: A42, link: 'https://random-qoute-generator-47.netlify.app/'},
    {id: 63, title: 'Quiz-App', category: 'front-end', subCategory: 'html-css-js', img: A43, link: 'https://online-quiz-48.netlify.app/'},
    {id: 64, title: 'Dinoe-Game', category: 'front-end', subCategory: 'html-css-js', img: A45, link: 'https://dino-game-49.netlify.app/'},
    {id: 65, title: 'Drag-Drop', category: 'front-end', subCategory: 'html-css-js', img: A46, link: 'https://drag-drop-image.netlify.app/'},



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

