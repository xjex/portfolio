import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Footers from "./Components/Footers";
import { useLocation } from "react-router-dom";
import supabase from "./lib/helper/supabaseClient";

const BlogContent = () => {
  const location = useLocation(); // useLocation to get url path or search
  const getID = location.search.split("=")[1]; //get the id number

  const [blog, setBlog] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const formatDate = (date) => {
    const acceptedDate = new Date(date);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - acceptedDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return seconds + (seconds === 1 ? " second ago" : " seconds ago");
    } else if (minutes < 60) {
      return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
    } else if (hours < 24) {
      return hours + (hours === 1 ? " hour ago" : " hours ago");
    } else if (days < 7) {
      return days + (days === 1 ? " day ago" : " days ago");
    } else if (weeks < 4) {
      return weeks + (weeks === 1 ? " week ago" : " weeks ago");
    } else if (months < 12) {
      return months + (months === 1 ? " month ago" : " months ago");
    } else {
      const remainingMonths = months % 12;
      const yearsText = years === 1 ? " year" : " years";
      const monthsText = remainingMonths === 1 ? " month" : " months";
      return (
        years +
        yearsText +
        (remainingMonths > 0 ? " and " + remainingMonths + monthsText : "") +
        " ago"
      );
    }
  };

  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data, error } = await supabase
          .from("Post")
          .select("*")
          .eq("id", getID);

        if (error) throw error;

        if (data) {
          const responseData = data.map((post) => {
            return {
              id: post.id,
              title: post.title,
              description: post.description,
              created_at: formatDate(post.created_at),
              view: post.views,
              content: post.content,
              votes: post.votes,
            };
          });
          setIsFetching(true);
          setBlog(responseData[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBlog();
  }, []);

  const updateViews = async () => {
    try {
      const { data, error } = await supabase
        .from("Post")
        .update({ views: blog.view + 1 })
        .eq("id", getID)
        .select();
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  setTimeout(() => {
    updateViews();
    console.log("views updated");
  }, 3000);
  console.log(blog);

  const [votes, setVotes] = useState(0);
  const [availableVotes, setAvailableVotes] = useState(1);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteColor, setVoteColor] = useState("");

  const [disableVoteUp, setDisableVoteUp] = useState(false);
  const [disableVoteDown, setDisableVoteDown] = useState(false);

  const voteUp = (hasVoted) => {
    if (availableVotes == 1) {
      setVotes(votes + 1);
      setAvailableVotes(availableVotes - 1);
      setHasVoted(true);
    } else if (availableVotes == 0) {
      setAvailableVotes(availableVotes + 1);
      setVotes(votes - 1);
      setHasVoted(false);
    }
  };

  const voteDown = (hasVoted) => {
    if (availableVotes == 1) {
      setVotes(votes - 1);
      setAvailableVotes(availableVotes - 1);
      setHasVoted(true);
    } else if (availableVotes == 0) {
      setVotes(votes + 1);
      setAvailableVotes(availableVotes + 1);
      setHasVoted(false);
    }
  };

  useEffect(() => {
    if (votes > 0) {
      setVoteColor("text-xl font-semibold mb-2 text-green-500 mb-4");
    } else if (votes < 0) {
      setVoteColor("text-xl font-semibold mb-2 text-red-500 mb-4");
    } else {
      setVoteColor("text-xl font-semibold mb-2 mb-4");
    }
  }, [votes]);

  return (
    <div className="h-screen bg-gray-700 ">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white mt-10 mb-5">
          {blog !== null && blog.title}
        </h1>
      </div>

      {blog === null && (
        <div className="flex justify-center items-center h-full">
          <div className=" animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      {blog !== null && (
        <div className=" flex justify-center items-center">
          {/* card */}
          <div className="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg mt-10 mb-5">
            {/* name */}
            <div className="flex ">
              <div>
                <img
                  alt="avatar"
                  className="w-10 rounded-full border-2 border-gray-300"
                  src="https://picsum.photos/seed/picsum/200"
                />
              </div>
              {/* time/date */}
              <div className="flex-col justify mb-5">
                <h1 className="ml-3 font-bold">John Doe</h1>
                <p className="ml-3 text-xs">{blog.created_at}</p>
              </div>
            </div>

            <div id="header" className="text-start md:text-center ">
              <div className="flex items-center justify-center w-full align-center">
                <img
                  alt="mountain"
                  className=" content-center bg-blue-400 justify-center items-center rounded-md border-2 border-gray-300"
                  src="https://picsum.photos/seed/picsum/300"
                />
              </div>

              <div id="body" className="flex flex-col mt-10">
                <div>
                  <h1 className="text-2xl font-semibold mb-2">{blog.title}</h1>
                </div>

                <p id="job" className="text-gray-800 mt-2">
                  {blog.content}
                </p>
              </div>
            </div>
            <div id="buttons" className="text-center items-center mt-5">
              <h4 id="name" className={voteColor}>
                {blog.votes}
              </h4>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={voteUp}
                disabled={disableVoteUp}
              >
                👍
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 rounded-full ml-2"
                disabled={disableVoteDown}
                onClick={voteDown}
              >
                👎
              </button>
            </div>

            <div className="flex items-center justify-between mt-5"></div>
          </div>

          {/* card end */}
        </div>
      )}
    </div>
  );
};

export default BlogContent;
