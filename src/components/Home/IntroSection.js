import React from "react";
import Resume from "../../assets/docs/Casey Murphy- Resume.pdf";
import Headshot from "../../assets/Images/headshot.png"

function IntroSection() {
  return (

    <section class="row intro justify-content-center">

      <div class="col introDiv">

        <div class="row logo justify-content-center">
          <img id="logoPerson" src={Headshot} alt="Logo"></img>
        </div>

        <div class="row justify-content-center">
          <h1>Web Developer || Problem Solver</h1>
        </div>

        <div class="row justify-content-center">
          <h3>I design and create applicaitons that make the client's life easier using Javascript, React, Node.js, and Express</h3>
        </div>

        <div class="row introBtns justify-content-center">

          <a href="/contact" target="_blank" rel="noreferrer">
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

          <p id="introContentP">I am a web developer with a passion for learning how to solve problems because I'm helpful to a fault. I'm naturally curious and perpetually working on improving my 
            skills one problem at a time. 
          </p>
        </div>
      </div>       
       
    </section>    
  )  
}

export default IntroSection;