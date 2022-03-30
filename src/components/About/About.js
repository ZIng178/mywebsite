import React from "react";
import "./about.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="about">
      <div className="home-hero-content">
        <h1 className="heading-primary"> HI! I'M WANGDI TENZING </h1>
      </div>
      <div className="hero-info">
        <p>
          {" "}
          A FullStack Web Developer with a focus on Frontend Development. I love
          building the Frontend of Websites and Web Applications .
        </p>
      </div>
      <div className="button-about">
        <Link to="projects" className="button-primary">
          Projects
        </Link>
      </div>
      <div className="hero-socials">
        <div className="socials">
          <a href="https://www.linkedin.com/in/wangdi-tenzing/">
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" />
          </a>
        </div>
        <div className="socials">
          <a href="https://github.com/ZIng178">
            <img src="https://img.icons8.com/material-rounded/48/000000/github.png" />
          </a>
        </div>
      </div>
      <div class="mouse"></div>
    </section>
  );
};

export default About;
