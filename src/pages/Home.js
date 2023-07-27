import React from "react";
import IntroSection from "../components/Home/IntroSection.js";
import Work from "../components/Home/Work";
import ContactMe from "../components/Home/ContactMe";

function Home() {
  return(
    <div className="container-fluid">

      
        <IntroSection />

        <Work />

        <ContactMe/>
      
     
    </div>
  )
}

export default Home;