import React from "react";
import Home from "../Home";
import Blog from "../Blog";
import Timeline from "./Timeline";
import Footers from "./Footers";
import Alert from "./Alert";
import Nav from "./Nav";
import Projects from "./Projects";
import Portfolio from "./BlogsV2";

const Landing = () => {
  return (
    <div class=" bg-gradient-to-br from-blue-500 to-red-700">
      <Home />

      {/* <div id="projects">
        <Projects />
      </div> */}

      <div id="timeline">
        <Timeline />
      </div>

      <Alert />

      <div id="blogs">
        <Portfolio />
        {/* <Blog /> */}
      </div>
      <Footers />
    </div>
  );
};

export default Landing;
