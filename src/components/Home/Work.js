import React from "react";
import LifeNoteImg from "../../assets/Images/lifeNote.PNG";
import SmallFryimg from "../../assets/Images/sFT.PNG";
import CursorImg from "../../assets/Images/cursorImg.PNG";


function Work() {
  return(
    <section class="row">

    <div class="row projects justify-content-center">

      <div class="col-12 projectsTitle">

        <h1>My Recent Work</h1>

        <h4>Here are a few past projects I've worked on. Want to see more? <a id="titleA" href="mailto:cmurphymwdf@gmail.com" target="_blank" rel="noreferrer">Email me.</a></h4>
      </div>
    

      <div class="row projectOdd justify-content-center">
        
        <div class="oddContent col-md-5 col-11">
          <h2>Life Note</h2>

          <p class="projectP">
            This is a web app I created to help remember things! When I had first started making this app, 
            our first child was born and life became a little more chaotic. I wanted to challenge myself and
            build an app to help me and others remember the various people or things we encounter day to day.
            I was doing a Udemy course on web development that taught basic CRUD operations for a Node.js site 
            using MongoDB. From there I built my own app that allows users to create an account and create notes
            about different topics. For example, I want to learn more about investing, so with LifeNote I can
            create a note about the difference between stocks and bonds. In the future, I can also edit that note
            with more information or delete it if needed. I also added a feature where users are able to search notes 
            by title to save on scrolling! This app was quite a challenge since I have primary used MySQL in the past.
            MongoDB is lightweight and easier to make changes to the database, but creating relationships is harder than in SQL.
            I want to share this with people and hope it helps organize their lives a little bit.
          </p>

          <p>
            <strong>Bootstrap | Javascript | jQuery | Node.js | Express | MongoDB | Railway</strong>
          </p>

          <div class="projectBtns">

            <a href="https://lifenote-production.up.railway.app/" target="_blank" rel="noreferrer">
              <button id="solidBtn" class="btn">
                Visit
              </button>
            </a>

            
            <a href="https://github.com/cmurphy20-CVTC/lifeNote" target="_blank" rel="noreferrer">
              <button id="outlineBtn" class="btn">
                GitHub
              </button>
            </a>

            <a href="https://www.pivotaltracker.com/n/projects/2580737" target="_blank" rel="noreferrer">
              <button id="solidBtn" class="btn">
                Documentation
              </button>
            </a>

            <a href="https://www.youtube.com/watch?v=XM6DNkFl9-E" target="_blank" rel="noreferrer">
                <button id="solidBtn" class="btn">
                  Video Demo
                </button>
              </a>

          </div>
        </div>

        <div class="col-md-5 col-11 projectImgDiv">
          <img id="projectImg" src={LifeNoteImg} alt="Life Note Website"></img>
        </div>

      </div>

      <div class="row projectEven justify-content-center">

        <div class="col-md-5 col-11 order-12 projectImgDiv">
          <img id="projectImg" src={SmallFryimg} alt="Small Fry Thai Website"></img>
        </div>

        <div class="evenContent col-md-5 col-11 order-1">
          <h2>Small Fry Thai</h2>

          <p class="projectP">
            I created this site as a challenge to myself, there are a few restaurants
            in my area that do not have their own websites. The inspiration for the site
            came from my love of Thai food and it grew from there. I used a name generator 
            to come up with the name Small Fry Thai, also I am a fan of puns. With the name
            I thought that the feel of the site should be energetic, light and fun. The main challenge 
            I had was figuring out the layout of each page and what content to include. A popular food 
            truck in my area is Dhimiters, so I used there site for ideas how to display things like the menu.
          </p>

          <p>
            <strong>Bootstrap | Javascript | jQuery | Netlify</strong>
          </p>

          <div class="projectBtns">

            <a href="https://silver-dusk-7d7243.netlify.app" target="_blank" rel="noreferrer">
              <button id="solidBtn" class="btn">
                Visit
              </button>
            </a>
            
            <a href="cmurphy20-CVTC/smallFryThai" target="_blank" rel="noreferrer">
              <button id="outlineBtn" class="btn">
              GitHub
              </button>
            </a>
          </div>
        </div>

      </div>

      <div class="row projectOdd justify-content-center">
          
          <div class="col-md-5 col-11">
            <h2>Cursor Adventure</h2>

            <p class="projectP">
              A text based adventure game I created in colloboration with other CVTC for our capstone project. 
              This game is set in a post apolocaliptic landscape where players are forced to explore, find supplies and fight for survival.
              My main role was the look of the game and creating the webpage advertising the game. Along with coming up with the last level.
              The front was created using Bootstrap and we used Javascript and jQuery for animations and level progression.
            </p>

            <p>
              <strong>Bootstrap | Javascript | jQuery</strong>
            </p>

            <div class="projectBtns">

              <a href="https://cmurphy20-cvtc.github.io/cursor_Adventure_Webpage/" target="_blank" rel="noreferrer">
                <button id="solidBtn" class="btn">
                  Visit
                </button>
              </a>

              <a href="cmurphy20-CVTC/2021_cursor_Adventure" target="_blank" rel="noreferrer">
                <button id="outlineBtn" class="btn">
                  GitHub
                </button>
              </a>

              <a href="https://www.pivotaltracker.com/n/projects/2538974" target="_blank" rel="noreferrer">
                <button id="solidBtn" class="btn">
                  Documentation
                </button>
              </a>

            </div>
          </div>

          <div class="col-md-5 col-11 projectImgDiv">
            <img id="projectImg" src={CursorImg} alt="Cursor Adventure Webpage"></img>
          </div>
          
      </div>
    </div>
  </section>
  )
}

export default Work;