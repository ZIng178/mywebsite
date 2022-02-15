import React from "react";
import "./projects.css";
import mythicimages from "../../images/mythicimage.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="main-container">
        <span className="heading-main"> Projects </span>
        <span className="heading-sub">
          {" "}
          Here you will find some of the projects that i have created.{" "}
        </span>

        <div className="projects-content">
          <div className="projects-row">
            <div className="projects-image">
              <img src={mythicimages} className="image-project" />
            </div>
          </div>

          <div className="projects-row-content">
            <h3 className="projects-row-title"> MYTHIC</h3>
            <p className="projects-row-desc">
              {" "}
              Mythic is an E-Commerce Fashion Website built using React,
              Redux-Toolkit, Node, MongoDB, Express, HTML and CSS{" "}
            </p>
            <div className="button-projects">
              <button className="livebutton">See Live</button>
              {""}
              <button className="sourcebutton">Source Code</button>
            </div>
          </div>
        </div>
        <div className="projects-content">
          <div className="projects-row">
            <div className="projects-image">
              <img src={mythicimages} className="image-project" />
            </div>
          </div>

          <div className="projects-row-content">
            <h3 className="projects-row-title"> MYTHIC</h3>
            <p className="projects-row-desc">
              {" "}
              Mythic is an E-Commerce Fashion Website built using React,
              Redux-Toolkit, Node, MongoDB, Express, HTML and CSS{" "}
            </p>
            <div className="button-projects">
              <button className="livebutton">See Live</button>
              <button className="sourcebutton">Source Code</button>
            </div>
          </div>
        </div>
        <div className="projects-content">
          <div className="projects-row">
            <div className="projects-image">
              <img src={mythicimages} className="image-project" />
            </div>
          </div>

          <div className="projects-row-content">
            <h3 className="projects-row-title"> MYTHIC</h3>
            <p className="projects-row-desc">
              {" "}
              Mythic is an E-Commerce Fashion Website built using React,
              Redux-Toolkit, Node, MongoDB, Express, HTML and CSS{" "}
            </p>
            <div className="button-projects">
              <button className="livebutton">See Live</button>
              <button className="sourcebutton">Source Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
