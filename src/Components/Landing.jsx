import React from "react";
import Home from "../Home";
import Blog from "../Blog";
import Timeline from "./Timeline";
import Footers from "./Footers";
const Landing = () => {
  return (
    <div class=" bg-gradient-to-br from-blue-500 to-red-700">
      <Home />
      <div id="timeline">
        <Timeline />
      </div>
      <Blog />
      <Footers />
    </div>
  );
};

export default Landing;
