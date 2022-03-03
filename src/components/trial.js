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
              to="/"
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className=" navbar-nav mb-2 mb-lg-0 m-auto">
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

                <li class="nav-item">
                  {location.pathname === "/" && (
                    <form
                      className="d-flex justify-content-center"
                      style={{ width: "400px" }}
                    >
                      <input
                        onChange={onChange}
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  )}
                </li>

                {!localStorage.getItem("token") ? (
                  <li class="nav-item">
                    <div className="btn-group">
                      <Link to="/signup" className="btn btn-success mx-1">
                        SignUp
                      </Link>
                      <Link to="/login" className="btn btn-success mx-1">
                        Login
                      </Link>
                    </div>
                  </li>
                ) : (
                  <li class="nav-item">
                    <div
                      onClick={handleLogout}
                      className="btn btn-success mx-2"
                    >
                      Log out
                    </div>
                  </li>
                )}
                <li class="nav-item d-flex align-items-center  ">
                  <div
                    className="form-check form-switch  "
                    onClick={() => toggle()}
                  >
                    <input
                      className="form-check-input "
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label mx-1 "
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Night mode
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
 </div>
      
      