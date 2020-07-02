import React from "react";
import "../App.css";
import Logo from "../images/logo.svg";
import About from "../Components/About";
import Projects from "../Components/Projects";
import BgTop from "../images/bg_top.svg";
import BgBottom from "../images/bg-bottom.png";
import BgRight from "../images/bg_right.svg";

function HomePage() {
  return (
    <div className="content">
      <div className="logo">
        <img src={Logo} alt="Susan Logo" className="logo-img" />
      </div>

      <About />

      <div className="bg-projects">
        <img src={BgTop} alt="background top" id="bg-top" className="bg-img" />
        <Projects />
      </div>
    </div>
  );
}

export default HomePage;
