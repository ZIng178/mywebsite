import React from "react";
import "./contact.css";
import Fade from "react-awesome-reveal";

const Contact = () => {
  return (
    <>
      <Fade delay={500}>
        <div className="contacts">
          <h1 classNane="contactHeading">Contact</h1>
          <h3>
            {" "}
            Feel free to contact me by submitting this form below and i will get
            back to you as soon as possible{" "}
          </h3>
          <div className="contact-form">
            <form className="formcontacts">
              <label>
                Name
                <input type="text" placeholder="Name"></input>
              </label>
              <label>
                Email
                <input type="text" placeholder="Email"></input>
              </label>
              <label>
                Message
                <input
                  type="textarea"
                  placeholder="Message"
                  className="messagebox"
                ></input>
              </label>
              <button> Submit</button>
            </form>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Contact;
