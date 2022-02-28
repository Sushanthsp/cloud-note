import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/notes/ThemeContext";

export const Navbar = () => {
  const { toggle,theme ,setMsg} = useContext(ThemeContext);

  let navigate = useNavigate();
  let location = useLocation();
  // useEffect(() => {
  // }, [location]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setMsg("You have logged out", "success");
  };
  return (
    <div> 
      <nav className={`navbar navbar-expand-lg navbar-light text-${theme === 'dark'?'light':'light'} bg-${theme==="dark" ? "primary":"primary"}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${theme === 'dark'?'light':'light'}`} to="#">
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
                  } text-${theme === 'dark'?'light':'light'}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  } text-${theme === 'dark'?'light':'light'}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          {!localStorage.getItem("token") ? (
            <div className="btn-group">
              <Link to="/signup" className="btn btn-primary mx-1">
                SignUp
              </Link>
              <Link to="/login" className="btn btn-primary mx-1">
                Login
              </Link>
            </div>
          ) : (
            <div onClick={handleLogout} className="btn btn-primary">
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
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Night mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};
