import React from "react";
import { useState, useEffect } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
const Timeline = () => {
  const getDate = (date) => {
    const currentDate = new Date();
    const startDate = new Date(date);

    let yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    let monthDiff = currentDate.getMonth() - startDate.getMonth();

    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }

    if (yearDiff === 0 && monthDiff === 0) {
      return `${yearDiff} years`;
    } else if (yearDiff === 0 && monthDiff !== 0) {
      return `${monthDiff} months`;
    } else if (yearDiff !== 0 && monthDiff === 0) {
      return `${yearDiff} years`;
    } else if (yearDiff !== 0 && monthDiff !== 0) {
      return `${yearDiff} years, ${monthDiff} months`;
    }
  };

  const [timeline, setTimeline] = useState({
    timeline: [
      {
        id: 7,
        title: "Web Developer",
        description:
          "Front end web development for ",
        duration: "Mar 2024",
        organization: "OnlySub.com",
        status: "job",
        jobStatus: "present",
        link: "https://onlysub.com/",
      },
      {
        id: 5,
        title: "Software Engineer | Content Creator",
        description:
          "I create technical contents, such as Full stack learning materials, Programming Challenges",
        duration: "May 2021 - Mar 2024",
        organization: "Stacktrek",
        status: "job",
        jobStatus: "past",
        link: "https://stacktrek.com/",
      },
      {
        id: 5,
        title: "Video Editor",
        description:
          "I create Course Videos, Advertisements, and Vlogs and Reels",
        organization: "Philrad Digital Advertising",
        duration: " Feb 2021 - May 2021",
        jobStatus: "past",
        status: "job",
        link: "https://philiprad.com/",
      },
      {
        id: 5,
        title: "Quality Assurance Engineer",
        description:
          "Testing the integrity of the app using various methods of software testing(Manual)",
        duration: "Mar 2020 - Feb 2021",
        organization: "Pythomy",
        jobStatus: "past",
        status: "job",
        link: "https://play.google.com/store/apps/details?id=io.ionic.starter20&hl=en&gl=US",
      },
      {
        id: 5,
        title: "Graduated from college",
        description:
          "Testing the integrity of the app using various methods of software testing(Manual)",
        duration: "2016 - 2020",
        organization: "Gordon College",
        jobStatus: "past",
        status: "school",
        link: "https://www.facebook.com/GordonCollegeCcs",
      },
      {
        id: 5,
        title:
          "Fourth Year Internship | Web Developer and Quality Assurance Engineer",
        description:
          "Website Development and Maintenance Integration of controllers Quality testing for solar panel software controllers",
        duration: "Feb 2020 - Apr 2020",
        jobStatus: "past",
        status: "school",
        organization: "BandaSolart PI Inc.",
        link: "https://www.bandasolar.com/",
      },
      {
        id: 5,
        title: "Second Year Internship | Social Media Manager",
        description: "Social Media Management and Marketing",
        duration: "Jun 2017 - Nov 2017",
        organization: "Gladness Staffing Services",
        jobStatus: "past",
        status: "school",
        link: "https://www.facebook.com/gladnessstaffing/",
      },
    ],
  });

  const status = (stat) => {
    if (stat == "job") {
      return <FaBriefcase />;
    } else if (stat == "school") {
      return <FaGraduationCap />;
    }
  };

  const jobStat = (stat) => {
    if (stat != "current") {
      return "hidden";
    } else {
      return "inline-flex";
    }
  };

  return (
    <div class="w-10/12 md:w-6/12  mx-auto relative py-20  ">
      <h1 class="text-3xl text-center font-bold pb-10 text-white">
        Timeline ⌚
      </h1>

      <div class="bg-white p-10 rounded-2xl  shadow-2xl transition-shadow  shadow-gray-800">
        <div class=" ">
          <div class="bg-white">
            <div class=" mx-auto p-8">
              <div class="flow-root">
                <ul class="-mb-5 ">
                  {timeline.timeline.map((post) => {
                    return (
                      <li>
                        <div class=" relative pb-8">
                          <span
                            class=" absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          ></span>
                          <div class="relative flex items-start space-x-3">
                            <div>
                              <div class="relative px-1 ">
                                <div class="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white text-white flex items-center justify-center">
                                  {status(post.status)}
                                </div>
                              </div>
                            </div>
                            <div class=" bg-blue-200 hover:-translate-y-3 transition min-w-0 flex-1 py-0   p-5 rounded-lg">
                              <div class="text-md text-gray-500 ">
                                <div>
                                  <a
                                    href={post.link}
                                    target="_blank"
                                    class=" font-semibold text-gray-800 mr-2 "
                                  >
                                    {post.title}
                                  </a>

                                  <a
                                    href="#"
                                    class={`my-0.5 relative inline-flex ${jobStat(
                                      post.jobStatus
                                    )}   items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm`}
                                  >
                                    <div class="absolute  flex-shrink-0 flex items-center justify-center">
                                      <span
                                        class="h-1.5 w-1.5 rounded-full bg-green-500"
                                        aria-hidden="true"
                                      ></span>
                                    </div>
                                    <div class="ml-3.5 font-medium text-gray-900">
                                      Present
                                    </div>
                                  </a>
                                  <p></p>
                                </div>
                                <span class="whitespace-wrap text-sm overflow-y-auto">
                                  {post.organization} | {post.duration}
                                </span>
                              </div>
                              <div class="mt-2 text-gray-700  text-sm overflow-y-auto">
                                {post.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
