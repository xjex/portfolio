import { useState } from "react";
import React from "react";

const Skills = () => {
  const [skills, setSkills] = useState({
    web: [
      {
        name: "JavaScript",
        rating: 6.4,
        svg: "https://cdn.svgporn.com/logos/javascript.svg",
      },
      {
        name: "TypeScript",
        rating: 5.0,
        svg: "https://cdn.svgporn.com/logos/typescript.svg"
      },
      {
        name: "Tailwind",
        rating: 6.0,
        svg: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
      },
      {
        name: "React",
        rating: 5.0,
        svg: "https://cdn.svgporn.com/logos/react.svg",
      },
      {
        name: "Node",
        rating: 5.0,
        svg: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
      },
      {
        name: "Express",
        rating: 5.0,
        svg: "https://cdn.svgporn.com/logos/express.svg",
      },

      {
        name: "Next",
        rating: 5.0,
        svg: "https://cdn.svgporn.com/logos/nextjs.svg",
      },
      {
        name: "Vite",
        rating: 5.0,
        svg: "https://cdn.svgporn.com/logos/vitejs.svg",
      },

      {
        name: "HTML",
        rating: 7.0,
        svg: "https://cdn.svgporn.com/logos/html-5.svg",
      },
      {
        name: "CSS",
        rating: 7.0,
        svg: "https://cdn.svgporn.com/logos/css-3.svg",
      },
    ],
    adobe: [
      {
        name: "Photoshop",
        rating: 7.0,
        svg: "https://cdn.svgporn.com/logos/adobe-photoshop.svg",
      },
      {
        name: "Premiere",
        rating: 6.0,
        svg: "https://cdn.svgporn.com/logos/adobe-premiere.svg",
      },
      {
        name: "Illustrator",
        rating: 5.0,
        svg: "https://cdn.svgporn.com/logos/adobe-illustrator.svg",
      },
      {
        name: "AfterEffects",
        rating: 4.0,
        svg: "https://cdn.svgporn.com/logos/adobe-after-effects.svg",
      },
      {
        name: "XD",
        rating: 4.0,
        svg: "https://cdn.svgporn.com/logos/adobe-xd.svg",
      },
    ],
    programming: [
      {
        name: "C",
        rating: 3.0,
        svg: "https://cdn.svgporn.com/logos/c.svg",
      },
      {
        name: "C++",
        rating: 2.0,
        svg: "https://cdn.svgporn.com/logos/c-plusplus.svg",
      },
      {
        name: "Python",
        rating: 5.0,
        svg: "https://cdn.svgporn.com/logos/python.svg",
      },
      {
        name: "Java",
        rating: 4.0,
        svg: "https://cdn.svgporn.com/logos/java.svg",
      },
      {
        name: "php",
        rating: 4.0,
        svg: "https://cdn.svgporn.com/logos/php.svg",
      },
      {
        name: "C#",
        rating: 4.0,
        svg: "https://cdn.svgporn.com/logos/c-sharp.svg",
      },
    ],
    SoftWareTesting: [
      {
        name: "Selenium",
        rating: 5.0,
        svg: "https://cdn.svgporn.com/logos/selenium.svg",
      },
      {
        name: "Jest",
        rating: 6.0,
        svg: "https://cdn.svgporn.com/logos/jest.svg",
      },
      {
        name: "Cypress",
        rating: 4.0,
        svg: "https://cdn.svgporn.com/logos/cypress.svg",
      },
      {
        name: "Mocha",
        rating: 6.0,
        svg: "https://cdn.svgporn.com/logos/mocha.svg",
      },
      {
        name: "Puppeteer",
        rating: 7.0,
        svg: "https://cdn.svgporn.com/logos/puppeteer.svg",
      },
    ],
    database: [
      {
        name: "MongoDB",
        rating: 3.0,
        svg: "https://cdn.svgporn.com/logos/mongodb.svg",
      },
      {
        name: "Postgres",
        rating: 5.3,
        svg: "https://cdn.svgporn.com/logos/postgresql.svg",
      },
      {
        name: "MySQL",
        rating: 6.0,
        svg: "https://cdn.svgporn.com/logos/mysql.svg",
      },
      {
        name: "Firebase",
        rating: 4.0,
        svg: "https://cdn.svgporn.com/logos/firebase.svg",
      },
      {
        name: "Supabase",
        rating: 6.0,
        svg: "https://cdn.svgporn.com/logos/supabase.svg",
      },
    ],
  });

  //change color of rating

  const changeColor = (rating) => {
    if (rating >= 7) {
      return "bg-green-500";
    } else if (rating >= 5) {
      return "bg-yellow-500";
    } else {
      return "bg-red-500";
    }
  };

  const textColor = (rating) => {
    if (rating >= 7) {
      return "text-green-700";
    } else if (rating >= 5) {
      return "text-yellow-700";
    } else {
      return "text-red-700";
    }
  };

  return (
    <div className="">
      <h1 class="text-3xl text-center font-bold text-white">Skills 🔨</h1>

      {/* Web Dev */}
      <div className="flex flex-wrap justify-center flex-col-4 xl:flex-row xl:justify-center xl:grid-rows-2  md:flex-col">
        <div className="flex items-center justify-center pb-5 pt-10 transition hover:-translate-y-3">
          <section className="w-full p-10 rounded-xl max-w-2xl shadow-lg shadow-gray-800 bg-white m-5 ">
            <header className="flex items-center">
              <h3 className="font-medium text-lg  text-black">
                Web Developement 👓
              </h3>
            </header>
            <section className="py-4 grid xl:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-x-6 overflow-y-auto max-h-[300px] ">
              {/* content here */}
              {skills.web.map((skill) => {
                return (
                  <div className="flex items-center py-4 bg-blue-200 rounded-2xl 8 p-5 my-2 hover:from-gray-900">
                    <span className="w-10 h-10 shrink-0 mr-4 rounded-full flex items-center justify-center">
                      <img src={skill.svg} />
                    </span>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center">
                        <h2 className="font-medium text-md mr-auto text-gray-700 flex items-center">
                          {skill.name}
                        </h2>
                        <span
                          className={`px-1 py-1 rounded-lg bg-red-50 ${textColor(
                            skill.rating
                          )} text-xs`}
                        >
                          {skill.rating} / 10
                        </span>
                      </div>
                      <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                        <span
                          className={`h-full ${changeColor(
                            skill.rating
                          )} w-full block rounded-full`}
                          style={{ width: skill.rating * 10 + "%" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* <footer className="border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-500 text-center">
                Powered by <span className="font-bold">TailwindCSS</span>
              </p>
            </footer> */}
          </section>
        </div>

        {/* Software Testing */}
        <div className="flex items-center justify-center pb-5 pt-10 transition hover:-translate-y-3 ">
          <section className="w-full p-10 rounded-xl max-w-2xl shadow-lg shadow-gray-800 bg-white m-5">
            <header className="flex items-center">
              <h3 className="font-medium text-lg  text-black">
                Software Testing 🧪
              </h3>
            </header>
            <section className="py-4 grid xl:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-x-6  overflow-y-auto max-h-[300px]">
              {/* content here */}
              {skills.SoftWareTesting.map((skill) => {
                return (
                  <div className="flex items-center py-4 bg-blue-200 rounded-2xl 8 p-5 my-2">
                    <span className="w-10 h-10 shrink-0 mr-4 rounded-full flex items-center justify-center">
                      <img src={skill.svg} />
                    </span>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center">
                        <h2 className="font-medium text-md mr-auto text-gray-700 flex items-center">
                          {skill.name}
                        </h2>
                        <span
                          className={`px-1 py-1 rounded-lg bg-red-50 ${textColor(
                            skill.rating
                          )} text-xs`}
                        >
                          {skill.rating} / 10
                        </span>
                      </div>
                      <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                        <span
                          className={`h-full ${changeColor(
                            skill.rating
                          )} w-full block rounded-full`}
                          style={{ width: skill.rating * 10 + "%" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* <footer className="border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-500 text-center">
                Powered by <span className="font-bold">TailwindCSS</span>
              </p>
            </footer> */}
          </section>
        </div>

        {/* database */}
        <div className="flex items-center justify-center pb-5 pt-10 transition hover:-translate-y-3 ">
          <section className="w-full p-10 rounded-xl max-w-2xl shadow-lg shadow-gray-800 bg-white m-5">
            <header className="flex items-center">
              <h3 className="font-medium text-lg  text-black">Database 💾</h3>
            </header>
            <section className="py-4 grid xl:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-x-6  overflow-y-auto max-h-[300px]">
              {/*content here */}
              {skills.database.map((skill) => {
                return (
                  <div className="flex items-center py-4 bg-blue-200 rounded-2xl 8 p-5 my-2">
                    <span className="w-10 h-10 shrink-0 mr-4 rounded-full flex items-center justify-center">
                      <img src={skill.svg} />
                    </span>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center">
                        <h2 className="font-medium text-md mr-auto text-gray-700 flex items-center">
                          {skill.name}
                        </h2>
                        <span
                          className={`px-1 py-1 rounded-lg bg-red-50 ${textColor(
                            skill.rating
                          )} text-xs`}
                        >
                          {skill.rating} / 10
                        </span>
                      </div>
                      <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                        <span
                          className={`h-full ${changeColor(
                            skill.rating
                          )} w-full block rounded-full`}
                          style={{ width: skill.rating * 10 + "%" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* <footer className="border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-500 text-center">
                Powered by <span className="font-bold">TailwindCSS</span>
              </p>
            </footer> */}
          </section>
        </div>

        {/* programming languages */}
        <div className="flex items-center justify-center pb-5 pt-10 transition hover:-translate-y-3">
          <section className="w-full p-10 rounded-xl max-w-2xl shadow-lg shadow-gray-800 bg-white m-5">
            <header className="flex items-center">
              <h3 className="font-medium text-lg text-black">
                Programming Languages 👨‍💻{" "}
              </h3>
            </header>
            <section className="py-4 grid xl:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-x-6 overflow-y-auto max-h-[300px]">
              {/* Add your content here */}
              {/* JS */}
              {skills.programming.map((skill) => {
                return (
                  <div className="flex items-center py-4 bg-blue-200 rounded-2xl 8 p-5 my-2">
                    <span className="w-10 h-10 shrink-0 mr-4 rounded-full flex items-center justify-center">
                      <img src={skill.svg} />
                    </span>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center">
                        <h2 className="font-medium text-md mr-auto text-gray-700 flex items-center">
                          {skill.name}
                        </h2>
                        <span
                          className={`px-1 py-1 rounded-lg bg-red-50 ${textColor(
                            skill.rating
                          )} text-xs`}
                        >
                          {skill.rating} / 10
                        </span>
                      </div>
                      <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                        <span
                          className={`h-full ${changeColor(
                            skill.rating
                          )} w-full block rounded-full`}
                          style={{ width: skill.rating * 10 + "%" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* <footer className="border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-500 text-center">
                Powered by <span className="font-bold">TailwindCSS</span>
              </p>
            </footer> */}
          </section>
        </div>

        {/* Adobe */}
        <div className="flex items-center justify-center pb-5 pt-10 transition hover:-translate-y-3 ">
          <section className="w-full p-10 rounded-xl max-w-2xl shadow-lg shadow-gray-800 bg-white m-5">
            <header className="flex items-center">
              <h3 className="font-medium text-lg  text-black">Adobe 🎨</h3>
            </header>
            <section className="py-4 grid xl:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-x-6  overflow-y-auto max-h-[300px]">
              {/* Add your content here */}
              {/* JS */}
              {skills.adobe.map((skill) => {
                return (
                  <div className="flex items-center py-4 bg-blue-200 rounded-2xl 8 p-5 my-2">
                    <span className="w-10 h-10 shrink-0 mr-4 rounded-full flex items-center justify-center">
                      <img src={skill.svg} />
                    </span>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center">
                        <h2 className="font-medium text-md mr-auto text-gray-700 flex items-center">
                          {skill.name}
                        </h2>
                        <span
                          className={`px-1 py-1 rounded-lg bg-red-50 ${textColor(
                            skill.rating
                          )} text-xs`}
                        >
                          {skill.rating} / 10
                        </span>
                      </div>
                      <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                        <span
                          className={`h-full ${changeColor(
                            skill.rating
                          )} w-full block rounded-full`}
                          style={{ width: skill.rating * 10 + "%" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* <footer className="border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-500 text-center">
                Powered by <span className="font-bold">TailwindCSS</span>
              </p>
            </footer> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
