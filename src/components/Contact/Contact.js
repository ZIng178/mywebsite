import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contacts">
        <h1>Contact</h1>
        <h3> Feel free to contact me </h3>
        <div className="contact-form">
          <form className="contactform">
            <label>
              Name
              <input type="text" placeholder="name"></input>
            </label>
            <label>
              Email
              <input type="text" placeholder="Email"></input>
            </label>
            <label>
              Message
              <input type="textarea" placeholder="name"></input>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
