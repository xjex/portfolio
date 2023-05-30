import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import Nav from "./Components/Nav";
import EmailButton from "./Components/EmailButton";
function App() {
  return (
    <>
      <Nav />
      <EmailButton />
    </>
  );
}

export default App;
