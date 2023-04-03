import React from "react";
import IntroSection from "../components/Home/IntroSection";
import Work from "../components/Home/Work";
import Technologies from "../components/Home/Technologies";

function Home() {
  return(
    <div className="container-fluid">

      
        <IntroSection />

        <Work />

        <Technologies />
      
     
    </div>
  )
}

export default Home;