import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


export const Form = () => {
  const form = useRef();

  const [successText, setSuccessText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fi2dwlf",
        "contact_form",
        form.current,
        "Va15oI0gJNuRIR28x"
      )
      .then(
        (result) => {
          console.log(result.text);

          setSuccessText( "Thanks for taking the time to reach out!" );
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return(
    <section>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h1 id="contactTitle">Contact Me</h1>

        <div class="row">
          <div className="form-group col-lg mx-auto">
            <label class="col-form-label contactLabel">Name:</label>
            <input
              id="formInput"
              type="text"
              className="form-control"
              name="user_name"
            />
          </div>
        </div>
        <div class="row">
          <div className="form-group col-lg mx-auto">
            <label class="col-form-label contactLabel">Email:</label>
            <input
              id="formInput"
              type="email"
              className="form-control"
              name="user_email"
            />
          </div>
        </div>

        <div class="row">
          <div className="form-group col-lg mx-auto">
            <label class="col-form-label contactLabel">Message:</label>
            <textarea
              id="formMessage"
              className="form-control"
              name="message"
            />
          </div>
        </div>
        
        <h3 className="formText">{successText}</h3>
      
        <button
          id="outlineBtn"
          type="submit"
          class="btn btn-outline-primary contactBtn"
          value="Send"
        >
          Send
        </button>
      </form>
      
    </section>
  )
}

export default Form;