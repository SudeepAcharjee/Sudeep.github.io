import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome} from '@fortawesome/free-brands-svg-icons';

// , faSass, faBootstrap, faGit, faNpm, faJs, faReact, faVuejs, faAngular, faFont, faFileCode, faCss3Alt
function Resume() {
  return (
    
  <><header>
      <h2 className="h2 article-title">Resume</h2>
    </header><section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline" />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          Bachelors Of Computer Aplications
        </h4>
        <span>2022— Present</span>
        <p className="timeline-text">
          I am pursing a BCA degree full time from an affilaite LCB College, under Guwahati University. Guwahati, Assam.
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">Higher Secondary</h4>
        <span>2020 — 2022</span>
        <p className="timeline-text">
          I have completed my Higher Secondary from a reputed school Dronacharya Academy, Barpeta Road, Assam.
          I have secured 85% in my Higher Secondary Examination from AHSEC Board.
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          High school
        </h4>
        <span>2002 — 2004</span>
        <p className="timeline-text">
          I have completed my High School from one of the best school of North-east India Marian School.
          I have secured 73% in my High School Examination from SEBA Board.
        </p>
      </li>
    </ol>

      </section>



      <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <ion-icon name="book-outline" />
      </div>
      <h3 className="h3">Experience</h3>
    </div>
    <ol className="timeline-list">
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">Coding Club Board Member</h4>
        <span>2023 — Present</span>
        <p className="timeline-text">
          I am a board member of Coding Club of my college. I am responsible for conducting workshops, seminars, and events.
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">Hackathon</h4>
        <span>2023 — Present</span>
        <p className="timeline-text">
          I have participated in various hackathons and i have also won a few of them. I have also participated in many Open Source Contribution.
          
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">Web Project</h4>
        <span>2023 — present</span>
        <p className="timeline-text">
          I have worked on various web projects. I have also worked on a few freelance projects.
          I made a few websites for my clients like Schools, Colleges, and small businesses.
        </p>
      </li>
      
    </ol>
  </section>

  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <ion-icon name="book-outline" />
      </div>
      <h3 className="h3">Front-End Technologies</h3>
    </div>
    <ol className="timeline-list">
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li><FontAwesomeIcon icon={faChrome} /> Chrome Dev-tools</li>
        </h4>
      </li>
      
    </ol>
  </section>


  {/* <section className="skill">
    <h3 className="h3 skills-title">My skills</h3> */}
    {/* <ul className="skills-list content-card">
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Web design</h5>
          <data value={80}>80%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "80%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Graphic design</h5>
          <data value={70}>70%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "70%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Branding</h5>
          <data value={90}>90%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "90%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">WordPress</h5>
          <data value={50}>50%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "50%" }} />
        </div>
      </li>
    </ul> */}
    

  {/* </section> */}


      </>
  );
}

export default Resume