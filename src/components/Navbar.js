import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/notes/ThemeContext";
import { BlogContext } from "../context/notes/BlogContext";

export const Navbar = () => {
  const { toggle, theme, setMsg } = useContext(ThemeContext);
  const { searchFilter, blog, stopRefresh } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState(blog);

  const onChange = (e) => {
    if (e.target.value === "") {
      e.preventDefault();
      window.location.reload(false);
      stopRefresh();
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
    <>
      <nav
        className={`navbar rounded-bottom border shadow p-3 mb-1 rounded border-primary navbar-expand-lg navbar-${
          theme === "dark" ? "dark" : "light"
        } bg-${theme === "dark" ? "secondary" : "light"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {" "}
            clouD-Note
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
                  }`}
                  to="/"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/addnotes" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/addnotes"
                >
                  Add notes
                </Link>
              </li>
            </ul>

            {location.pathname === "/" && (
              <form
                className="d-flex"
                style={{ marginRight: "20px", width: "350px" }}
              >
                <input
                  className="form-control "
                  onChange={onChange}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            )}

            {!localStorage.getItem("token") ? (
              <li className="nav-item">
                <div className="btn-group">
                  <Link
                    to="/signup"
                    className="btn btn-primary rounded my-2 mx-1"
                  >
                    SignUp
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-primary rounded my-2 mx-1"
                  >
                    Login
                  </Link>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <div
                  onClick={handleLogout}
                  className="btn btn-primary my-2 mx-1 dark"
                >
                  Log out
                </div>
              </li>
            )}
            <li className="nav-item d-flex align-items-center  ">
              <div className="form-check form-switch" onClick={() => toggle()}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <label
                className="form-check-label mx-1 text-dark"
                htmlFor="flexSwitchCheckDefault"
              >
                Night mode
              </label>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};
