import React from "react";
import "./about.css";
//Imagen
import Personal from 'assets/Fondo/Personal.jpeg'
import html5 from 'assets/img/html-5.svg'
import css3 from 'assets/img/css-3.svg'
import js from 'assets/img/javascript.svg'
import angular from 'assets/img/angular-icon.svg'
import nodejs from 'assets/img/nodejs-icon.svg'
import react from 'assets/img/react.svg'

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
      <div className='about__skills'>
        <div className='about__skills--content'>
          <img src={html5} alt="HTML5" className='w-1/5' />
          <img src={css3} alt="CSS3" className='w-1/5' />
          <img src={js} alt="JAVASCRIPT" className='w-1/5' />
        </div>
        <div className='about__skills--content-sc'>
          <img src={angular} alt="ANGULAR" className='w-1/5' />
          <img src={nodejs} alt="NODEJS" className='w-1/5' />
          <img src={react} alt="REACT" className='w-1/5' />
        </div>
      </div>
      <div className='about__more'>
        <button>
          View More
        </button>
      </div>
    </React.Fragment>
  );
};

export default About;
