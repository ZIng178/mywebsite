import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerMain">
        <div className="footerleft">
          <h3>Wangdi Tenzing</h3>
          <p>
            {" "}
            A Full Stack Web Developer with a passion for building Frontend of
            Websites and Web Applications.{" "}
          </p>
        </div>
        <div className="footerRight">
          <h1> SOCIAL</h1>
          <a href="https://www.linkedin.com/in/wangdi-tenzing/">
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" />
          </a>
          <a href="https://github.com/ZIng178">
            <img src="https://img.icons8.com/material-rounded/48/000000/github.png" />
          </a>
        </div>
        <span> © Copyright 2022. Made by Wangdi Tenzing </span>
      </div>
    </>
  );
};

export default Footer;
