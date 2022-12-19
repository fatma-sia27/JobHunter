import React from "react";
import pic from "../images/bgImg.jpg";
import pic1 from "../images/applyMain.png";
import pic2 from "../images/joinMain.png";
import { Link } from "react-router-dom";
class Main extends React.Component {
  state = {};
  render() {
    const myStyle = {
      color: "white",
      fontFamily: "Cochin",
    };
    return (
      <>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${pic})`,
            dataOverlay: "8",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            opacity: "1.9",
          }}
        >
          <nav className={`navbar navbar-inverse navbar-expand-lg`}>
            <div className="container-fluid mr-5 px-5">
            <Link className="nav-link" to="/home" style={{fontSize: "30px", color: "white", fontWeight: "600"}}>
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
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact us" style={myStyle}>
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
          <div className="px-5 mt-5 ml-2">
            <p>
              <span
                style={{ fontWeight: "900", fontSize: "50px", color: "white" }}
              >
                FIND YOUR{" "}
              </span>
              <span
                style={{
                  color: "#006400",
                  fontSize: "50px",
                  //fontFamily: 'Montserrat',
                  fontWeight: "900",
                }}
              >
                {" "}
                <span>DREAM</span>
              </span>
            </p>
            <p>
              <span
                style={{
                  color: "#006400",
                  //fontFamily: "Cochin",
                  fontWeight: "900",
                  fontSize: "50px",
                }}
              >
                JOB
              </span>
              <span
                style={{ color: "white", fontWeight: "900", fontSize: "50px" }}
              >
                {" "}
                HERE
              </span>
            </p>
          </div>
          {/* Here starts code of Search box */}
          <div
            className="search search-lg mb-3 px-5 py-3 mt-5 md-6"
            aria-label=".form-select-lg example"
          >
            <div className="input-group mb-3 md-6 mt-5">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search for a job"
                className="form-control md-6"
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text">
                <button type="button" class="btn btn-success">
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: "#d3d3d3"}}>
          {/* Student section */}

        <div className="row px-5 py-4">
          <div className="col-sm-6 px-2 py-2">
            <div>
              <div className="card-body">
                <img src={pic1} alt="" style={{ width: "500px" }} />
              </div>
            </div>
          </div>
          <div className="col-sm-6 px-2 py-2">
            <div>
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Searching for Job...
                </h5>
                <p className="card-text" style={{ fontSize: "30px" }}>
                  No worries Job Hunter will help you to find a best suited job
                  for you according to your skills. Just login and find
                  different openings of different reputed companies.
                </p>
                <Link to="/JobSeeker" className="btn btn-success btn-lg">
                  Student Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Industry section */}
        <div className="row px-5 py-4">
          <div className="col-sm-6 px-2 py-2">
            <div>
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Want an Employee?
                </h5>
                <p className="card-text" style={{ fontSize: "30px" }}>
                  We are here to find best candidate suited for your particular
                  role. Just Login and get acess to thousands of student's
                  resume.
                </p>
                <Link to="/Recruiter" className="btn btn-success btn-lg">
                  Industry Login
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 px-2 py-2">
            <div>
              <div className="card-body">
                <img src={pic2} alt="" style={{ width: "500px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Container of student Login and Industry login */}

        <div className="row px-5 py-4">
          <div className="col-sm-6 px-2 py-2">
            <div className="card border border-success">
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Jobs for Student
                </h5>
                <p className="card-text">
                  Enter your interest and we will recommend you Jobs of your
                  interest.
                </p>
                <Link to="/JobSeeker" className="btn btn-success btn-lg">
                  Student Login
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 px-2 py-2">
            <div className="card border border-success bg secondary">
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Want an Employee?
                </h5>
                <p className="card-text">
                  We will hire employee for your industry.
                </p>
                <Link to="/JobProvider" className="btn btn-success btn-lg">
                  Industry Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        </div>
        {/* Image on main website */}

        {/* <img src={pic1} alt="" style={myStyle} className="center mt-5 ml-5 img-responsive" /> */}
      </>
    );
  }
}

export default Main;
