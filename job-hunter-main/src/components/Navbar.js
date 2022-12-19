import React from "react";
import { Link } from "react-router-dom";

export default function navbar(props) {
  let myStyle = {
    color: "#006400",
    fontFamily: "Cochin",
  };
  return (
    <>
      <nav
        className={`navbar navbar-inverse navbar-expand-lg bg-${props.mode}`}
      >
        <div className="container-fluid">
          <h2 style={myStyle} className="ml-5">
            Job Hunter
          </h2>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Home"
                  style={myStyle}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={myStyle}>
                  About
                </Link>
              </li>
              {/* <div className="dropdown ml-5">
                <button
                  className="btn btn-success dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="/JobSeeker">
                      As a Student
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/JobProvider">
                      As a Recruiter
                    </Link>
                  </li>
                </ul>
              </div> */}
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-secondary">
                  Student Login
                </button>
                <button type="button" className="btn btn-secondary">
                  Industry Login
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
