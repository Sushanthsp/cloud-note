import { BlogContext } from "./BlogContext";
import React from "react";
import { useState } from "react";

export const BlogState = (props) => {
  const host = "http://localhost:5000";
  const blogInitial = [];
  const [blog, setBlog] = useState(blogInitial);

  let fetchAllNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/blog/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setBlog(json);
  };

  const fil = (button) => {
    if (button === "All") {
      fetchAllNotes();
    }
    const filteredData = blog.filter((item) => item.tag === button);
    setBlog(filteredData);
  };

  const searchFilter = (searchWord) => {
    
    const searchTerm =
      blog.filter((note) =>
        note.description.toLowerCase().includes(searchWord)
      ) || ((note) => note.title.toLowerCase().includes(searchWord));
    setBlog(searchTerm);
  };

  return (
    <BlogContext.Provider value={{ blog, fetchAllNotes, fil, searchFilter }}>
      {props.children}
    </BlogContext.Provider>
  );
};
