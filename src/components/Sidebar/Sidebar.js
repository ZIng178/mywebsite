import React from "react";
import { Link } from "react-scroll";
import "./sidebar.css";

const Sidebar = ({ toggle }) => {
  return (
    <>
      <div className="sidebar" OnClick={toggle}>
        <div className="wrapper">
          <div className="icons">
            <Link to="about" onClick={toggle}>
              {" "}
              About{" "}
            </Link>
            <Link to="about-me"> About Me </Link>
            <Link to="projects"> Projects </Link>
            <Link to="contacts"> Contacts </Link>
          </div>

          <div className="closeIcon" onClick={() => toggle()}>
            {" "}
            y{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
