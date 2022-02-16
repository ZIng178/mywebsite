import React from "react";
import "./contact.css";
import Fade from "react-awesome-reveal";
import * as emailjs from "@emailjs/browser";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "template_nu8jlgo",
      e.target,
      "user_VQxSK2bKADQfmI3sBolwHD"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

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
            <form className="formcontacts" onSubmit={sendEmail}>
              <label>
                Name
                <input type="text" placeholder="Name" name="name"></input>
              </label>
              <label>
                Email
                <input type="text" placeholder="Email" name="email"></input>
              </label>
              <label>
                Message
                <input
                  type="textarea"
                  placeholder="Message"
                  className="messagebox"
                  name="message"
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
