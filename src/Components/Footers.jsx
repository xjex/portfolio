import { Link } from "react-router-dom";
import React from "react";
import supabase from "../lib/helper/supabaseClient";
import { useState } from "react";

const Footers = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modaltitle, setModaltitle] = useState("");
  const [modalcontent, setModalcontent] = useState("");

  const checkIfEmailExists = async () => {
    let { data: subscriptions, error } = await supabase
      .from("subscriptions")
      .select("email")
      .eq("email", email);
    if (error) {
      setModaltitle("Error");
      setModalcontent("Please try again");
      setShowModal(true);
    }
    if (subscriptions.length > 0) {
      setModaltitle("Error");
      setModalcontent(email + " already subscribed");
      setShowModal(true);
    }
    if (subscriptions.length === 0) {
      sendEmailData();
    }
  };
  const sendEmailData = async () => {
    const { data, error } = await supabase
      .from("subscriptions")
      .insert([{ email: email }]);
    if (error) {
      setModaltitle("Error");
      setModalcontent("Please try again");
      setShowModal(true);
    } else {
      setModaltitle("Thank you for Connecting!");
      setModalcontent("You will be notified when we launch");
      setShowModal(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkIfEmailExists();

    event.target.reset();
  };

  return (
    <footer aria-label="Site Footer" class="bg-white dark:bg-gray-700">
      {showModal ? (
        <>
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{modaltitle}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {modalcontent}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-md">
          <strong class="block text-center text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Connect with me!
          </strong>

          <form class="mt-6" onSubmit={handleSubmit}>
            <div class="relative max-w-lg">
              <label class="sr-only" for="email">
                {" "}
                Email{" "}
              </label>

              <input
                class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Connect
              </button>
            </div>
          </form>
        </div>

        <div class="mt-16 border-t border-gray-100 pt-8">
          <p class="text-center text-xs/relaxed text-gray-500">
            ©2023. All rights reserved.
            <br />
            Created with: Vite | React | Tailwind CSS | Vercel | Web3email
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
