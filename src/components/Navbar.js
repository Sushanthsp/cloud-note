import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/notes/ThemeContext";
import { BlogContext } from "../context/notes/BlogContext";

export const Navbar = () => {
  const { toggle, theme, setMsg } = useContext(ThemeContext);
  const { searchFilter, blog } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState(blog);

  const onChange = (e) => {
    if (e.target.value === "") {
      window.location.reload(true);
    } else {
      const search = e.target.value.toLowerCase();
      setSearchTerm(search);
      searchFilter(searchTerm);
    }
  };

  let navigate = useNavigate();
  let location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setMsg("You have logged out", "success");
  };

  return (
    <div>
       
      <nav
        className={`navbar navbar-expand-lg navbar-light text-${
          theme === "dark" ? "light" : "light"
        } bg-${theme === "dark" ? "primary" : "primary"}`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              theme === "dark" ? "light" : "light"
            }`}
            to="#"
          >
            i-Notebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  } text-${theme === "dark" ? "light" : "light"}`}
                  to="/"
                >
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/addnotes" ? "active" : ""
                  } text-${theme === "dark" ? "light" : "light"}`}
                  aria-current="page"
                  to="/addnotes"
                >
                  Add Notes
                </Link>
              </li>
            </ul>

            {location.pathname === "/" && (
                <form className="d-flex mx-2">
                  <input
                    onChange={onChange}
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-success mx-2" type="submit">Clear</button>
                </form>
            )}
          </div>
          {!localStorage.getItem("token") ? (
            <div className="btn-group">
              <Link to="/signup" className="btn btn-success mx-1">
                SignUp
              </Link>
              <Link to="/login" className="btn btn-success mx-1">
                Login
              </Link>
            </div>
          ) : (
            <div onClick={handleLogout} className="btn btn-success mx-2">
              Log out
            </div>
          )}

          <div className="form-check form-switch" onClick={() => toggle()}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">
              Night mode
            </label>
          </div>
        </div>
      </nav>

      
    </div>
  );
};
