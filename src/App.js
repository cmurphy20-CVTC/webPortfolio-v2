import React from "react";
import { useRef } from "react";
import BrandImg from "./assets/Images/cm_light.png";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Link, Route, Routes } from "react-router-dom";


function App() {
  const contact = useRef(null);
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="/" rel="noreferrer">
          <img id="brandImg" src={BrandImg} alt="Brand Logo"></img>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav nav-pills nav fill ml-auto">
            <li class="nav-item active">
              <Link id="navBtnA" class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li onClick={() => contact.current.scrollIntoView({ behavior: "smooth"})}
                id="navBtnA"
                class="nav-link">
              
                Contact
              
            </li>
          </ul>
        </div>
      </nav>

      
       <Home  />
      

      <Footer />
    </>
  );
}

export default App;
