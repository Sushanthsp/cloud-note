import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/notes/ThemeContext";
import { BlogContext } from "../context/notes/BlogContext";
import BlogItem from "./BlogItem";
import { FlexNavbar } from "./FlexNavbar";

const Blog = () => {
  const { theme } = useContext(ThemeContext);
  const { blog } = useContext(BlogContext);
  
  return (
    <>
      <div  className={` bg-${theme} text-${
          theme === "dark" ? "light" : "dark"
        }`}>
      <div className="container">
      <FlexNavbar className="" />
        
        <div className="row">
          {blog.map((notes) => {
            return <BlogItem key={notes._id} note={notes} />;
          })}
        </div>
        </div>
        </div>
    </>
  );
};

export default Blog;
