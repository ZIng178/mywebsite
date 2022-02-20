import React from "react";
import { Link } from "react-scroll";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="icons">
          <Link to="about"> About </Link>
          <Link to="about-me"> About Me </Link>
          <Link to="projects"> Projects </Link>
          <Link to="contacts"> Contacts </Link>
        </div>

        <div className="closeIcon">y</div>
      </div>
    </div>
  );
};

export default Sidebar;
