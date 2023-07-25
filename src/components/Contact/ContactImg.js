import React from "react";
import Headshot from "../../assets/Images/headshot.png"

function ContactImg() {
  return(
    <div class="row justify-content-center mt-4">

      <div class="row logo justify-content-center">
        <img id="logoPerson" src={Headshot} alt=""></img>
      </div>

    </div>
  )
}

export default ContactImg;