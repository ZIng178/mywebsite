import React from "react";
import "./aboutme.css";
import { Link } from "react-scroll";
const AboutMe = () => {
  return (
    <div>
      <section id="about-me">
        <div className="main-conatiner-about">
          <h2 className="about-heading">
            <span className="heading-main"> ABOUT ME</span>
            <span className="heading-sub">
              {" "}
              Here you will find more information about me, what i do , and my
              current skills in terms of programming and technology
            </span>
          </h2>
        </div>
        <div className="about-content">
          <div className="about-content-main">
            <h3 className="about-content-title"> Get to know me!</h3>

            <div className="about-content-details">
              <p className="about-content-details-para">
                I'm <strong> Full Stack Web Developer </strong>
                that loves building the Front-end of Webistes and Web
                Applications. Check out some of my work in the{" "}
                <strong> Projects</strong> section.
              </p>
              <p className="about-content-details-para">
                I also like sharing content related to things that i have
                learned over the years in Web Development so that i can reach
                out to more people in the Dev Community. Please feel free to
                Connect or Follow me on my{" "}
                <a href="https://www.linkedin.com/in/wangdi-tenzing/">
                  {" "}
                  LinkedIn{" "}
                </a>
              </p>
              <p className="about-content-details-para">
                I'm open to <strong> Job </strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then please do not hesitate to{" "}
                <strong> contact </strong> me
              </p>
            </div>
            <Link to="contacts" className="contact-button">
              {" "}
              Contact
            </Link>
          </div>
          <div className="about-content-skills">
            <h3 className="about-content-title">My Skills</h3>
            <div className="skills">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
              <div className="skill">React</div>
              <div className="skill">Redux</div>

              <div className="skill">MongoDB</div>
              <div className="skill">Node</div>
              <div className="skill">PostgreSQL</div>
              <div className="skill">GIT</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
