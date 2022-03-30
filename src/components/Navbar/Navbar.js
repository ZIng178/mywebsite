import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import "../Contact/Contact";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(!true);

  const toggle = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="left-nav">
          <Link to="about">
            <span> WANGDI TENZING</span>
          </Link>
        </div>
        <div className="right-nav">
          <ul className={!showSideBar ? "navLinks " : "mobile-Icon"}>
            <li className="header-link-wrapper">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                className="header-link"
              >
                {" "}
                HOME
              </Link>
            </li>
            <li className="header-link-wrapper">
              <Link
                to="about-me"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                className="header-link"
              >
                {" "}
                ABOUT{" "}
              </Link>
            </li>
            <li className="header-link-wrapper">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                className="header-link"
              >
                {" "}
                PROJECTS
              </Link>
            </li>
            <li className="header-link-wrapper">
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                className="header-link"
              >
                {" "}
                CONTACT
              </Link>
            </li>
          </ul>
          {console.log(showSideBar)}
        </div>
        <div className="mobile-Icon" onClick={toggle}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
