import React from "react";
import pic1 from "../images/About_img.png";
import pic2 from "../images/aasPic.png";
import pic3 from "../images/tannuPic.png";
import { Link } from "react-router-dom";
class About extends React.Component {
  state = {};
  render() {
    const myStyle = {
      color: "white",
      fontFamily: "Cochin",
    };
    const myStyle1 = {
      color: "#2e8b57",
      fontFamily: "Cochin",
    };
    return (
      <>
      <div style={{backgroundColor: "#d3d3d3"}}>
      <nav className={`navbar navbar-inverse navbar-expand-lg`}>
            <div className="container-fluid mr-5 px-5">
            <Link className="nav-link" to="/home" style={{fontSize: "30px", color: "#006400", fontWeight: "600"}}>
                      Job Hunter
                    </Link>
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
                      style={myStyle1}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about" style={myStyle1}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact us" style={myStyle1}>
                      Contact Us
                    </Link>
                  </li>
                  <div
                className="btn-group btn-group-sm"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-secondary" style={{backgroundColor: "white",  color: "#006400"}}>
                <Link className="nav-link" to="/JobSeeker" style={{backgroundColor: "white",  color: "#006400"}}>
                      Student Login
                    </Link>
                </button>
                <button type="button" className="btn btn-success" >
                <Link className="nav-link" to="/JobProvider"style={{color: "white"}} >
                      Industry Login
                    </Link>
                </button>
              </div>
                </ul>
              </div>
            </div>
          </nav>
        <div className="row px-4 py-4 justify-content-center">
          <div className="col-sm-6 mt-5 px-4 py-4">
            <h1 style={{ fontWeight: "bold", color: "#006400" }}>About Us</h1>

            {/* About us content */}

            <p style={{ fontSize: 23, fontFamily: "Cochin" }}>
              Job Hunter, connects startup founders, business owners,
              recruiters, and HR heads directly to job seekers and candidates.
              Job Hunter's intelligent AI-matching algorithms, inbuilt chat, and
              verification features make it possible to schedule interviews
              within the app. It connects candidates with decision-makers
              quickly. Job Hunter is a chat-based, direct hiring platform
              designed for high-growth startups to meet their hiring needs
              without consultants and with 100% data privacy.
            </p>
          </div>

          {/* Image side by abount content */}

          <div className="col-sm-6 mt-5 px-2 py-4">
            <img
              src={pic1}
              alt="..."
              style={{ width: "300px", height: "400px" }}
              class="center mt-5 img-responsive"
            />
          </div>
        </div>

        <h1 className="center py-4">Meet the team</h1>

        {/* ALl team member details */}

        <div className="row row-cols-1 row-cols-md-3 g-4 px-4 py-4 ms-5">
          {/* Aasia fatma details */}

          <div className="col center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{ width: "285px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h4
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "#deb887" }}
                >
                  Aasia Fatma
                </h4>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A React Js developer. 
                </p>
                <button type="button" class="btn btn-light">
                <a href="https://www.linkedin.com/in/aasia-fatma-7630b71bb/" target="_blank" style={{color: "black"}}>Connect with Fatma</a>
                </button>
              </div>
            </div>
          </div>

          {/* Tannu pria details */}

          <div className="col center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic3}
                className="card-img-top"
                alt="..."
                style={{ width: "285px", height: "250px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h4
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "#deb887" }}
                >
                  Tannu Priya
                </h4>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A MERN developer. 
                </p>
                <button type="button" class="btn btn-light">
                <a href="https://www.linkedin.com/in/tannu-priya-14907b21b" style={{color: "black"}}>Connect with Tannu</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default About;
