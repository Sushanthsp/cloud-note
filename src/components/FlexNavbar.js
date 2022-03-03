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
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar text-${
          theme === "dark" ? "light" : "light"
        } bg-${theme === "dark" ? "success" : "success"}`}
        // style={{"max-width": "70rem"}}
      >
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto row">
              <li className="nav-item col active">
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
