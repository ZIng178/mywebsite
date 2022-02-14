import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="header-content">
        <div className="left-nav">
          <span> WANGDI TENZING</span>
        </div>
        <div className="right-nav">
          <ul className="navLinks">
            <li className="header-link-wrapper">
              <a href="/" className="header-link">
                {" "}
                HOME
              </a>
            </li>
            <li className="header-link-wrapper">
              <a href="/about" className="header-link">
                {" "}
                ABOUT{" "}
              </a>
            </li>
            <li className="header-link-wrapper">
              <a href="/projects" className="header-link">
                {" "}
                PROJECTS
              </a>
            </li>
            <li className="header-link-wrapper">
              <a href="/contact" className="header-link">
                {" "}
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
