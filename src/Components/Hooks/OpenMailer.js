import { useEffect, useState } from "react";
import React from "react";
import Contact from "../Contact";
const OpenMailer = () => {
  const [open, setOpen] = useState(false);

  console.log("set to", open, "mail is");

  return {
    open,
    setOpen,
  };
};

export default OpenMailer;
