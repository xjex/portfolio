import { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState(false);

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
    const json = JSON.stringify(object);

    form.reset();
    setOpen(false);

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
          console.log("Success:", json.message);
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
          open
            ? " fixed flex flex-col z-50 bottom-[100px] top-0 right-0 h-auto left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md "
            : "hidden"
        }
      >
        <div class="flex p-5 flex-col justify-center items-center h-32 bg-indigo-600">
          <h3 class="text-lg text-white">How can we help?</h3>
          <p class="text-white opacity-50">We usually respond in a few hours</p>
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
            <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />

            <div class="mb-4">
              <label
                htmlFor="full_name"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="full_name"
                placeholder="John Doe"
                required
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                Please provide your full name.
              </div>
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
                placeholder="email address"
                required
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                Please provide a valid email address.
              </div>
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
              <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                Please provide a message.
              </div>
            </div>

            <div class="mb-4">
              <label
                htmlFor="attachment"
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                Attachment
              </label>
              <input
                type="file"
                name="attachment"
                id="attachment"
                placeholder="Your Message"
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>

            <div class="mb-4">
              <button
                type="submit"
                class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="items-center text-center">
        <button
          id="w3f__widget--button"
          class="fixed bottom-5 right-5 z-50 w-14 h-14 bg-indigo-600 rounded-full shadow-lg focus:outline-none"
          onClick={() => setOpen(!open)}
        ></button>
      </div>
    </div>
  );
};

export default Contact;
