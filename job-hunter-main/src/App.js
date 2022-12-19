import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Home from "./components/Home";
import About from "./components/About";
import JobProvider from "./components/JobProvider";
import JobSeeker from "./components/JobSeeker";
import Footer from "./components/footer";

import {BrowserRouter, Switch, Route, Link, Routes} from "react-router-dom";
import ContactUs from "./components/ContactUs";

function App() {
  
  return (
    <>
    
     <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="home" element={<Main/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/JobSeeker" element={<JobSeeker />} />
      <Route path="/JobProvider" element={<JobProvider />} />
      <Route path="/Recruiter" element={<JobProvider />} />
      <Route path="/contact%20us" element={<ContactUs />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
