import React from "react";
class Footer extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
            <div style={{backgroundColor: "#d3d3d3"}}>
            <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />Job Hunter
                </h6>
                <p>
                  A dream place where you get to connect with your dream company.
                </p>
              </div>
              
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Linked In</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Github</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Email us</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Instagram</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i className="fas fa-home me-3" /> India</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  JobHunt@gmail.com
                </p>
                <p><i className="fas fa-phone me-3" /> + 91 6201293283</p>
                <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://jobHunter.com/">JobHunter.com</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
            </div>
            </>
        );
    }
}
 
export default Footer;