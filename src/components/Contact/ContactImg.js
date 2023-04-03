import React from "react";
import logo from "../../assets/Images/person.png";

function ContactImg() {
  return(
    <div class="row justify-content-center mt-4">

      <div class="row logo justify-content-center">
        <img id="logoPerson" src={logo} alt=""></img>
      </div>

    </div>
  )
}

export default ContactImg;