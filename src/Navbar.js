import React from "react";
import {Link} from "react-router-dom";
import "./App.js";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg ">
              <div className="container-fluid">
                
                  <Link  to="/" className="navbar-brand">
                    Hear Check
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
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      
                        <Link
                          exact
                          activeClassName="menu_active"
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      
                    </li>
                    <li className="nav-item">
                      
                        <Link
                          exact
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/services"
                        >
                          Tests
                        </Link>
                      
                    </li>
                    <li className="nav-item">
                      
                        <Link
                          exact
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/about"
                        >
                          About
                        </Link>
                      
                    </li>
                    <li className="nav-item">
                      
                        <Link
                          exact
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/contact"
                        >
                          Contact
                        </Link>
                      
                    </li>
                    <li className="nav-item">
                      
                        <Link
                          exact
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/signup"
                        >
                          Signup
                        </Link>
                      
                    </li>
                    <li className="nav-item">
                        <Link
                          exact
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/login"
                        >
                          Login
                        </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
