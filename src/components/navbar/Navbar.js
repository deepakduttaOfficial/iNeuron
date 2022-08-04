import React from "react";
import "../../css/Navbar.css";
import Logo from "../../images/ineuron-logo.png";
import DataScience from "../../images/nav-icon/data-science.png";
import BigData from "../../images/nav-icon/big-data.png";
import Dataanalytics from "../../images/nav-icon/data-analytics.png";
import Webdeveloper from "../../images/nav-icon/web-developer.png";
import Mobiledevelopment from "../../images/nav-icon/Mobiledevelopment.png";
import Programmer from "../../images/nav-icon/Programmer.png";
import Cybersecurity from "../../images/nav-icon/Cybersecurity.png";
import Digitalmarketing from "../../images/nav-icon/Digitalmarketing.png";
//
import Devops from "../../images/nav-icon/Devops.png";
import Datamanagement from "../../images/nav-icon/Datamanagement.png";
import Facebook from "../../images/nav-icon/Facebook.png";
import Adwords from "../../images/nav-icon/Adwords.png";
//
import About from "../../images/nav-icon/About.png";
import Hackathon from "../../images/nav-icon/Hackathon.png";
import Job from "../../images/nav-icon/Job.png";
import Privacy from "../../images/nav-icon/Privacy.png";
//
import Contact from "../../images/nav-icon/Contact.png";
import Faq from "../../images/nav-icon/Faq.png";
import Assistant from "../../images/nav-icon/Assistant.png";

import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="/">
            <img src={Logo} alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link  text-secondary active"
                  href="/"
                  data-toggle="dropdown"
                >
                  Cources <i className="bi bi-chevron-down"></i>
                </a>

                <ul className="dropdown-menu fade-down bg-secondary d-flex mt-1 pt-4 ">
                  <ul
                    className="list-group list-group-flush bg-secondary"
                    style={{ width: "18rem" }}
                  >
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={DataScience} alt="" />
                        DATA SCIENCE
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={BigData} alt="" />
                        BIG DATA
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Dataanalytics} alt="" />
                        DATA ANALYTICS
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Webdeveloper} alt="" />
                        WEB DEVELOPEMENT
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Mobiledevelopment} alt="" />
                        MOBILE DEVELOPEMENT
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Programmer} alt="" />
                        PROGRAMMING
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Cybersecurity} alt="" />
                        CYBER SECURITY
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Digitalmarketing} alt="" />
                        DIGITAL MARKETING
                      </a>
                    </li>
                  </ul>

                  <ul
                    className="list-group list-group-flush bg-secondary "
                    style={{ width: "18rem" }}
                  >
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Devops} alt="" />
                        DEVOPS INTERVIEW
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Devops} alt="" />
                        DEVOPS MASTERS
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Datamanagement} alt="" />
                        DSA INTERVIEW
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Datamanagement} alt="" />
                        DSA WITH JAVASCRIPT
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Facebook} alt="" />
                        FACEBOOK MARKETING
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Adwords} alt="" />
                        GOOGLE ADS
                      </a>
                    </li>
                  </ul>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="/">
                  One Neuron
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-secondary" href="/">
                  Job Portal
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-secondary" href="/">
                  Internship Portal
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-secondary" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-secondary active" href="/">
                  Company <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu fade-down bg-secondary d-flex mt-1 pt-4 ">
                  <ul
                    className="list-group list-group-flush bg-secondary"
                    style={{ width: "13rem" }}
                  >
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={About} alt="" />
                        About us
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Hackathon} alt="" />
                        Hack-A-Thon
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Job} alt="" />
                        Job guarantee
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Privacy} alt="" />
                        Privacy policy
                      </a>
                    </li>
                  </ul>

                  <ul
                    className="list-group list-group-flush bg-secondary "
                    style={{ width: "13rem" }}
                  >
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Contact} alt="" />
                        Contact us
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Faq} alt="" />
                        FAQs
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Assistant} alt="" />
                        Job assistance
                      </a>
                    </li>
                    <li className="drop-down-item ">
                      <a href="/" className="drop-down-link">
                        <img src={Privacy} alt="" />
                        Privacy policy
                      </a>
                    </li>
                  </ul>
                </ul>
              </li>
              <button
                type="button "
                className="btn btn-outline-secondary ps-4 pe-4 ms-5"
                style={{ fontWeight: "600" }}
              >
                Sign up
              </button>
              <button
                type="button"
                className="btn btn-secondary ps-4 pe-4 ms-2"
                style={{ fontWeight: "600" }}
              >
                Sign in
              </button>
            </ul>
          </div>
        </div>
        <Searchbar />
      </nav>
    </>
  );
};

export default Navbar;
