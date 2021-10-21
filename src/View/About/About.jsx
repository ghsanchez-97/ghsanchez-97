import React from "react";
import "./about.css";
//Imagen
import Personal from 'assets/Fondo/Personal.jpeg'

const About = () => {
  return (
    <React.Fragment>
      <div className="about__title">
        <h1>About Me</h1>
      </div>
      <div className="about__container">
          <div className="about__content--text">
            <p>
              Hi, I'm Guy, a young web developer, who likes to share my skills,
              my creativity, my ideas.
            </p>
            <p>I like to enjoy creating new things on the internet.</p>
            <p>
              I Worked at the <strong>National Engineering University</strong>,
              also at the
              <strong> Inatec</strong> and <strong>Sevasa</strong>.
            </p>
            <p>These are some technologies that I have worked on:</p>
          </div>
          <div className='about__content--img'>
            <img src={Personal} alt="Guy Sánchez" />
          </div>
      </div>
      <div className=''>
        <h2>Skills</h2>
      </div>
    </React.Fragment>
  );
};

export default About;
