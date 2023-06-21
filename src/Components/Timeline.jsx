import React from "react";

const Timeline = () => {
  return (
    <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20  ">
      <h1 class="text-3xl text-center font-bold text-white">Timeline ⌚</h1>
      <div class="bg-white p-10 rounded-3xl mt-10">
        <div class="border-l-2 mt-10 ">
          {/* <!-- Card 1 --> */}
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded-2xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div class="flex-auto">
              <h1 class="text-lg">May 31, 2021 - Present </h1>
              <h1 class="text-xl font-bold">Technical Content Creator</h1>
              <h3>StackTrek</h3>
            </div>
            <span class=" bg-green-500 text-gray-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              Present
            </span>

            {/* <a href="#" class="text-center text-white hover:text-gray-300">
            Download materials
          </a> */}
          </div>

          {/* <!-- Card 2 --> */}
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded-2xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div class="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div class="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div class="flex-auto">
              <h1 class="text-lg">February 2021 - May 2021</h1>
              <h1 class="text-xl font-bold">Part-Time Video Editor</h1>
              <h3>PhilRad Digital Advertising</h3>
            </div>
            <p class="text-center text-white hover:text-gray-300"> 4 months</p>
            {/* <a href="#" class="text-center text-white hover:text-gray-300">
            Download materials
          </a> */}
          </div>

          {/* <!-- Card 3 --> */}
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded-2xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div class="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div class="flex-auto">
              <h1 class="text-lg">March 2020 - Feb 2021</h1>
              <h1 class="text-xl font-bold">Quality Assurance Engineer</h1>
              <h3>Pythomy</h3>
            </div>
            <p class="text-center text-white hover:text-gray-300"> 1 year</p>
            {/* <a href="#" class="text-center text-white hover:text-gray-300">
            Download materials
          </a> */}
          </div>

          {/* <!-- Card 4 --> */}
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-red-600 text-white rounded-2xl mb-10 flex-col md:flex-row">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div class="w-5 h-5 bg-red-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div class="w-10 h-1 bg-red-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div class="flex-auto">
              <h1 class="text-lg">August 2016 - November 2020</h1>
              <h1 class="text-xl font-bold">
                Graduated in Bachelor of Science in Computer Science 🎓
              </h1>

              <h3>Gordon College | Olongapo City</h3>
            </div>
            <p class="text-center text-white hover:text-gray-300"> 4 years</p>
            {/* <a href="#" class="text-center text-white hover:text-gray-300">
            Download materials
          </a> */}
          </div>

          {/* <!-- Card 5 --> */}
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded-2xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div class="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div class="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div class="flex-auto">
              <h1 class="text-lg">February 2020 - April 2020</h1>
              <h1 class="text-xl font-bold">
                Fourth Year Internship | Web Developer and Quality Assurance
                Engineer
              </h1>
              <h3>BandaSolart PI Inc.</h3>
            </div>
            <p class="text-center text-white hover:text-gray-300"> 3 months</p>
            {/* <a href="#" class="text-center text-white hover:text-gray-300">
            Download materials
          </a> */}
          </div>

          {/* <!-- Card 6 --> */}
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded-2xl mb-10 flex-col md:flex-row">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div class="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div class="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div class="flex-auto">
              <h1 class="text-lg">June 2017 - November 2017</h1>
              <h1 class="text-xl font-bold">
                Second Year Internship | Social Media Manager
              </h1>
              <h3>Gladness Staffing Services</h3>
            </div>
            <p class="text-center text-white hover:text-gray-300"> 3 months</p>
            {/* <a href="#" class="text-center text-white hover:text-gray-300">
            Download materials
          </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
