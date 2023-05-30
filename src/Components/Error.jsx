import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
const Error = () => {
  return (
    <div class="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-red-700">
      <div class="bg-white font-semibold  rounded-3xl text-center border shadow-lg p-10  justify-center ab">
        <h1 class="text-9xl font-extrabold text-gray-800 tracking-widest animate-bounce">
          404
        </h1>
        <div class="bg-gray-800 px-2 text-sm text-white rounded ">
          Page Not Found
        </div>
        <button class=" transition ease-in-out delay-150 bg-indigo-600 px-8 py-2 mt-8 rounded-2xl text-gray-100 font-semibold uppercase tracking-wide   hover:scale-110 duration-100">
          <Link to="/">Go Back</Link>
        </button>
      </div>
      <Contact />
    </div>
  );
};

const EmailButton = () => {
  return (
    <div class="items-center text-center">
      <button
        id="w3f__widget--button"
        class="fixed bottom-5 right-5 z-50 w-14 h-14 bg-indigo-600 rounded-full shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
      ></button>
    </div>
  );
};
export default Error;
