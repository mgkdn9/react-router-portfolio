import React from "react";
import Resume from "../Resume-MikeKohlberg-2022102.pdf";

const About = () => {
  return (
    <div>
      <div id="aboutMeDesktop">
        <br />
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <p>
              Full stack software developer with experience in mechanical and
              electrical engineering and object oriented PLC programming. My
              career shift into full stack software development was driven by my
              passion and aptitude for coding and my desire to make a lasting
              impact. I am comfortable working with many different types of
              people in a wide range of settings. I look forward to tackling
              your toughest bugs.
            </p>
            <br></br>
            <br></br>
            <div className="links-container">
              <a href="https://linkedin.com/in/michaelkohlberg">LinkedIn</a>
              <span> | </span>
              <a href="https://github.com/mgkdn9">Github</a>
              <span> | </span>
              <a href={Resume} download>
                Resume
              </a>
            </div>
          </div>
          <div className="about-img"></div>
        </div>
      </div>
      <div id="aboutMeMobile">
        <br />
        <h2 className="section-title">About Me</h2>
        <div className="about-img"></div>
        <div className="about-container">
          <div className="about-text">
            <p>
              Full stack mobile app developer with experience in mechanical and
              electrical engineering and object oriented PLC programming. My
              career shift into full stack software development was driven by my
              passion and aptitude for coding and my desire to make a lasting
              impact. I am comfortable working with many different types of
              people in a wide range of settings. I look forward to tackling
              your toughest bugs.
            </p>
            <br></br>
            <br></br>
            <div className="links-container">
              <a href="https://linkedin.com/in/michaelkohlberg">LinkedIn</a>
              <span> | </span>
              <a href="https://github.com/mgkdn9">Github</a>
              <span> | </span>
              <a href={Resume} download>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
