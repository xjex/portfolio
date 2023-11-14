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

  const divStyle = {
    backdropFilter: "blur(8px)", // Adjust the blur radius as needed
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
      <div class=" bg-slate-600 flex items-center justify-center ">
        {/* grid grid-cols-1 gap-x-4 gap-y-8  md:grid-cols-2 lg:grid-cols-4  */}

        {fetchError && <div>{}</div>}
        {posts === null && (
          <div class="flex flex-col gap-4 w-52">
            <div class="skeleton h-32 w-full"></div>
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
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
