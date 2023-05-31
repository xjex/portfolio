import React, { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";

const Blog = () => {
  const [fetchError, setFetchError] = useState(null);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("Post").select();
      if (error) {
        setFetchError("Problem fetching posts");
        setPosts(null);
        console.log(error);
      }
      if (data) {
        setPosts(data);
        setFetchError(null);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div class=" bg-slate-600">
      <h1 class="text-4xl p-10 text-center text-white font-bold">Blogs</h1>
      <div class=" flex items-center justify-center h-full">
        {fetchError && <div>{fetchError}</div>}
        {posts === null && <div>Loading...</div>}

        {posts &&
          posts.map((post) => {
            return (
              <div class="space-x-2">
                <div
                  key={post.id}
                  class="bg-white shadow-md border  border-gray-200  rounded-lg max-w-sm mb-5"
                >
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      //   src = {post.image}
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                        {post.title}
                      </h5>
                    </a>
                    <p class="font-normal text-gray-700 mb-3">
                      {post.description}
                    </p>
                    <a
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
