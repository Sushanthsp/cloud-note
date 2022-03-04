import React, { useContext, useEffect } from "react";
import { BlogContext } from "../context/notes/BlogContext";
import { FilterButton } from "./FilterButton";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/notes/ThemeContext";

export const FlexNavbar = () => {
  const { blog, fetchAllNotes, fil } = useContext(BlogContext);
  const { theme } = useContext(ThemeContext);

  const unique = [
    ...blog.reduce((map, obj) => map.set(obj.tag, obj), new Map()).values(),
  ];

  useEffect(() => {
    fetchAllNotes();
  }
     ); 

  return (
    <>
      <nav  className={`navbar shadow-lg mb-5 rounded border rounded border-primary navbar-expand-lg bg-${theme === "dark" ? "secondary" : "light"}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon rounded bg-primary"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-item mx-2 my-2 active btn btn-primary"
                  onClick={() => fil("All")}
                >
                  All
                </Link>
              </li>
              {unique.map((notes) => {
                return <FilterButton key={notes._id} note={notes} fil={fil} />;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
