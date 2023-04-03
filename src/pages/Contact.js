import React from "react";
import ContactImg from "../components/Contact/ContactImg";
import FormTitle from "../components/Contact/FormTitle";
import Form from "../components/Contact/Form";

function Contact() {
  return(
    <div className="contact container-fluid">
      <ContactImg />

      <FormTitle />

      <Form />

    </div>
  )
}

export default Contact;