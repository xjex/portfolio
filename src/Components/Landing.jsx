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

const Landing = () => {
  const [status, setStatus] = useState(false);

  const toggleMail = () => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
    console.log("bobo", status);
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
