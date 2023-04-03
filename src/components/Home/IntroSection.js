import React from "react";
import logo from "../../assets/Images/person.png";
import Resume from "../../assets/docs/Casey Murphy- Resume.pdf";

function IntroSection() {
  return (

    <section class="row intro justify-content-center">

      <div class="col introDiv">

        <div class="row logo justify-content-center">
          <img id="logoPerson" src={logo} alt="Logo"></img>
        </div>

        <div class="row justify-content-center">
          <h1>Full Stack Web Developer</h1>
        </div>

        <div class="row justify-content-center">
          <h3>I design and create web apps.</h3>
        </div>

        <div class="row introBtns justify-content-center">

          <a href="mailto:cmurphymwdf@gmail.com" target="_blank" rel="noreferrer">
            <button id="solidBtn" class="btn btn-primary">
              Email
            </button>
          </a>
  
          <a href={Resume} target="_blank" rel="noreferrer">
           <button id="outlineBtn" class="btn btn-outline-primary">
              Resume
            </button>
          </a>
        </div>
      
      </div>

      <div class="row introContent justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h1>Hello, I'm Casey.</h1>

          <p id="introContentP">I am a Full Stack Web Developer and a graduate of Chippewa Valley Technical College. Currently looking to 
            transition my career into web development. I'm quietly confident, naturally curious, and perpetually working on improving my 
            skills one problem at a time.
          </p>
        </div>
      </div>       
       
    </section>    
  )  
}

export default IntroSection;