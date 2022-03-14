import React from "react";
import "./projects.css";
import mythicimages from "../../images/mythicimage.png";
import { Slide, Zoom } from "react-awesome-reveal";
import kickskart from "../../images/kickskart.mp4";
import mythicvideo from "../../images/mythicvideo.mp4";
import paisavideo from "../../images/paisavideo.mp4";

const Projects = () => {
  return (
    <div className="projects">
      <div className="main-container">
        <span className="heading-main"> Projects </span>
        <span className="heading-sub">
          {" "}
          Here you will find some of the projects that i have created.{" "}
        </span>
        <Slide>
          <div className="projects-content">
            <div className="projects-row">
              <div className="projects-image">
                <video className="video" loop autoPlay muted>
                  <source
                    src={mythicvideo}
                    type="video/mp4"
                    width="300"
                    height="10px"
                  />
                </video>
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
          </div>
          {/* projects  */}
          <div className="projects-content">
            <div className="projects-row">
              <div className="projects-image">
                <video className="video" loop autoPlay muted>
                  <source
                    src={kickskart}
                    type="video/mp4"
                    width="300"
                    height="10px"
                  />
                </video>
              </div>

              <div className="projects-row-content">
                <h3 className="projects-row-title">KICKSKART</h3>
                <p className="projects-row-desc">
                  {" "}
                  E-Commerce platform that mimics a shopping cart where users
                  can ADD, FILTER and REMOVE items.
                </p>
                <div className="button-projects">
                  <button className="livebutton">See Live</button>
                  {""}
                  <button className="sourcebutton">Source Code</button>
                </div>
              </div>
            </div>
          </div>

          {/* projects */}

          <div className="projects-content">
            <div className="projects-row">
              <div className="projects-image">
                <video className="video" loop autoPlay muted>
                  <source
                    src={paisavideo}
                    type="video/mp4"
                    width="300"
                    height="10px"
                  />
                </video>
              </div>

              <div className="projects-row-content">
                <h3 className="projects-row-title"> PAISA</h3>
                <p className="projects-row-desc">
                  {" "}
                  Paisa is a React App built using React Styled components
                </p>
                <div className="button-projects">
                  <button className="livebutton">See Live</button>
                  {""}
                  <button className="sourcebutton">Source Code</button>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
