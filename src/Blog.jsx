import React, { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";

const Blog = () => {
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
          };
        });
        setPosts(responseData);

        setFetchError(null);
      }
    };
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <div class=" bg-slate-600">
      <h1 class="text-4xl p-10 text-center text-white font-bold">Blogs</h1>
      <div class=" flex items-center justify-center h-full">
        {fetchError && <div>{fetchError}</div>}
        {posts === null && <div>Loading...</div>}

        <div class=" grid grid-cols-1 gap-x-4 gap-y-8  md:grid-cols-2 lg:grid-cols-4 ">
          {posts &&
            posts.map((post) => {
              return (
                <div>
                  <article
                    key={post.id}
                    class="bg-white shadow-md border  border-gray-200  rounded-lg max-w-sm mb-5"
                  >
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                      <img
                        alt=""
                        class="object-cover w-full h-52 dark:bg-gray-500 rounded-lg"
                        src="https://source.unsplash.com/200x200/?fashion?3"
                      />
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        aria-label="Te nulla oportere reprimique his dolorum"
                      ></a>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                      >
                        {post.title}
                      </a>
                      <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">
                        {post.description}
                      </h3>
                      <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>{post.created_at}</span>
                        <span>2.3K views</span>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
