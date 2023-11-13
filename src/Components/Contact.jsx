import { useEffect, useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaEnvelope, FaTimes } from "react-icons/fa";
import Alert from "./Alert";
import OpenMailer from "./Hooks/OpenMailer";

const Contact = (props) => {
  const env = import.meta.env;
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    //console.log(object);
    const json = JSON.stringify(object);

    form.reset();
    props.toggleMail();

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          console.log("Success: ", json.message);
          alert("Success:" + json.message);
        } else {
          console.error("Error:", json.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="web3forms__widget">
      <div
        id="w3f__widget--content"
        class={
          props.stat
            ? " fixed flex flex-col z-50 bottom-[100px] top-0 right-0 h-auto left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md "
            : "hidden "
        }
      >
        <div class="flex p-5 flex-col justify-center items-center h-32 bg-indigo-600">
          <h3 class="text-lg text-white">Hello 👋</h3>
        </div>{" "}
        <div class="bg-gray-50 flex-grow p-6">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            class="needs-validation"
            noValidate
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="apikey"
              value={env.VITE_WEB3FORMS_API_KEY}
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from your Portfolio Website"
            />
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />

            <input
              type="hidden"
              name="from_name"
              value="Portfolio User Message"
            ></input>

            <div class="mb-4">
              <label
                htmlFor="full_name"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Full Name / Company Name
              </label>
              <input
                type="text"
                name="name"
                id="full_name"
                placeholder="Name"
                required
                class="hover:ea w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>

            <div class="mb-4">
              <label
                htmlFor="email"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                Please provide a valid email address.
              </div> */}
            </div>

            <div class="mb-4">
              <label
                htmlFor="phone"
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>

            <div class="mb-4">
              <label
                htmlFor="message"
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Your Message"
                required
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              ></textarea>
              {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                Please provide a message.
              </div> */}

              <div class="mb-4"></div>

              <div class="mb-4"></div>

              <button
                type="submit"
                class=" w-full px-3 py-4 transition ease-in-out delay-150 rounded-xl bg-blue-500 text-white  focus:bg-indigo-600 focus:outline-none hover:-translate-y-1  hover:bg-indigo-500 "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          id="w3f__widget--button"
          // transition ease-in-out delay-150 bg-blue-500 px-8 py-2 mt-8 rounded-2xl text-gray-100 font-semibold uppercase tracking-wide  hover:-translate-y-1  hover:bg-indigo-500 duration-300
          className="transition ease-in-out delay-150 hover:scale-110  fixed bottom-5 right-5 z-50 w-14 h-14 text-white bg-blue-500 rounded-full   hover:-translate-y-2 hover:bg-indigo-500 duration-300 shadow-lg focus:outline-none flex items-center justify-center "
          onClick={props.toggleMail}
        >
          <IconContext.Provider value={{ size: "1.5em" }}>
            {props.stat ? <FaTimes /> : <FaEnvelope />}
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default Contact;
