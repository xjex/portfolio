import React, { Component, useRef, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import profileimg from "./assets/Profile2.png";
import { Link } from "react-router-dom";

const Home = (props) => {
  const handleClickScroll = () => {
    const element = document.getElementById("timeline");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div class="h-screen">
      <div class=" h-full items-center justify-center flex flex-col ">
        <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs ">
          <img
            class="mb-3 w-50 h-50 rounded-full shadow-lg mx-auto scale-100"
            src={profileimg}
          />
          <h1 class="text-lg text-gray-700"> Xavier Joseph Manaloto </h1>
          <h3 class="text-sm text-gray-500 "> Technical Content Creator </h3>
          <h3 class="text-sm text-gray-400 "> StackTrek </h3>
          <p class="text-xs text-gray-400 mt-4">
            {" "}
            I create and manage technical contents{" "}
          </p>
          <p class="text-xs text-gray-400 "> I am a full stack developer </p>

          {/* contact me */}
          <button
            onClick={props.toggleMail}
            class=" transition ease-in-out delay-150 bg-blue-500 px-8 py-2 mt-8 rounded-2xl text-gray-100 font-semibold uppercase tracking-wide  hover:-translate-y-1  hover:bg-indigo-500 duration-300"
          >
            Contact Me
          </button>

          {/* line */}
          <div class="flex items-center justify-center mt-4">
            <div class="border-t border-gray-300 w-16"></div>
            <p class="text-xs text-gray-400 mx-2"> Socials </p>
            <div class="border-t border-gray-300 w-16"></div>
          </div>
          {/* Socials */}
          <ul class="flex items-center justify-center mt-4 space-x-4">
            <li class="transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...">
              <a
                href="https://github.com/xjex"
                class="flex items-center justify-center w-8 h-8 rounded-full  text-white hover:bg-blue-500 hover:text-gray-100"
              >
                <i class="fab fa-twitter">
                  {" "}
                  <FaGithub />
                </i>
              </a>
            </li>
            <li class="transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...">
              <a
                href="https://www.linkedin.com/in/xjmanaloto/"
                class="flex items-center justify-center w-8 h-8 rounded-full  text-white  hover:bg-blue-500 hover:text-gray-100"
              >
                <FaLinkedin />
              </a>
            </li>

            <li class="transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...">
              <a
                href="https://www.facebook.com/xjpmjexx"
                class="flex items-center justify-center w-8 h-8 rounded-full  text-white  hover:bg-blue-500 hover:text-gray-100"
              >
                <FaFacebook />
              </a>
            </li>

            <li class="transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...">
              <a
                href="https://twitter.com/jexzm"
                class="flex items-center justify-center w-8 h-8 rounded-full  text-white  hover:bg-blue-500 hover:text-gray-100"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div class="p-20">
          <button class="rounded-3xl " onClick={handleClickScroll}>
            <svg
              class="animate-bounce w-6 h-6 text-white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
