import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="home-hero-content">
        <h1 className="heading-primary"> HI! I'M WANGDI TENZING </h1>
      </div>
      <div className="hero-info">
        <p>
          {" "}
          A FullStack Web Developer with a focus on Frontend Development . I
          love building the Frontend of Websites and Web Applications .
        </p>
      </div>
      <div className="button-about">
        <a href="/projects" className="button-primary">
          Projects
        </a>
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
    </section>
  );
};

export default About;
