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
    </section>
  );
};

export default About;
