import React, { useEffect, useState } from "react";
import Home from "../Home";
import Blog from "../Blog";
import Timeline from "./Timeline";
import Footers from "./Footers";
import Alert from "./Alert";
import Nav from "./Nav";
import Projects from "./Projects";
import Portfolio from "./BlogsV2";
import Contact from "./Contact";
import Skills from "../Skills";
import Workcomp from "./Workcomp";

const Landing = () => {
  const [status, setStatus] = useState(false);

  //toggle contact form
  const toggleMail = () => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  return (
    <div class=" bg-gradient-to-br from-blue-500 to-red-700">
      <Home toggleMail={toggleMail} />

      {/* <div id="projects">
        <Projects />
      </div> */}

      <div id="timeline">
        <Timeline />
      </div>
      <Skills />
      <Workcomp />
      <Alert />

      <Contact stat={status} toggleMail={toggleMail} />

      <div id="blogs">
        <Portfolio />
        {/* <Blog /> */}
      </div>
      <Footers />
    </div>
  );
};

export default Landing;
