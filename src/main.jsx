import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Error from "./Components/Error";
import App from "./App";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
  {
    path: "/projects",
    element: <div>Projects</div>,
  },
  {
    path: "/resume",
    element: <div>Resume</div>,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contact />
    <RouterProvider router={router} />
  </React.StrictMode>
);
