import React from "react";
import pic from '../images/intro_pic1.png';
import pic1 from '../images/main_2ndImage.png';
class main extends React.Component {
  
  state = {};
  render() {
    let myStyle = {
      width: "750px",
    };
    return(
      <>

      {/* Image on the hOme page */}

      <img
        src={pic}
        className="center mt-5 ml-5 "
        style={myStyle}
        alt="..."
      />

      {/* Container of student Login and Industry login */}

      <div className="row px-5 py-4" >
        <div className="col-sm-6 px-2 py-2">
          <div className="card border border-success"> 
            <div className="card-body">
              <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">Jobs for Student</h5>
              <p className="card-text">
                Enter your interest and we will recommend you Jobs of your interest.
              </p>
              <a href="#" className="btn btn-success btn-lg" >
                Student Login
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 px-2 py-2">
          <div className="card border border-success bg secondary">
            <div className="card-body">
              <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">Want an Employee?</h5>
              <p className="card-text">
                We will hire employee for your industry.
              </p>
              <a href="#" className="btn btn-success btn-lg">
                Industry Login
              </a>
            </div>
          </div>
        </div>

        {/* Last image of home page */}
        
        <img src={pic1} alt="..." style={myStyle} className="center mt-5 ml-5 " />
      </div>
      </>
    );
  }
}

export default main;
