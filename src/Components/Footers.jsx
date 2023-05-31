import { Link } from "react-router-dom";
import React from "react";

const Footers = () => {
  return (
    <footer aria-label="Site Footer" class="bg-white dark:bg-gray-700">
      <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-md">
          <strong class="block text-center text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Connect with me!
          </strong>

          <form class="mt-6">
            <div class="relative max-w-lg">
              <label class="sr-only" for="email">
                {" "}
                Email{" "}
              </label>

              <input
                class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Connect
              </button>
            </div>
          </form>
        </div>

        <div class="mt-16 border-t border-gray-100 pt-8">
          <p class="text-center text-xs/relaxed text-gray-500">
            © Company 2023. All rights reserved.
            <br />
            Created with: Vite | React | Tailwind CSS | Vercel | web3email
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
