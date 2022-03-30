import React from "react";
import "./projects.css";

import { Slide } from "react-awesome-reveal";
import kickskart from "../../images/kickskart.mp4";
import mythicvideo from "../../images/mythicvideo.mp4";
import paisavideo from "../../images/paisavideo.mp4";
import trackexp from "../../images/trackexp.mp4";

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
                    alt="video"
                    width="300"
                    height="10px"
                  />
                </video>
              </div>

              <div className="projects-row-content">
                <h3 className="projects-row-title"> MYTHIC</h3>
                <p className="projects-row-desc">
                  {" "}
                  Mythic is an E-Commerce Fashion Website. This project is built
                  using React, Redux-Toolkit as its State Management Sytem and
                  MongoDB as its database . Mythic web app allows users to ADD,
                  REMOVE and DELETE items to a CART . Users can also checkout
                  and pay for their items in the cart using the Stripe
                  Interface.
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
                    alt="video"
                    height="10px"
                  />
                </video>
              </div>

              <div className="projects-row-content">
                <h3 className="projects-row-title">KICKSKART</h3>
                <p className="projects-row-desc">
                  {" "}
                  An E-Commerce platform that mimics a shopping cart where users
                  can ADD, FILTER and REMOVE items.This project uses Redux as
                  its State Management System and MongoDB as its database .
                </p>
                <div className="button-projects">
                  <button className="livebutton">
                    <a href="https://kickskart.netlify.app/"> See Live </a>
                  </button>

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
                    alt="video"
                    height="10px"
                  />
                </video>
              </div>

              <div className="projects-row-content">
                <h3 className="projects-row-title"> PAISA</h3>
                <p className="projects-row-desc">
                  {" "}
                  Paisa mimics a landing page of a virtual banking system . This
                  projects focuses mostly on styling aspects of building React
                  Pages using React Styled Components
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
                  <video className="video" loop autoPlay muted>
                    <source
                      src={trackexp}
                      type="video/mp4"
                      width="300"
                      height="10px"
                      alt="video"
                    />
                  </video>
                </div>

                <div className="projects-row-content">
                  <h3 className="projects-row-title"> TRACKEXP</h3>
                  <p className="projects-row-desc">
                    {" "}
                    Track Exp is a web app that allows users to ADD expenses
                    based on Categories and Price . It also allows users to
                    DELETE and SEARCH for the added Expense from the Dashboard .
                    This app was built using HTML , CSS , JavaScript , React and
                    Redux .
                  </p>
                  <div className="button-projects">
                    <button className="livebutton">
                      <a href="https://trackexpensess.herokuapp.com/">
                        See Live
                      </a>
                    </button>
                    {""}
                    <button className="sourcebutton">Source Code</button>
                  </div>
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
