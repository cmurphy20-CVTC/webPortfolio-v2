import React from "react";
import LifeNoteImg from "../../assets/Images/lifeNote.PNG";
import SmallFryimg from "../../assets/Images/sFT-R.PNG";
import npiImg from "../../assets/Images/npiImg.PNG";

function Work() {
  return (
    <section class="row">
      <div class="row projects justify-content-center">
        <div class="col-12 projectsTitle">
          <h1>My Recent Work</h1>

          <h4>
            Here are a few past projects I've worked on. Want to see more? &nbsp;
            
            <a
              id="titleA"
              href="https://github.com/cmurphy20-CVTC"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </h4>
        </div>

        <div class="row projectOdd justify-content-center">
          <div class="oddContent col-md-5 col-11">
            <h2>Life Note</h2>

            <p class="projectP">
              This is a web app I created to help remember things! When I had
              first started making this app, our first child was born and life
              became a little more chaotic. I wanted to challenge myself and
              build an app to help me and others remember the various people or
              things we encounter day to day. This app allows users to
              create an account and create notes about different topics. For
              example, I want to learn more about investing, so with LifeNote I
              can create a note about the difference between stocks and bonds.
              In the future, I can also edit that note with more information or
              delete it if needed. I also added a feature where users are able
              to search notes by title to save on scrolling! This app was quite
              a challenge since I have primary used MySQL in the past. MongoDB
              is lightweight and easier to make changes to the database, but
              creating relationships is harder than in SQL. I want to share this
              with people and hope it helps organize their lives a little bit.
            </p>

            <p>
              <strong>
                Bootstrap | Javascript | jQuery | Node.js | Express | MongoDB |
                Railway
              </strong>
            </p>

            <div class="projectBtns">
              <a
                href="https://lifenote-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button id="solidBtn" class="btn">
                  Visit
                </button>
              </a>

              <a
                href="https://github.com/cmurphy20-CVTC/lifeNote"
                target="_blank"
                rel="noreferrer"
              >
                <button id="outlineBtn" class="btn">
                  GitHub
                </button>
              </a>

              <a
                href="https://www.pivotaltracker.com/n/projects/2580737"
                target="_blank"
                rel="noreferrer"
              >
                <button id="solidBtn" class="btn">
                  Documentation
                </button>
              </a>

              <a
                href="https://www.youtube.com/watch?v=XM6DNkFl9-E"
                target="_blank"
                rel="noreferrer"
              >
                <button id="solidBtn" class="btn">
                  Video Demo
                </button>
              </a>
            </div>
          </div>

          <div class="col-md-5 col-11 projectImgDiv">
            <img
              id="projectImg"
              src={LifeNoteImg}
              alt="Life Note Website"
            ></img>
          </div>
        </div>

        <div class="row projectEven justify-content-center">
          <div class="col-md-5 col-11">
            <h2>NPI Registry</h2>

            <p class="projectP">
              A web app that makes RESTful API calls to search for National
              Provider Identifier records. Users can search through the records
              to find healthcare providers in their area. The app shows 50
              results based on the user's input, the user can also find out more
              information on the provider by clicking on the NPI number. The
              frontend was created with React to change state based on the
              provided search terms. The search terms are then sent to the
              backend. This was built using node.js to send calls to the NPPES
              NPI Registry API take in the results and send them back to the
              frontend. The frontend will then display the these results. Both
              the frontend and backend are hosted on Railway.App for ease of
              use.
            </p>

            <p>
              <strong>React | Node.js | Javascript | Bootstrap | Axios</strong>
            </p>

            <div class="projectBtns">
              <a
                href="https://npiregistry.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button id="solidBtn" class="btn">
                  Visit
                </button>
              </a>

              <a
                href="https://github.com/cmurphy20-CVTC/npi_registry_frontend"
                target="_blank"
                rel="noreferrer"
              >
                <button id="outlineBtn" class="btn">
                  Frontend GitHub
                </button>
              </a>

              <a
                href="https://github.com/cmurphy20-CVTC/npi_registry_backend"
                target="_blank"
                rel="noreferrer"
              >
                <button id="outlineBtn" class="btn">
                  Backend GitHub
                </button>
              </a>
            </div>
          </div>

          <div class="col-md-5 col-11 projectImgDiv">
            <img
              id="projectImg"
              src={npiImg}
              alt="Cursor Adventure Webpage"
            ></img>
          </div>
        </div>

        <div class="row projectOdd justify-content-center">
          <div class="col-md-5 col-11 order-12 projectImgDiv">
            <img
              id="projectImg"
              src={SmallFryimg}
              alt="Small Fry Thai Website"
            ></img>
          </div>

          <div class="evenContent col-md-5 col-11 order-1">
            <h2>Small Fry Thai</h2>

            <p class="projectP">
              I created this site as a challenge to myself, there are a few
              restaurants in my area that do not have their own websites. The
              inspiration for the site came from my love of Thai food and it
              grew from there. I used a name generator to come up with the name
              Small Fry Thai, also I am a fan of puns. With the name I thought
              that the feel of the site should be energetic, light and fun. The
              main challenge I had was figuring out the layout of each page and
              what content to include. A popular food truck in my area is
              Dhimiters, so I used there site for ideas how to display things
              like the menu.
            </p>

            <p>
              <strong>React | Bootstrap | Javascript | jQuery | Netlify</strong>
            </p>

            <div class="projectBtns">
              <a
                href="https://smallfrythai.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button id="solidBtn" class="btn">
                  Visit
                </button>
              </a>

              <a
                href="cmurphy20-CVTC/smallFryThai"
                target="_blank"
                rel="noreferrer"
              >
                <button id="outlineBtn" class="btn">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
