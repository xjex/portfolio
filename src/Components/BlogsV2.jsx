import React, { useEffect, useState } from "react";
import supabase from "../lib/helper/supabaseClient";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const [fetchError, setFetchError] = useState(null);
  const [posts, setPosts] = useState(null);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("Post").select();
      if (error) {
        setFetchError("Problem fetching posts");
        setPosts(null);
        console.log(error);
      }
      if (data) {
        const responseData = data.map((post) => {
          return {
            id: post.id,
            title: post.title,
            description: post.description,
            created_at: formatDate(post.created_at),
            view: post.views,
            href: `/blogs/content/?id=${post.id}`,
          };
        });
        setPosts(responseData);

        setFetchError(null);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      {/* <!-- component */}
      <div class=" bg-slate-600 flex items-center justify-center">
        {/* grid grid-cols-1 gap-x-4 gap-y-8  md:grid-cols-2 lg:grid-cols-4  */}

        {fetchError && <div>{fetchError}</div>}
        {posts === null && (
          <div class=" bg-gray-500 border border-gray-500  shadow-md rounded-lg max-w-sm  mb-5 ">
            <div
              role="status"
              class=" items-center space-y-10 animate-pulse md:space-y-0 md:space-x-0  md:items-center md:space-y-8  "
            >
              <div class="flex items-center justify-center space-x-10 h-48 bg-gray-300 rounded-lg sm:w-96 dark:bg-gray-700">
                <svg
                  class="w-12 h-12 text-gray-200 rounded-lg "
                  xmlns="http://www.w3.org/3000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
              <div class="items-center mb-2">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>

                <div className="flex justify-start">
                  <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-5 mb-5 mr-5"></div>
                  <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-5 mb-5 mr-5"></div>
                  <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-5 "></div>
                </div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}

        <div class="grid grid-cols-1 gap-3 gap-y-10 px-16 md:grid-cols-2 lg:grid-cols-4 mt-10 mb-10">
          {posts &&
            posts.map((post) => {
              return (
                // "bg-white shadow-md border transform transition cursor-pointer  hover:-translate-y-3 border-gray-200  rounded-lg max-w-sm mb-5
                <Link to={post.href}>
                  <div class=" max-w-md overflow-hidden rounded-lg transition bg-white cursor-pointer shadow  hover:-translate-y-3   ">
                    <img
                      src="https://source.unsplash.com/500x500/?gaming?3"
                      class="aspect-video w-full h-56 w-50 object-cover object-center"
                      alt=""
                    />
                    <div class="p-4">
                      <h3 class="text-xl font-medium text-gray-900">
                        {post.title}
                      </h3>

                      <p class="mt-1 text-gray-500">{post.description}</p>

                      <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>{post.created_at}</span>
                        <span>{post.view} view</span>
                      </div>
                      <div class="mt-4 flex gap-2">
                        <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                          Design
                        </span>
                        <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                          Product
                        </span>
                        <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                          Develop
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
