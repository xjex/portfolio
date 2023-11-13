import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Error from "./Components/Error";
import App from "./App";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";
import Alert from "./Components/Alert";
import { Analytics } from "@vercel/analytics/react";
import Blog from "./Blog";
import Nav from "./Components/Nav";
import BlogContent from "./BlogContent";
import OpenMailer from "./Components/Hooks/OpenMailer";

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
    element: (
      <div>
        <Error />
      </div>
    ),
  },
  {
    path: "/projects",
    element: <div>Projects</div>,
  },
  {
    path: "/resume",
    element: (
      <div>
        <Error />
      </div>
    ),
  },
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "*",
    element: <Error />,
  },
  { path: "/blogs/content/*", element: <BlogContent /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />

    <RouterProvider router={router} />
  </React.StrictMode>
);
